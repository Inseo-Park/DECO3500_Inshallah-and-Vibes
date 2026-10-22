# ECHO v13 — what changes, and why

Written before anything is built. v12 stands; this is the round of corrections
on top of it. Seven changes, in the order they'll be made.

Device: iPad, portrait. Offline, no login, no backend. Clean and to the point.

---

## 1. Share something is one screen

**Now:** Share → a menu of four cards (Write it / Say it / Show it / Film it) →
a second screen to actually make the thing. Two screens for one action.

**Change:** one screen. You land on a text box with the cursor in it. Under it,
a row of attach buttons exactly like an email: **Photo · Voice · Film**. Write,
or attach, or both. One button at the bottom: **Leave it →**.

- The format is decided by what you did, not by what you picked first. Attach a
  photo and it's a photo Echo; record and it's a voice Echo; type only and it's
  written.
- Attaching opens inline, under the text box, with a thumbnail and a
  **Remove** so nothing is a dead end.
- Only one attachment per Echo. Picking a second replaces the first, and says so.
- The optional **title** field stays, below the attachments, collapsed to one line.
- The screen is reached from: the Share door, the garden **+**, **+ Add** on any
  Echo, and the thread composer when someone attaches something.
- `SHARE` and `COMPOSE` become the same screen. The old format menu is deleted.

**The flower is untouched.** Leaving it still runs the attach animation and the
"Added to the UQ social garden" card. That's the part that matters.

---

## 2. The filters, inline and actually working

**Now:** a **Filters** button opens a modal over the thread. It is easy to miss,
it covers what you're filtering, and tapping it on the iPad doesn't reliably do
anything.

**Change:** no modal. The filters live on the thread page.

- The **Filters** button stays where it is, next to the search field, and now
  **opens a row of chips underneath it**, in place, pushing the thread down.
- Chips in three short groups on one scrollable line each:
  **Format** All · Film · Voice · Written · Photo
  **Source** Everything · What people left · Archive only
  **When** Any time · Last 7 days · This year · Before 2000
- Tapping a chip applies **immediately** — the Echo list below repaints, the
  count updates, the page does not jump and you do not lose your place.
- The Filters button shows a small number when anything is on, and a
  **Clear** chip appears at the end of the row.
- The filter state gets a proper home in `State` (`State.F`) so a thread opened
  from the garden, from search or from a related card can never arrive with no
  filters set — which is what was breaking it.

---

## 3. A **+** next to the search bar, and nothing else

**Now:** the bottom of a thread has **+ Add to this thread**, **+ New thread**
and **Somewhere else**. Three buttons that mean three different things, stacked
on each other.

**Change:**

- **Somewhere else** — deleted. It meant nothing.
- **+ New thread** — deleted from the bottom. It becomes a **+ icon** sitting
  beside the search field and Filters. Press it and a small label reads
  **New thread** before the screen opens, so it isn't a mystery icon.
- **+ Add to this thread** — replaced by the composer in change 4.

The top row of the thread page is then: **search field · Filters · +**.

---

## 4. The composer is always there

**Now:** a button that takes you away to another screen to add to a thread.

**Change:** a box, always visible at the end of the thread, the way a reply box
works everywhere else:

```
┌──────────────────────────────────────────┐
│  Add to this thread…                     │
│                                          │
│  [ Photo ]  [ Voice ]  [ Film ]    [Post]│
└──────────────────────────────────────────┘
```

- Type and hit **Post** and the Echo appears in the thread immediately. No
  screen change, no trip through Share.
- The three attach buttons are the email-attachment pattern: tap **Photo** and
  the camera/library opens, the thumbnail appears inside the box, **Post**
  sends it with whatever you typed as the caption.
- A voice attachment records in place, in the box, with the same 45-second
  recorder as before.
- **+ Add** on an individual Echo opens the same box *under that Echo*, so a
  reply to a reply never leaves the page either.
- Posting shows a short confirmation that it also became a flower on your tree,
  with a link to go and see it. The full animation still belongs to the Share
  door, so posting a one-line reply doesn't hijack the screen.

---

## 5. The bottom of a thread always has somewhere to go

**Now:** "More in Food & eating" is empty when that subject only has one thread.
A dead end.

**Change:** the bottom of every thread carries two rails, and neither can ever
be empty:

- **More in <subject>** — other threads in this subject; if there aren't three,
  it tops up with the busiest threads from elsewhere, labelled with their own
  subject so it isn't a lie.
- **Echoes people left near this** — four Echo tiles pulled from those threads
  (photo, film, voice and written mixed), each tappable straight into the
  conversation it belongs to.

Extra seeded threads and Echoes are added to the thinner subjects so these
rails have real material to draw on rather than the same three cards.

---

## 6. A profile worth looking at — yours and everybody else's

**Now:** walking into a tree gives you three tabs if it's yours and one tab
("Their Echoes") if it isn't.

**Change:** every tree opens a **profile**, the same shape for you and for
anyone else.

Header, above the tabs: the ID, the species of their tree, and three counts —
**Echoes left · answers received · threads they follow**. Plus, for other
people, the "reading now" line that already exists on the tree card.

Tabs:

| Tab | Yours | Theirs |
|---|---|---|
| **Echoes** | everything you've left | everything they've left |
| **Saved** | threads you starred | **threads they follow** — now active |
| **Activity** | your history, newest first | their history |
| **Alerts** | who added to or liked yours | — |

**Activity** is one line per thing done, newest first: *left an Echo in «The day
four thousand sat down»* · *added to MANGO-31's Echo* · *liked a film in «Refec
chips»* · *followed «The queue at the sushi place»*. Every line is tappable and
lands where it happened.

Other people's saves and activity are generated deterministically from their ID,
so a tree looks the same every time you walk into it. Like everything else about
the other sixteen people, it is simulated, and the app says so.

---

## 7. Reel mode, actually built

**Now:** a mostly black screen with a small card floating in the middle of it.

**Change:** rebuild it as a proper full-screen swipe feed.

- **Film** fills the screen, with a blurred still of itself behind to fill the
  gaps, and plays on arrival. **Photo** the same.
- **Voice** gets a full card: the waveform large and live, a big play control,
  the time, and the words of the caption.
- **Written** gets the whole screen as a page: large serif type, centred,
  with the author and the thread. No tiny card in the void.
- Top: back · **3 / 11** · sound.
- A **format chip row** under the top bar — All · Film · Voice · Written ·
  Photo, with counts, hidden only if the thread really has one format.
- A thin **progress rail** down the right edge showing where you are in the
  thread.
- Right rail: heart · replies (with the count) · add.
- **Replies** slides up from the bottom over the Echo rather than covering it,
  and carries the same composer as the thread page, so you can answer without
  leaving the reel.
- The last slide offers: add to this thread · swipe through again · back to the
  thread.
- Everything respects reduced motion and the muted-autoplay fallback already in
  the build.

Reel is reachable from the **List ⇄ Reel** switch on every thread, and from the
board.

---

## What is not changing

The intro collage, the ECHO ID flow, the three doors, Discover's four options,
landing straight in a thread, silent filing into subjects, the single heart on
every Echo, the garden as one tree per person, the board, universal search, the
researcher key and CSV export, and the share → flower → "added to the UQ social
garden" animation.

## What is still simulated, and labelled

The other sixteen people, their Echoes, their saves, their activity, their
replies to you, the answer that arrives a few seconds after you leave
something, and "reading now". The pods are not connected to each other and
there is no server. Your ID, your Echoes, your saves, your likes and your
notifications are real and live on that iPad.
