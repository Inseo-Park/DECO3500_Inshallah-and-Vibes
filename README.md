# ECHO — shared campus stories

**DECO3500 · Social and Mobile Computing · The University of Queensland · 2026**

**Team: Inshallah and Vibes — Ishan, Itisha, Keerthana and Inseo (Alex)**

ECHO is a proof-of-concept storytelling installation for discovering UQ history and leaving memories for other students. A book-like physical installation introduces a digital garden: contributions appear as flowers on participants' trees, with discovery, replies and live conversation connecting visitors at different campus locations.

## Run the current prototype

**[ECHO v22 source and location chooser](prototype/index.html)** is the current prototype. GitHub displays its source; download or clone the repository to run it.

With Node.js installed, run this command from the repository root:

```sh
node prototype/relay.js
```

Open **http://localhost:8787/** and choose **UQ Lakes** or **Great Court**. There is no package install or build step. Leave the terminal open; press **Ctrl+C** to stop it.

There is no account or password. Create an ECHO ID, or choose **Show me a full profile** to explore the seeded `LAKEWALKER-07` profile. For a two-person demonstration, use different IDs and follow the [prototype guide](docs/prototype-guide.md), including the second device's network address.

For a single-device offline preview, open [UQ Lakes](prototype/ECHO-lakes/index.html) or [Great Court](prototype/ECHO-court/index.html) directly in a browser. Microphone access depends on the browser and permissions.

**Prototype limits:** posts and profiles use browser-local storage; this is not an account service. Live chat and walking presence use the optional relay, which stores nothing. Cross-device transmission of newly posted Echoes is not wired in the supplied v22 source. English is the implemented interface language. See the [guide's storage and simulation notes](docs/prototype-guide.md) before a demonstration.

## Explore the evidence

**Exhibition materials:** [Final poster](docs/exhibition/poster.pdf) · [A4 brochure — sheet 1](docs/exhibition/brochure-a4-01.pdf) · [A4 brochure — sheet 2](docs/exhibition/brochure-a4-02.pdf)

| Material | Where to start |
| --- | --- |
| Research findings | [Research summary](docs/research-summary.md) |
| Experience requirements and evidence | [Requirements](docs/requirements.md) |
| What changed, why, and what remains unverified | [Iteration record](docs/process/iterations.md) |
| Internal sessions, decisions and contributions | [Team decisions](docs/process/team-records.md) |
| September evaluation | [Week 9 testing and interviews](docs/process/week-09/) |
| October evaluation of realistic and voxel gardens | [Four-participant feedback](docs/evaluation/social-garden-feedback.md) |
| Early research and concepts | [Proposal materials](docs/proposal/) |
| Physical form and unlock concepts | [Design artefacts](docs/design/) |
| Poster and brochures | [Exhibition materials](docs/exhibition/) |
| Assignment requirements | [Design-project brief](docs/assessment/design-project-brief.pdf) |
| Earlier prototype versions | [Prototype archive](archive/prototypes/) |

## Repository layout

```text
prototype/                  Current ECHO v22, runnable source and bundled media
docs/
  assessment/               Design-project brief
  design/                   Physical form and interaction concepts
  evaluation/               October feedback and questionnaire package
  exhibition/               Final poster and both A4 brochure sheets
  process/                  Iterations, team records and Week 9 evidence
  proposal/                 Original interviews, early concepts and feedback
  team/                     Existing team-charter link
archive/
  prototypes/               Earlier builds, including both garden variants
  documentation/            Existing Week 9 wiki export package
scripts/                    Dependency-free repository verification
```
