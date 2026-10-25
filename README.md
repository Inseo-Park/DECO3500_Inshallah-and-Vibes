# ECHO: shared campus stories

**DECO3500 · Social and Mobile Computing · The University of Queensland · 2026**

**Team: Inshallah and Vibes: Itisha, Keerthana, Ishan and Inseo (Alex)**

ECHO aims to help students learn about UQ’s history and feel more connected to campus. We designed a book-like installation where students can find stories about a place and leave their own memories. In the digital garden, each person has a tree, and their contributions appear as flowers. Visitors can reply to stories and talk to someone at another installation.

Our [secondary research](docs/secondary%20research/secondary-research.md) explores student belonging, campus heritage and connection to place. Our interviews and testing helped us change the garden’s layout, how people find their contributions and how the two locations connect. This repository contains the current prototype, earlier builds and the work behind those decisions. The latest build still needs user testing.

## Run the prototype

The current prototype is [echo-tradeshow](prototype/index.html), with UQ Lakes and Great Court locations. Download or clone the repository first. GitHub shows the source files; it does not run the prototype.

With Node.js installed, run this from the repository root:

```sh
node prototype/relay.js
```

Open **http://localhost:8787/** and choose a location. No package installation or build step is needed. Keep the terminal open while using the prototype. Press **Ctrl+C** to stop it.

Create an ECHO ID, or choose **Show me a full profile** to try the example `LAKEWALKER-07` profile. No account or password is needed. For two people, use different IDs and follow the [prototype guide](docs/prototype-guide.md) to connect the second device.

For an offline preview on one device, open [UQ Lakes](prototype/ECHO-lakes/index.html) or [Great Court](prototype/ECHO-court/index.html) in a browser. Voice recording depends on browser support and microphone permission.

Posts and profiles stay in the browser where they were created. Live messages and movement work through the relay, but messages are not saved. New Echoes are not shared between devices yet. The interface currently works in English. The prototype guide explains these limits and the simulated content.

## Project files

| Material | Link |
| --- | --- |
| Research findings | [Research summary](docs/research-summary.md) |
| Interview thematic analysis | [Thematic analysis board](docs/proposal/interviews/thematic-analysis-board.html) |
| Secondary research | [Literature analysis](docs/secondary%20research/secondary-research.md) |
| Design requirements | [Requirements](docs/requirements.md) |
| Design changes and testing still needed | [Iteration record](docs/process/iterations.md) |
| Team sessions and decisions | [Team records](docs/process/team-records.md) |
| September testing and interviews | [Week 9 records](docs/process/week-09/) |
| Week 9 design process and ethics | [Design process](docs/process/week-09/wiki/design-process-week9.md) and [ethical considerations](docs/process/week-09/wiki/ethical-considerations.md) |
| October garden comparison | [Feedback from four participants](docs/evaluation/social-garden-feedback.md) |
| Questionnaire | [Questionnaire](docs/evaluation/questionnaire/echo-questionnaire-v02/index.html) and [instructions](docs/evaluation/questionnaire/echo-questionnaire-v02/README.md) |
| Early research and concepts | [Proposal materials](docs/proposal/) |
| Physical form and unlock concepts | [Design work](docs/design/) |
| Exhibition poster | [Final poster](docs/exhibition/final-poster.pdf) |
| A4 brochure | [Sheet 1](docs/exhibition/brochure-a4-01.pdf) and [sheet 2](docs/exhibition/brochure-a4-02.pdf) |
| Assignment requirements | [Project brief](docs/assessment/design-project-brief.pdf) |

## Earlier work

These builds are kept in the archive. Download or clone the repository, then open their `index.html` files in a browser.

| Build | Link |
| --- | --- |
| Week 9 stand-up prototype | [echo-standup](archive/prototypes/echo-standup/index.html) |
| Realistic-tree garden | [echo-social](archive/prototypes/echo-social/index.html) |
| Minecraft-style garden | [echo-social-minecraft](archive/prototypes/echo-social-minecraft/index.html) |

## Folders

```text
prototype/       Current echo-tradeshow prototype and media
docs/            Research, design work, testing and exhibition materials
archive/         Earlier prototype builds
scripts/         Checks for file integrity, links and JavaScript syntax
```
