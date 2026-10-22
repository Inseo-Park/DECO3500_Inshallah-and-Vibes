#!/usr/bin/env node
/* ===========================================================================
   ECHO link relay
   ---------------------------------------------------------------------------
   One plain Node file. No dependencies, no install, no internet. Run it on
   ONE of the two laptops:

       node relay.js

   (or double-click start-link.command on a Mac, start-link.bat on Windows)

   It does two things:

     1  prints a short CODE. Type that code into the Link panel on BOTH
        laptops and they are joined.
     2  serves this folder over http, so you can also just open
        http://<the address it prints>/ on the second laptop instead of
        copying the folder across.

   It keeps nothing. Every message a laptop sends is passed to the others
   and forgotten. Stop it with Ctrl-C.
   =========================================================================== */

const http = require("http");
const fs   = require("fs");
const path = require("path");
const os   = require("os");
const crypto = require("crypto");

const PORT = Number(process.env.ECHO_PORT || 8787);
const ROOT = __dirname;

/* --- the code ------------------------------------------------------------
   An IPv4 address packed into one base-36 word, so there is one short thing
   to read out across a room instead of four numbers and a colon.         */
function codeFor(ip){
  const p = ip.split(".").map(Number);
  if(p.length !== 4 || p.some(n => !(n >= 0 && n <= 255))) return null;
  const n = ((p[0] * 256 + p[1]) * 256 + p[2]) * 256 + p[3];
  const w = n.toString(36).toUpperCase();
  return w.length > 4 ? w.slice(0, 4) + "-" + w.slice(4) : w;
}
function addresses(){
  const out = [];
  const ifs = os.networkInterfaces();
  Object.keys(ifs).forEach(name => (ifs[name] || []).forEach(a => {
    if(a.family === "IPv4" && !a.internal) out.push({name:name, ip:a.address});
  }));
  return out;
}

/* --- static files -------------------------------------------------------- */
const TYPES = {".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8",
  ".css":"text/css; charset=utf-8", ".json":"application/json", ".svg":"image/svg+xml",
  ".png":"image/png", ".jpg":"image/jpeg", ".jpeg":"image/jpeg", ".gif":"image/gif",
  ".webp":"image/webp", ".mp3":"audio/mpeg", ".wav":"audio/wav", ".mp4":"video/mp4",
  ".woff2":"font/woff2", ".md":"text/plain; charset=utf-8", ".txt":"text/plain; charset=utf-8"};

const server = http.createServer((req, res) => {
  let p = decodeURIComponent((req.url || "/").split("?")[0]);
  if(p === "" ) p = "/";
  if(p.charAt(p.length-1) === "/") p += "index.html";   /* a folder means its page */
  if(p === "/__link") {                                  /* a tiny health check */
    res.writeHead(200, {"Content-Type":"application/json"});
    return res.end(JSON.stringify({ok:true, clients:clients.size}));
  }
  const file = path.normalize(path.join(ROOT, p));
  if(file.indexOf(ROOT) !== 0){ res.writeHead(403); return res.end("no"); }
  fs.readFile(file, (err, buf) => {
    if(err){ res.writeHead(404, {"Content-Type":"text/plain"}); return res.end("not here"); }
    res.writeHead(200, {"Content-Type":TYPES[path.extname(file).toLowerCase()] || "application/octet-stream",
      "Cache-Control":"no-store"});
    res.end(buf);
  });
});

/* --- websockets, by hand -------------------------------------------------
   Enough of RFC 6455 to carry short text messages between browsers: the
   handshake, text and binary frames up to 2^63, ping/pong, and close.    */
const GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
const clients = new Set();

server.on("upgrade", (req, socket) => {
  const key = req.headers["sec-websocket-key"];
  if(!key){ socket.destroy(); return; }
  const accept = crypto.createHash("sha1").update(key + GUID).digest("base64");
  socket.write(
    "HTTP/1.1 101 Switching Protocols\r\n" +
    "Upgrade: websocket\r\n" +
    "Connection: Upgrade\r\n" +
    "Sec-WebSocket-Accept: " + accept + "\r\n\r\n");
  socket.setNoDelay(true);

  const c = {socket:socket, buf:Buffer.alloc(0), alive:true};
  clients.add(c);
  say("a laptop joined — " + clients.size + " connected");

  socket.on("data", chunk => {
    c.buf = Buffer.concat([c.buf, chunk]);
    for(;;){
      const f = readFrame(c.buf);
      if(!f) break;
      c.buf = c.buf.slice(f.size);
      if(f.op === 0x8){ close(c); return; }                 /* close */
      if(f.op === 0x9){ send(c, f.payload, 0xA); continue; } /* ping -> pong */
      if(f.op === 0xA) continue;                            /* pong */
      if(f.op === 0x1 || f.op === 0x2){
        clients.forEach(o => { if(o !== c && o.alive) send(o, f.payload, 0x1); });
      }
    }
  });
  socket.on("error", () => close(c));
  socket.on("close", () => close(c));
});

function close(c){
  if(!c.alive) return;
  c.alive = false; clients.delete(c);
  try{ c.socket.destroy(); }catch(e){}
  say("a laptop left — " + clients.size + " connected");
}

function readFrame(b){
  if(b.length < 2) return null;
  const op = b[0] & 0x0f, masked = (b[1] & 0x80) === 0x80;
  let len = b[1] & 0x7f, off = 2;
  if(len === 126){ if(b.length < 4) return null; len = b.readUInt16BE(2); off = 4; }
  else if(len === 127){ if(b.length < 10) return null;
    const hi = b.readUInt32BE(2), lo = b.readUInt32BE(6);
    len = hi * 4294967296 + lo; off = 10; }
  const mlen = masked ? 4 : 0;
  if(b.length < off + mlen + len) return null;
  let payload = b.slice(off + mlen, off + mlen + len);
  if(masked){
    const m = b.slice(off, off + 4), out = Buffer.allocUnsafe(len);
    for(let i = 0; i < len; i++) out[i] = payload[i] ^ m[i & 3];
    payload = out;
  }
  return {op:op, payload:payload, size:off + mlen + len};
}

function send(c, payload, op){
  if(!c.alive) return;
  const body = Buffer.isBuffer(payload) ? payload : Buffer.from(String(payload), "utf8");
  const n = body.length;
  let head;
  if(n < 126){ head = Buffer.from([0x80 | (op || 0x1), n]); }
  else if(n < 65536){ head = Buffer.alloc(4); head[0] = 0x80 | (op || 0x1); head[1] = 126; head.writeUInt16BE(n, 2); }
  else { head = Buffer.alloc(10); head[0] = 0x80 | (op || 0x1); head[1] = 127;
    head.writeUInt32BE(Math.floor(n / 4294967296), 2); head.writeUInt32BE(n % 4294967296, 6); }
  try{ c.socket.write(Buffer.concat([head, body])); }catch(e){ close(c); }
}

/* a ping every twenty seconds, so a laptop that sleeps is noticed */
setInterval(() => clients.forEach(c => send(c, "", 0x9)), 20000);

function say(m){ process.stdout.write("  " + m + "\n"); }

server.listen(PORT, "0.0.0.0", () => {
  const list = addresses();
  const line = "=".repeat(62);
  console.log("\n" + line);
  console.log("  ECHO link relay is running. Leave this window open.");
  console.log(line + "\n");
  if(!list.length){
    console.log("  This laptop has no network address, so only this one");
    console.log("  machine can join. Use the code  LOCAL  on this laptop.\n");
  } else {
    console.log("  CODE, for a laptop opening the folder off its own disk:\n");
    list.forEach(a => {
      const c = codeFor(a.ip);
      if(c) console.log("      " + c + "        (" + a.ip + "  ·  " + a.name + ")");
    });
    console.log("\n  If there is more than one, try the first; if it does not");
    console.log("  connect, try the next.\n");
  }
  const local = "http://localhost:" + PORT + "/";
  console.log("  ON THIS LAPTOP, open:");
  console.log("      " + local + "\n");
  if(list.length){
    console.log("  ON THE OTHER DEVICE \u2014 a second laptop, or an iPad \u2014 open the");
    console.log("  SAME address with this laptop's number instead of localhost:\n");
    list.forEach(a => console.log("      http://" + a.ip + ":" + PORT + "/"));
    console.log("");
  }
  console.log("  Anything opened from one of those addresses joins the link by");
  console.log("  itself \u2014 there is no code to type. The code above is only for a");
  console.log("  laptop opening its OWN copy of the folder from the disk.\n");
  console.log("  Both devices must be on the same wi-fi. Stop the relay with Ctrl-C.");
  console.log(line + "\n");
});

server.on("error", err => {
  if(err && err.code === "EADDRINUSE"){
    console.error("\n  Port " + PORT + " is already busy. Either the relay is");
    console.error("  already running in another window, or something else has");
    console.error("  that port. Try:  ECHO_PORT=8788 node relay.js\n");
  } else console.error(err);
  process.exit(1);
});
