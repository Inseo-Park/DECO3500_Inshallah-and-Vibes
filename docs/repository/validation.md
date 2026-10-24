# Verification of repository setup

Checked on **22 October 2026**, using Node.js **v26.7.0** on Windows. This records verification performed during repository organisation, not a new participant evaluation.

| Check | Result |
| --- | --- |
| Imported files match the supplied archives | All **123** retained imported files match their recorded sizes and SHA-256 hashes. |
| Maintained Markdown file links | All checked local links resolve. External URLs were not checked for availability. |
| Exhibition PDFs | The poster and both brochure sheets match the provided files byte for byte. The poster has one portrait page; each brochure PDF has one landscape A4 page. |
| Prototype JavaScript | **8** inline script blocks / relay files parse successfully. This does not execute the interface. |
| Literal bundled media references | **16** detected references exist. Optional photo downloads have supplied generated fallbacks. All bundled media files are also covered by the archive hash checks. |
| Git size constraint | No file in `prototype/`, `docs/` or `archive/` reaches 100 MiB. |
| Local relay and static serving | A temporary relay on port 18787 served the chooser, both location pages, a bundled audio file and an image with bytes identical to the imported files. |
| Relay message exchange | Two local WebSocket clients connected; a message sent by one was received unchanged by the other; health endpoint reported two clients. The relay was stopped afterwards. |
| Preservation of relocated evidence | Original hashes checked before moving; duplicate removal required an identical retained file. |

The relay smoke test exercised transport and serving. It did not test browser interactions, touch input, microphone permissions, display performance, final hardware, campus Wi-Fi, two physical devices, historical learning or user satisfaction.

On **24 October 2026**, we checked the repository again after removing ECHO 1 and ECHO 5, renaming ECHO 7 to `echo-standup.zip` and renaming the earlier voxel garden folder to `echo-social-minecraft`. Running `node scripts/check-repository.mjs` passed all **123** imported file hashes, **59** local links, **8** JavaScript blocks and files, and **16** bundled media references. The stand-up ZIP also matches the hash recorded for ECHO 7. These checks confirm that the updated paths work and the imported files are unchanged. The relay and browser interactions were not retested during this update.

We then renamed the current prototype to `echo-tradeshow` throughout the maintained documentation and archive label in the manifest. We removed the earlier exhibition specification because it overlapped with the prototype guide and iteration record, and some of its planned behaviour did not match the current implementation. Its manifest entry was also removed. All **122** remaining imported files match their original hashes, and the repository checks still pass. The existing browser storage keys retain their internal version number so saved connection settings continue to work.

We also extracted the stand-up prototype, Week 9 wiki package and questionnaire into folders, checking all **42** extracted files against their ZIP entries before removing the ZIP files. We updated the stand-up README and the wiki package’s instructions and links to suit their repository locations. The manifest retains the original hashes and sizes for those three edited documents alongside their current hashes and sizes. There are no ZIP files left in the repository. The updated checks pass **164** file hashes, **77** local links, **10** JavaScript blocks and files, and **16** bundled media references. Browser interactions were not retested.

We rewrote all four README files in plain language and removed outdated version notes and hosting instructions. The imported README records now include their updated hashes and sizes, with the original values kept for reference. The checks pass **164** file hashes, **80** local links, **10** JavaScript blocks and files, and **16** bundled media references.

After the Week 9 wiki update, we fixed links and the manifest entry for the renamed `design-process-week9.md`, changed its image links to local files, replaced the old ZIP download steps and linked the new ethics page. The checks pass **164** file hashes, **93** local links, **10** JavaScript blocks and files, and **16** bundled media references. All 11 image references in the design-process page resolve to files in the repository.
