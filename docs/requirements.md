# Evidence-based experience requirements

These requirements bring together the research and participant feedback. The checks below are proposed evaluation tasks; they have not yet established that ECHO v22 satisfies every requirement.

## Core experience

| ID | Requirement and reason | Evidence | How to check next |
| --- | --- | --- | --- |
| E01 | Let a visitor discover an Echo before deciding whether to contribute. Participation must be optional. | 8/10 September sessions entered through Listen; interviewees sometimes did not know what to share. | A first-time visitor finds a story and can finish or return home without posting. |
| E02 | Present brief, readable stories with optional depth and media choice. Provide text/captions for spoken content. | Interview preferences vary; subtitles were explicitly requested. Time-poor students described wanting short text. | Complete a discovery task with sound off; check that the same core story is understandable and media controls are clear. |
| E03 | Make it clear how a story relates to UQ and distinguish sourced history from personal memory. | Initial place-focused research and interview interest in stories at the location where events happened. | A visitor can identify the campus connection and tell whether content is historical interpretation or someone's contribution. |
| E04 | Support a low-effort, understandable contribution, with useful prompts and a clear confirmation. Retain a quiet text route alongside any supported recording route. | September contributions split equally between writing and recording; Wizard-of-Oz users needed help deciding what counted as an Echo. | A new visitor contributes without a facilitator explaining categories and can tell whether submission succeeded. |
| E05 | Make another person's contribution discoverable after it is left, and explain what the garden's trees/blossoms represent. | Users valued leaving something for the next person; October feedback valued visible contributions and questioned terminology. The brief requires a multiple-user experience. | Demonstrate two distinct visitors in sequence using the documented storage model. The second encounters the first visitor's contribution. Record any simulation and persistence boundaries. |
| E06 | Let visitors find their own tree/contributions and return from any main view using clear Back/Home controls. Progression should respect reading pace. | October reports of small/missing Back controls, unclear Start over, hard-to-find trees and an opening timer. | A first-time visitor finds a previous contribution and returns home without resetting accidentally or being advanced while reading. |
| E07 | Keep garden movement and content selection predictable. Only the intended selectable object should open content; labels and targets should remain usable. | October reports of jitter, excessive zoom, blank-area clicks, overlap and clipped names. | Exercise mouse, trackpad and intended touch input at the target display sizes. Check empty areas, nearby blossoms, zoom and opening/closing panels. |
| E08 | Make supported photos, audio and video either usable or clearly explain their unavailable state. | October report that photos/voice could not be seen; September accessibility feedback. | Try each advertised format with available and unavailable media; inspect loading/error feedback and text alternatives. |
| E09 | Keep participation low-pressure and explain identity and visibility honestly. | Interviews about embarrassment and private participation; October appreciation of anonymous IDs. | Ask visitors who can see a post, what their ID reveals and what persists. Compare answers with the prototype's actual behaviour. Use “pseudonymous” where an ID links contributions. |
| E10 | Use a comfortable, approachable physical arrangement compatible with short campus downtime. | Preference for understated/open forms, shelter and familiar seating; October rain/heat concerns. | For a physical deployment, observe readability, reach, glare, weather protection and social comfort in the intended setting. A desktop build alone cannot verify this. |

## Priorities and scope

E01–E05 establish the core concept: discover campus stories and exchange traces across visitors. E06–E09 address reported usability, accessibility and privacy concerns. E10 is a physical-deployment requirement that needs field evidence. These priorities are a synthesis of the evidence, not participant rankings.

Maps, island growth, personalised trees, animal prompts, Q&A, polls, reply notifications, friend lists, private messaging and walking views are **exploration candidates** from October feedback. They should not be presented as validated needs or completed features merely because a participant suggested them. Prioritise reliable existing interaction and test the smallest useful version of an addition before expanding scope.

Real authentication and production infrastructure are not necessary to demonstrate this proof of concept. The repository's usage instructions should identify what is functional, simulated or local to a browser/device so reviewers can assess E05 accurately. Public or campus deployment also needs content attribution, cultural review, reporting/moderation and publication-consent decisions; the supplied evidence does not establish that these are complete.

## What changed in the requirements

| Evidence stage | Direction supported | Unresolved point |
| --- | --- | --- |
| Proposal interviews and early concepts | Campus context, short interactions and stories linked to place. | Whether heritage discovery changes belonging. |
| September discovery/share tests | Optional discovery first, varied formats, subtitles, prompts and a smaller, approachable form. | Unassisted use, repeat use and which formats work across users and settings. |
| October realistic/voxel comparison | Clearer garden structure, direct navigation, reliable selection/media and understandable identity. | Whether the changes improve task outcomes in v22; whether new social features are useful. |
