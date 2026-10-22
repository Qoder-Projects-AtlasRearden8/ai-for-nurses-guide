# What Not to Use AI For

The most important AI competency in healthcare may be knowing when to put the tool down. Many harmful uses begin with a reasonable intention: save time, answer a patient quickly, reduce documentation burden, or help a colleague. Intention does not change the consequence of an unsafe recommendation, a privacy breach, or a fabricated note.

This chapter describes uses that should be off-limits for general-purpose generative AI and uses that require an approved, validated clinical system with appropriate human oversight. It is not an exhaustive legal or regulatory list. When a use is not explicitly prohibited by your organization, apply the risk hierarchy and ask before proceeding.

## A simple risk hierarchy

Use these questions to decide whether AI belongs in a workflow:

1. **What happens if the output is wrong?** A typo in an internal agenda is different from a wrong dose or a missed emergency.
2. **How sensitive is the data?** Public content, personal study notes, and patient records have different rules.
3. **Is the task making or informing a clinical decision?** Diagnosis, treatment, triage, and monitoring decisions carry higher risk.
4. **Is the tool validated for this use and population?** General-purpose AI is not a validated clinical decision support tool just because it performs well on examples.
5. **Can a human catch the error before harm?** If the workflow requires a human to review faster than humanly possible, it is not a real safeguard.
6. **Can the action be reversed?** A message sent to a patient or an order placed is harder to undo than a draft.
7. **Is the use fair and transparent?** Could it disadvantage a group, hide a decision, or undermine trust?

If you cannot answer these questions, stop and escalate. "The AI suggested it" is not a justification for a clinical or administrative decision.

## Never put PHI into an unapproved general-purpose tool

This is a stop line. Do not enter patient names, record numbers, dates of care, contact details, rare conditions, images, audio, or combinations of details that could identify someone into a consumer chatbot, a personal AI account, or any tool not approved for that data. Do not upload screenshots of a chart, monitor, or whiteboard. Do not use a personal device or account for work.

Removing the name is not enough. Rare diagnoses, small communities, specific dates, family details, and unusual events can identify a person. Use a synthetic example or the organization's approved de-identified workflow. If you are uncertain whether data is de-identified, treat it as PHI and ask.

The safer alternative is not "use a different chatbot." It is to use the approved system or keep the patient information out of the AI entirely.

## Do not use general-purpose AI for diagnosis or treatment decisions

A general-purpose chatbot should not diagnose a patient, choose a treatment, adjust a therapy, interpret a test in isolation, or decide whether a condition is serious. It lacks the full context, the physical examination, the verified record, the local protocol, and the accountability that clinical decisions require. It can also produce a plausible differential or recommendation that anchors a human on the wrong path.

This applies even when the prompt contains extensive detail. More context can improve the appearance of expertise while still leaving out crucial information. It applies when a clinician is busy, when the case seems straightforward, and when the AI's answer matches an initial impression. A model that agrees with you is not confirmation.

Use AI, if at all, for **non-clinical support** such as organizing the questions the clinician should consider or helping draft a communication after the clinical decision is made and verified. Do not ask it to make the decision.

## Do not use AI for triage or emergencies

Triage requires detecting urgency under uncertainty, considering deteriorating trends, and acting within a local system. Chatbots are not an emergency service. They can fail to recognize a red flag, respond too slowly, provide false reassurance, or give instructions that delay care.

If a patient, family member, colleague, or anyone else describes a possible emergency, follow the organization's emergency response process and contact the appropriate emergency service. Do not paste the details into an AI system to see what it thinks. Do not tell a person that an AI assessment says it is safe to wait.

For patient-facing tools, an emergency must have a clear, tested route to human help. A general-purpose chatbot should not be used as a triage nurse, crisis line, or after-hours clinical advisor.

## Do not use AI for medication doses or orders

Medication calculations and ordering are high-stakes, error-prone tasks. General-purpose AI can make arithmetic mistakes, misplace decimals, mix units, ignore renal or hepatic factors, or invent a formulation. A confident explanation is not a substitute for the organization's medication-use system, independent double-checks, pharmacist review, and qualified clinical judgment.

Do not ask an AI to calculate, check, convert, or recommend a dose for a real patient. Do not use it to generate a medication order or an administration instruction. In a learning context, practice problems may be generated, but every answer must be independently verified using the approved method and an educator's guidance. Study support is not clinical authorization.

If you notice a possible medication error, follow the organization's safety and reporting processes immediately. Do not wait for an AI opinion.

## Do not use AI to interpret images, tracings, or device output

General-purpose multimodal models may describe an image in fluent language, but they are not validated for clinical interpretation. They can miss findings, invent them, ignore technical quality, or apply the wrong context. Do not use them to interpret:

- X-rays, CTs, MRIs, or ultrasound images;
- electrocardiograms or rhythm strips;
- fetal monitoring tracings;
- laboratory results in isolation;
- pathology or dermatology images;
- wound photographs;
- device alarms or waveforms;
- retinal or other screening images.

Validated clinical AI systems may exist for specific tasks, but they have defined indications, limitations, workflows, and regulatory oversight. Use them only as approved and with the required human review. A general chatbot is not a substitute for a qualified interpretation or for the patient's full clinical picture.

## Do not use AI to answer patient-specific clinical questions

A patient may ask whether a symptom is normal, whether to stop a medicine, what dose to take, whether to go to the emergency department, or what a result means. These are clinical questions. A general AI model should not answer them as if it were the patient's clinician.

It is not enough to add a disclaimer such as "I am not a doctor." A disclaimer does not fix a wrong instruction. The response should be routed to the appropriate clinical workflow, with clear information about what the patient should do next and how urgently to seek help according to the approved protocol.

If a patient brings in AI-generated advice, treat it as a question, not as evidence. Clarify the plan with the treating clinician and help the patient understand the difference between general information and individualized advice.

## Do not use AI as a mental health crisis service

A chatbot is not a crisis counselor or an emergency service. It may respond with empathy or provide a phone number, but it cannot assess risk reliably, ensure safety, or summon help. It may also give harmful advice if prompted poorly.

Follow your organization's behavioral health and emergency protocols. Use validated screening and assessment tools as trained, and involve qualified clinicians. If there is an immediate risk of harm, use emergency resources and do not delay to consult an AI.

AI can support low-risk education, appointment reminders, or administrative navigation in a governed system, but a patient-facing mental health tool needs specific clinical, ethical, privacy, and regulatory oversight.

## Do not fabricate or launder documentation

AI must not be used to create records of events that did not occur, add findings that were not assessed, backdate entries, impersonate a clinician, or make an incident seem less serious. It must not be used to alter an incident narrative in a way that changes the facts or shifts blame.

Documentation fraud is not made acceptable by calling it a "draft." If you did not perform the assessment, observe the event, or verify the information, you cannot attest to it. Follow the approved correction and amendment process if a record is wrong.

AI may help with the structure and clarity of a de-identified draft, but the accountable clinician remains responsible for every statement. Keep the source of truth separate and available for review.

## Do not use unapproved AI in incident, legal, or disciplinary matters

Incident reports, complaints, legal claims, regulatory inquiries, employee discipline, and root-cause analyses can contain highly sensitive information and have specific procedural rules. Do not paste them into a general-purpose AI tool. Use the approved systems and involve risk, legal, compliance, HR, or quality teams as appropriate.

An AI-generated response can sound empathetic while admitting facts, minimizing concerns, or making promises that the organization cannot keep. It can also introduce inaccuracies into a legal record. Speed is not worth that risk.

## Do not let AI replace qualified medical interpreters

Machine translation is not a qualified medical interpreter. Do not use a general AI system to conduct a clinical conversation, obtain consent, give safety instructions, or translate a patient's concerns when interpretation is required. Errors in nuance, dialect, medical terminology, or urgency can cause harm.

Use qualified in-person, video, or telephone interpretation according to policy. For written translation, use the approved translation process and qualified reviewers. AI may help a qualified professional prepare a glossary or compare wording under an approved workflow, but the final patient-facing text needs appropriate review.

## Do not automate high-impact decisions about people

AI should not independently decide who gets hired, promoted, disciplined, admitted, discharged, scheduled, insured, or prioritized for scarce resources. These decisions affect people's lives, can encode bias, and often have legal and ethical requirements. Even when AI is used to assist, the criteria, data, appeals process, and human accountability need governance.

This includes using AI to evaluate employees, rank patients for services, detect "fraud" or "deception," or infer sensitive traits. A model's prediction is not a fair or verified basis for a consequential decision. Use validated, governed processes with human review and the ability to contest the outcome.

## Do not deploy patient-facing AI without governance

A patient-facing chatbot or assistant needs:

- a clearly bounded purpose;
- clinical review and validation for its specific tasks;
- tested escalation for emergencies and uncertainty;
- privacy and security controls;
- transparency about what it is and how it uses data;
- accessibility and language support;
- monitoring for harmful or inequitable outputs;
- a route for patient questions and complaints;
- a plan for updates, incidents, and withdrawal.

A general-purpose model with a friendly interface is not a governed patient service. Without those controls, it should not be used for clinical advice.

## Do not use AI to replace learning or assessment

Using AI to complete exams, write assignments, or take assessments that are meant to evaluate your own competence is an academic integrity issue and a patient-safety issue. You may eventually be responsible for decisions you cannot make. Follow course and licensing rules. If AI use is allowed, disclose it as required and ensure you can explain and defend the work.

Similarly, educators should not use AI to assign final grades or assess clinical competence without human review, validation, and an appeal process. Generated questions and feedback require expert review.

## Do not let AI make autonomous operational changes

Do not give an AI agent unrestricted permission to send patient messages, alter records, place orders, change schedules, adjust staffing, or make purchases without explicit approvals, scoped permissions, and safety controls. An action taken by an automated system can cause harm before a human sees it. Keep high-consequence actions human-controlled and auditable.

Even for low-risk actions, use least privilege: the tool should access only what the task needs, for only as long as it needs it.

## Do not mistake eloquence for evidence

Do not use AI to generate citations and treat them as real, invent statistics, or turn a blog post into a guideline. A fluent explanation with references can still be false. Open the source, confirm it exists, and check that it supports the claim in context. A source can be real but outdated, misrepresented, or inapplicable to the population.

Do not use AI to "clean up" a citation you have not read. Do not use it to manufacture certainty where the evidence is weak. In healthcare, it is acceptable to say "I don't know" or "the evidence is limited." It is not acceptable to present an unsupported claim as fact.

## Do not use AI to surveil or exploit

AI can analyze communications, locations, images, and behavior in ways that feel intrusive or discriminatory. Do not use it to monitor patients or staff beyond approved safety and security purposes, to infer sensitive traits, to generate deceptive content, to harass, or to manipulate decisions. Privacy and dignity apply even when data is technically accessible.

Patient stories, photos, and messages deserve particular care. Do not put them into an AI tool for a public post, even as a "composite," without the required permissions and review.

## When "human in the loop" is not enough

Many AI deployments claim to have a human in the loop. That safeguard only works if:

- the human has the expertise to assess the output;
- the human has enough time and information to review it;
- the human is empowered to reject or change it;
- there is a clear record of the review;
- the workflow measures errors rather than assuming review happens;
- the human is not penalized for slowing down an unsafe process.

A nurse clicking "approve" on an AI recommendation after a two-second glance is not meaningful oversight. A human signature without the ability to verify the content is a liability, not a control.

## If you see a prohibited or unsafe use

If a colleague or vendor proposes a use that seems outside safe practice:

1. Ask what problem it solves and what happens if it fails.
2. Ask whether the tool and data are approved for the use.
3. Escalate to the appropriate clinical, privacy, compliance, or informatics leader.
4. Do not test the questionable use with real patient data.
5. Document the concern through the appropriate internal channel.

If you already used AI in a prohibited way, report it promptly through the right channel. Concealment makes the consequences worse. A just culture should make reporting the safe choice.

## The stop list

Stop and do not use general-purpose AI when the task involves:

- entering PHI into an unapproved tool;
- diagnosing, treating, or triaging a patient;
- calculating or authorizing a medication dose or order;
- interpreting a clinical image, tracing, or device output;
- giving patient-specific clinical advice;
- handling a mental health or safety emergency;
- creating or altering a record or incident narrative deceptively;
- using an unapproved tool for legal, disciplinary, or complaint content;
- replacing a qualified interpreter;
- making high-impact decisions about people;
- conducting an action that could harm someone before a human reviews it;
- generating evidence or citations that will not be verified.

The safest AI use is often smaller than the tool's marketing suggests. That is not a failure of imagination. It is a recognition of what patients, professional standards, and accountable care require.

Next: [governance, equity, and professional accountability](10-governance-equity.md).
