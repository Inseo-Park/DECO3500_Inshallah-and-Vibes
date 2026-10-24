# ECHO — Ethical Considerations

This page accompanies the [Week 9 design process](design-process-week9.md). The proposed safeguards and hardware are design plans; the [current prototype guide](../../../docs/prototype-guide.md) describes what the software implements.

## 1. Purpose of This Wiki Page

This page evaluates the ethical risks, responsibilities and possible social implications of **ECHO**, a place-based storytelling installation designed for UQ campus spaces.

ECHO combines:

- A small physical installation integrated into familiar campus locations.
- A touchscreen interface.
- Audio, video, text and visual storytelling.
- Historical stories connected to UQ.
- Memories and experiences contributed by students and community members.
- An optional opportunity to leave an “Echo” for another person to discover later.
- A proximity sensor and lighting system intended to signal that the installation is interactive.

The purpose of this page is not to claim that ECHO is automatically ethical because it is designed to support belonging. Instead, it identifies where the experience could create harm, exclusion, discomfort or unintended consequences, and explains how the design team intends to respond.

This assessment uses the **Ethical Disclaimer** approach from [Ethics for Designers](https://www.ethicsfordesigners.com/ethical-disclaimer). The method encourages designers to:

1. Describe the current design context.
2. Identify direct and indirect stakeholders.
3. Clarify design intentions.
4. Imagine potentially unethical situations.
5. Decide which situations the design team will take responsibility for.
6. Revisit the assessment as the project develops.

The Ethical Disclaimer is treated as a living document because the risks may change as the physical installation, interface and content system become more developed.

---

## 2. Current Design Context

Students may spend time at familiar campus locations while studying, waiting, relaxing or moving between activities. Although students may be interested in UQ’s history and the experiences of other students, they may not actively seek out historical information through formal exhibitions or scheduled activities.

ECHO responds to this opportunity through a low-pressure, place-based interaction. A student can approach the installation, listen to or view a story, reflect on the content and optionally leave something for another person.

The proposed future installation includes:

- A proximity sensor that detects when someone approaches.
- Automatic lighting to communicate that the installation is active and interactive.
- An opening or unfolding physical mechanism to reveal the screen and create a sense of discovery.
- A touchscreen for selecting, reading, watching and listening.
- An Arduino or ESP32-based control system.
- A collection of curated historical content and user-contributed Echoes.

Because ECHO is placed in a public university environment, its ethical implications extend beyond the person directly using the screen. The installation may affect people who are nearby, people whose stories are represented, staff responsible for the site, and future users who encounter content left by others.

---

## 3. Design Intentions

The design team intends to:

- Make UQ’s history and student experiences more accessible and engaging.
- Support belonging and connection without requiring a group, scheduled activity or public performance.
- Give users control over whether they listen, watch, read, contribute or leave.
- Offer a short interaction that can fit into students’ existing routines.
- Create an asynchronous social connection between people who may never meet.
- Represent historical events and student experiences respectfully and accurately.
- Provide an approachable installation that does not pressure users to participate.
- Make the experience accessible to users with different sensory, physical, linguistic and social needs.
- Avoid collecting more personal information than is necessary for the experience.

ECHO is intended to invite curiosity, not to manipulate people into interacting, sharing private information or remaining at the installation longer than they want.

---

## 4. Stakeholders

### Direct stakeholders

- UQ students who approach and use the installation.
- Students who listen to, watch or read Echoes.
- Students and community members who contribute stories, memories, facts or questions.
- People who may be represented in historical or personal content.
- Students with disability or different sensory, mobility and communication needs.

### Indirect stakeholders

- UQ staff and academic or archival contributors.
- First Nations communities and people connected to the histories represented.
- Campus facilities, maintenance and technical support teams.
- UQ security and safety staff.
- Nearby students, staff and visitors who may hear or see the installation.
- Content moderators or future project administrators.
- The wider UQ community whose history and identity may be represented by the system.

---

## 5. Ethical Risk Assessment

### 5.1 Privacy and Anonymity

#### Potential risk

Users may share personal memories, secrets, experiences or identifying information. Even if the system is described as anonymous, a story may contain details that make the contributor identifiable. Other users may also leave harmful, defamatory or private information about someone else.

The physical installation may create additional privacy concerns if people nearby can hear audio, read contributions or observe someone interacting with the screen.

#### Design responsibilities

- Do not require users to provide their name, student number, email address or other identifying information.
- Explain clearly whether contributions are anonymous, stored, reviewed or removed.
- Avoid presenting anonymity as guaranteed if the content itself could identify someone.
- Provide a clear option to cancel before submitting a contribution.
- Avoid collecting audio recordings unless the user gives informed consent.
- Ensure that recording is optional and never presented as the default.
- Consider whether public display, playback or storage of a contribution could expose the contributor or another person.
- Use moderation and deletion procedures for inappropriate or identifying content.
- Test the physical layout to determine whether users can interact privately enough for the context.

#### Intended safeguard

The prototype will prioritise written contributions on physical or digital Echo cards. A future digital system should include clear consent language, content review, deletion procedures and minimal data collection.

---

### 5.2 Consent and User Autonomy

#### Potential risk

Automatic lighting, movement and opening mechanisms may surprise users or make them feel watched. Users may believe that approaching the installation automatically starts recording or tracking them.

The design could also pressure people to interact if the lighting, sound or animation is too intense.

#### Design responsibilities

- Use proximity sensing only to activate the installation, not to identify or track individuals.
- Display a clear visual message explaining what the sensor does.
- Do not begin audio recording or contribution capture automatically.
- Make all participation optional.
- Provide visible exit, back and cancel controls.
- Allow users to stop audio, video or interaction immediately.
- Avoid loud sounds, sudden movement or bright lighting that could startle people.
- Make it clear when the system is active and when it is not collecting input.

#### Intended safeguard

The proximity sensor will activate a subtle light and opening sequence. It will not automatically record, photograph or identify the person approaching. Touchscreen interaction will begin only after the user chooses to continue.

---

### 5.3 Historical Accuracy and Representation

#### Potential risk

Historical stories can be simplified, romanticised or presented from only one perspective. This is especially important when representing student activism, the Vietnam War era, Indigenous rights, anti-apartheid activism, racism, sexism, police action and Queensland’s political history.

A story that is presented as an objective fact may actually be a personal memory, an interpretation or a contested account.

#### Design responsibilities

- Distinguish clearly between verified historical information, personal memories and interpretation.
- Use reliable archival or institutional sources when presenting historical claims.
- Provide source information where appropriate.
- Avoid reducing complex events to a single heroic narrative.
- Include multiple perspectives where possible.
- Avoid presenting student activism as representing every UQ student.
- Use respectful language when discussing political conflict, identity, race, gender, violence and oppression.
- Seek relevant advice when representing First Nations histories, cultural knowledge or community experiences.
- Credit archival collections, contributors, artists, photographers and other content creators.
- Avoid using historical images, music or recordings without checking usage rights.

#### Intended safeguard

Historical Echoes will be reviewed for accuracy, context and respectful representation before inclusion. Personal contributions will be labelled as personal experiences rather than presented as universally true accounts.

---

### 5.4 Cultural Respect and Ownership

#### Potential risk

Stories connected to Indigenous communities, cultural practices, political movements or traumatic events may be taken out of context or used as an aesthetic element. The project could unintentionally appropriate cultural knowledge or represent communities without their involvement.

#### Design responsibilities

- Do not assume that publicly available information is automatically appropriate to reproduce.
- Consult relevant communities or knowledgeable stakeholders where cultural knowledge is involved.
- Avoid extracting, simplifying or commercialising culturally sensitive stories.
- Provide attribution and context.
- Allow contributors or relevant rights holders to request correction or removal where appropriate.
- Avoid treating cultural stories as interchangeable content categories.

#### Intended safeguard

The team will identify sensitive content during the curation process and seek guidance before using it. Stories requiring specific cultural permissions will not be included solely because they are visually or emotionally engaging.

---

### 5.5 Emotional Safety and Sensitive Content

#### Potential risk

Stories about war, police violence, discrimination, racism, gender-based harm or political conflict may be distressing. Users may encounter a story unexpectedly, especially if they select “Surprise Me.”

Contributors may also disclose traumatic experiences without understanding how their contribution will be used.

#### Design responsibilities

- Add content warnings where appropriate.
- Do not use distressing content only to increase attention or emotional impact.
- Allow users to skip, stop or exit a story at any time.
- Avoid asking users to disclose trauma or deeply personal experiences.
- Provide contribution prompts that include low-risk options, such as a place-based observation, question or positive memory.
- Review user-generated content before it becomes publicly available.
- Avoid framing emotional reactions as required outcomes.

#### Intended safeguard

The experience will offer different levels of depth and allow users to choose how they engage. Sensitive historical stories will include contextual information and, where needed, a brief content warning.

---

### 5.6 Accessibility and Inclusion

#### Potential risk

A touchscreen, audio-based experience and moving physical installation may exclude users with visual, hearing, motor, cognitive or sensory access needs. A small or enclosed installation may also be difficult to approach for wheelchair users or people using mobility aids.

Automatic movement, flashing lights or sound may be uncomfortable for some users.

#### Design responsibilities

- Provide equivalent text, audio and visual formats where possible.
- Include captions and transcripts for audio and video.
- Use readable typography, sufficient contrast and clear interaction states.
- Make buttons large enough and easy to understand.
- Keep the interaction simple, with a clear route back and exit.
- Ensure the installation does not block paths, seating or accessible circulation.
- Provide enough space for different body sizes and mobility aids.
- Avoid unnecessary flashing lights, sudden sounds or rapid animation.
- Test with users who have different access needs where possible.
- Ensure that users are not required to use headphones, speak aloud or write by hand.

#### Intended safeguard

The touchscreen experience will support text, audio and visual content rather than relying on a single medium. The physical prototype and future installation will be checked for reachability, visibility, stability, safe movement and accessible circulation.

---

### 5.7 Physical Safety

#### Potential risk

The automatic opening mechanism, moving parts, electrical components, exposed wiring or unstable structure could injure users or damage property. The installation may also create trip hazards or interfere with public movement.

#### Design responsibilities

- Use low-voltage components where possible.
- Enclose wiring and electrical connections.
- Include mechanical stops so the opening mechanism cannot move beyond a safe range.
- Keep moving parts away from fingers and clothing.
- Use a slow, controlled opening motion.
- Include an emergency stop or power-off procedure.
- Ensure the installation is stable and cannot easily tip over.
- Avoid sharp edges, exposed fasteners and fragile components.
- Test the proximity sensor to prevent repeated or unexpected activation.
- Obtain appropriate approval before placing the installation in a public campus location.
- Conduct supervised testing before public use.

#### Intended safeguard

The future build will use a protected enclosure, a low-speed servo or geared motor, covered wiring and a controlled opening sequence. The installation will be tested first in a supervised environment before any public deployment.

---

### 5.8 Manipulation and Attention

#### Potential risk

The installation may use mystery, lighting, movement or emotionally engaging stories to attract attention. If overused, these features could become manipulative, disruptive or intrusive in a shared campus environment.

Users may also feel that they need to complete the full experience or contribute something in order to participate correctly.

#### Design responsibilities

- Use attraction features to communicate availability, not to pressure participation.
- Avoid misleading claims such as suggesting that every story is secret, exclusive or personally intended for the user.
- Make the expected time commitment visible.
- Provide a clear option to leave at any stage.
- Avoid autoplaying loud content to passers-by.
- Do not use guilt, shame or social pressure to encourage contributions.
- Avoid reward systems that push users to share more personal information.

#### Intended safeguard

The installation will use a subtle light and opening movement with a short invitation such as “Take a moment. Discover something.” Users will be able to interact briefly or leave without completing a task.

---

### 5.9 Content Moderation and Misuse

#### Potential risk

An open contribution system could be used to post hate speech, harassment, misinformation, sexual content, threats, personal attacks or identifying information about others.

A contribution may also be intentionally misleading or historically inaccurate.

#### Design responsibilities

- Establish content guidelines before enabling public contributions.
- Review contributions before they are made available to other users.
- Include a reporting and removal process.
- Do not allow users to publish content about another person without appropriate consideration of privacy and harm.
- Define how long contributions are stored.
- Create a clear escalation process for threats, harassment or safety concerns.
- Make it possible to remove content that was submitted accidentally or without adequate understanding.

#### Intended safeguard

The initial prototype will use pre-curated content and manually managed Echo cards. A future public system will require moderation, reporting, access controls and a defined governance process before launch.

---

### 5.10 Intellectual Property and Attribution

#### Potential risk

Historical photographs, music, videos, recordings, written stories and student submissions may be protected by copyright or other rights. Using material found online does not automatically grant permission to reuse it.

#### Design responsibilities

- Record the source and usage rights of each asset.
- Use materials with permission, suitable licences or confirmed public-domain status.
- Credit creators and archives.
- Obtain consent from contributors before displaying or adapting their submissions.
- Clarify whether contributors retain ownership of their stories.
- Do not use AI-generated or edited media in a way that falsely suggests it is authentic archival footage.
- Label reconstructed, speculative or illustrative material clearly.

#### Intended safeguard

The team will maintain a simple content and rights register for images, audio, video and written contributions. Reference visuals will be distinguished from verified historical documentation.

---

### 5.11 Data, Technology and Maintenance

#### Potential risk

A future connected installation could collect unnecessary data, fail to protect stored contributions or stop working in ways that confuse users. Poor maintenance may also create safety, accessibility or trust issues.

#### Design responsibilities

- Minimise data collection and avoid unnecessary user tracking.
- Use secure storage and restricted administrative access.
- Define retention and deletion periods.
- Provide a clear way to report technical problems.
- Check the installation regularly for damage, loose parts, electrical faults and content issues.
- Ensure the installation fails safely if the sensor, motor, screen or network stops working.
- Provide a non-interactive fallback state that does not mislead users.
- Assign responsibility for maintenance and content moderation.

#### Intended safeguard

The first working version will use a controlled local prototype rather than a fully open public database. Any future online system will require a privacy review, security planning and an identified maintenance owner.

---

## 6. Ethical Commitments

Based on the risks identified above, the design team commits to the following principles:

### 1. Participation must remain voluntary

ECHO should invite interaction without pressuring people to stop, listen, share or disclose personal information.

### 2. Privacy must be protected by design

The proximity sensor will activate the installation but will not identify or record people. Personal contributions will only be collected with clear understanding and consent.

### 3. Stories must be contextualised and respectful

Historical content, personal memories and community knowledge will be distinguished from one another. Sensitive content will be reviewed for accuracy, context and cultural respect.

### 4. Accessibility is part of the core experience

Audio, text and visual formats will be provided where possible. Physical access, captions, readability, safe movement and alternative interaction methods will be considered from the beginning.

### 5. Safety takes priority over spectacle

The opening mechanism, lights, touchscreen and electrical components must be designed and tested so that the installation does not create physical or sensory risks.

### 6. Contributions require moderation and accountability

A public contribution system will not be launched without content guidelines, review procedures, reporting mechanisms and a way to remove harmful material.

### 7. The design team remains responsible for unintended effects

The team will continue to review the project at key milestones rather than treating this page as a one-time compliance task.

---

## 7. Planned Ethical Review Process

Ethical review will be integrated into the remaining development stages.

| Stage | Ethical check |
|---|---|
| Content curation | Check historical accuracy, attribution, cultural sensitivity and copyright. |
| Interaction design | Check consent, user control, privacy messaging and ease of exit. |
| Physical construction | Check stability, sharp edges, wiring, moving parts and accessible reach. |
| Sensor and lighting test | Check whether activation is subtle, predictable and non-intrusive. |
| Touchscreen test | Check readability, captions, navigation, audio controls and error recovery. |
| User testing | Ask about comfort, privacy, emotional response, accessibility and perceived pressure. |
| Contribution test | Check whether users understand what they are submitting and who may see it. |
| Final review | Confirm moderation, maintenance, safety and content responsibilities before deployment. |

---

## 8. Questions for Further Investigation

The following questions must be answered before a fully working public installation is deployed:

- Where will the installation be placed, and who will approve its location?
- How will users know whether their contribution is private, moderated or publicly accessible?
- Who will own and manage the submitted Echoes?
- How long will contributions be stored?
- Who can remove or correct a story?
- What happens if a user submits harmful or identifying information?
- How will First Nations and culturally sensitive histories be reviewed?
- How will the installation support users who cannot hear, see, reach or physically interact with the screen?
- What is the safe operating range and movement speed of the opening mechanism?
- How will the system behave during a power, network or hardware failure?
- Who will maintain the installation after the project team is no longer present?
- How will the project measure whether it supports belonging without creating pressure or exclusion?

---

## 9. Conclusion

ECHO has the potential to support curiosity, place attachment and asynchronous social connection by allowing students to encounter stories in familiar campus spaces. However, the experience also introduces ethical responsibilities relating to privacy, consent, historical representation, cultural respect, emotional safety, accessibility, physical safety, content moderation and maintenance.

The project will therefore treat ethics as an ongoing design activity. The installation should be engaging but not manipulative, interactive but not intrusive, and socially meaningful without requiring users to reveal personal information.

The final working prototype will be evaluated not only by whether the technology functions, but also by whether people can approach, understand, use, stop and leave the experience safely and comfortably.

---

## 10. Framework Reference

- [Ethics for Designers — Ethical Disclaimer](https://www.ethicsfordesigners.com/ethical-disclaimer)
- [Ethics for Designers — Ethical Contract](https://www.ethicsfordesigners.com/ethical-contract)

The Ethical Disclaimer method describes ethics as a living document that should be revisited as a design becomes more concrete. This page is intended to be updated after further physical prototyping, user testing, content review and stakeholder feedback.
