// Run from any directory with Node.js; no packages or build step required.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const label = path => relative(root, path).split(sep).join('/');
const insideRoot = path => path === root || path.startsWith(root + sep);
const read = path => readFileSync(path, 'utf8');

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

// Snapshot hashes make accidental changes to the supplied application visible.
const manifest = JSON.parse(read(resolve(root, 'docs/repository/source-manifest.json')));
let imported = 0;
for (const archive of manifest) {
  for (const item of archive.files) {
    const path = resolve(root, item.path);
    if (!insideRoot(path) || !existsSync(path)) {
      errors.push(`Missing imported file: ${item.path}`);
      continue;
    }
    const bytes = readFileSync(path);
    const hash = createHash('sha256').update(bytes).digest('hex');
    if (hash !== item.sha256 || bytes.length !== item.bytes) {
      errors.push(`Imported source changed: ${item.path}`);
    }
    imported++;
  }
}

const documents = [resolve(root, 'README.md'), ...walk(resolve(root, 'docs')),
  ...walk(resolve(root, 'archive/prototypes/echo-standup'))]
  .filter(path => path.endsWith('.md'));
let links = 0;
for (const path of documents) {
  const content = read(path).replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]+`/g, '');
  for (const match of content.matchAll(/!?\[[^\]\n]*\]\((<[^>]+>|[^)\n]+)\)/g)) {
    let target = match[1].replace(/^<|>$/g, '').trim().replace(/\s+"[^"]*"$/, '');
    if (/^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(target)) continue;
    target = decodeURIComponent(target.split(/[?#]/)[0]);
    if (!target) continue;
    const destination = resolve(dirname(path), target);
    if (!insideRoot(destination) || !existsSync(destination)) {
      errors.push(`${label(path)}: broken local link ${target}`);
    }
    links++;
  }
}

const htmlFiles = [resolve(root, 'prototype/index.html'),
  resolve(root, 'prototype/ECHO-lakes/index.html'),
  resolve(root, 'prototype/ECHO-court/index.html'),
  resolve(root, 'archive/prototypes/echo-standup/index.html'),
  resolve(root, 'docs/evaluation/questionnaire/echo-questionnaire-v02/index.html'),
  resolve(root, 'archive/prototypes/echo-social/index.html'),
  resolve(root, 'archive/prototypes/echo-social-minecraft/index.html')];
let scripts = 0;
let media = 0;
for (const path of htmlFiles) {
  const html = read(path);
  let index = 0;
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    index++;
    if (/\bsrc\s*=|\btype\s*=\s*["'](?:application\/ld\+json|importmap)/i.test(match[1])) continue;
    try { new Script(match[2], { filename: `${label(path)}:script-${index}` }); }
    catch (error) { errors.push(error.message); }
    scripts++;
  }
  // Literal bundled media references. Optional downloaded photos have explicit
  // generated fallbacks and are intentionally absent from the supplied ZIPs.
  const references = new Set([...html.matchAll(/["'`](media\/[^"'`\s<>]+)["'`]/g)]
    .map(match => match[1]).filter(target => !/[${}]/.test(target) && !target.startsWith('media/photos/')));
  for (const target of references) {
    if (!existsSync(resolve(dirname(path), target))) errors.push(`${label(path)}: missing ${target}`);
    media++;
  }
}
for (const path of walk(resolve(root, 'prototype')).filter(path => path.endsWith('.js'))) {
  try { new Script(read(path).replace(/^#![^\n]*\n/, ''), { filename: label(path) }); }
  catch (error) { errors.push(error.message); }
  scripts++;
}

const allFiles = [...walk(resolve(root, 'prototype')), ...walk(resolve(root, 'docs')),
  ...walk(resolve(root, 'archive'))];
for (const path of allFiles) {
  if (statSync(path).size >= 100 * 1024 * 1024) errors.push(`File exceeds 100 MiB: ${label(path)}`);
}

if (errors.length) {
  errors.forEach(error => console.error(error));
  process.exitCode = 1;
} else {
  console.log(`Passed: ${imported} imported file hashes, ${links} local links, ${scripts} JavaScript blocks/files, ${media} bundled media references.`);
  console.log('This checks source integrity and structure; it does not replace browser or two-device user evaluation.');
}
