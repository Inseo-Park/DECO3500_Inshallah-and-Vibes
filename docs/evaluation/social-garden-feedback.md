# ECHO Prototype User Research: Feedback and Improvement Suggestions

**Date:** 11 October 2026  
**Participants:** Four  
**Prototypes:** Realistic tree social garden and Minecraft style / voxel social garden

## 1. Overview

Feedback suggests that ECHO’s shared memories and social garden are appealing, but navigation, interaction reliability and clarity need improvement. The Minecraft-style garden received positive comments for being easier to navigate and having less overlap between trees. Participants also suggested ways to strengthen community interaction, personalise the garden and connect memories to campus locations.

The immediate priority should be fixing usability problems before adding substantial new social features. This summary separates reported experiences from proposed features; it does not treat user suggestions as validated requirements.

### Participants

Four participants provided feedback, identified throughout this summary as:

- **P1:** Participant 1.
- **P2:** Participant 2.
- **P3:** Participant 3.
- **P4:** Participant 4.

This is qualitative feedback from a small sample. Task completion measures, ratings and testing order were not consistently recorded, so preference counts should not be treated as a conclusive vote.

## 2. Prototype Preference

| Participant | Feedback about the two versions | Interpretation |
| --- | --- | --- |
| P1 | Found the realistic-tree version easier to get lost or confused in than the Minecraft-style version. | Navigation appeared easier in the voxel version; no explicit overall preference was stated. |
| P2 | Explicitly preferred the Minecraft version, describing it as easier to interact with and less affected by overlapping trees. | Clear preference for the voxel prototype, mainly for usability. |
| P3 | Liked the Minecraft-style garden concept, but suggested rounded geometry to better match the rest of the interface. Reported interaction issues in both versions. | Positive response to the voxel concept, with reservations about consistency and stability; no explicit overall choice. |
| P4 | Described successful discovery, navigation and story submission, but did not identify a preferred version. | No recorded comparative preference. |

**Suggested direction:** Use the voxel prototype as the starting point for the next iteration because of its positive navigation feedback. Retest this choice after fixing interaction problems rather than assuming the visual style alone caused the preference.

## 3. Positive Findings to Preserve

- **Accessible onboarding and anonymous participation:** P4 quickly created an ID and valued sharing without disclosing their identity. Keep the process simple and clarify whether IDs are anonymous or pseudonymous.
- **Discovery of campus history:** P4 engaged with a historical story through the Discover section. Preserve this connection between student participation and UQ history.
- **Visible community contributions:** P4 liked seeing contributors and their contributions in the social garden.
- **Straightforward story submission:** P4 successfully posted a story without reporting difficulty with that flow.
- **Language options:** P2 appreciated the potential for more diverse participation and language-based communities.
- **Reactions to threads:** P2 liked the existing like feature and wanted more ways to engage with posts and comments.
- **Readable garden structure:** P2 found the voxel garden easier to interact with, particularly because trees did not overlap as much.

## 4. Main Findings and Suggested Improvements

### A. Navigation, onboarding and finding content

| Reported feedback | Participant(s) | Suggested improvement |
| --- | --- | --- |
| The opening timer may move users forward before they finish reading. | P1 | Replace automatic progression with a clear Continue button so users control their reading pace. |
| Social garden steps need a Back button; the existing Back control is too small. | P1, P2 | Add consistently positioned, clearly labelled Back controls with larger click/touch targets. |
| “Start over” has an unclear purpose; the home screen feels empty. | P2 | Use Home for normal navigation. Reserve Start over for an actual reset, explain its effect, and add useful shortcuts such as Discover, Garden, Search and My Tree. |
| “Other pods” is unclear. | P1 | Explain what pods represent and how they relate to campus locations or other gardens. Use consistent terms for trees, blossoms, echoes, posts and threads. |
| Dragging around the realistic garden feels unintuitive; navigation requires excessive movement. | P1, P3 | Provide click/tap-to-move controls, a clear overview and a reset-view control. Test a more compact initial tree layout. Consider an optional walking or street-level view only after basic navigation is reliable. |
| Finding one’s own tree and past posts could become difficult as the garden grows. | P2 | Add My Tree / My Contributions shortcuts, search and filters. Make a contributor’s past posts accessible from their tree. |
| A map could help users understand stories and campus locations. | P2, P4 | Distinguish a garden overview from a geographic UQ campus map. Explore location-linked stories and clear links between places, pods and memories. |

### B. Interaction reliability and performance

| Reported feedback | Participant(s) | Suggested improvement |
| --- | --- | --- |
| Zoom felt laggy or its animation needed fixing. | P1, P3 | Investigate camera animation and rendering performance on different laptops, trackpads and touchscreens. Avoid diagnosing a cause solely from these reports. |
| Voxel trees jitter when hovered over or when blossoms are clicked. | P3 | Stabilise hover and selection behaviour so choosing a blossom does not unexpectedly move the tree or camera. |
| Clicking a blossom can cause the whole view to zoom excessively. | P3 | Separate opening a content panel from camera movement; preserve a predictable view while reading comments. |
| Clicking blank garden areas opens unrelated comments. | P3 | Restrict content-panel activation to the intended blossom or panel. Empty-space clicks should not select hidden or unrelated content. |
| Photos or voice recordings could not be seen. | P1 | Verify media availability, loading, permissions and playback. Provide visible loading/error states and an understandable fallback when media is unavailable. |
| Some names are cut off at the bottom of the garden. | P4 | Fix label placement and responsive scaling, including at different zoom levels and viewport sizes. |

### C. Visual design and garden growth

| Reported feedback | Participant(s) | Suggested improvement |
| --- | --- | --- |
| Some trees appear in the air or on blue/water areas instead of soil. | P1 | Correct ground placement and distinguish land from water. Verify tree positions after zooming or changing views. |
| The garden could look like an island that expands with the community. | P1 | Explore a growing island or neighbourhood layout, with clear land boundaries and manageable tree spacing. Include search and direct navigation so growth does not create a navigation problem. |
| Trees could reflect how long a person has attended UQ. | P1 | Explore optional tree growth stages, such as a sapling for first year and a larger tree for longer attendance. Keep trees identifiable and avoid implying that larger trees make some contributors more important. |
| The home page needs stronger UQ identity. | P3 | Add a subtle campus image or illustration behind the title while preserving text readability. |
| More colour would make the garden more engaging. | P2, P3 | Expand the palette while retaining the intended UQ identity, readable text and clearly distinguishable controls. |
| Rounded and boxed elements feel inconsistent. | P3 | Standardise corner shapes across buttons, comment panels and expanded search results. Test whether rounded voxel forms improve cohesion without reducing clarity. |
| The Leave a Memory section needs better centring and presentation. | P2 | Improve alignment, visual hierarchy and the placement of the main contribution action. |

### D. Community interaction and personalisation

| Feature idea or concern | Participant(s) | Suggested improvement / question to test |
| --- | --- | --- |
| Animals could offer different prompts when tapped. | P1 | Prototype a small set of animal guides that suggest memory topics or conversation starters, with enough variation for different users. |
| “Surprise me” feels repetitive with only six options. | P2 | Broaden the content pool and avoid repeating recently viewed items where possible. Clarify whether the feature selects topics or individual memories. |
| A place is needed to ask questions and receive answers. | P1, P2 | Explore a clearly labelled Q&A post type with replies and an identifiable answered state. |
| Users want to know when someone answers their question. | P2 | Explore optional reply notifications or an activity inbox, with a clear way to return to the conversation. |
| Users could create polls and vote. | P1 | Test simple poll creation and voting as an additional community activity. |
| Likes could be extended to upvotes/downvotes. | P2 | First test comment upvotes or a Helpful reaction. Evaluate whether downvotes would discourage participation before adopting them. |
| Friends, private messages, group conversations and sharing could increase engagement. | P2 | Start with sharing a post or story through a link or device share action. Treat friend lists and messaging as larger features that need separate scope, privacy and moderation decisions. |
| Language options could support language-speaking groups. | P2 | Preserve language selection and explore language tags or filters. Do not assume interface translation automatically translates user-created posts. |
| Users may need time to read and reflect away from the installation. | P2 | Explore phone access for reading or saved content, with contributions made at campus pods. Test whether this supports the project’s intended shared physical experience. |
| Users questioned whether censoring is needed. | P1 | Define appropriate content, reporting and moderation processes. Discuss harmful content and personal information separately from disagreement or criticism. |

### E. Physical installation and environment

P2 raised concerns about rain, weatherproofing and summer heat. These require physical deployment decisions, not just interface changes:

- Locate the installation in a sheltered, comfortable and accessible area.
- Assess weather protection for the screen, enclosure and interactive hardware.
- Test screen visibility, glare and comfort in the intended environment.
- Observe whether users will stay long enough to read and contribute in hot or wet conditions.