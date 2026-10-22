# ECHO v12 — new architecture

Written back from your brief, before anything is built. If a line here is wrong,
it's cheaper to fix now than after. **§12 is the list of questions I need
answered.**

---

## 1. The shape of it, in one map

```
INTRO (the moving grid)            ← unchanged
   ↓
ECHO ID                            ← unchanged: have one / make one
   ↓
MENU — three doors
   ├── DISCOVER UQ
   │      ├── People before us ─┐
   │      ├── What happened here├──→ straight into a thread, already open
   │      ├── Surprise me ──────┘      (media filters live inside it)
   │      └── UQ Social Garden
   │
   ├── UQ SOCIAL GARDEN
   │      ├── Garden view (one tree per person)
   │      └── Board view (every echo, as tiles)
   │
   └── SHARE SOMETHING  → pick a format → make it → it becomes a flower on your tree
```

Top bar everywhere: **language only**. The profile avatar is gone; you reach
your own tree through the Social Garden.

---

## 2. The content model

Three levels, and everything in the app is one of them.

| | What it is | Example | Who makes it |
|---|---|---|---|
| **Theme** | A big subject | *Protest* · *Music & radio* · *Food & eating* · *Life before* · *Study* · *Places* | Seeded, and anyone can add one |
| **Thread** | One story inside a theme | *The 1971 Vietnam moratorium* · *The food at Main Court* | Seeded, and anyone can add one |
| **Echo** | One thing a person left: text, photo, voice or film | *"The food here sucks"* · a 23-second film · a photo of the lake | Seeded (archive) or left by a person |

Rules:

- A thread lives in exactly one theme.
- An echo lives in exactly one thread, and can be a **reply to another echo**
  inside it — that's how a thread branches, Reddit-style.
- An echo can be liked. **Comments are gone** — a reply *is* an echo, in any
  format.
- Pre-installed archive content is just echoes that were already there, marked
  as archive.

---

## 3. Discover UQ

### 3.1 The three doors

**People before us**, **What happened here**, **Surprise me** are *angles*, not
categories. They choose which themes come first:

| Door | Leads with |
|---|---|
| People before us | Threads that are mostly about people — student life, study, food, culture |
| What happened here | Threads about events — protests, moments, things that happened at a place |
| Surprise me | Everything, shuffled |

### 3.2 No format screen

**Decided:** picking an angle drops you straight into a thread, already open —
no "how do you want it?" screen in between. The media choice moves *inside* the
thread as filters you can flick while you're reading:

```
ALL · 🎬 FILM · 🎧 VOICE · 📖 TEXT · 📷 PHOTO        ▶ REEL
```

All is the default. Choosing one hides the rest until you change it back. Reel
is a button, not a format: it takes the thread (or the angle) full screen as a
swipe feed.

### 3.3 The thread page

```
┌──────────────────────────────────────────────┐
│  🌐 EN                                       │
│  ‹ Protest  Music & radio  Food  Life before… │ ← horizontal themes
│  ALL · FILM · VOICE · TEXT · PHOTO     ▶ REEL │ ← filters, not a prior choice
│                                              │
│  THE 1971 VIETNAM MORATORIUM        ★ save   │ ← the thread's name
│  Four thousand students, no permit, one road │ ← what the thread is about
│                                              │
│  [ film: Before any of it ]      ♡ 14  ↳ 3   │
│     ↳ LORIKEET-47 · photo                    │
│     ↳ MANGO-31 · "my grandfather was there"  │
│         ↳ SANDSTONE-16 · voice · 0:24        │
│  [ text: What it was actually about ]  ♡ 9   │
│  …                                           │
│                                              │
│  + Add to this thread                        │
│                                              │
│  RELATED IN PROTEST                          │
│  [1965 · before any of it] [1977 · the line] │
│  [1985 · Mayne Hall]        [🎲 another]     │
└──────────────────────────────────────────────┘
```

- The **theme strip** at the top scrolls horizontally; tapping a theme moves you
  to a thread in it; **+** creates a new theme.
- **🎲 Take me somewhere else** jumps to a random thread, weighted to the theme
  you're in.
- **Related** is a mix of other threads in the same theme and loose echoes that
  match — so from the Vietnam thread you get other protests and political
  moments, never food.
- **★ Save** keeps the thread on your tree's menu.
- Replies nest one level visually, deeper ones indent slightly and then flatten,
  so it never becomes a staircase on an iPad.

### 3.4 Making things

- **+ New thread** inside a theme → name, what it's about, then your first echo.
  Open to anyone.
- **New themes are gated** — **decided**: creating a theme sits behind the same
  press-and-hold researcher key as the data view, so a day of testing doesn't
  end with nine themes that all mean "food". Everyone else works inside the six
  that exist.
- **+ Add to this thread** → the format picker, then it posts as an echo in that
  thread — and also becomes a flower on your tree.

---

## 4. Auto-filing ("done by AI")

When someone writes *"the food here sucks"*, it should land in **Food & eating**
without them choosing.

There is no model in the pod — it's offline, on an iPad. So:

**A keyword-and-phrase classifier, written into the app, filing silently.**
Every theme carries a vocabulary (food: eat, lunch, coffee, cafe, sushi, hungry,
canteen, refectory…). An echo is scored against every theme and the winner takes
it, with no question asked — **decided: silent**. The person just sees where it
landed afterwards: *"It joined **Food & eating** → The food at Main Court."*

If nothing scores at all, it goes to the angle's default theme rather than
stopping to ask. Since it files silently, a wrong guess is possible, so the
landing screen carries a quiet **Move it** link — one tap, pick another thread —
for the person who notices.

Threads inside the theme are matched the same way; if nothing fits, the echo
starts a **new thread** named from its own first words.

> The README will say plainly that this is a rules-based classifier, not an AI
> model, so nobody is misled in a demo.

---

## 5. UQ Social Garden

### 5.1 What a tree is now

**One tree = one person.** Not a thread any more.

| | |
|---|---|
| A tree | A person's ECHO ID |
| Its flowers | The echoes that person has left — each flower opens into that echo's thread |
| Flower size | How much it grew: how many replies it drew |
| Your tree | Marked clearly, and the camera starts on it |
| Other trees | Everyone else's, anonymous, visitable |
| The horizon | More trees, out of focus, the rest of campus |

Camera, species, motion, taps — all as in v11, which works. What changes is what
a tree *means* and what a flower opens into.

### 5.2 The search bar

Across the top of the Social Garden, one field, working on four kinds of thing:

- a **user ID** → walks you to their tree,
- a **thread name** → opens that thread,
- a **theme** → shows that theme's threads,
- any words → echoes whose text matches.

Next to it, a **+** — share something, from right here.

### 5.3 Walking into a tree: the menu

Entering a tree opens a menu panel beside it with three tabs:

**My echoes** (or *their* echoes on someone else's tree)
: Each echo as a row with a badge when there are replies — *3 added*. Tapping
  one **opens its flower on the tree** and the panel turns into that echo and the
  conversation under it. Back returns the panel to the list and closes the
  flower. Panel and tree stay in step, always.

**Saved threads**
: Threads you starred, each showing whether you've contributed to it, and
  carrying straight into the thread page.

**Notifications**
: What happened on the things you're in — *MANGO-31 added a photo to "The food
  at Main Court"*. Tapping goes to that echo. Clears on read.

On someone else's tree: **their echoes** and nothing else — no access to their
saves or notifications.

### 5.4 Board view

A second way to see the same garden, toggled top-right: **Garden ⇄ Board**.

- Every **echo** people have left, as tiles — photos as photos, films with a
  still and a play badge, voices as a waveform card, text as a typographic card.
- Only people's echoes. Archive content doesn't appear here (it appears inside
  themes).
- The same search and filters; default **All**.
- A menu switch between **Everyone's** and **Mine**.
- Tap a tile → the full conversation for that echo: it and everything added to
  it, in any format.

---

## 6. Share something

One flow, from the menu, from the garden's **+**, or from inside a thread.

1. **What format?** — Write · Voice · Photo · Film. (No more "a memory / a
   secret / a fact".)
2. Make it.
3. **Where it lands** — the auto-filed theme, with the one-tap change (§4).
4. **Done** → the echo animates: the card shrinks, travels to your tree, and
   **opens as a new flower** on it. *"It's on your tree. You'll be told if
   someone adds to it."*
5. Then: **see it on your tree** · **discover what other people left** (→ Board).

---

## 7. Deleted in v12

| Gone | Why |
|---|---|
| Comment boxes, everywhere | A reply is an echo now, in any format |
| The six echo types (memory / photo / secret / fact / event / question) | Format is the only choice |
| Subtopic screens ("What was here before?" etc.) | Discover is angle → thread |
| The format-picking screen | Media is a filter inside the thread now |
| The profile avatar in the top bar | Your tree is in the garden |
| Trails, following, "stories you follow" | Replaced by saved threads + notifications |
| Trees meaning threads | A tree is a person now |
| The account list view | The tree's menu replaces it |
| Connect another Echo | Already removed in v11 |

Kept: the intro grid, the ID flow, language, Reel, the four pods, the researcher
data key and CSV, reduced-motion handling.

---

## 8. Data model

```javascript
THEMES  [ {id, name, blurb, colour, vocab:[…], seeded} ]
THREADS [ {id, themeId, name, blurb, seeded, created, by} ]
ECHOES  [ {id, threadId, parentId|null, by, kind:text|photo|audio|video,
           body|src|caption, when, archive:bool, likes:[ids]} ]
PEOPLE  [ {id, tree:{species, seed}, echoes:[…], saves:[…], notifs:[…] } ]
ME      { id, saves:[threadIds], notifs:[…], seenNotifs }
```

Everything lives in `localStorage` under `echo.v12.*`, per device. Other people
are simulated, as now, and seeded deterministically from their ID.

---

## 9. What the pod looks like on day one

- **6 themes**: Protest · Music & radio · Food & eating · Study & survival ·
  Places & quiet · Life before us.
- **~14 threads** across them, carrying the 28 archive echoes already made.
- **~16 simulated people**, each a tree with 2–6 echoes, plus replies between
  them, so the garden is populated and the board is full the first time anyone
  opens it.
- Your own tree, planted at the near end, empty until you leave something.

---

## 10. Build order

1. Data layer: themes, threads, echoes, people, saves, notifications, and the
   migration of the existing 28 archive echoes into threads.
2. The classifier and its confirm step.
3. Menu → Discover → format → thread page (with the theme strip, replies, save,
   random, related).
4. Thread creation and theme creation.
5. Social Garden: one tree per person, the three-tab menu that moves with the
   tree, search.
6. Board view.
7. Share flow and the echo-becomes-a-flower animation.
8. Delete what §7 says to delete, and re-run every test with real taps.

---

## 11. What I'd watch out for

- **The thread page is now the heart of the app.** It has to work on an iPad in
  portrait with a nested conversation in four media types. That's the hardest
  screen in the build and where I'd spend the most care.
- **Two meanings of "thread"** — a theme's story, and a conversation under one
  echo. I'll use *thread* for the story and *added to it* for replies, in the
  interface and in the code.
- **Reel inside the new structure**: it becomes "swipe through this angle", and
  each slide can open its thread.

---

## 12. Questions

**Answered:** no format screen (filters inside instead) · silent auto-filing ·
threads open to anyone, themes behind the researcher key · one heart stays.

Still open:

3. **Replies to replies — how deep?** I'm building two levels, then flat, which
   is what fits an iPad in portrait. Say if you want unlimited.
4. **The Share flow's landing**: after the flower attaches, should it drop the
   person into the thread their echo joined (so they see it in context), or stay
   in the garden?
6. **Should the board be the default view** of the Social Garden instead of the
   trees? The board is instantly legible; the garden is the thing people
   remember. I'd default to the garden, with the toggle one tap away.
7. **Notifications**: simulated arrivals (someone adds to your echo a minute
   later) — yes, as now? It makes the tab real in a ten-minute test.
8. Still open from before: **your friend's tree prototype**, if you want me to
   match any of it.
