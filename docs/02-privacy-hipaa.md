# Privacy, HIPAA, and Responsible Data Handling

Privacy is the first practical question in almost every healthcare AI conversation. Before asking whether an AI tool can write a better paragraph, ask what happens to the information you put into it. A tool that saves five minutes but exposes a patient's identity, health details, or family information can create harm that is difficult or impossible to undo.

This chapter is educational, not legal advice. HIPAA is complex, state laws and international rules can be stricter, and your organization may apply policies that go beyond the law. Use this material to ask better questions of your privacy officer, compliance team, informatics team, and clinical leadership.

## HIPAA in one paragraph, with caveats

The Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule sets national standards in the United States for how certain health information is used and disclosed by **covered entities** and their **business associates**. Covered entities generally include most healthcare providers who transmit health information electronically in connection with standard transactions, health plans, and healthcare clearinghouses. Business associates are people or companies that perform certain services for covered entities involving protected health information, such as billing or cloud hosting.

Not everything in healthcare is automatically covered by HIPAA, and not every AI app is a business associate. A consumer chatbot used outside a covered entity's arrangement may be governed by its own consumer terms rather than HIPAA. A wellness app may not be a covered entity or business associate. That does not make the app private or appropriate for patient data. Legal classification and ethical practice are related but not identical.

## What protected health information is

**Protected health information (PHI)** is individually identifiable health information held or transmitted by a covered entity or business associate. It can relate to a person's past, present, or future physical or mental health, the provision of care, or payment for care. It can be electronic, paper, or oral. It is identifiable when it names the person or when there is a reasonable basis to believe it can be used to identify the person.

The practical definition is broader than most people expect. Names, addresses, dates, record numbers, contact details, photos, and audio can all contribute to identifiability. So can a rare diagnosis, a specific occupation in a small town, a distinctive family situation, or a detailed narrative that only a few people could match to an individual. Removing the name does not necessarily make data safe.

## The 18 HIPAA Safe Harbor identifiers

The HIPAA Privacy Rule's **Safe Harbor** method of de-identification requires the removal of 18 categories of identifiers and requires that the covered entity have no actual knowledge that the remaining information could identify the individual. The categories are commonly summarized as:

1. Names.
2. Geographic subdivisions smaller than a state, including street address, city, county, precinct, and ZIP code, subject to limited rules for initial ZIP code digits (for example, an initial three-digit prefix may be used if the geographic unit has more than 20,000 people, with exceptions). Full ZIP codes should be treated as identifiers.
3. All elements of dates directly related to an individual, except year, including birth date, admission date, discharge date, date of death, and ages over 89. For age over 89, an aggregate category such as "90 and older" may be used under the rule.
4. Telephone numbers.
5. Fax numbers.
6. Email addresses.
7. Social Security numbers.
8. Medical record numbers.
9. Health plan beneficiary numbers.
10. Account numbers.
11. Certificate or license numbers.
12. Vehicle identifiers and serial numbers, including license plate numbers.
13. Device identifiers and serial numbers.
14. Web URLs.
15. Internet Protocol (IP) addresses.
16. Biometric identifiers, including finger and voice prints.
17. Full-face photographs and comparable images.
18. Any other unique identifying number, characteristic, or code, except a re-identification code that meets certain rule requirements and is not derived from identifiable data.

This list is a simplification of a legal standard. Dates, geography, rare conditions, longitudinal narratives, and free-text clues frequently survive naive "de-identification." Do not assume that replacing a name with "Patient A" creates de-identified data. A combination of uncommon characteristics can be more identifying than a name.

The other HIPAA pathway is **expert determination**: a person with appropriate statistical and scientific knowledge determines that the risk of re-identification is very small and documents the methods and result. That is not a self-service checklist. If your organization permits de-identification for an AI workflow, use its approved process and record it.

De-identification also does not resolve every legal or ethical obligation. State laws, tribal laws, contractual duties, research rules, human subjects protections, and professional ethics can impose additional requirements. In some contexts, the community itself may not want its data used even when the data is technically de-identified.

## The data journey through an AI tool

When you type into a chatbot or upload a document, several things can happen:

- The input is transmitted from your device to a service.
- The service may log the request, the response, account details, timestamps, and metadata.
- The provider may retain the content for some period for abuse monitoring, debugging, or service improvement.
- A model provider may use the content to train or improve models unless the contract or settings prevent it.
- Subcontractors or downstream service providers may process the data.
- The output may be visible to others if the conversation is shared, stored in a team workspace, or retained in a browser history.
- Connected data sources, such as email or an EHR, may expose far more than the text you intended to share.
- An agent or browser extension may have broad permissions that are easy to forget.

A privacy notice that says "we value your privacy" does not answer these questions. You need specific answers from an approved review. A business associate agreement (BAA) is one important building block for covered entities using a vendor with PHI, but a BAA does not by itself guarantee security, appropriate use, or a good clinical workflow. It is a contractual allocation of responsibilities, not a safety certification.

Do not assume that a tool is safe because:

- it is widely used;
- it is marketed as HIPAA-compliant;
- it is built into a familiar product you already use;
- it offers a "private mode";
- it says it will not train on your data;
- it is free to a healthcare organization;
- it is approved for a different task or department.

Verify the actual configuration and the organization's approval for this specific use.

## The zero-PHI rule for general-purpose tools

A sound default for nurses and healthcare workers is simple: **do not put PHI into a general-purpose AI tool that has not been explicitly approved for that use.** That includes names, initials combined with clinical details, dates of care, record numbers, room numbers in a small unit, photos, voicemails, and narrative details that could identify a patient, family member, or colleague.

Use synthetic examples instead. For example, instead of describing a real patient, write: "A fictional adult with [condition] is being discharged to home after an uncomplicated hospital stay. Draft a plain-language checklist for a patient education handout, using only the key points I provide." Then provide only generic, clinician-approved key points, not a real chart.

A synthetic example should not be "a lightly disguised real patient." Changing a name and age but keeping the rare diagnosis, hospital, date, and family details is not synthetic. It is a real person with weaker disguise.

Practical habits:

- Work from a **de-identified extract** prepared through the approved process.
- Use **placeholders** such as `[age range]`, `[setting]`, and `[general condition]` rather than precise identifiers.
- Avoid uploading **screenshots** of an EHR, monitor, whiteboard, or paper chart. Screenshots can include faces, names in the background, room numbers, and metadata.
- Keep the AI tool out of the room during sensitive conversations unless the tool is approved for that use and all relevant consent and notice requirements are met.
- Never use a personal account or personal device for work data.
- Do not connect an AI assistant to your email, calendar, or records unless the connection is approved and scoped appropriately.
- Turn off any feature that allows chats to be used for model training unless the approved configuration requires it and has been assessed.
- Check whether the draft or conversation is stored in a shared workspace that others can access.

Even a "small" disclosure can be significant. A patient may not want an employer, family member, or community to know they received care. The fact that information seems mundane to you does not make it non-sensitive to them.

## Consent and transparency

HIPAA authorization is not the only question. Patients and families increasingly expect to know when AI is involved in their care, especially when a system records a conversation, drafts a note, or produces an education document. Requirements differ by jurisdiction, modality, organization, and use case. Your organization's policy should define what notice, consent, or opt-out is required.

Do not promise that a tool is "completely private" or that "nothing is stored." Those are not safe claims unless verified. If a patient asks whether AI is being used, answer honestly within your role and according to policy, and escalate questions you cannot answer.

Transparency is not only a legal checkbox. It affects trust. A patient may be more willing to speak freely if they understand who will hear the recording and how it will be used. An AI scribe that continues recording after the clinician believes the visit has ended is a privacy incident even if no malicious intent exists.

## Ambient recording and AI scribes

Ambient documentation tools can reduce administrative burden, but they introduce specific risks:

- **Consent and notice:** follow organization policy for recording; a notice in the room is not always sufficient.
- **Bystanders:** conversations may include family members, interpreters, students, or others who have not agreed to recording.
- **Sensitive topics:** patients may disclose information they did not want captured in an audio recording. Offer a pause or alternative according to policy.
- **Background identifiers:** a room number, whiteboard, pager, phone call, or another patient's voice may be captured.
- **Accuracy:** the draft can misattribute statements, omit a denial, or invent a positive finding.
- **Retention:** audio, transcripts, and drafts may be stored separately from the medical record.
- **Correction:** know how to correct the note and report a privacy or safety problem.

A human must review the draft before signing, with particular attention to negatives ("denies"), medications, allergies, exam findings, and the plan. Do not sign a note simply because it is longer or more polished than what you would have written.

## Data minimization in practice

Privacy programs often use the principle of **minimum necessary**: use or disclose only the amount of information needed for the purpose. Translate that into prompts:

- Ask for the smallest useful excerpt, not an entire chart.
- Do not include identifiers that the task does not need.
- Do not upload a full document when one paragraph will do.
- Avoid giving the model a person's entire history to produce a generic education paragraph.
- Prefer a local or organization-approved tool that can operate on the minimum relevant data.
- Delete temporary exports and drafts according to policy; do not leave copies in personal downloads.

Data minimization is not just about volume. It is also about identifiability. Two facts can be more identifying than ten. "A pediatric nurse in a three-bed unit on a specific date" may be identifiable even without a name.

## Vendor and configuration questions

Before a team adopts a tool, ask:

1. What exact data will be sent, and for what purpose?
2. Is the tool approved for PHI, or only for de-identified data?
3. Is there a BAA or equivalent contract where required?
4. Are prompts, outputs, audio, and files logged? For how long? Who can access them?
5. Is data used for model training or product improvement? Can that be disabled contractually and technically?
6. Where is data processed and stored, including subcontractors and cross-border transfers?
7. How are access controls, encryption, authentication, and audit logs handled?
8. What happens when the contract ends or a user leaves?
9. How are errors, privacy incidents, and patient complaints handled?
10. Who has validated the tool for this intended use, population, and workflow?
11. How are model changes and updates communicated?
12. What reports or evidence can the vendor provide?

The absence of an answer is itself a risk. Do not fill gaps with optimism.

## When something goes wrong

If you suspect that PHI was entered into an unapproved tool, or that an AI system disclosed data inappropriately:

1. **Stop using the tool** and do not continue entering data.
2. **Notify your privacy officer, security team, manager, or incident hotline immediately**, following your organization's policy.
3. **Preserve relevant information** such as the tool name, account, timestamps, and what was shared. Do not delete evidence or try to hide the mistake.
4. **Do not attempt to fix it alone** by deleting a chat or changing settings without guidance; the incident response team needs to assess what happened and what obligations apply.
5. **Cooperate with the review** and follow instructions for patient or regulatory notification if required.

A blame-oriented culture makes privacy incidents worse because people hide them. A just culture separates honest mistakes from reckless or intentional behavior and uses incidents to improve systems.

## A privacy decision pause

Before pressing send, ask these five questions:

- **Who is identifiable if this text is combined with other data?** If anyone, stop and use a different approach.
- **Is this tool approved for this exact data type and task?** If unsure, ask.
- **Could I do this with a synthetic example or a de-identified extract?** If yes, do that.
- **Will the output be stored somewhere I do not control?** Check retention, sharing, and downloads.
- **What is the plan if this goes wrong?** Know the reporting route before you need it.

The safest AI workflow is often the least dramatic one: generic prompts, approved tools, no patient identifiers, clear human review, and a short path to a privacy expert when something looks unusual.

Next: [AI-assisted clinical documentation support](03-documentation.md).
