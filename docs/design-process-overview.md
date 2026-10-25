# ECHO: Design Process Overview

**Discover a story. Leave something behind.**

DECO3500 Social & Mobile Computing · Semester 2, 2026

## Poster and promotional material

[Final poster](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/blob/main/docs/exhibition/final-poster.pdf) · [Brochure: sheet 1](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/blob/main/docs/exhibition/brochure-a4-01.pdf) · [Brochure: sheet 2](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/blob/main/docs/exhibition/brochure-a4-02.pdf)

## Prototype and access instructions

Download or clone the [repository](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes), then run the [current prototype](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/tree/main/prototype) from its root with Node.js:

```sh
node prototype/relay.js
```

Open **http://localhost:8787/** and choose UQ Lakes or Great Court. No package installation or build is required. Create an ECHO ID or choose **Show me a full profile** for the example profile; no account or password is needed. Explore Discover UQ, leave an Echo and find it through My tree. For linked conversation, open both locations with different IDs. The [prototype guide](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/blob/main/docs/prototype-guide.md) covers two-device setup, offline previews and implementation limits.

## Summary

UQ's history is often overlooked during busy student routines. Our interviews identified curiosity about campus places alongside limited time and opportunities to engage. We focused on students, particularly new and international students, seeking connection beyond classrooms.

ECHO combines a small book-shaped installation with two digital spaces. **Discover UQ** organises historical material and student memories into threads; the **UQ Social Garden** represents contributors as trees and contributions as flowers. Students can encounter stories, add perspectives and leave traces for later visitors. This asynchronous exchange connects people through shared places without requiring simultaneous participation. Live conversation between installations extends that social opportunity.

Within Discover UQ, students can read, watch or listen, react, reply and add text, photos, audio or video to an existing thread. Reel Mode offers quicker browsing around a selected topic. In the Garden, My tree helps visitors revisit their contributions; each installation opens its own landmark and encourages exploration of other campus sites.

## Process

### Research and concept selection: Weeks 6–7

We used interviews, thematic analysis and concept testing to compare a board game, UQ Stories, a scavenger hunt and Story Pods. Games required coordination; scavenging demanded travel; the story feed needed stronger social continuity; large pods risked attracting uncomfortable attention. We combined location-based storytelling with optional participation in ECHO, designed around existing campus breaks. The [iteration deck](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/blob/main/docs/process/week-09/weeks-06-08-iterations.pdf) records this comparison.

Our theoretical grounding connected belonging, relationships and place. Allen et al. (2021) discuss relationships as central to belonging. Chan et al. (2024) connect heritage experiences with place attachment and cultural identity; Peace and Shearer (2017) explore campus identity through layered histories. We translated these ideas into stories tied to familiar places and space for multiple voices. These theories motivated the design; improved belonging remains an outcome to evaluate.

To keep the design traceable, we linked interview themes to prototype decisions and used each round to answer a different question: initial discovery, physical comfort, then social visibility and navigation. We kept logs, transcripts and comparison notes separate because their samples and methods differ.

![Early concept-selection rationale](https://raw.githubusercontent.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/main/docs/process/week-09/images/concept-selection-rationale.png)

*Figure 1. Early rationale comparing ECHO with alternative concepts.*

### Discovery before contribution: Week 8

The [16 September interaction log](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/blob/main/docs/process/week-09/echo-sessions-raw.csv) contains ten sessions: eight began with Listen and four left an Echo. This supported making discovery the entry point, with sharing available afterwards. Five listeners selected video first, while interviews also favoured reading and requested subtitles. We retained media choice and prioritised short, accessible content. Sessions are not confirmed unique participants, and later questions had fewer responses.

### From pod to book: Week 9

Cardboard, a tablet and Wizard-of-Oz facilitation let us explore scale, viewing angle and public comfort before automating the object. [Interview feedback](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/blob/main/docs/process/week-09/interview-quotes.md) described feeling watched in larger installations and wanting quick photo or voice contributions. We moved towards a small book beside familiar seating, keeping exploration voluntary and less conspicuous.

![Outdoor Wizard-of-Oz testing](https://raw.githubusercontent.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/main/docs/process/week-09/images/wizard-of-oz-testing.png)

*Figure 2. Outdoor testing explored the book's approachability and screen placement.*

### Making participation visible: Week 10

Feedback that the experience could remain individual prompted the flower-and-tree model: contributions become visible traces within a shared Garden. In the [four-person garden comparison](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/blob/main/docs/evaluation/social-garden-feedback.md), participants described easier navigation and less overlap in the Minecraft-style version, supporting further development. Only one explicitly stated an overall preference. Reports of jitter, excessive zoom, unclear maps and difficulty finding contributions identified priorities for refinement. We developed location-specific landmarks, avatars and conversation to connect the Garden with physical ECHO sites.

### Physical integration and showcase: Weeks 11–12

An Arduino, distance sensor and servo motors added an approach-triggered opening mechanism, revealing the tablet inside. We brought the book, digital experience and promotional material together for exhibition. [Final trade-show feedback](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/tree/main/docs/exhibition/Tradeshow%20Feedback) valued contextual history, low-pressure interaction and the book as a time capsule. These peer responses indicate conceptual appeal; they do not establish lasting belonging.

![Final exhibition book, closed](https://raw.githubusercontent.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/main/docs/process/week-09/final-exhibition-closed-book.jpeg)

*Figure 3. Closed book at the exhibition.*

![Final exhibition book, open](https://raw.githubusercontent.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/main/docs/process/week-09/final-exhibition-open-book.jpeg)

*Figure 4. Open book revealing the digital interface.*

### Limitations and next steps

ECHO remains a proof of concept. Posts and profiles are browser-local; the relay shares live presence and typed chat, but posted Echoes do not synchronise between devices. The interface currently operates in English, and some content is simulated. Two locations demonstrate a proposed wider network.

Single-session studies and peer feedback cannot establish repeat use or improved belonging. Next steps are a longitudinal pilot with new and international students, navigation testing as the Garden grows, and checks on intended devices. Deployment also requires moderation/reporting, accessible media and controls, weather protection, and appropriate consent and knowledge-holder involvement for First Nations stories.

A future evaluation should observe visitors discovering a story, contributing, finding their tree and encountering another person's trace. Record task outcomes, assistance and participant counts separately from session totals, then interview visitors about comfort and connection.

## Who did what

All four members contributed to research, concept discussion, evaluation and physical prototyping.

| Team member | Main contributions |
| --- | --- |
| **Itisha Srivastava** | Led and built the digital prototype; developed Discover UQ and the Garden; led book design, testing analysis and Wiki documentation. |
| **Ishandeep Singh** | Built/tested UQ Stories; analysed the garden comparison; helped construct/test the book; maintained the repository, coordinated tasks and reviewed exhibition materials. |
| **Keerthana Balamurugan** | Researched/tested concepts; proposed the flower/tree and Minecraft direction; developed Wizard-of-Oz testing and Arduino opening; contributed the poster and brochure. |
| **Inseo Park** | Designed/tested scavenger-hunt wireframes; fabricated the cardboard housing, integrated the tablet and supported campus evaluation. |

## Supplementary documentation

[Research and evidence register](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/blob/main/docs/research-summary.md) · [Detailed iterations](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/blob/main/docs/process/iterations.md) · [Full contribution statements](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/blob/main/docs/process/team-contributions.md) · [Ethics](https://github.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/blob/main/docs/process/week-09/wiki/ethical-considerations.md)

## References

Allen, K.-A., Slaten, C. D., Arslan, G., Roffey, S., Craig, H., & Vella-Brodrick, D. A. (2021). School belonging: The importance of student and teacher relationships. In M. L. Kern & M. L. Wehmeyer (Eds.), *The Palgrave handbook of positive education* (pp. 525–550). Palgrave Macmillan. [https://doi.org/10.1007/978-3-030-64537-3_21](https://doi.org/10.1007/978-3-030-64537-3_21)

Chan, S. H. G., Lee, W. H. H., Tang, B. M., & Chen, Z. (2024). Legacy of culture heritage building revitalization: Place attachment and culture identity. *Frontiers in Psychology, 14*, 1314223. [https://doi.org/10.3389/fpsyg.2023.1314223](https://doi.org/10.3389/fpsyg.2023.1314223)

Peace, R., & Shearer, F. (2017). Puke Ahu: Articulating a place-based, university campus identity. *Kōtuitui: New Zealand Journal of Social Sciences Online, 12*(1), 83–94. [https://doi.org/10.1080/1177083X.2016.1261909](https://doi.org/10.1080/1177083X.2016.1261909)
