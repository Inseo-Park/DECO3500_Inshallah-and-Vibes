# ECHO v14 — fewer steps, more page, a profile worth demoing

Written before anything is built. The theme of this round is **UI/UX**: cut a
step wherever one can be cut, use the whole screen, and make a first-timer able
to find their way without being told twice.

Nine changes, in the order they'll be made.

---

## 1. A demo profile, ready to go

**Why:** a brand new ID has nothing in it, so the profile, the garden panel and
the notifications are all empty the first time you show them to anyone.

**Change:** a third choice on the ID screen —

> **Show me a full profile** — *A made-up account with Echoes, saves and
> notifications already in it. For demonstrating.*

Picking it signs you in as **LAKEWALKER-07** with:

- **11 Echoes** across six subjects — written, two photos, a film and a voice
  note — some of them answers to other people, so the tree has flowers on
  several branches and the Activity tab has something to say.
- **6 saved threads**, so the Saved tab is full.
- **9 notifications**, four of them unread, so the Alerts tab has a dot on it.
- **~20 likes** spread across the archive and other people's Echoes.

It is labelled as a demo account on the profile header and in the README. The
two existing choices — type an ID, make one up — are untouched, so real
first-time testing still starts from nothing.

---

## 2. The page is the page

**Why:** everything sits in a 700px column down the middle. On anything wider
than an iPad it reads as a narrow strip with two empty margins.

**Change:**

- The content column grows to the width of the window (to a sane 1240px), with
  the page's own padding as the margin.
- **Menu** and **Discover** lay their cards out two-up once there's room.
- **The thread page becomes two columns** on a wide screen: the thread itself
  and the composer on the left, and a **sidebar** on the right holding the
  thread's description, *More in \<subject\>* and *Echoes people left near
  this*. On an iPad in portrait it stays one column, in the same order as now.
- The **board** goes to four columns on a wide screen.

Reading measure is still capped inside the Echo cards, so lines don't run to
120 characters.

---

## 3. Starting a thread is one screen with a real box

**Why:** right now a new thread asks for a name and a description, and *then*
sends you somewhere else to write the first Echo. Two screens, and the box only
takes typing.

**Change:** one screen: **Name**, **What is it about?** (optional), and the
same composer used everywhere else — a text box with **Photo · Voice · Film**
attached to it. One button: **Post it**.

---

## 4. Posting tells you where it went

Every confirmation now names both levels:

> **Added — Food & eating → The queue at the sushi place**
> It's a flower on your tree. *See it in the garden*

That applies to the thread composer, the reply box on an Echo, the new-thread
screen and the reel. The full flower animation after *Share something* says the
same thing on its card.

---

## 5. The garden search bar shrinks

**Why:** it spans the whole window and dominates a screen whose whole point is
the landscape.

**Change:** it becomes a normal-sized field in the **top right**, under Board
and **?**, about 300px wide, with the **+** beside it. On a narrow screen it
sits under the top row at the same size rather than stretching.

---

## 6. The profile docks beside the tree, not under it

**Why:** a panel across the bottom covers the ground the tree is standing on,
and feels like a drawer rather than a profile.

**Change:** on a wide screen the profile **docks to the right** as a full-height
panel, and the camera recentres the tree into the space that's left, so the two
sit side by side. On an iPad in portrait it stays a bottom sheet, because a side
panel at that width would leave nothing of the tree.

The panel itself gets a cleaner shape: the header sits above a tab row, the
tabs are the full width of the panel, and the body scrolls under them.

---

## 7. Other people's trees: two tabs, not three

**Their Echoes** and **Saved** stay. **Activity** comes off — it's your own
history, not something to hand to a stranger. Yours keeps all four:
Echoes · Saved · Activity · Alerts.

---

## 8. The garden walkthrough has a Next button

**Why:** the three steps only advanced when you happened to do the thing they
described, and there was no visible way forward — you had to tap outside it.

**Change:** each card gets **Next ›** and **Skip**, with the dots showing where
you are. The last one says **Got it**. Doing the action still advances it, so
anyone who's already moving isn't interrupted. The **?** in the corner replays
it at any time.

---

## 9. Opening an Echo gives you the box, not a button

**Why:** reading someone's Echo and wanting to answer currently costs a tap on
*Add to this*, then a screen change, then typing. Three steps to say one line.

**Change:** wherever an Echo is open — on the thread page, in the garden panel,
in the reel drawer — the **composer is already there underneath it**, with the
text field and **Photo · Voice · Film**, ready to type into. **Open the whole
thread** stays as a second, quieter option.

**+ Add** on any Echo opens the same box directly under that Echo, in place,
everywhere — including inside the garden.

---

## The first-timer's path, after all of this

```
Intro  →  ID (or the demo profile)  →  three doors
   Discover UQ → one of four → a thread, already open, full width
       read · heart · type straight into the box at the end
   UQ social garden → walkthrough with Next → tap a tree → walk in
       profile beside the tree: Echoes · Saved · Activity · Alerts
   Share something → one box with three attachments → the flower
```

No screen asks you to choose a format before you've written anything. No
button takes you away from what you were reading to let you reply to it. Every
confirmation says the subject and the thread it landed in.

## Still simulated, and labelled

The sixteen other people, their Echoes, saves and replies, the answer that
arrives a few seconds after you leave something, "reading now" — and now the
**demo profile**, which the profile header marks as a demonstration account.
