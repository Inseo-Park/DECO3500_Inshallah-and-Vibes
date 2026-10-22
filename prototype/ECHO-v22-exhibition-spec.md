# ECHO v22 — two pods, one island, live between them

Written before building. This round turns the prototype into something you can
run on **two laptops at an exhibition**, side by side, and have them talk to
each other.

---

## 1. One place per pod, the rest under cloud

Your supervisor is right, and it fixes a problem the prototype has had all
along: five landmarks on one island makes the pod feel like a map of the campus
rather than a thing that *sits somewhere*.

So: **two builds**, identical except for where they are.

| | |
|---|---|
| **`ECHO-lakes/`** | The pod at the UQ Lakes. The lakes are built out in full. |
| **`ECHO-court/`** | The pod at the Great Court. The Court is built out in full. |

Everything else on the island is **under cloud**. Not deleted, not greyed —
weather. A low bank of blocky cloud sits over the Great Court, Forgan Smith,
Duhig and the ferry in the Lakes build, and over the Lakes, Forgan Smith, Duhig
and the ferry in the Court build. You can see there is *something* under there:
a tower top, a roofline, a glint of water.

Hover or tap one and it says what it is and what to do about it:

> **Forgan Smith** — under cloud.
> There's an ECHO at Forgan Smith. Visit it to open this place up.

So the island becomes an argument for walking to the other pods. The **social
garden in the middle is untouched** — everyone's trees, everyone's flowers, the
people walking between them, in both builds.

The one place that *is* open gets the attention the other four were taking:
more of it, and closer to the ground you actually walk on.

---

## 2. Live, between the two laptops

The two pods talk to each other for real. Type *hello* on one and it arrives on
the other.

**What you see when it's on.** The other pod's visitor is a real person in your
garden — walking where they're walking, with their handle over their head and a
**LIVE** mark. Walk up to them and **Talk to them** opens a real conversation,
not a written one. What you type goes to their screen. What they type arrives on
yours. People joining and leaving are announced. Echoes left at either pod
appear in the other's garden as a new flower.

**How it connects.** Three ways, picked automatically, best first:

1. **Two windows on one laptop** — nothing to set up. Open `index.html` twice
   and they find each other instantly. This is the one to use for rehearsing,
   and for a desk demo.
2. **Two laptops on the same wi-fi** — run the bundled relay once:
   `start-link.command` on a Mac, `start-link.bat` on Windows. It prints a short
   code. Type that code into both laptops' **Link** panel and they're joined.
   No internet, no accounts, no install — the relay is one plain Node file with
   no dependencies.
3. **Nothing available** — the prototype falls back to the written conversations
   it has now and says so, so a failed wi-fi never kills the demo.

The **Link** panel in the menu always shows which of the three you're on, who
else is connected, and the code. It is designed to be glanceable from two metres
away because that is where you will be standing.

A caution worth having in advance: some venue wi-fi blocks devices from seeing
each other. If that happens, a phone hotspot with both laptops on it works, and
option 1 always works. The panel tells you which state you're in rather than
just failing.

---

## 3. The island gets its interface back

Right now there are nine floating things over the garden. That is eight too many.

**Stays on the map:**

- the **search field** and the **+**, top right;
- the **walking pad**, bottom left — redrawn much slimmer: a thin four-way
  cross, flat, no boxes, that fades back to 40% when you aren't touching it;
- the **contextual bubble** — *Look around · Talk to them · Walk in* — which is
  the whole game;
- **⚑ My tree**, because finding yourself matters.

**Everything else moves into one button.** A single **≡** bottom right opens a
panel:

- **How this works** — replays the walkthrough
- **Whole island** — the overview
- **My tree** — fly home
- **Echoes around campus** — the live map of the other installations
- **Link** — the connection panel above
- **Language**

**Gone:** the Board, the pod chip, the ? button, the separate island button, and
the second row of chips. The map is the map.

---

## 4. Words, and one that was wrong

**"Pods" becomes "Echoes."** The installation is called an ECHO, so *7 of 7 pods
busy* becomes **7 ECHOes live** and the map is **Echoes around campus**. Only
the things people leave are "Echoes" lower-case; that distinction was already
doing work and I've kept it.

---

## 5. The walkthrough, shown rather than written

Four cards, each **under a dozen words**, and each one **moves the camera to the
thing it is talking about** and rings it:

1. *This is you.* — camera on your own figure, pad highlighted
2. *Hold to walk.* — a hand moves the pad, you take three steps
3. *Tap anything.* — camera flies to the open landmark, which pulses
4. *This tree is yours.* — camera to your tree, flag lit

No paragraphs. Skip on every card, and **How this works** in the menu replays it.

---

## 6. You cannot walk off the island

A real bug. The walk is clamped to a rectangle, and the island isn't one, so you
can stroll out over the water and off the edge of the world.

**Fix:** the island records which tiles exist when it is built, and walking is
clamped to those tiles. Reach the edge and you stop at the grass, with the shore
under your feet. The camera stops with you.

---

## 7. The front of the thing

- **Two doors, not three.** *Discover UQ* and *UQ social garden*. **Share
  something** comes off the menu — you can already leave something from inside
  the garden, from inside a thread and from inside a place, which is where it
  belongs.
- **A tree button**, next to the language button, on every screen. One tap into
  the garden, at your own tree, from anywhere.
- **Start over is gone.** It confused people and it is one tap from wiping a
  demo.

---

## What stays

The seventh theme and its notice, the documented history with its sources, the
History tab on the open landmark, the in-panel navigation, the ⋯ menu on your
own Echoes, the generated pictures and the real-photo slots, the demo account.

## Still simulated, and labelled

The sixteen people who live in the garden and everything they say, when nobody
is connected. **When somebody is connected, the people and the words are real**
and the prototype says which is which — a live person carries a **LIVE** mark
and a written one doesn't. The generated pictures stay marked. The historical
records stay sourced.
