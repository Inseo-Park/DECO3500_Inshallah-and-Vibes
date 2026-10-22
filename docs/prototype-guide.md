# Running and using ECHO v22

The current prototype is in [`prototype/`](../prototype/). It contains two installations: [UQ Lakes](../prototype/ECHO-lakes/index.html) and [Great Court](../prototype/ECHO-court/index.html), with an [installation chooser](../prototype/index.html). Each installation opens its own landmark; the others remain in the mist.

## Start on one laptop

For the most repeatable setup, run this command **from the repository root**:

```powershell
node prototype/relay.js
```

Open <http://localhost:8787/> and choose an installation. Keep the terminal open; press `Ctrl+C` to stop the relay. The relay serves the `prototype/` directory and carries messages between open installations. It uses Node.js built-in modules only: there is no package installation or build step. Node.js v26.7.0 was available when this repository was prepared; the supplied project does not specify a minimum version.

Alternatively, double-click `prototype/start-link.bat` on Windows or run `prototype/start-link.command` on macOS. If port 8787 is occupied, PowerShell users can choose another port:

```powershell
$env:ECHO_PORT = "8788"
node prototype/relay.js
```

Use the new port in the browser address. To rehearse with two visitors, open the chooser in two windows, choose a different installation in each and enter a different ECHO ID in each window.

For a single offline demonstration without Node.js, open `prototype/ECHO-lakes/index.html` or `prototype/ECHO-court/index.html` directly in a browser. File-based two-window linking depends on browser storage behavior; use the relay for a repeatable linked demonstration.

## Connect a second laptop or iPad

1. Start the relay on the host laptop as above. It prints the host's IPv4 network addresses, such as `http://192.168.1.23:8787/`.
2. Join both devices to the same network. The network must allow connections between them, and the host firewall must allow the relay's port.
3. On the host, open `http://localhost:8787/` and select **The Great Court**.
4. On the second device, open the printed **host IPv4 address**, including `http://` and `:8787`, and select **The UQ Lakes**. `localhost` on the second device refers to that device, so use the host address there.
5. Sign in with distinct ECHO IDs and enter the garden on both devices. Open **≡ → Connect to another ECHO** to check the connection. Pages opened through the relay join automatically; the panel shows **LIVE** when another visitor is connected.
6. Walk near the live visitor and choose **Talk to them**. Type a short message and check that it arrives on the other screen.

If a guest network prevents the devices from connecting, use another network that permits local device traffic. Internet access is unnecessary for the bundled demonstration. Opening external historical sources or downloading optional photographs requires internet access.

## Demonstration route

1. At **Who are you here as?**, choose **I'm new here** to create or generate an ID. There is no account registration or password. **Show me a full profile** opens the seeded demonstration profile `LAKEWALKER-07`; use a new ID on the second device so the visitors have distinct handles.
2. Choose **Discover UQ**, then an entry such as **What happened here**, to open a thread. Browse Echoes, use search/filters, save a thread or add a reply with the composer.
3. Open **UQ social garden** from the menu or tree button. Follow the walkthrough, use the walking pad and approach the open landmark, a tree or a person. The other installation's live visitor carries a **LIVE** badge; written characters and conversations are simulated.
4. Use **+** in the garden to leave something. Written posts and photos are useful for a short demonstration. Voice recording depends on browser support and microphone permission.
5. Use **My tree** to find your contribution. Use **Sign out** on the front screen or in the garden menu to return the installation to the ID screen for the next visitor.

## Session export

The researcher view is available by holding the small researcher dot for about 700 ms, or pressing `Ctrl+Shift+D` (`Cmd+Shift+D` on macOS). Select **Save CSV** to export the session records held by that browser as `echo-sessions.csv`.

Session records include IDs, timestamps and interaction events. They are stored locally and committed as the prototype changes screens, ends a sitting or leaves the foreground. Export from each device separately. The presence of this tool is not evidence that a user evaluation has been conducted.

## Persistence and implementation limits

- **Browser-local state:** IDs, posts, saves, likes, notifications and session logs use `localStorage`. Typing an existing ID on another device does not retrieve a remote profile. IDs are labels, with no authentication or account service.
- **Shared browser storage:** installations served from the same origin use the same storage keys. Two windows can use different IDs during a rehearsal, but their saved state is not an isolated account per window. Separate devices or browser profiles give independent local storage. Changing browser, URL origin, host address or port can expose a different store.
- **Limited persistence:** sign-out retains local state. Clearing browser data removes it. Only the latest 14 user posts are retained for reload; audio recordings are explicitly excluded, and uploaded films use temporary blob URLs that do not survive reload. Browser storage limits can also prevent saving attachments.
- **Live features:** presence, walking positions and typed conversation messages are connected to the relay. The relay forwards messages without saving them; it provides no durable server history or synchronization after reconnection.
- **Posted Echoes do not currently synchronize:** `Link.sendEcho()` has no call site in the application. Demonstrate shared chat and presence; treat post synchronization as unfinished. The dormant receiver would also reduce a received Echo to text.
- **English interface:** the language chooser lists other languages, but the application states that they are coming and continues displaying English.
- **Simulated content:** seeded people, replies and demonstration profile activity illustrate the concept. Optional real historical photographs are not included in the supplied archive; the application uses labeled generated substitutes when those files are absent. Original photo credits and download scripts are preserved inside each installation.
- **Hosting:** the supplied relay uses plain HTTP and WebSocket connections. An HTTPS-hosted copy cannot connect directly to that plain local relay; the application displays this limitation in its connection panel.
