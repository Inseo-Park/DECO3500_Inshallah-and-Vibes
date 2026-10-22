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
