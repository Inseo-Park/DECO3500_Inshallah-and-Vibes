# Week 9 image audit

Checked on **25 October 2026** using file SHA-256 hashes, decoded pixel hashes and visual inspection.

- **34 image files**, containing **23 distinct file contents**.
- **9 groups of byte-for-byte duplicates**, with **11 extra copies** (approximately 5.98 MiB).
- **2 additional groups with identical decoded pixels but different file encodings**. Across all files, there are **21 distinct decoded images**.
- **32 files renamed** descriptively; the two existing final-exhibition photo names were already clear.
- All original images and duplicate copies are retained. File bytes were checked before and after renaming.

## Exact duplicate images

Files in each row are byte-for-byte identical. Paths are relative to this Week 9 folder.

| Group | Identical files |
| --- | --- |
| 1 | [research-design-decisions-infographic.png](research-design-decisions-infographic.png)<br>[images/research-design-decisions-infographic.png](images/research-design-decisions-infographic.png) |
| 2 | [book-prototype-decorated-closed.jpeg](book-prototype-decorated-closed.jpeg)<br>[images/book-prototype-decorated-closed.jpeg](images/book-prototype-decorated-closed.jpeg)<br>[book-prototype-decorated-closed-copy.jpeg](book-prototype-decorated-closed-copy.jpeg) |
| 3 | [book-prototype-decorated-open.jpeg](book-prototype-decorated-open.jpeg)<br>[images/book-prototype-decorated-open.jpeg](images/book-prototype-decorated-open.jpeg)<br>[book-prototype-decorated-open-copy.jpeg](book-prototype-decorated-open-copy.jpeg) |
| 4 | [images/research-insights-design-decisions-chart.png](images/research-insights-design-decisions-chart.png)<br>[research-insights-design-decisions-chart.png](research-insights-design-decisions-chart.png) |
| 5 | [images/book-prototype-outdoor-testing-video-still-02.png](images/book-prototype-outdoor-testing-video-still-02.png)<br>[book-prototype-outdoor-testing-video-still-02.png](book-prototype-outdoor-testing-video-still-02.png) |
| 6 | [images/campus-user-testing-seated-participant.jpeg](images/campus-user-testing-seated-participant.jpeg)<br>[campus-user-testing-seated-participant.jpeg](campus-user-testing-seated-participant.jpeg) |
| 7 | [images/campus-user-testing-two-participants.jpeg](images/campus-user-testing-two-participants.jpeg)<br>[campus-user-testing-two-participants.jpeg](campus-user-testing-two-participants.jpeg) |
| 8 | [images/book-prototype-open-side.jpeg](images/book-prototype-open-side.jpeg)<br>[book-prototype-open-side.jpeg](book-prototype-open-side.jpeg) |
| 9 | [images/book-prototype-open-front.jpeg](images/book-prototype-open-front.jpeg)<br>[book-prototype-open-front.jpeg](book-prototype-open-front.jpeg) |

## Identical images with different encodings

These files decode to the same dimensions and pixel values, even though their file hashes differ. The chart group includes an exact duplicate pair already listed above.

| Image | Files with identical decoded pixels |
| --- | --- |
| Research insights chart | [images/research-insights-design-decisions-chart.png](images/research-insights-design-decisions-chart.png)<br>[images/research-insights-design-decisions-chart-export.png](images/research-insights-design-decisions-chart-export.png)<br>[research-insights-design-decisions-chart.png](research-insights-design-decisions-chart.png) |
| Book installation concept render | [images/book-installation-concept-render.png](images/book-installation-concept-render.png)<br>[book-installation-concept-render.png](book-installation-concept-render.png) |

## Important naming corrections

- [social-garden-feedback-page-1.jpeg](social-garden-feedback-page-1.jpeg) was previously `round-3-social-garden-feedback-2.jpeg`; its printed label is page 1 of 2.
- [social-garden-feedback-page-2.jpeg](social-garden-feedback-page-2.jpeg) was previously `round-3-social-garden-feedback-1.jpeg`; its printed label is page 2 of 2.
- The two later overview documents now show feedback page 1 as Figure 10 and page 2 as Figure 11.
- The old `04-physical-concept.png` actually contains a research insights chart. Its name and figure descriptions now reflect that content.
- The two outdoor-testing video stills show closely related moments, but differ in dimensions and pixels. They are retained as separate images.
- The decorated book photographs and final exhibition photographs show different views and settings. The final exhibition photographs are separate files, not duplicates of the decorated book photographs.

Some old filenames hid different contents depending on their folder:

| Old filename | Week 9 folder | `images/` folder |
| --- | --- | --- |
| `screenshot-2026-09-20-125346.png` | Book installation concept render | Concept-selection rationale |
| `screenshot-2026-09-20-130013.png` | Research insights chart | Research-to-design flowchart |
| `chatgpt-image-sep-15-2026-10-05-30-pm.png` | Sheltered bench concept render | Book installation concept render |
| `user-testing-1.jpeg` | Two participants viewing the tablet | Participant using a tablet on the lawn |
| `user-testing-4.jpeg` | Seated participant using the tablet | Group discussion around the tablet |

## Complete image inventory and rename map

| Original path | Current file | Dimensions |
| --- | --- | --- |
| `02-design-decisions.png` | [research-design-decisions-infographic.png](research-design-decisions-infographic.png) | 1536 ? 1024 |
| `chatgpt-image-sep-15-2026-10-05-30-pm.png` | [sheltered-bench-installation-concept-render.png](sheltered-bench-installation-concept-render.png) | 1536 ? 1024 |
| `final-book-closed-exterior.jpeg` | [book-prototype-decorated-closed.jpeg](book-prototype-decorated-closed.jpeg) | 1536 ? 2048 |
| `final-book-open-interface.jpeg` | [book-prototype-decorated-open.jpeg](book-prototype-decorated-open.jpeg) | 2048 ? 1536 |
| `final-exhibition-closed-book.jpeg` | [final-exhibition-closed-book.jpeg](final-exhibition-closed-book.jpeg) | 1200 ? 1600 |
| `final-exhibition-open-book.jpeg` | [final-exhibition-open-book.jpeg](final-exhibition-open-book.jpeg) | 1200 ? 1600 |
| `images/01-existing-wiki-links.png` | [images/wiki-design-process-screenshot.png](images/wiki-design-process-screenshot.png) | 2048 ? 1280 |
| `images/02-design-decisions.png` | [images/research-design-decisions-infographic.png](images/research-design-decisions-infographic.png) | 1536 ? 1024 |
| `images/03-design-direction.png` | [images/research-insights-design-decisions-chart.png](images/research-insights-design-decisions-chart.png) | 1672 ? 941 |
| `images/04-physical-concept.png` | [images/research-insights-design-decisions-chart-export.png](images/research-insights-design-decisions-chart-export.png) | 1672 ? 941 |
| `images/chatgpt-image-sep-15-2026-10-05-30-pm.png` | [images/book-installation-concept-render.png](images/book-installation-concept-render.png) | 1536 ? 1024 |
| `images/screenshot-2026-09-20-125346.png` | [images/concept-selection-rationale.png](images/concept-selection-rationale.png) | 2494 ? 1250 |
| `images/screenshot-2026-09-20-130013.png` | [images/research-design-decisions-flowchart.png](images/research-design-decisions-flowchart.png) | 2498 ? 1180 |
| `images/screenshot-2026-09-22-044301.png` | [images/book-prototype-outdoor-testing-video-still-01.png](images/book-prototype-outdoor-testing-video-still-01.png) | 552 ? 924 |
| `images/screenshot-2026-09-22-044309.png` | [images/book-prototype-outdoor-testing-video-still-02.png](images/book-prototype-outdoor-testing-video-still-02.png) | 498 ? 886 |
| `images/user-testing-1.jpeg` | [images/campus-user-testing-tablet-on-lawn.jpeg](images/campus-user-testing-tablet-on-lawn.jpeg) | 1200 ? 1600 |
| `images/user-testing-2.jpeg` | [images/campus-user-testing-seated-participant.jpeg](images/campus-user-testing-seated-participant.jpeg) | 1600 ? 900 |
| `images/user-testing-3.jpeg` | [images/campus-user-testing-two-participants.jpeg](images/campus-user-testing-two-participants.jpeg) | 1600 ? 900 |
| `images/user-testing-4.jpeg` | [images/campus-user-testing-group-discussion.jpeg](images/campus-user-testing-group-discussion.jpeg) | 1600 ? 900 |
| `images/whatsapp-image-2026-09-18-at-16.10.21.jpeg` | [images/book-prototype-open-side.jpeg](images/book-prototype-open-side.jpeg) | 1536 ? 2048 |
| `images/whatsapp-image-2026-09-18-at-16.10.22.jpeg` | [images/book-prototype-open-front.jpeg](images/book-prototype-open-front.jpeg) | 1536 ? 2048 |
| `images/whatsapp-image-2026-09-22-at-04.35.02.jpeg` | [images/book-prototype-decorated-closed.jpeg](images/book-prototype-decorated-closed.jpeg) | 1536 ? 2048 |
| `images/whatsapp-image-2026-09-22-at-04.35.02-1-.jpeg` | [images/book-prototype-decorated-open.jpeg](images/book-prototype-decorated-open.jpeg) | 2048 ? 1536 |
| `round-3-social-garden-feedback-1.jpeg` | [social-garden-feedback-page-2.jpeg](social-garden-feedback-page-2.jpeg) | 1491 ? 1055 |
| `round-3-social-garden-feedback-2.jpeg` | [social-garden-feedback-page-1.jpeg](social-garden-feedback-page-1.jpeg) | 1491 ? 1055 |
| `screenshot-2026-09-20-125346.png` | [book-installation-concept-render.png](book-installation-concept-render.png) | 1536 ? 1024 |
| `screenshot-2026-09-20-130013.png` | [research-insights-design-decisions-chart.png](research-insights-design-decisions-chart.png) | 1672 ? 941 |
| `screenshot-2026-09-22-044309.png` | [book-prototype-outdoor-testing-video-still-02.png](book-prototype-outdoor-testing-video-still-02.png) | 498 ? 886 |
| `user-testing-1.jpeg` | [campus-user-testing-two-participants.jpeg](campus-user-testing-two-participants.jpeg) | 1600 ? 900 |
| `user-testing-4.jpeg` | [campus-user-testing-seated-participant.jpeg](campus-user-testing-seated-participant.jpeg) | 1600 ? 900 |
| `whatsapp-image-2026-09-18-at-16.10.21.jpeg` | [book-prototype-open-side.jpeg](book-prototype-open-side.jpeg) | 1536 ? 2048 |
| `whatsapp-image-2026-09-18-at-16.10.22.jpeg` | [book-prototype-open-front.jpeg](book-prototype-open-front.jpeg) | 1536 ? 2048 |
| `whatsapp-image-2026-09-22-at-04.35.02.jpeg` | [book-prototype-decorated-closed-copy.jpeg](book-prototype-decorated-closed-copy.jpeg) | 1536 ? 2048 |
| `whatsapp-image-2026-09-22-at-04.35.02-1-.jpeg` | [book-prototype-decorated-open-copy.jpeg](book-prototype-decorated-open-copy.jpeg) | 2048 ? 1536 |
