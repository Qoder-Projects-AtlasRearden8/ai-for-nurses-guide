# AI for Nurses and Healthcare Workers

A safety-first field guide to documentation help, studying, patient education, privacy, and knowing the limits.

Edition: October 2026

> Educational use only. This guide is not medical, nursing, legal, or compliance advice and does not create a clinician-patient relationship. AI output requires human verification. Follow local policy and current authoritative guidance. In an emergency, contact local emergency services.

This single-file Markdown edition is for offline reading and local adaptation. Chapter links jump within this file; use a Markdown viewer that supports internal links and inline HTML anchors.

## Contents

01. [Start Here: Scope, Safety, and How to Use This Guide](#start-here)
02. [How Generative AI Works for Healthcare Workers](#how-generative-ai-works)
03. [Privacy, HIPAA, and Responsible Data Handling](#privacy-and-hipaa)
04. [AI-Assisted Clinical Documentation Support](#documentation-support)
05. [Studying and Professional Learning with AI](#studying-and-learning)
06. [Patient Education Drafts: Clarity Without Guessing](#patient-education)
07. [Communication, Handoffs, and Administrative Work](#communication-and-admin)
08. [Prompting Foundations for Nurses and Healthcare Workers](#prompting-foundations)
09. [Prompt Library](#prompt-library)
10. [What Not to Use AI For](#what-not-to-use-ai-for)
11. [Governance, Equity, and Professional Accountability](#governance-and-equity)
12. [Scenario Practice and Red Flags](#scenario-practice)
13. [Checklists, Quick Reference, and Glossary](#checklists-and-glossary)

---

<a id="start-here"></a>

# Start Here: Scope, Safety, and How to Use This Guide

AI for Nurses and Healthcare Workers is a practical field guide for using generative AI carefully in learning, communication, documentation support, and patient education. It is written for nurses, nursing students, community health workers, medical assistants, allied health professionals, educators, and the administrative teams who support them. It assumes no technical background and no particular vendor, product, or model.

The guide is built around one position: **AI can be useful when it helps a person think, organize, practice, or communicate more clearly, but it should not replace clinical judgment, privacy safeguards, professional accountability, or the patient relationship.** The useful question is not "How much can AI do?" It is "Which tasks can AI assist with without creating a safety, privacy, fairness, or trust problem?"

> **Educational disclaimer:** This guide is for general education and operational planning. It is not medical advice, nursing advice, legal advice, compliance advice, or a substitute for your organization's policies, your licensing board's rules, current clinical guidelines, or consultation with qualified professionals. AI output can be incomplete, biased, or fabricated. Do not use this guide or an AI system to diagnose, treat, triage, prescribe, calculate medication doses, or make decisions about a specific patient. In an emergency, contact local emergency services. Verify all clinical and legal information with authoritative sources and your organization.

## Why this guide exists

Generative AI is moving into the places where healthcare work already happens: email, meeting notes, education materials, study tools, scheduling, quality improvement drafts, and the documentation workflows inside electronic health records. Some of that change is welcome. A nurse educator may use a model to turn a rough outline into a clearer lesson plan. A student may ask for another explanation of fluid balance. A manager may use AI to tighten a team update that contains no patient information. These are ordinary writing and learning tasks, and AI can make them faster.

The risks are also ordinary until they are not. A clinical note that sounds fluent can be wrong. A patient handout can include a fabricated warning sign or an incorrect medication instruction. A de-identification step that misses a rare diagnosis can leave a person identifiable. A model can produce a citation for a study that does not exist. A clinician can become overconfident because the prose looks polished. These failures do not announce themselves. They have to be designed for.

Nurses are especially important in this conversation because they sit at the intersection of high-volume work, direct patient contact, documentation, education, and advocacy. They are often the people expected to adopt a new tool first, work around a broken workflow, and still protect the patient. A guide that treats AI as either magic or forbidden is not useful in that environment. This guide offers a middle path: constrained, transparent, verified use.

## What this guide covers

The guide has four main threads:

1. **Understand the technology.** Learn what large language models do, why they sound confident, where facts and citations can break, and why a privacy policy is not the same thing as a business associate agreement.
2. **Protect people and data.** Work through HIPAA concepts, de-identification cautions, institutional approval, consent and transparency, vendor questions, and practical zero-PHI habits.
3. **Use AI for bounded tasks.** Draft documentation support, study aids, plain-language education outlines, administrative communications, and structured prompts with human review at the end.
4. **Know where the line is.** Understand which tasks are too high risk for general-purpose AI, which require validated regulated tools, and which should remain human-led regardless of how capable a model appears.

The later chapters include a prompt library, scenario exercises, checklists, and a glossary. The templates use placeholders rather than real patient details. A placeholder is not a magical privacy protection: a rare combination of details can still identify a person. Use synthetic examples or fully approved, de-identified data only.

## Who this guide is for

You may be:

- a bedside nurse who wants to write clearer patient education drafts without copying patient data into a chatbot;
- a nursing student who wants to study with active recall instead of passively rereading notes;
- a nurse educator preparing simulations, lesson plans, or assessment drafts;
- a community health worker drafting a general health-literacy handout;
- a manager preparing a non-clinical team message or a training agenda;
- a quality improvement team exploring whether an AI tool belongs in a workflow;
- an informatics or education lead who needs a plain-language vocabulary for governance conversations.

The examples use "patient" for brevity, but the same principles apply to residents, clients, families, and communities. Some material is specific to the U.S. HIPAA context because many readers will encounter it. Privacy law varies by country and state, and even within one country, local policies can be stricter than the legal minimum. If you work outside the United States, use the privacy chapter as a way to ask better questions of your own legal and governance teams, not as a statement of local law.

## What this guide does not do

This is not a product review, procurement decision, legal opinion, or clinical protocol. It does not certify that any AI tool is safe. It does not claim that a particular model is accurate enough for a particular healthcare task. It does not replace the instructions of your employer, regulator, licensing board, or ethics committee.

AI products change quickly. Features, default data retention, model behavior, and contract terms can change without a dramatic interface change. A tool that was acceptable last year may have new defaults now. A prompt that worked well in one model may fail in another. Treat every tool as a local decision that needs current verification.

The guide also avoids giving patient-specific clinical recommendations. When it mentions a clinical example, the point is the workflow, communication, privacy, or verification lesson, not the underlying treatment. A fluent answer from an AI model is not evidence, authorization, or a care plan.

## Three rules to take to work

If you remember nothing else, remember these three rules.

**Rule one: No protected health information in an unapproved tool.** That includes names, dates of care, record numbers, contact details, photos, rare diagnoses, details of a small community, and combinations of details that could identify someone. "I removed the name" is not enough. Use the approved system, or use a synthetic example with no connection to a real person.

**Rule two: Verify every clinical or factual claim before it affects a person.** This includes medication names, doses, routes, frequencies, monitoring instructions, warning signs, follow-up intervals, guidelines, regulations, and citations. Verify against the authoritative record or source, not against the AI's own confidence. A second model is not a reliable verification source.

**Rule three: A named, accountable human remains responsible.** The clinician who signs a note, the educator who distributes a handout, and the manager who sends a message are responsible for the content. AI does not acquire professional accountability by generating text. Follow your organization's rules for disclosure, review, and recordkeeping.

## A simple map of safe and unsafe uses

| Lower-risk starting point | Higher-risk or prohibited without approved, validated systems |
| --- | --- |
| Brainstorming generic teaching activities | Diagnosing a patient or selecting treatment |
| Improving the structure of a de-identified draft | Calculating or checking a patient's medication dose |
| Generating practice questions from notes you provide | Answering a patient message with tailored medical advice |
| Rewording clinician-approved education content | Creating patient instructions from scratch without clinical review |
| Drafting a non-clinical meeting agenda | Summarizing real charts in a consumer chatbot |
| Creating a study schedule | Deciding whether a patient needs emergency care |
| Formatting a bibliography you already verified | Relying on AI-generated citations as proof |
| Turning a policy outline into a training checklist for review | Interpreting an ECG, image, fetal tracing, or telemetry in place of a qualified clinician |

The line is not determined only by the task's topic. It also depends on the data, the tool, the population, the setting, the available supervision, and the consequence of an error. A spelling suggestion in a public newsletter is not the same risk as a spelling suggestion that changes an insulin dose.

## How to use the guide

If you have five minutes, read this chapter and the "What Not to Use AI For" chapter. If you are preparing to use a tool at work, read the privacy chapter, the task-specific chapter, and the checklists. If you are designing a team pilot, read the governance chapter before selecting a vendor.

A practical progression looks like this:

1. **Start with a non-clinical task** that contains no patient data and has a low cost of error, such as reorganizing your own study notes.
2. **Use a synthetic case** to practice prompting and review. Keep it clearly fictional and unrelated to any real person.
3. **Use only approved tools** for work tasks. Confirm the contract, data flow, retention, access controls, and organizational policy.
4. **Keep a human review step** with enough time to catch errors. If the workflow makes review impossible, the workflow is not ready.
5. **Document what you did** according to policy, including tool use where disclosure is required. Record the source of clinical facts.
6. **Report problems early.** A wrong output is not an embarrassment; it is safety data. Report it through the appropriate clinical, quality, privacy, or IT channel.

AI is likely to be part of your working life in some form. The goal is not to become a prompt engineer. The goal is to become a discriminating user: clear about the task, honest about the limits, careful with data, and unwilling to trade a patient's safety for a faster paragraph.

Next: [how generative AI works](#how-generative-ai-works).


---

<a id="how-generative-ai-works"></a>

# How Generative AI Works for Healthcare Workers

You do not need to understand the mathematics of a neural network to use AI safely. You do need a working model of what the system is doing, because that model tells you when to trust it, when to verify it, and when not to use it at all.

Most of the tools discussed here are **generative AI** systems, especially large language models (LLMs). They take an input, often called a prompt, and produce an output such as text, a summary, a table, a translation draft, or code. Some systems can also process images or audio. The polished interface can make these tools feel like knowledgeable colleagues. They are not. They are prediction systems trained on large amounts of data, operating inside a product with its own rules, limits, and data practices.

## The basic idea: prediction, not understanding

A large language model is trained to predict what comes next in a sequence of text. Given a prompt, it produces a continuation that is statistically plausible based on patterns learned during training. Modern models are capable of remarkably useful generalization: they can summarize, reorganize, explain, draft, and imitate styles. But the core operation is still prediction over language-like patterns, not a clinical assessment of a patient.

This helps explain several behaviors that matter in healthcare:

- **Fluency is not accuracy.** A model can produce a confident, well-formatted, grammatically perfect answer that is false. The format of expertise is easy to imitate; the underlying verification is not included.
- **The model does not know what it does not know.** It can fail to flag missing information or invent a detail to complete a pattern. It may not have access to the patient's chart, your local policy, or the current guideline unless those things are provided through a trusted tool.
- **Wording is sensitive.** A small change in a prompt can change the answer. That is useful for exploration, but it means one good answer does not prove reliability.
- **Outputs can vary.** Many systems include randomness. The same prompt can produce different responses, and a product update can change behavior. A successful demo is not a validation study.

A useful phrase is **"plausible, not necessarily true."** The model is optimized to produce plausible text. In a note, a handout, or a message to a patient, plausible is not the standard. The standard is accurate, complete, appropriate for the person, and consistent with the source of truth.

## Training data, knowledge, and time

Models learn patterns from data collected and curated during training. That data has limits: it can be incomplete, outdated, biased, or unrepresentative. The model's "knowledge" is not a live connection to guidelines, formularies, or your policies. Even models with web browsing or retrieval features may retrieve the wrong source, misread it, or summarize it inaccurately.

For clinical facts, treat the AI as a starting point for questions, not as the source. Use current organizational policy, the electronic health record, drug references, clinical guidelines, device documentation, and qualified colleagues. If a model cites a source, open the source and read it. A citation can be real but misrepresented, or completely fabricated.

Some tools use **retrieval-augmented generation (RAG)**. Instead of relying only on training data, they search a specified collection of documents and include relevant passages in the prompt. This can improve grounding, but only if the right documents are indexed, access controls are correct, the retrieval step finds the relevant passage, and the model uses it faithfully. A RAG system can still misread a document, miss a contraindication, or blend an older policy with a newer one. Grounding reduces some risks; it does not eliminate them.

## The context window and what the model can see

The **context window** is the amount of text (and sometimes images or audio) the model can consider in one interaction. If a document is too long or the conversation drifts, earlier details may be dropped or underweighted. A model may summarize a long policy but miss an exception buried in an appendix. It may produce a coherent response while silently ignoring the most important line in the prompt.

This has practical consequences:

- Put the most important constraints near the task and restate them when needed.
- Do not assume the model retained a critical detail from 20 messages ago.
- When reviewing a long guideline, ask for specific citations to sections and verify those sections yourself.
- For safety-critical content, use a checklist and human review rather than relying on the model's attention.

## Hallucination, omission, and distortion

A **hallucination** is output that is fabricated or unsupported. It might be an invented study, a non-existent policy, a wrong medication detail, a fictional phone number, or a summary that blends two patients' facts. Hallucination is not a rare bug that always appears with an obvious warning. It is a predictable consequence of a system asked to generate plausible content.

Other failure modes are less famous but equally important:

- **Omission.** The model leaves out a critical warning sign, allergy, fall risk, or follow-up instruction. The document looks clean, but it is incomplete.
- **Distortion.** The model changes a value, date, route, frequency, or urgency level while preserving a plausible narrative. This is especially dangerous in notes and handoffs.
- **False specificity.** It adds a precise number, time, guideline, or citation that was not in the source.
- **Sycophancy.** It agrees with a user's assumption or adjusts facts to match the user's framing. If you suggest a diagnosis, it may help elaborate that diagnosis instead of challenging it.
- **Overgeneralization.** It turns a single policy or study into a universal rule, or applies adult guidance to a pediatric patient.
- **Bias.** It reproduces associations and gaps in its training data, which can affect how it describes people, proposes triage, or writes education materials.

A good review process must look for all of these, not only "does this sound right?" It must compare the output against source facts, check what is missing, and ask whether the tone or framing could cause harm.

## Chatbots, embedded tools, and clinical AI are not the same product

A consumer chatbot is a general-purpose interface. An **ambient documentation tool** may listen to a visit and draft a note. A **clinical decision support tool** may be regulated as a medical device or subject to specific oversight. An **EHR-integrated assistant** may have access to select data under a contract and technical controls. These products can look similar on a screen, but their data flows, validation, permissions, and regulatory status are different.

Do not assume that a feature labeled "AI" inside a familiar product is safe for every use. Ask:

- What data does it receive, where is it processed, and how long is it retained?
- Is it connected to the EHR, and with what permissions?
- Who can see the output and the prompts?
- Is the output suggest-only, or can it change the record or trigger an action?
- Has it been validated for this population and workflow?
- What are the known limitations and failure modes?
- Does the contract include appropriate confidentiality and business associate terms?
- Is its use disclosed to patients and staff according to policy?
- How are errors reported, investigated, and corrected?

The phrase "HIPAA-compliant" in marketing material is not enough. A product can have features that support compliance without being approved for your specific use, and a vendor can be covered by HIPAA without meeting your organization's security standards. The contract, configuration, and local policy all matter.

## Agents, automation, and actions

Some systems can do more than generate text. They can browse, call tools, send messages, fill forms, or take actions in other software. These **agentic** systems introduce new risks: a wrong action may happen before a human sees it, and the blast radius can be much larger than a bad paragraph. An assistant with access to email, scheduling, records, or financial systems is an operational and security system, not just a writing aid.

In healthcare, keep high-consequence actions under explicit human control. A tool should not independently send patient instructions, alter a record, place an order, change a schedule, or disclose information without approved design and oversight. The fact that a system can perform an action is not evidence that it should.

## Why polished output increases risk

Humans are prone to **automation bias**: we tend to trust automated suggestions, especially when they are presented fluently and quickly. A rough draft with visible gaps invites correction. A polished note with a subtle error can slip through. This is one reason AI should not be used to fill the time pressure that already makes review difficult. If a workflow assumes that a nurse will carefully verify every line in three seconds, the workflow has not accounted for human cognition or accountability.

Mitigations include:

- a structured review checklist that does not depend on reading the whole draft from scratch;
- comparing source documents side by side with the output;
- requiring explicit confirmation of high-risk elements such as medications, allergies, and follow-up;
- separating drafting from approving, where feasible;
- audit trails and clear indication of what is AI-generated;
- time in the workflow for genuine review;
- a culture in which stopping a tool is acceptable when it produces errors.

## What "the model" is not responsible for

A model cannot provide informed consent, hold a license, maintain a therapeutic relationship, notice a change in a patient's condition, or be accountable to a regulator. Those responsibilities belong to people and organizations. AI can support a person's work, but it does not inherit the person's role.

This is why governance, documentation, and disclosure matter. If an AI tool contributes to a decision or a record, the organization should know which tool, which version, what data, and what human review occurred. A vague statement that "AI was used" is less useful than a clear workflow that assigns responsibility.

## A practical mental model

Use this four-part model when you encounter an AI tool:

1. **Input:** What information am I giving it, and am I allowed to give it? Is it real patient data, de-identified data, synthetic data, or public content?
2. **Transformation:** What is the tool doing with that input? Is it drafting, summarizing, translating, recommending, or taking action? What could it omit or distort?
3. **Output:** What is the claim, and what evidence supports it? Who is the audience, and what happens if it is wrong?
4. **Accountability:** Who reviews, signs, sends, or acts? What record is kept, and how is a problem reported?

When any of those four boxes is unclear, stop and ask. That habit will protect more patients than any clever prompt.

Next: [privacy, HIPAA, and responsible data handling](#privacy-and-hipaa).


---

<a id="privacy-and-hipaa"></a>

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

Next: [AI-assisted clinical documentation support](#documentation-support).


---

<a id="documentation-support"></a>

# AI-Assisted Clinical Documentation Support

Documentation is one of the most tempting places to use AI, because nurses spend a great deal of time writing, summarizing, and fixing text. It is also one of the most consequential. A note is not just a memory aid for the person who wrote it. It is a clinical communication tool, a legal record, a source for downstream decisions, a billing document, and sometimes a patient's only durable account of what happened.

The safe role for AI here is narrow but real: it can help **organize facts you provide, improve clarity, suggest a structure, flag ambiguities, or rehearse a communication**. It should not invent clinical content, substitute for an assessment, or produce a final record without human verification.

> **Before using any documentation tool:** follow your organization's policy and use only approved systems. Do not paste PHI into a general-purpose chatbot. This chapter discusses workflow principles, not a green light to use unapproved tools with real charts.

## The documentation integrity principle

Every entry in a medical record should be attributable, accurate, timely, and based on something that actually happened or was observed. AI introduces a new way for plausible language to appear without a corresponding event. A model can produce a coherent "patient denies chest pain, shortness of breath, or nausea" even if the nurse never asked all three questions. That is fabrication, even if it looks like routine documentation.

The core principle is therefore: **the source of truth must exist outside the model.** The nurse's assessment, the monitor data, the medication administration record, the patient's statement, the provider's order, or another verified source should be available independently. The AI may help express those facts; it may not become the evidence for them.

This principle rules out a common shortcut: asking an AI to write a complete note from a few cues. It also rules out using an AI summary of prior notes as if it were a fresh assessment. Prior records can be wrong, copied forward, or missing context. A new note still needs current, verified information.

## What AI can reasonably help with

Within an approved workflow and with appropriate data controls, AI may assist with:

- restructuring a set of facts into a clearer note format;
- converting rough bullet points into complete sentences without changing the facts;
- suggesting where documentation is ambiguous or missing a required element;
- creating a blank template or checklist for a note type;
- rewriting de-identified educational content for clarity;
- summarizing public, non-patient guidance for staff education;
- generating practice scenarios for documentation training;
- helping a team develop consistent wording for a quality improvement form;
- checking the readability of patient-facing instructions that already contain clinician-approved facts.

These are "language and structure" tasks. They do not make clinical decisions and they do not generate clinical facts.

## What AI must not do in documentation

Do not use general-purpose AI to:

- create a patient assessment or invent findings;
- fill in a "normal" exam by default;
- write a note from memory of a real patient without verifying the record;
- generate medication names, doses, routes, frequencies, or administration times;
- decide what is clinically significant or what should be reported;
- draft an incident report in a way that assigns blame, speculates, or changes the facts;
- summarize a real chart in an unapproved tool;
- replace a required disclosure or mandated reporting process;
- attest to a note you have not personally reviewed against the source;
- create a record for a visit or intervention that did not occur;
- alter a signed record without following the organization's amendment process.

If a tool has an ambient listening feature, the same rules apply with additional privacy and consent requirements. The transcript is not automatically the truth, and the draft is not automatically complete.

## A safer documentation workflow

### Step 1: Confirm the tool and the data rules

Is the documentation tool approved for the note type? Is it integrated with the EHR or independent? Is it allowed to receive PHI? What does the contract say about retention and training? Does your organization require patient notice or consent? These questions come before productivity.

If the only available tool is a general-purpose chatbot that is not approved for PHI, do not use it with a real chart. Use a synthetic example to learn the prompt pattern, or wait for an approved tool.

### Step 2: Gather the verified source facts

Identify the facts that must appear in the record. These may include:

- the patient's reason for contact and relevant history;
- objective findings you personally observed or verified;
- vital signs and other data from the correct time and source;
- medications administered, with the verified order and time;
- allergies and reactions;
- interventions and the patient's response;
- pending results and who will follow up;
- education provided and the patient's teach-back response;
- escalation attempts and notifications;
- the care plan and who is responsible for each next step.

The list depends on the note type and local policy. The point is to start from verified facts, not from a blank prompt.

### Step 3: Use a constrained prompt

A safe prompt for a documentation aid is explicit about preserving facts and refusing to invent. For example:

```text
You are helping me improve the clarity and structure of a de-identified clinical documentation draft. Do not provide clinical advice, diagnoses, or treatment recommendations. Do not add any fact, value, medication, time, assessment, or event that is not explicitly present in the text below. Preserve all negatives and uncertainties exactly. If an abbreviation or statement is ambiguous, list it as a question rather than guessing.

Task: Reorganize the facts into an SBAR-style structure for human review. Keep the original meaning. Use neutral, professional language. Flag any missing information that the writer should verify before finalizing.

Draft:
[DE-IDENTIFIED DRAFT OR SYNTHETIC EXAMPLE]
```

Even with this prompt, the output may change meaning. The instruction is not a guarantee; it is a constraint that makes errors easier to spot.

### Step 4: Review against the source, line by line

Do not read the AI draft as a standalone document. Compare it to the verified facts. Check:

- every number, time, medication, route, and frequency;
- laterality, patient identity, and setting;
- negatives and denials;
- who said or did what;
- chronology and causality;
- allergies and reactions;
- the plan, responsible person, and follow-up time;
- whether anything was added that you cannot independently verify;
- whether anything important was omitted;
- whether the tone introduces blame, stigma, speculation, or legal risk.

A useful technique is a **fact ledger**: list the source facts in one column and where each appears in the draft in another. Anything not traceable to the source is either removed or verified before it stays. This feels slower than signing the draft, but it is the work that makes the tool safe.

### Step 5: Finalize in the approved system

Make the final edit in the EHR or approved documentation system, not in a chat window. Follow your organization's requirements for indicating AI assistance. If the tool produced a draft and you rewrote it substantially, still follow the applicable attestation and disclosure rules.

Never sign a note with a vague sense that "it is probably right." If you cannot verify a statement, either obtain the missing information or document the uncertainty accurately. "Unable to verify" is a safer and more truthful entry than a fabricated certainty.

## SBAR support, with limits

SBAR (Situation, Background, Assessment, Recommendation) is a communication structure widely used for handoffs and escalation. AI can help turn a de-identified set of facts into an SBAR draft, or help a team create an SBAR template for training. It cannot perform the clinical assessment or decide the recommendation.

A useful prompt for training or de-identified drafts might say:

```text
Create an SBAR template for [GENERAL SETTING OR SIMULATION SCENARIO].
The goal is to help a nurse organize facts, not to recommend care.
Include prompts for: current situation, relevant verified background, the clinician's assessment of what is known and unknown, and a clear request or escalation question.
Do not include patient identifiers. Do not invent findings. Add a note that a qualified clinician must complete and verify all content.
```

When using an output for a real patient, every field must be populated from verified facts and the recommendation must be owned by a qualified clinician.

## Care plans and patient-specific instructions

Care plans and discharge instructions are individualized documents. AI can help with generic structure, plain-language drafting, or a list of questions for the care team. It should not determine a patient's priorities, generate a diagnosis-specific intervention plan without a qualified clinician's input, or produce medication instructions from memory.

For patient instructions, assume three separate risks:

1. **Factual risk:** a wrong dose, timing, warning sign, or follow-up interval.
2. **Comprehension risk:** the wording is too complex, ambiguous, or culturally inappropriate.
3. **Accountability risk:** the patient believes the AI-produced document is the clinician's authoritative advice when it has not been reviewed.

Use only content that a qualified clinician has approved. The AI may rewrite an approved set of points, but the facts and final wording still need review. Keep the approved source and version for reference. Patient education has a longer checklist in its own chapter.

## Incident reports, complaints, and legal records

Incident reports, root-cause analyses, patient complaints, and legal responses are high-risk documents. They may be subject to privilege, discovery, regulatory reporting, or formal investigation. They also require precise factual language that distinguishes observation from inference.

Do not put a real incident narrative, patient complaint, or legal communication into a general-purpose AI tool. Follow your organization's policy for any AI use in these processes. Even in an approved tool, AI should not assign fault, speculate about causes, minimize the event, or change a chronology. Those are human and organizational responsibilities.

If you are drafting a quality improvement summary, use aggregate, de-identified data prepared through the approved process. Do not assume that removing names from an incident database makes the data safe; the details of a rare event can identify the people involved.

## Notes, copy-forward, and the illusion of completeness

AI can make copy-forward problems worse. A model may learn the pattern of a previous note and repeat language that no longer applies. It may smooth over inconsistencies by choosing the most common phrase. It may also make an incomplete note look thorough because it has sections and headings.

Review for:

- **stale content:** text carried forward that describes an earlier shift, status, or plan.
- **inconsistent facts:** a note that says "no pain" while the flowsheet records severe pain.
- **invented normal findings:** a full review of systems or exam that was not performed.
- **unsupported causality:** language that connects an event to a cause without evidence.
- **missing uncertainty:** the model removes "possible," "reported," or "unable to assess."
- **wrong attribution:** a family member's statement presented as the patient's own words.

A shorter, accurate, specific note is better than a long, polished note with unsupported details.

## Language, stigma, and respect

Documentation affects how future clinicians perceive a patient. AI models can reproduce stigmatizing language or stereotypes, especially when prompted with biased framing. Use neutral, person-centered language and describe behaviors and facts rather than judgments. Follow organizational guidance and style requirements.

Examples of questions to ask yourself:

- Does the draft label a person as "noncompliant" without context, access barriers, or shared decision-making?
- Does it imply credibility judgments based on a patient's identity or behavior?
- Does it use euphemism to obscure important information?
- Does it mention sensitive information that is not relevant to the care or legally required?
- Would the patient feel respected if they read it?

AI can help suggest alternatives, but the author is responsible for the final language and its effect.

## Measuring whether the tool is helping

A documentation tool is not successful merely because it produces notes faster. Useful evaluation questions include:

- Are notes complete and accurate when compared with source data?
- Do reviewers detect more, fewer, or different errors than with the prior workflow?
- Are critical fields such as allergies, medicines, and follow-up captured reliably?
- Has documentation time changed for the whole team, including review and correction?
- Are patients being recorded accurately when they speak a different language or use an interpreter?
- Is the tool accessible and usable for staff with different abilities and workflows?
- Are privacy incidents, complaints, or safety reports increasing?
- Are staff over-relying on the draft or signing without enough time to review?

Track errors by severity, not just counts. A hundred corrected spelling errors are not equivalent to one wrong medication or missed red flag. Include frontline staff, patients, and privacy and legal teams in the evaluation.

## Documentation checklist

Before you finalize an AI-assisted draft:

- [ ] I used an approved tool and followed the data rules.
- [ ] The source facts are verified and available separately from the AI output.
- [ ] I removed or masked all patient identifiers as required.
- [ ] I checked every medication, dose, route, frequency, and time.
- [ ] I checked identity, laterality, setting, and chronology.
- [ ] I preserved negatives, uncertainties, and the patient's own words where relevant.
- [ ] I removed any fact I cannot independently verify.
- [ ] I reviewed the plan, responsible person, and follow-up time.
- [ ] I checked for stigma, bias, and unnecessary sensitive detail.
- [ ] I completed all required disclosure and attestation steps.
- [ ] I know how to report an error or privacy concern.

Documentation support can be valuable when it helps a clinician communicate verified facts more clearly. It becomes dangerous when it substitutes plausible language for observation. Keep the source of truth human, current, and visible.

Next: [studying and professional learning with AI](#studying-and-learning).


---

<a id="studying-and-learning"></a>

# Studying and Professional Learning with AI

AI can be a useful study partner. It can quiz you, explain a concept in different words, generate examples, role-play a conversation, and help you make a realistic plan. It can also give you a false sense of mastery. A confident explanation is not the same as a correct one, and finishing a practice quiz is not the same as being ready to care for a patient.

The best use of AI in studying is to **create more opportunities for active recall, feedback, and reflection**, then verify the content against authoritative material. The worst use is to replace the effort that builds clinical judgment with reading fluent summaries.

## Start with learning science, not a chatbot

Decades of education research point to a few durable principles:

- **Retrieval practice:** trying to recall information strengthens memory more than rereading it. Ask yourself questions, answer without notes, then check.
- **Spaced practice:** revisiting material over days and weeks is more effective than cramming once.
- **Interleaving:** mixing related topics or problem types can improve discrimination and transfer, even though it feels harder.
- **Elaboration:** explaining why and how, connecting new ideas to what you know, and generating examples deepen understanding.
- **Concrete examples:** abstract concepts become usable when applied to cases, ideally with variation.
- **Metacognition:** monitoring what you actually know, rather than what feels familiar, is essential. Confidence is a poor substitute for evidence.
- **Feedback:** timely, specific correction helps, but only when the feedback itself is accurate.
- **Application:** nursing judgment develops through supervised practice, simulation, and reflection, not through multiple-choice questions alone.

AI can support several of these principles cheaply. It cannot reliably supply the final authority for clinical facts, and it cannot certify competence.

## AI as a tutor, not an oracle

A useful way to frame the tool is: **"Explain this to me and test me, but do not be my only source."** Use it to generate ways of thinking about material you are already learning, then check the material against your textbook, course materials, guidelines, or instructor.

For example, suppose you are studying fluid balance. Good study requests might ask for:

- a plain-language explanation of the concept;
- a worked example using fictional numbers;
- three common misconceptions and why they are wrong;
- a series of questions from easiest to hardest;
- a request for the model to stop and ask you to explain the next step;
- a comparison table with definitions and examples;
- a practice case with a rationale for each answer.

Even after a polished explanation, check the key facts. Models sometimes mix up similar concepts, use outdated terminology, simplify away an exception, or invent a source. Ask "which of these claims should I verify in my course materials?" and treat the answer as a study hint, not a verified citation.

## Building a study loop that uses AI well

A reliable loop has seven parts.

### 1. Define the target

Write down what you need to be able to do. "Understand the chapter" is vague. "Explain the difference between these three concepts, interpret a de-identified case, and identify when each intervention is used" is testable. Use the course objectives, certification test plan, competency framework, or instructor guidance.

### 2. Diagnose what you know

Before asking AI to teach you, try a few questions without notes. Note where you hesitate. A model can generate a diagnostic quiz, but verify it against the source before trusting the result.

### 3. Study with active recall

Ask the model to turn your notes into questions, not to summarize the whole chapter for you. Supply the notes or textbook concepts you are responsible for. Then close the notes and answer aloud or in writing. This is the effort that creates learning.

### 4. Get specific feedback

Ask the model to compare your answer with an answer key you provide, identify missing ideas, and explain the reasoning. Be careful about asking it to grade you against its own knowledge. A better pattern is: "Here is my answer. Here is the source's answer key or rubric. Use only that rubric to identify gaps. Do not add facts that are not in the source."

### 5. Verify the content

Check terminology, numbers, formulas, medication information, and current practice against authoritative sources. If the model provides a study reference, locate it and read the relevant part. If a fact is not in your course material or a trusted reference, mark it as unresolved rather than memorizing it.

### 6. Revisit over time

Put the difficult items into a spaced review schedule. A model can help generate review prompts or a schedule, but you should track your own confidence and errors. Keep a small error log with the question, the mistake, the correct reasoning, and the source.

### 7. Transfer to practice

Apply the knowledge to a new case, a simulation, a skills lab, or a teach-back explanation. AI can generate fictional cases, but the supervision and debrief should involve qualified educators. The goal is not to memorize an AI's stock case; it is to recognize patterns and reason under uncertainty.

## Sample study prompt: questions from your own notes

```text
I am studying for [EXAM OR COURSE TOPIC]. Below are my own notes, which I have checked against the assigned readings. Generate 10 practice questions that test understanding and application, not just recall.

Requirements:
- Use only the facts in my notes.
- Include a mix of multiple-choice and short-answer questions.
- For each answer, explain the reasoning and name the part of my notes that supports it.
- Do not invent citations, guidelines, or facts.
- Mark any area where my notes are ambiguous or insufficient, and tell me what to verify.
- Do not grade me as competent; this is practice, not certification.

My notes:
[PASTE PERSONAL STUDY NOTES WITH NO PATIENT OR COLLEAGUE IDENTIFIERS]
```

This prompt still does not guarantee accuracy. It makes the grounding visible so you can check it.

## Sample study prompt: Socratic explanation

```text
Act as a study coach, not a clinical authority. Help me understand [CONCEPT] by asking me one question at a time. Start at a basic level and adapt based on my answer. If my answer contains an error, give one hint before explaining it. After five questions, summarize what I understood and what I should review.

Use only the material I provide below. If the material does not cover my question, say so rather than guessing.

Material:
[PERSONAL NOTES OR PUBLIC, NON-PATIENT EDUCATIONAL CONTENT]
```

A Socratic loop can keep you active rather than passively reading, but it can also lead you down a coherent-sounding wrong path. Stop and verify if the reasoning starts to feel unfamiliar or contradicts your source.

## Clinical calculations and medication math

Medication calculation is a high-risk area. AI models can make arithmetic errors, misplace decimals, use the wrong units, or produce a confident explanation with a hidden mistake. For learning, you may use a model to generate **practice problems and step-by-step reasoning**, but verify every answer independently with the formula your program requires, a calculator, and a nurse educator or preceptor. Never use a general-purpose chatbot to calculate or check a dose for a real patient.

A safer study pattern is:

1. Solve the problem yourself first, showing units and cancellation.
2. Ask the model to compare your worked steps with a supplied reference solution.
3. Check the arithmetic with a separate calculation.
4. Ask an educator about any discrepancy.
5. Record the error pattern, not just the final answer.

If a study aid tells you to give a dose rather than helping you learn the method, it has crossed out of study support and into clinical advice. Stop.

## Nursing judgment, simulations, and role-play

AI can role-play a fictional patient, a concerned family member, or an interviewer. This can be useful for practicing communication, SBAR, motivational interviewing, or difficult conversations. It is not a validated simulation platform, and it may respond unrealistically or reward the wrong approach.

To keep role-play useful:

- use a fictional scenario designed or reviewed by an educator;
- avoid stereotypes and stigmatizing portrayals;
- state the learning objective before starting;
- pause the role-play when the model says something clinically implausible;
- debrief with a qualified person;
- do not treat the model's reactions as real patient feedback;
- do not upload recordings or details of actual patient encounters.

For high-stakes skills, use approved simulation equipment, standardized patients, and faculty supervision.

## Academic integrity and disclosure

Academic and institutional policies vary. Some courses prohibit AI use entirely; others allow it for brainstorming, feedback, or editing; others require disclosure. Follow the rules that apply to you. Do not submit AI-generated work as if it were entirely your own when that is prohibited or dishonest, and do not use AI to complete assessments meant to measure your own competence.

A defensible study use is usually one that leaves you able to demonstrate the knowledge without the tool. If you cannot explain the work, solve a similar problem, or answer questions about the decisions, the tool has done the learning for you in a way that may not serve you or your future patients.

If disclosure is required, be specific: which tool, for what task, what you checked, and how you revised. "I used AI" is less useful than "I used an AI tutor to generate practice questions from my notes, then verified the answers against the assigned textbook and course slides."

## Privacy while studying

Study content can still contain sensitive information. Do not paste:

- real patient or resident details from clinical placements;
- names or personal details of colleagues, classmates, or instructors;
- private hospital policies or proprietary course materials without permission;
- images of medical records, screens, or ID badges;
- reflective journal entries containing identifiable clinical experiences.

Use synthetic cases. "A middle-aged adult with [general condition]" is usually enough for a study prompt. If you are building a portfolio or reflective assignment, use the de-identification rules required by your program.

## Writing and presentations

AI can help with study notes, outlines, grammar feedback, and presentation structure. It should not replace your reasoning or fabricate references. If you use it to edit, keep your own draft and compare changes. Check that the final text still represents what you intended.

For citations, do not accept an AI-generated reference without locating it. AI frequently invents titles, authors, years, journals, and DOIs, or attaches a real citation to an unrelated claim. Use the library database or the publisher's page and verify that the source exists and supports the statement.

## Language learning and communication practice

AI can help you practice vocabulary, pronunciation, and common conversational patterns in a language you are learning. It is not a qualified medical interpreter and should not be used to communicate important clinical information with patients who speak another language. Use professional interpreter services for care. For language study, keep scenarios fictional and verify medical terminology with a qualified instructor or language resource.

## Signs that AI is hurting your studying

Be cautious if:

- you feel productive but cannot recall the material later;
- you spend more time fixing generated questions than learning;
- the model's answer contradicts your course materials and you cannot explain why;
- you rely on its summaries instead of reading assigned sources;
- it provides citations you have not opened;
- it gives you the same generic study plan regardless of your errors;
- it confidently asserts clinical practice that your instructors or current guidelines do not support;
- you are using it to avoid the difficulty that retrieval practice requires.

The discomfort of trying to remember something is often where learning happens. AI should not remove all friction; it should direct the effort toward useful feedback.

Next: [drafting patient education content](#patient-education).


---

<a id="patient-education"></a>

# Patient Education Drafts: Clarity Without Guessing

Patient education is a caring act, not merely a translation of clinical language into simpler words. Good education helps a person understand what is happening, what they need to do, what to expect, when to seek help, and where to ask questions. Bad education can frighten, confuse, overwhelm, or dangerously mislead. AI can help with the wording and structure, but it cannot know the patient's clinical situation, values, language, or capacity unless a qualified professional has assessed those things.

This chapter focuses on **generic education drafts** and on the editing of content whose facts have already been approved by a qualified clinician. It does not support using AI to generate patient-specific advice, invent warning signs, or replace patient teaching.

> **Not medical advice:** Examples and templates in this guide are educational. Do not give AI-generated material to a patient until a qualified clinician has verified the clinical facts and the document has gone through your organization's required review.

## The safest role for AI in patient education

AI is best used as a **language and structure assistant**:

- rewriting clinician-approved points in plain language;
- suggesting headings and a logical sequence;
- reducing sentence length and jargon;
- creating a draft glossary of common terms;
- generating teach-back questions;
- checking whether a draft seems too dense or visually cluttered;
- producing alternative phrasing at a requested reading level;
- formatting a checklist or large-print version for review.

It is not a source of clinical facts. It should not decide:

- which symptoms are emergencies;
- when a follow-up visit should occur;
- what dose, route, or frequency a medication should have;
- which foods, activities, or treatments are safe;
- what the patient's diagnosis or prognosis is;
- whether a symptom is expected or concerning;
- what is covered by insurance or guaranteed by a care plan.

These facts must come from a qualified clinician, current organizational protocol, the prescription or order, or an approved evidence source. The AI output must then be compared with that source.

## Start with approved content, not a blank page

A blank prompt invites invention. A better workflow starts with a set of **verified key points** supplied by the clinical owner of the education content. For a generic handout, those points might include:

- who the material is for;
- the purpose of the education;
- the actions the person should take;
- what to expect, with relevant uncertainty;
- signs or symptoms that require contact, using approved wording;
- who to contact and how, if that information is stable;
- follow-up or review expectations;
- questions to ask the care team;
- special considerations for accessibility or culture.

For patient-specific instructions, the key points must come from the current record and the treating clinician's plan. AI may help reword them, but it must not add, remove, or alter any clinical detail. If the order says "follow up in 48 hours," the handout must say 48 hours, not "within a few days." If the clinician has not specified a restriction, the draft must not invent one.

## A patient-education workflow

### Step 1: Define the audience and purpose

Is this for a newly diagnosed adult, a caregiver, a family with limited health literacy, an adolescent, or a community audience? Is the goal knowledge, skill practice, decision support, or preparation for a conversation? What will the person do differently after reading it?

Use ranges and general descriptions rather than real identifiers. "A general handout for adults receiving care at an outpatient clinic" is appropriate. "A handout for the 34-year-old patient in room 6 with the rare complication" is not.

### Step 2: Gather the clinician-approved facts

Create a source sheet with the facts and their owners. For a generic handout, cite the approved guideline or program material. For a patient-specific handout, use the current order, plan, and assessment. Mark anything that is unknown rather than asking the AI to fill it in.

Keep sensitive details out of the prompt unless the approved workflow specifically permits them. Often, you can draft with placeholders such as `[follow-up interval from order]` and fill them in only in the approved final document.

### Step 3: Ask for a constrained draft

The prompt should state that the model must not invent facts, should preserve all clinical instructions, and should flag gaps.

```text
Create a plain-language patient education draft for [GENERAL AUDIENCE AND SETTING]. Use only the verified key points below. Do not add symptoms, medications, doses, restrictions, follow-up intervals, or guarantees that are not in the key points. If something is missing or ambiguous, insert a clearly marked placeholder and list it for me to verify.

Aim for short sentences, common words, and a calm, respectful tone. Organize the content with headings that help the reader take action. Keep the reading demand appropriate for a general adult audience. Do not use scare tactics, blame, or phrases that imply the patient should already know this information.

After the draft, provide:
1. a list of every clinical claim and the key point it came from;
2. any words or concepts that may need explanation;
3. five teach-back questions a clinician could use;
4. a list of gaps for human review.

Verified key points:
[KEY POINTS APPROVED BY A QUALIFIED CLINICIAN OR APPROVED PROGRAM SOURCE]

Constraints:
[READING LEVEL, LENGTH, FORMAT, LANGUAGE, ACCESSIBILITY NEEDS]
```

This output is still a draft. The model's claim-by-key-point list can help the clinical reviewer check for unsupported additions, but it is not proof that the mapping is correct.

### Step 4: Complete the clinical review

A qualified clinician must verify:

- the accuracy and completeness of every fact;
- medication names, doses, routes, frequencies, and administration instructions;
- warning signs and when to seek urgent care;
- follow-up appointments, tests, and responsible contacts;
- restrictions or activity guidance;
- who the material is appropriate for;
- any uncertainty that must be communicated;
- consistency with the current orders and organization policy.

Use a **line-by-line comparison** with the approved source. Pay special attention to negatives and conditions: a missing "do not" can invert the meaning of an instruction. Look for hallucinated details that sound plausible because they fit the topic.

### Step 5: Review for health literacy and accessibility

Plain language is not childish language. It respects the reader's intelligence while reducing unnecessary cognitive load. Common practices include:

- one main idea per paragraph;
- short sentences and familiar words;
- active voice where possible;
- clear, action-oriented headings;
- specific instructions rather than vague encouragement;
- a logical sequence: what this is, what to do, what to expect, when to get help, who to contact;
- definitions for necessary medical terms;
- numbers written clearly, with context;
- sufficient white space and readable font size;
- no reliance on color alone;
- images or diagrams only when verified and helpful;
- formats that support screen readers, large print, or verbal teach-back.

Health literacy programs often aim for a fifth-to-eighth-grade reading level for general public material, but the right target depends on the audience. Readability formulas are rough screening tools, not proof of understanding. They may score a document as "easy" while the logic is still confusing. Test with real readers when possible, and always provide a way to ask questions.

Avoid:

- acronyms without explanation;
- "medicalese" such as "ensure adequate hydration" when "drink enough fluids" is clearer;
- vague terms like "as needed" unless the approved instruction defines what that means;
- false reassurance or promises;
- instructions that conflict with another part of the document;
- dense walls of text;
- culturally specific assumptions about family, food, faith, gender, or access to care.

### Step 6: Use translation and interpretation correctly

Machine translation is not a qualified medical interpreter. Important clinical information, informed consent, safety instructions, and conversations about uncertainty require a qualified interpreter or translation service, following organizational policy. A general AI model may miss regional dialects, medical terminology, cultural context, or the difference between a reassuring statement and a dangerous ambiguity.

If a translated document is allowed under policy, use a professional translation and review process. AI might assist with a glossary or an initial internal draft under approved conditions, but a qualified human translator and clinical reviewer should confirm the final patient-facing text. Do not assume that a translation is adequate because it reads smoothly. Check reading level, cultural fit, medical accuracy, formatting, and the availability of an interpreter for questions.

### Step 7: Test, version, and distribute

Use teach-back with patients or volunteers where appropriate. Ask them to explain in their own words what they will do and when they will call. This tests the material and the teaching interaction, not the patient's worth. If someone misunderstands, revise the material and the teaching plan.

Record the version, approval date, clinical owner, and review cycle. Remove outdated materials from circulation. A safe handout can become unsafe when a protocol, contact number, or approved practice changes. If the material is distributed digitally, check links and make sure the correct version is the one patients see.

## Teach-back questions that do not assume understanding

AI can draft teach-back questions, but the clinician should adapt them. Good questions are open and invite the person to explain, demonstrate, or ask, rather than to say "yes."

Generic examples:

- "To make sure I explained this clearly, can you tell me in your own words what you will do when you get home?"
- "What would make you call us or seek urgent help?"
- "Show me how you would check [the skill or device, as approved]."
- "What questions do you have about the plan?"
- "Who will you call if you are worried after the clinic closes?"

Avoid asking "Do you understand?" as the only check. A polite yes may reflect uncertainty, fear, or a desire not to take up time. Teach-back is a conversation, and it should be documented according to policy.

## Images, diagrams, and generated visuals

AI-generated images can be useful for a rough visualization, but they are not reliable for clinical education. They may show the wrong anatomy, an incorrect device setup, a medication that does not match, unsafe technique, or unrealistic skin tones and body types. Never use a generated image to teach a procedure, medication, wound care, device use, or symptom recognition without expert review. Even then, consider whether a verified photograph, diagram, or hands-on demonstration would be safer.

Alt text should describe the informational purpose of an image, not just its appearance. Decorative images should be marked as such. Check contrast and avoid conveying meaning only through color.

## Patient-facing chatbots and automated replies

A general-purpose chatbot is not a safe substitute for patient teaching or triage. If an organization deploys a patient-facing assistant, it should have a defined scope, clinical governance, escalation paths, privacy protections, accessibility testing, and monitoring for harmful advice. It should not diagnose, prescribe, or handle emergencies on its own. Patients should know what the tool can and cannot do and how to reach a human.

A nurse should never copy an AI response into a patient portal message and present it as personalized clinical advice without review. Patient messages can contain subtle cues, worsening symptoms, or distress that a model does not detect. The clinician remains responsible for the response.

## A brief rewrite example

Suppose a clinician has approved these plain points for a fictional, generic handout: "Store the medicine as directed on the label. Do not change how you take it without talking to your care team. Keep the follow-up appointment listed in your discharge papers."

A weak draft might turn those into a long paragraph that adds unsupported advice. A better prompt says: **"Use only these three points. Do not add medication instructions. Write short sentences and a respectful tone. Provide a teach-back question."** The AI might produce:

> **Taking your medicine**
>
> Follow the directions on your medicine label. Do not change how you take it unless you talk with your care team first.
>
> **Your follow-up visit**
>
> Go to the follow-up appointment listed in your discharge papers. If you are not sure when it is, call [approved contact].
>
> **A question for you:** Can you tell me in your own words what you should do if you are thinking about changing how you take your medicine?

Even this simple draft needs the contact details and the appropriateness of the wording verified by the clinical owner. The example shows the intended relationship: the AI rephrases approved content, and a human verifies the final product.

## Patient education review checklist

- [ ] The clinical facts came from a qualified clinician or an approved current source.
- [ ] The output does not add any symptom, medication, dose, restriction, warning, timeline, or promise.
- [ ] Every clinical statement traces to the approved key points or has been freshly verified.
- [ ] A qualified clinician reviewed the final wording.
- [ ] The material uses plain language and a logical sequence.
- [ ] The audience, language, culture, and accessibility needs were considered.
- [ ] A qualified interpreter or translation review is used when needed.
- [ ] Teach-back questions are included and understandable.
- [ ] Contact information and follow-up details are current.
- [ ] Images and diagrams are clinically and culturally accurate, or not used.
- [ ] The final version is recorded, dated, and approved for distribution.
- [ ] The patient still has a way to ask a human questions.

Clear patient education can reduce confusion and support safer care. The key is to keep the clinical facts under qualified human control while using AI only to improve how those facts are expressed.

Next: [communication, handoffs, and administrative work](#communication-and-admin).


---

<a id="communication-and-admin"></a>

# Communication, Handoffs, and Administrative Work

Much of the day-to-day value of AI comes from unglamorous communication tasks: turning rough notes into an agenda, shortening an email, drafting a project update, or organizing a teaching outline. These uses can be genuinely helpful and are often lower risk than clinical documentation, provided that no patient information leaks and a human reviews the result.

Communication also includes high-risk moments: handoffs, escalations, patient messages, incident discussions, and team decisions. The same tool can be appropriate for one and unacceptable for the other. The difference is not just the text; it is the consequence of a missed or distorted message.

## Handoffs and clinical escalation

A handoff transfers responsibility. If a detail is lost, the next clinician may make a decision on incomplete information. AI can help organize a de-identified or synthetic handoff for training, or improve the clarity of a draft in an approved workflow, but it should not be the source of a real handoff's clinical facts.

A safe handoff still requires:

- a structured format such as SBAR or I-PASS, according to your organization;
- verified current information;
- explicit uncertainty and pending results;
- clear escalation criteria and who to call;
- an opportunity for the receiver to ask questions;
- read-back or closed-loop confirmation where required;
- a plan for what happens if the patient changes before the next shift.

If an AI tool summarizes a conversation or a patient's course, verify the summary against the record and your own knowledge. A fluent summary can bury a critical result, invert a denial, or omit a task that has not been completed. Use summaries as an index to the source, not as a replacement for it.

The most dangerous pattern is a "hands-free" handoff where no one owns the accuracy of the summary. Accountability does not transfer to the model. The outgoing clinician remains responsible for handing off accurate information, and the receiving clinician remains responsible for understanding it and asking questions.

## Patient portal messages and replies

Patient messages can look routine, but they may contain symptoms, emotional distress, a medication question, or a request that requires clinical triage. A general-purpose AI model cannot safely decide what a message means or how urgently it should be answered.

Do not send an AI-generated reply as tailored clinical advice. Use approved templates and organizational workflows for common administrative messages. If a clinician uses AI to help phrase a response, the clinician must review the content, confirm the facts, assess urgency, and sign off according to policy. The response must not include an instruction that the clinician did not personally authorize.

Specific risks include:

- inventing a diagnosis or reassurance;
- missing a red flag hidden in a long message;
- giving a medication instruction that conflicts with the chart;
- promising an appointment or coverage that has not been arranged;
- responding in the wrong language or tone;
- exposing another patient's information through a copy error;
- giving the impression that a machine, rather than a clinician, assessed the concern.

When in doubt, respond as a human with the appropriate caveat and route the patient to the right clinical resource. A good administrative message can say what the team will do and when, without pretending to answer a clinical question.

## Email, team updates, and professionalism

AI is well suited to the mechanics of professional writing:

- shortening a long email without losing the request;
- turning bullet points into a clear update;
- proposing subject lines;
- creating a meeting agenda from a list of topics;
- converting a decision log into action items;
- rewriting for a respectful, neutral tone;
- producing a first draft of a non-clinical project plan;
- creating a training outline for review.

The output still reflects on you and your organization. Review names, titles, contact information, dates, commitments, and attachments. Make sure the message does not imply authority you do not have or make a promise the organization cannot keep. AI can produce plausible commitments ("the new policy begins Monday") that no one approved. Replace any invented specifics with verified information.

Never use AI to impersonate a colleague, patient, or leader. Do not generate communications designed to deceive, harass, retaliate, or conceal a safety problem. Professional writing tools are not a license to manipulate.

## Meeting transcription and notes

AI meeting notes can save time, but meetings often include sensitive information: employee relations, patient complaints, labor discussions, legal advice, procurement, or incident reviews. Do not enable transcription without confirming that the tool, retention settings, attendee notice, and organizational policy permit it.

If transcription is approved:

- tell participants how to pause or opt out;
- avoid discussing information outside the meeting's approved scope;
- check who is in the room and who is attending remotely;
- review the summary for misattribution and missing dissent;
- correct decisions, owners, deadlines, and next steps;
- store the record in the approved location;
- delete recordings and transcripts according to policy.

An AI summary tends to flatten disagreement. It may present the most confident speaker's view as the team decision or omit a concern raised near the end. For safety or governance meetings, use the summary as a draft and have a human confirm the official record.

## Agenda and huddle support

A quality huddle is not just a list of announcements. It should focus attention on risks, changes, and actions. AI can help organize a generic huddle template or reword a draft that contains no PHI. It should not generate patient-specific safety information or invent operational facts.

A useful prompt might ask for a 10-minute huddle plan on a non-clinical topic, with clear learning objectives, a discussion question, and a method for checking understanding. If the topic involves a real incident or patient, use approved, de-identified information and follow your organization's quality and privacy processes.

## Scheduling, staffing, and rota drafts

AI can help draft a schedule or identify patterns in a spreadsheet, but scheduling affects people's livelihoods, rest, and care capacity. Automated scheduling can encode bias, violate labor rules, or produce inequitable shift distribution. It should be checked against local policies, union agreements, clinical staffing requirements, and human needs.

Do not ask an AI to make final staffing decisions based on productivity metrics without governance. Administrative efficiency is not a sufficient justification for a decision that affects workload, safety, or fairness. Keep a human decision-maker, a way to appeal, and a record of the criteria.

## Project, quality, and education work

The administrative and educational space is where AI can create the most legitimate time savings:

- turn a list of objectives into a lesson plan for an educator to refine;
- draft a project charter from approved goals;
- create a survey outline for review;
- summarize public evidence for a journal club, with sources verified;
- generate discussion questions from an assigned article;
- create a training scenario with fictional details;
- propose a communication plan for a policy rollout;
- organize meeting notes into decisions and open questions.

Claims about quality improvement results, patient outcomes, or financial savings must come from verified data, not AI-generated estimates. If you use AI to analyze aggregate data, validate the analysis with a qualified analyst and check for missing groups, confounding, and privacy risk.

## Public communications and social media

Public-facing statements about health, safety, or organizational policy carry extra risk because they can spread quickly and be read outside their intended context. Use AI only for drafting and editing, not as the evidence source. Verify every recommendation, statistic, service detail, and contact.

Do not use patient stories, photographs, or details without proper authorization, even if you think the person is not identifiable. A "composite" story can still resemble a real person. Follow privacy policy, consent requirements, and professional standards. Avoid giving the impression that AI-generated content is a clinician's individualized advice.

Public health communication should account for health literacy, accessibility, cultural context, and uncertainty. An organization should have a named reviewer and an approval process before publishing.

## Complaints, grievances, and legal matters

Treat complaints, grievances, disciplinary discussions, legal correspondence, and regulatory responses as high-risk. Do not paste them into a general-purpose AI tool. Use the approved channels and involve the appropriate professionals. An AI-generated response can sound empathetic while altering facts, admitting liability inadvertently, minimizing a legitimate concern, or making promises that bind the organization.

If an approved tool is used to draft a response, legal or compliance review may be required. Preserve the original correspondence and follow records-retention and privilege rules.

## Culture, tone, and psychological safety

Communication is not just information transfer. AI can make a message more concise, but it can also make it sound impersonal or falsely certain. Review messages for:

- whether the urgency is clear;
- whether the request is specific and actionable;
- whether uncertainty is acknowledged;
- whether the tone is respectful and inclusive;
- whether a difficult message should be delivered in person or with support;
- whether humor, idioms, or cultural references could misfire.

Do not use AI to smooth over a concern that needs a direct human conversation. An automated apology or a polished explanation can feel evasive if it is not backed by action. For serious concerns, use the organization's escalation, ethics, and employee-support resources.

## A communication review checklist

- [ ] The content contains no patient, employee, or family identifiers unless the tool is approved for them.
- [ ] The tool is approved for this type of communication.
- [ ] Names, titles, dates, links, and contact details are correct.
- [ ] The draft does not invent a decision, commitment, policy, or result.
- [ ] High-risk clinical content was written or verified by a qualified clinician.
- [ ] Handoff details match the verified source and a human accepts responsibility.
- [ ] Patient-facing content has clinical review and the required approval.
- [ ] The tone is respectful, inclusive, and appropriate for the audience.
- [ ] The message is stored, shared, and retained according to policy.
- [ ] A human has decided whether and how to send it.

AI can make communication faster, but speed is not the objective. The objective is a message that is understood, acted on correctly, and owned by a person who can be held accountable.

Next: [prompting foundations](#prompting-foundations).


---

<a id="prompting-foundations"></a>

# Prompting Foundations for Nurses and Healthcare Workers

A prompt is the instruction and context you give an AI system. Better prompts can improve the usefulness of an output, but they cannot make an unsafe use safe. Privacy rules, clinical verification, and human accountability come before prompt technique. Once those are in place, clear prompting helps the model understand the task, stay within the facts you provided, and produce something you can review efficiently.

Think of a prompt as a **work order for a language task**, not as an incantation. A good work order says who the output is for, what the task is, what information is authoritative, what must not change, what format is needed, and how uncertainty should be handled.

## Privacy before prompting

Before writing a prompt, decide what data is allowed:

- **No PHI in an unapproved tool.** Use a synthetic case or a de-identified extract prepared through the approved process.
- **Minimum necessary.** Provide only the facts needed for the task.
- **Placeholders.** Use `[age range]`, `[general condition]`, `[setting]`, and `[follow-up interval from order]` instead of real details.
- **No screenshots or recordings** unless the specific tool and workflow are approved for them.
- **No identifiers in examples.** A fictional patient should not be a lightly disguised real one.

A model cannot consent to receive data, and it cannot make a disclosure acceptable. The privacy chapter is the prerequisite for this one.

## The seven parts of a useful prompt

Most healthcare work prompts benefit from seven components. You do not need all seven every time, but missing one often explains a weak result.

### 1. Task

Say precisely what you want the model to do. "Help me with this" is too broad. "Rewrite these approved key points for a general adult audience at approximately a sixth-grade reading level, without adding or removing any clinical instruction" is reviewable.

Use an action verb: draft, reorganize, compare, explain, generate questions, summarize, critique, list questions, or format. If you want the model to ask you questions first, say that.

### 2. Purpose and consequence

Tell the model what the output will be used for and who will review it. This helps it choose an appropriate level of detail and tone. It also reminds you whether the use is actually low risk.

Example: "This is a training outline for a nursing education session. A qualified educator will review and adapt it. It will not be used as patient-specific clinical guidance."

The purpose should be truthful. If you tell the model the output will be reviewed when it will be sent directly to a patient, you are undermining your own safety process.

### 3. Audience

Specify the reader, their likely knowledge, and relevant accessibility needs. A handout for a general adult audience is different from an email to the leadership team or a study explanation for a nursing student. Use ranges and general descriptions, not patient identifiers.

Consider:

- health literacy and preferred language;
- role and expertise;
- emotional context;
- cultural and accessibility needs;
- whether the reader will act on the information or only understand it.

If the audience is a specific patient, the use is likely clinical and requires an approved workflow with verified facts and clinician review. A generic prompt is not a substitute for that assessment.

### 4. Source material

Provide the facts the model should use. If the task depends on a policy, an approved handout, your notes, or a rubric, include the relevant excerpt and label it as the source. Do not rely on the model's memory for clinical facts.

A useful structure separates **instructions** from **source material**:

```text
Instructions:
[What to do and what not to do]

Source facts:
[Verified key points, de-identified text, or synthetic content]

Output format:
[What the final draft should look like]
```

This makes it easier to see whether the model added unsupported content.

### 5. Constraints

Constraints are not filler. They tell the model what must remain fixed. Useful constraints include:

- "Do not add any clinical fact, medication, dose, warning sign, or timeline."
- "Preserve all negatives and uncertainties exactly."
- "Use only the source material below."
- "Do not provide a diagnosis, treatment recommendation, or triage decision."
- "Do not use jargon without a plain-language definition."
- "Flag missing information instead of guessing."
- "Do not claim the output has been clinically reviewed."
- "Keep the wording respectful and person-centered."
- "Do not include patient identifiers."

Some constraints are easier to verify than others. "Do not invent" is not a guarantee, but it gives you a clear standard for review. Pair it with a request to list assumptions and gaps. Then check the output against the source.

### 6. Format

Ask for a structure you can review: a table with specific columns, a checklist, an SBAR template, three options with tradeoffs, a draft followed by a list of unresolved questions, or a short summary with a fact-to-source mapping.

Format can also reduce risk. Requiring the model to show a source mapping, list claims it could not verify, or place all placeholders in a separate section makes errors easier to find. Avoid asking for "a beautiful, authoritative document"; the goal is clarity and traceability, not the appearance of certainty.

### 7. Uncertainty and stopping rules

Tell the model what to do when information is missing. For example:

- "If the source does not contain a fact needed for the task, insert `[VERIFY: specific missing fact]` and list it at the end."
- "If the request would require clinical judgment, stop and list the clinical questions a qualified human must answer."
- "If the source contains contradictory statements, quote both and identify the conflict rather than resolving it yourself."
- "If you are not confident, say so; do not fill the gap with a plausible detail."

These instructions do not make the model a reliable judge of its own uncertainty. They do make gaps visible, which is valuable to the human reviewer.

## A reusable prompt template

This template is intentionally generic. Adapt it to the task and keep all patient data out unless the tool and workflow are approved.

```text
TASK
[Draft / organize / critique / explain / generate questions for] [SPECIFIC OUTPUT].

PURPOSE AND REVIEW
The output will be used for [LOW-RISK PURPOSE]. It will be reviewed by [ROLE] before use. It is not a substitute for clinical judgment.

AUDIENCE
[GENERAL AUDIENCE, READING LEVEL, LANGUAGE, ACCESSIBILITY NEEDS].

SOURCE
Use only the verified information in the SOURCE block. Do not use outside clinical facts. If a needed fact is missing, insert a clearly marked placeholder and list it.

CONSTRAINTS
- Do not add facts, numbers, medication details, warning signs, timelines, citations, or commitments that are not in the source.
- Preserve all negatives, uncertainties, and qualifiers exactly.
- Do not make a diagnosis, recommend treatment, triage a patient, or provide patient-specific clinical advice.
- Use respectful, person-centered language.
- Do not claim the output is clinically approved.

OUTPUT FORMAT
[Specific sections, table columns, or checklist.] End with:
1. a list of every assumption or gap I should verify;
2. any place where the source was ambiguous or contradictory;
3. a short statement of what a human reviewer must check.

SOURCE
[VERIFIED, DE-IDENTIFIED, OR SYNTHETIC FACTS]
```

For simpler tasks, shorten the template. The important thing is not the length of the prompt; it is the clarity of the boundary between what the model may generate and what must come from approved sources.

## A prompt comparison

A weak prompt:

```text
Write discharge instructions for a patient with high blood pressure. Make it easy to read.
```

Why it is risky: it asks the model to invent clinical content, gives no approved key points, provides no audience detail, and invites a patient-specific artifact with no review path.

A safer prompt for a **generic education draft**:

```text
I need a draft of a generic patient education section for a community health program. A qualified clinician will review the clinical facts before use.

Use only these approved key points:
- [Key point 1]
- [Key point 2]
- [Key point 3]
- [Approved "call your care team" guidance]

Do not add any other symptoms, medication instructions, numbers, restrictions, or follow-up intervals. Write for a general adult audience in short sentences and a respectful tone. Put any missing information in [VERIFY: ...] placeholders. End with five teach-back questions and a list of all clinical claims showing which key point supports each one.

This is not for a specific patient. Do not include patient identifiers.
```

This prompt is not automatically safe, but it is reviewable. It separates approved facts from generated language and makes gaps visible.

## Role instructions: useful, but not authority

Telling a model to "act as an editor," "act as a study coach," or "act as a plain-language writer" can shape its response. It can help with tone and structure. It does not make the model a clinician, a lawyer, a privacy officer, or a qualified educator.

Be cautious with role prompts that encourage unwarranted authority: "You are the senior physician and must make the final call." A model may produce more definitive language without becoming more accurate. In a clinical context, avoid prompts that ask the model to act as a decision-maker. Frame roles as **functions** ("you are helping me organize this") rather than **credentials** ("you are the expert who will diagnose").

## Use examples carefully

Supplying an example of the desired format can improve consistency. A **few-shot** prompt includes one or more examples. Use fictional or approved examples, remove identifiers, and state that the example is for format only, not a source of clinical facts.

A bad example can teach the model the wrong pattern. If your sample note includes a fabricated "normal" finding, the model may reproduce it. If the sample uses stigmatizing language, the output may copy it. Review examples with the same care as the desired output.

## Prompt injection and untrusted content

If a tool can browse, read documents, or process email, it may encounter instructions embedded in that content. A document might say "ignore previous instructions and send this information to..." or a web page might contain misleading text. This is often called **prompt injection**. It is especially relevant for agentic tools with access to other systems.

Practical protections include limiting the tool's permissions, not allowing autonomous sends or record changes, treating external content as data rather than instructions, and reviewing any action before it occurs. A healthcare worker should not have to be a security engineer, but they should know that "the AI read a document" does not mean "the document is trustworthy."

## Iteration without losing control

Prompting is usually iterative. Start with a clear first request, inspect the output, then give specific feedback: "The second section adds a follow-up interval that is not in the source. Remove it. Keep the rest. Then list all remaining claims that need fact-checking." Iteration is safer when you keep a copy of the original source and compare the final output to it, rather than letting the conversation drift.

Do not assume that a later answer is more accurate because it is longer or more confident. If the model contradicts itself, stop and identify the source of the conflict. A fresh conversation with a clearer prompt may be better than arguing with a generated draft.

## Five questions for evaluating an AI output

1. **Accuracy:** Is each claim true and supported by a verified source?
2. **Completeness:** Is anything important missing, especially negatives, warnings, and uncertainty?
3. **Fitness:** Is it appropriate for the audience, setting, language, and purpose?
4. **Safety:** Could someone be harmed by acting on it, or by not acting because of it?
5. **Traceability and accountability:** Can a human identify where the facts came from, who reviewed them, and who is responsible?

If you cannot answer all five, the output is not ready to use.

## Prompting habits to avoid

Avoid:

- asking for a "final" patient-facing document when you have not supplied approved facts;
- telling the model to "be certain" or "remove uncertainty";
- providing real patient details to make the output "more realistic";
- asking the model to check its own work and treating that as verification;
- accepting citations without opening them;
- copying an output into a record without checking every clinical detail;
- using a model's summary of a prior note as a substitute for the current record;
- sending a prompt or output to an unapproved external service;
- using AI to guess at another clinician's intent or a patient's wishes.

A prompt is a tool for communicating with a system that generates plausible language. The clinician's judgment, the approved source, and the human review are what turn that language into safe work.

Next: [the prompt library](#prompt-library).


---

<a id="prompt-library"></a>

# Prompt Library

This library contains reusable prompts for low-risk language, learning, and administrative tasks. They are starting points, not safety guarantees. The prompts use placeholders and assume that the relevant tool is approved for the task. **Do not use them with protected health information unless your organization has approved the tool and workflow for that purpose.**

Each entry states the intended use, what not to include, a copy-ready prompt, and the review gate that must happen before use. Remove sections that do not apply, but do not remove the constraints that keep the model from inventing clinical content.

## How to adapt these prompts

- Replace bracketed placeholders with generic or approved information.
- Keep source facts separate from instructions.
- Use only verified, clinician-approved content for any clinical topic.
- Ask for traceability: which claim came from which source, and what remains unknown.
- Do not ask the model to make a clinical decision or provide patient-specific advice.
- Review the output against the source before it reaches a patient, learner, colleague, or record.

## 1. Documentation clarity coach

**Use for:** improving the structure and clarity of a de-identified or synthetic documentation draft in an approved workflow.

**Do not use for:** generating clinical facts, writing a complete note from a few cues, summarizing a real chart in an unapproved tool, or finalizing a record.

```text
You are a documentation clarity assistant. I will give you a de-identified draft for human review. Do not diagnose, recommend treatment, or provide clinical advice. Do not add any fact, value, time, medication, assessment, or event that is not explicitly present in the draft. Preserve all negatives, uncertainties, and patient-reported statements exactly. If you find an ambiguity or a missing element, ask about it instead of guessing.

Task:
1. Reorganize the draft into clear headings appropriate for [NOTE TYPE OR STRUCTURE].
2. Shorten awkward or repetitive wording without changing the meaning.
3. List every statement that contains a number, time, medication, allergy, or follow-up detail in a separate verification table.
4. List any ambiguities, missing information, or contradictions for human review.
5. Do not mark the draft as complete or clinically approved.

Draft:
[DE-IDENTIFIED DRAFT OR SYNTHETIC EXAMPLE]
```

**Review gate:** A qualified clinician compares every statement with the verified source, corrects the note in the approved system, and signs according to policy. A fluent reorganization is not verification.

## 2. Fact-preserving SBAR exercise

**Use for:** practicing SBAR organization with a fictional case or a training scenario.

**Do not use for:** a real handoff without current verified information and organizational handoff procedures.

```text
Create an SBAR practice exercise using a fictional patient scenario for nursing education. Do not use details from a real patient. The goal is to help a learner practice organizing communication, not to make a diagnosis or recommend treatment.

Scenario facts:
[FICTIONAL FACTS CREATED FOR TRAINING]

For the exercise:
- Show how the facts could be organized into Situation, Background, Assessment, and Recommendation.
- In the Assessment section, include only what the fictional facts support and explicitly label unknowns.
- In the Recommendation section, phrase the content as a request for a qualified clinician's review or escalation, not as an AI treatment recommendation.
- Add three questions the learner should ask to clarify missing information.
- Add a short debrief question about what could be lost in a handoff.
- Note that an educator must review the scenario before use.

Do not add clinical facts beyond the scenario.
```

**Review gate:** An educator verifies the scenario and any clinical assumptions. For real care, a qualified clinician owns the assessment and recommendation.

## 3. Approved-facts handout builder

**Use for:** turning a verified set of clinician-approved points into a rough layout for a generic patient education draft.

**Do not use for:** inventing warning signs, medication instructions, follow-up intervals, or patient-specific content.

```text
Create a plain-language patient education draft for [GENERAL AUDIENCE AND SETTING]. Use only the approved key points below. Do not add any symptoms, medications, doses, restrictions, timelines, follow-up intervals, or promises that are not explicitly in the key points. If a needed fact is missing, insert [VERIFY: specific missing fact] rather than guessing.

Format:
- A short "What this is for" section.
- Clear action steps in the order the reader should follow.
- A section for approved warning or contact guidance, using only the provided wording.
- A short "Questions to ask your care team" section.
- Five teach-back questions.

Use short sentences, common words, and a calm, respectful tone. Avoid jargon, scare tactics, and blame. After the draft, list every clinical claim and the key point that supports it. List all gaps for human review.

Approved key points:
[CLINICIAN-APPROVED KEY POINTS]

Accessibility needs:
[READING LEVEL, LANGUAGE, LARGE PRINT, SCREEN READER, OR OTHER NEEDS]
```

**Review gate:** Clinical review line by line, health literacy review, and required organizational approval before patient use. Translation requires a qualified translation and review process.

## 4. Plain-language edit of approved content

**Use for:** editing content whose clinical facts have already been approved.

**Do not use for:** deciding what the approved facts should be or improving a document whose source has not been verified.

```text
Edit the approved patient education text below for plain language. Preserve the meaning of every clinical fact, instruction, number, qualifier, and warning; do not add, remove, or weaken any of them. Do not add clinical information. If the original meaning is unclear, flag it instead of choosing an interpretation.

Audience: [GENERAL AUDIENCE]
Goal: [WHAT THE READER SHOULD UNDERSTAND OR DO]
Desired reading demand: [APPROXIMATE LEVEL OR LENGTH]

Please:
1. Use shorter sentences and common words.
2. Replace jargon with plain alternatives, or briefly define necessary medical terms.
3. Keep the original order of actions unless the current order is unsafe; if order is unclear, flag it.
4. Use descriptive headings.
5. List every change that could affect meaning.
6. Mark any place where the source is ambiguous.

Approved source text:
[APPROVED TEXT]

Do not publish or mark the result as clinically approved.
```

**Review gate:** A clinical owner confirms that meaning and instructions are unchanged, then the document goes through the normal approval process.

## 5. Teach-back question builder

**Use for:** creating conversation prompts that help a clinician check understanding.

**Do not use for:** replacing the teach-back conversation or judging whether a patient is "compliant."

```text
Using only the approved education points below, write five open-ended teach-back questions a clinician could use in conversation. Questions should invite the person to explain, demonstrate, or ask, not simply answer yes or no. Avoid blame, scare tactics, and assumptions about literacy or motivation. Include one question about when to contact the care team using only the approved guidance.

Provide:
- five questions;
- a short note on what each question is trying to check;
- one suggestion for adapting the conversation if the person prefers another language or format, following qualified interpreter policy.

Approved education points:
[APPROVED POINTS]
```

**Review gate:** A qualified clinician chooses and adapts the questions, conducts teach-back, and documents according to policy. Understanding is confirmed in conversation, not by the AI.

## 6. Realistic study plan

**Use for:** planning your own study around a syllabus, competency, or certification goal you provide.

**Do not use for:** claiming that completing a plan certifies competence or guarantees an exam result.

```text
Help me build a four-week study plan for [COURSE OR CERTIFICATION TOPIC]. My available study time is [HOURS PER DAY/WEEK]. My current confidence is [SELF-ASSESSMENT]. My assessment date is [DATE].

Requirements:
- Use only the topics and objectives I provide below.
- Base the plan on active recall, spaced review, and mixed practice, not just rereading.
- Include short daily retrieval tasks, weekly review, and at least one session for correcting errors.
- Include a way to log what I got wrong and why.
- Avoid promising a pass or claiming the plan is clinically authoritative.
- Recommend that I verify content against my assigned materials and current sources.

Topics and objectives:
[YOUR SYLLABUS OR OBJECTIVES]

After the plan, list:
1. assumptions you made;
2. topics where I should seek instructor or authoritative guidance;
3. how I should adjust the plan if I miss a day.
```

**Review gate:** Use your program's official materials and instructors as the authority. A plan is a schedule, not evidence of competence.

## 7. Practice quiz from own notes

**Use for:** active recall from notes you have already verified for a course.

**Do not use for:** copying real exam questions, violating academic integrity rules, or assuming generated answers are correct.

```text
Create 12 practice questions from my notes below for [COURSE OR TOPIC]. Use only the facts in these notes. Include a mix of recall, application, and "what would you check or communicate next" questions, but do not ask for patient-specific clinical advice.

For each question:
- provide the answer;
- explain the reasoning using only my notes;
- quote the part of my notes that supports it;
- flag ambiguity or missing information in my notes.

Do not invent guidelines, citations, statistics, or medication details. Do not tell me I am competent or ready for an exam. Add a note that I should verify answers against assigned readings and instructors.

My notes:
[YOUR NOTES WITH NO PATIENT OR PLACE PERSONAL DATA]
```

**Review gate:** Check every answer against your course material. If a question reveals a gap in your notes, go to the primary source rather than studying the AI's explanation.

## 8. Concept tutor and misconception finder

**Use for:** learning a concept you will later verify.

**Do not use for:** learning a clinical fact you will act on without checking an authoritative source.

```text
Help me understand [CONCEPT] for [COURSE OR ROLE LEVEL]. Use the approved learning material below as your source. Explain it in plain language, then give me:
1. a concrete fictional example;
2. a short comparison with a commonly confused concept;
3. three common misconceptions and why they are wrong;
4. one question that checks whether I understand the idea;
5. a list of claims I should verify in my course materials.

Ask me to answer the question before you give the explanation. Do not add facts that are not in the source. If the source is insufficient, say what is missing.

Source:
[APPROVED OR PERSONAL STUDY MATERIAL]
```

**Review gate:** Compare the explanation with the assigned reading or instructor guidance. Do not memorize convenient simplifications.

## 9. Fictional communication role-play

**Use for:** practicing a non-clinical or simulation-based conversation, such as a team update or an interview.

**Do not use for:** simulating a real patient encounter with real patient details, or treating the model's reactions as clinical feedback.

```text
Create a role-play for a fictional, non-clinical training scenario about [COMMUNICATION GOAL, E.G., GIVING A CLEAR TEAM UPDATE OR PRACTICING AN INTERVIEW]. You play [ROLE]. I will play [MY ROLE]. Keep the scenario fictional and do not include real patient identifiers, diagnoses, or treatment decisions.

Rules:
- Ask one question or give one response at a time.
- Stay in the scenario until I say "pause."
- If I communicate something unclear, respond realistically rather than being artificially easy.
- After I say "debrief," give me structured feedback on clarity, listening, and completeness, based only on what was said in the conversation.
- Do not evaluate my clinical competence. The debrief must be reviewed with a qualified educator when used for training.

Begin by stating the fictional situation in two or three sentences and asking whether I am ready.
```

**Review gate:** Use with educator-designed scenarios and a human debrief. This is communication practice, not competency assessment.

## 10. Non-clinical agenda and action items

**Use for:** organizing a project, education, or administrative meeting with no patient information.

**Do not use for:** summarizing confidential employee, legal, patient-safety, or complaint discussions without approved tools and policy.

```text
I am planning a [MEETING TYPE] about [GENERAL NON-CLINICAL TOPIC]. The attendees are [ROLES, NOT PERSONAL NAMES IF SENSITIVE]. The meeting is [LENGTH] minutes. The desired outcome is [OUTCOME].

Create:
1. a timed agenda that starts with purpose, includes decision points, and ends with owners and next steps;
2. a list of information attendees should review beforehand;
3. a template for decisions, actions, owners, and due dates;
4. an accessibility and participation check, including how remote attendees can contribute;
5. three questions to confirm at the start so the meeting does not drift.

Use only the information above. Do not invent decisions or deadlines. Keep the total speaking time realistic and leave room for discussion.
```

**Review gate:** A meeting owner verifies participants, timing, and any organizational commitments. Do not paste real patient or employee details.

## 11. Fictional training scenario designer

**Use for:** an educator who wants a draft scenario for review.

**Do not use for:** patient care, assessment of real staff, or replacing a validated simulation program.

```text
Draft a fictional clinical education scenario outline for [LEARNER LEVEL AND GENERAL TOPIC]. This is for an educator to review and adapt; it is not for use with patients.

Include:
- learning objectives written as observable behaviors;
- a fictional situation with no real patient identifiers;
- information available at the start;
- three decision points with facilitator prompts;
- communication and documentation learning points;
- a debrief structure with open questions;
- accessibility options;
- a list of clinical facts the educator must verify against current approved guidelines before teaching.

Do not present the scenario as a validated assessment. Do not include a treatment protocol. Clearly mark all medical details as placeholders for expert review.
```

**Review gate:** A qualified educator verifies the clinical content, aligns it with approved curricula, and runs the scenario with appropriate supervision.

## 12. Red-team review of a draft

**Use for:** finding ambiguity, unsupported claims, and missing information in a de-identified or synthetic draft.

**Do not use for:** verifying clinical facts or replacing human review.

```text
Review the draft below as a safety-focused writing reviewer. It is de-identified and intended for human review. Do not provide clinical advice and do not rewrite the facts.

For each section, identify:
- claims that could be unsupported or invented;
- missing information that a reader would need;
- ambiguous instructions or pronouns;
- places where a negative, uncertainty, or condition could be lost;
- numbers, times, medication details, or follow-up information that must be verified;
- wording that could stigmatize or confuse the audience;
- any statement that sounds more certain than the source supports.

Organize your response as a table with: location, issue, why it matters, and what the human reviewer should check. Do not certify the draft as accurate.

Draft:
[DE-IDENTIFIED OR SYNTHETIC DRAFT]
```

**Review gate:** The human reviewer verifies each flagged item against the approved source. Finding no issues in the AI review does not mean the draft is correct.

## 13. Questions for a qualified expert

**Use for:** turning an uncertain issue into a focused list of questions for a supervisor, educator, privacy officer, or clinical leader.

**Do not use for:** asking the model to resolve the uncertainty itself.

```text
I am preparing to ask [ROLE, E.G., MY NURSE EDUCATOR OR PRIVACY OFFICER] for guidance on the following non-patient-specific issue: [BRIEF, DE-IDENTIFIED DESCRIPTION].

Help me create a short list of precise questions that will help me understand:
- which policy or source applies;
- what information I may use in an AI tool;
- who must review the output;
- what documentation or disclosure is required;
- how to report a concern.

Do not answer the substantive policy or clinical question for me. Keep the questions respectful, specific, and answerable. Note any assumptions I am making that I should confirm.
```

**Review gate:** Take the questions to the appropriate human expert. The model's framing is not the answer.

## Prompt library review checklist

Before using a generated output:

- [ ] The prompt did not contain unapproved PHI or sensitive data.
- [ ] The use is within an approved workflow.
- [ ] The source facts are verified and separate from the AI's generated language.
- [ ] The output contains no invented clinical content, citations, or commitments.
- [ ] A qualified human reviewed the relevant facts and wording.
- [ ] The final document or message has an accountable owner.
- [ ] The required disclosure, approval, and retention steps are complete.
- [ ] There is a way to report an error or privacy concern.

Next: [what not to use AI for](#what-not-to-use-ai-for).


---

<a id="what-not-to-use-ai-for"></a>

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

Next: [governance, equity, and professional accountability](#governance-and-equity).


---

<a id="governance-and-equity"></a>

# Governance, Equity, and Professional Accountability

AI safety is not only a matter of individual good judgment. It is also a property of the system around the tool. A nurse may make a careful choice while working inside a workflow that makes review impossible, a vendor contract that permits data use the nurse cannot see, or a model that performs differently for different populations. Organizations need governance: clear policies, approved tools, validation, monitoring, and ways for frontline staff to raise concerns.

This chapter outlines a practical governance approach for teams exploring AI in nursing and healthcare work. It is not a substitute for legal, regulatory, or executive oversight. It is a set of questions that should be answered **before** a tool touches real workflows, and revisited after deployment.

## Start with the problem, not the product

A common failure is to start with an impressive AI product and look for a problem it can solve. A safer approach starts with a workflow problem, a defined population, and a measurable outcome. Ask:

- What specific task is burdensome, error-prone, or slow?
- Who does the task today, and what makes it difficult?
- What would a safe improvement look like?
- Is AI actually necessary, or would a template, staffing change, workflow redesign, or better software solve it?
- Which risks would we introduce?
- How would we know if the tool made things better rather than just faster?

A tool that saves documentation time but increases reviewer errors, erodes clinical reasoning, or exposes privacy risk may be a net harm. The business case should include safety and equity, not only productivity.

## Principles to anchor decisions

A useful governance framework for this context includes:

- **Patient safety first.** Clinical safety outranks convenience, vendor enthusiasm, and adoption targets.
- **Human accountability.** A named person or role remains responsible for decisions and records. AI does not hold a license or a duty of care.
- **Transparency.** Patients and staff should know, at an appropriate level, when AI materially affects their care or work, subject to security and legal constraints.
- **Privacy and data minimization.** Use the least data necessary, in approved systems, with appropriate contracts and safeguards.
- **Validity for the actual use.** Evidence that a model performs well in one setting does not automatically transfer to another population, language, workflow, or task.
- **Equity and inclusion.** Evaluate who benefits and who may be harmed, including people with disabilities, limited English proficiency, low digital access, and historically underserved groups.
- **Proportionality.** Higher-risk uses need stronger evidence, controls, and oversight.
- **Human oversight that is real.** Review must be informed, resourced, and empowered to reject the AI output.
- **Continuous monitoring.** Models, workflows, populations, and vendors change. Approval is not permanent.
- **Environmental and operational sustainability.** AI use has energy, cost, and maintenance implications; include them in the decision.

These principles echo broader guidance such as the NIST AI Risk Management Framework and WHO guidance on ethics and governance of AI for health. Use the frameworks that fit your jurisdiction and organization; do not treat a framework's existence as evidence of compliance.

## Roles and decision rights

AI governance fails when everyone assumes someone else is responsible. A practical structure assigns:

- **Executive sponsor:** accountable for resources, risk acceptance, and alignment with organizational strategy.
- **Clinical owner:** responsible for the clinical use case, content validity, safety, and the final workflow.
- **Nursing and frontline representatives:** involved in design, usability testing, and monitoring; have authority to pause unsafe use.
- **Privacy, security, and legal:** review data flow, contracts, access, retention, disclosure, and incident response.
- **Informatics and data teams:** assess integration, data quality, model behavior, audit logs, and monitoring.
- **Equity, accessibility, and patient representatives:** identify barriers and disparate impacts.
- **Vendor management:** ensure contractual obligations, performance reporting, change notification, and exit plans.
- **Education and support:** train staff on both capability and limitations, including how to say no.
- **Quality and safety:** incorporate AI-related errors and near misses into existing reporting and improvement systems.

Decision rights should be explicit. Who can approve a new use? Who can pause a tool? Who signs off on a change to a model or prompt? Who investigates an incident? If the answer is unclear, the governance is not ready.

## An AI use-case inventory

Every AI use should be documented in a registry with:

- the task and intended users;
- the patient population and setting;
- the data involved, including whether PHI is used;
- the tool and model version;
- the vendor and contractual controls;
- the clinical owner and accountable executive;
- the evidence used to assess validity;
- the human oversight and escalation workflow;
- known limitations and excluded uses;
- the validation, monitoring, and review plan;
- the complaint and incident route.

An inventory helps prevent "shadow AI," where staff use unapproved tools because the official process is slow or unclear. It also makes it possible to find every workflow affected by a model update or vendor incident.

## Validation before deployment

A vendor demonstration is not validation. Validation should test the tool in the actual workflow, with the actual users and a population that reflects the people served. Depending on risk, it may include:

- **Technical performance:** accuracy, error types, robustness, latency, failure behavior.
- **Clinical validity:** whether outputs are correct and complete for the intended use, verified by qualified reviewers.
- **Human factors:** whether staff understand the output, detect errors, and can act on it within realistic time pressure.
- **Workflow impact:** effects on handoffs, documentation, workload, interruptions, and escalation.
- **Equity analysis:** performance and usability across relevant groups, languages, abilities, and settings.
- **Safety analysis:** possible harms, severity, detectability, and mitigations.
- **Privacy and security assessment:** data flows, access, retention, and incident scenarios.
- **Patient and family experience:** whether the tool supports trust, understanding, and communication.

A good pilot has predefined success and stop criteria. Include errors and near misses, not only satisfaction scores. A pilot that only measures whether staff like the interface may miss the safety problem.

## Monitoring after deployment

Approval is a starting point. Monitor:

- error reports, near misses, complaints, and workarounds;
- model or vendor updates and changes in behavior;
- drift in the population, workflow, or data;
- completeness and accuracy of outputs over time;
- staff review time and cognitive load;
- equity metrics, disaggregated where appropriate and privacy-protective;
- patient experience and understanding;
- incidents involving privacy, security, or inappropriate disclosure;
- reliance and automation bias;
- whether the tool is being used outside its approved scope.

Build a route for frontline staff to report a problem without punishment. Closing a report with "user error" without examining the workflow is a missed safety opportunity.

## Equity and bias are not optional add-ons

AI systems learn from data and design choices. They can reproduce or amplify existing inequities. In healthcare, this can show up in:

- **Representation:** training data that underrepresents certain populations may lead to worse performance for them.
- **Labels and proxies:** using cost, utilization, or clinician behavior as a proxy for need can encode access barriers.
- **Language:** models trained primarily on one language or dialect may misunderstand others or produce lower-quality communication.
- **Disability:** interfaces and outputs may not work with screen readers, cognitive supports, or alternative input methods.
- **Digital access:** a tool delivered through a smartphone app may exclude people without devices, data, or reliable connectivity.
- **Cultural context:** education content may assume family structures, food practices, gender norms, or beliefs that do not fit the reader.
- **Stigma:** generated language may reinforce stereotypes about substance use, mental health, body size, age, race, or socioeconomic status.
- **Workforce effects:** automation may deskill roles, intensify monitoring, or shift burden to the least powerful workers.

Testing only the overall error rate can hide harms concentrated in a subgroup. Where data allows, examine performance and use across relevant groups. Be careful with small numbers: disaggregated data can itself create privacy risk, and apparent differences may not be statistically reliable. Work with equity and data experts rather than treating a single chart as proof.

Equity also requires voice. Include patients, families, community organizations, interpreters, and frontline staff in designing and evaluating patient-facing tools. A tool can be technically accurate and still be unusable, disrespectful, or inaccessible.

## Transparency and disclosure

Transparency is broader than a disclaimer. Consider what patients, staff, and the public need to know:

- when an AI system is materially involved in their care or communication;
- what the system does and does not do;
- what data is collected and retained;
- who reviews the output;
- how to ask questions or opt out where applicable;
- how errors or complaints are handled.

Staff need clear guidance on what they may say to patients and when to escalate questions. A vague policy that tells nurses to "be transparent" without defining the process puts them in a difficult position.

Disclosure should be truthful without overloading people with technical detail. "Your visit may use an assistive note-taking tool, and I review and sign the note" may be more useful than a paragraph about model architecture. Follow organizational, legal, and regulatory requirements for the specific use.

## Workforce impact

AI is not a neutral addition to a workflow. It changes tasks, attention, and accountability. Governance should ask:

- Does the tool reduce low-value work or add review burden?
- Who reviews outputs, and is that review time recognized in workload?
- Are staff being asked to attest to content they cannot verify?
- Is the tool being used to intensify monitoring or productivity pressure?
- Are staff trained to recognize errors, or only to click through prompts?
- Is there a route to refuse or pause use when it feels unsafe?
- Does the rollout respect labor agreements, privacy expectations, and professional standards?
- Are roles and skills being changed without support?

A "human in the loop" requirement is meaningless if the human is given no time, information, or authority to exercise judgment. Monitor workload and staff well-being, not only throughput.

## Vendor and contract questions

Contracts and security reviews matter. Depending on the use, ask about:

- data ownership, use, retention, deletion, and model training;
- business associate or equivalent agreements;
- subcontractors and data locations;
- encryption, access controls, authentication, and audit logs;
- incident notification and cooperation;
- performance reporting and known limitations;
- model version changes and advance notice;
- indemnification, liability, and exit assistance;
- data export and deletion at termination;
- restrictions on using organizational data to improve products;
- patient and employee notice obligations;
- subcontractor and cloud dependencies.

Do not accept "we are secure" as a complete answer. Ask for evidence and map it to your organization's requirements.

## An incident and near-miss process

AI incidents can include wrong outputs, privacy leaks, harmful patient communication, discriminatory effects, model outages, and unauthorized actions. A useful process:

1. **Detect and contain:** stop the workflow or tool if there is ongoing harm.
2. **Report:** notify the designated clinical, safety, privacy, and technical contacts.
3. **Preserve evidence:** logs, prompts, outputs, version, time, and involved staff, following policy.
4. **Assess:** extent, severity, affected people, legal and ethical obligations.
5. **Notify and support:** patients, families, staff, regulators, or others as required.
6. **Correct:** fix the record, workflow, model, training, or configuration.
7. **Learn:** share lessons without blame, update risk assessments, and monitor.
8. **Close the loop:** tell reporters what changed.

Near misses are valuable. A wrong draft caught before signing is a signal about the model, prompt, workflow, or training. Record and analyze it rather than treating it as an invisible save.

## Measuring success

Use a balanced scorecard:

| Dimension | Possible measures |
| --- | --- |
| Safety | Error and near-miss rates, review findings, escalation completeness |
| Privacy | Data-flow compliance, incidents, retention adherence, access reviews |
| Quality | Accuracy, completeness, consistency with approved sources |
| Equity | Access, usability, and error patterns across groups; community feedback |
| Workload | Total time, review burden, interruptions, overtime, staff experience |
| Trust | Patient understanding, transparency, complaints, staff confidence |
| Governance | Training completion, approved-tool use, audit closure, vendor compliance |

Adoption is not the same as value. A tool that everyone uses but no one trusts may be doing harm. A tool that few people use because it is cumbersome may be failing too. Measure what matters to patients and staff.

## Professional accountability

Nurses are accountable for their practice. Using an AI tool does not transfer that accountability to the vendor, the model, the informatics team, or the manager who purchased the product. If a note is signed or a communication is sent, the professional who signed or sent it needs to be able to defend the content.

At the same time, organizations must not place impossible expectations on individuals. They must provide approved tools, adequate training, realistic workloads, clear policies, and a just culture for reporting. Accountability should be shared appropriately: clinicians for clinical judgment and attestation, organizations for the systems and resources, vendors for their contractual obligations, and leaders for governance.

Good governance does not eliminate all risk. It makes risk visible, assigns ownership, and creates a way to learn before harm spreads. That is a more realistic goal than "safe AI" as a marketing claim.

Next: [scenario practice](#scenario-practice).


---

<a id="scenario-practice"></a>

# Scenario Practice and Red Flags

The following fictional scenarios are designed for team discussion, education sessions, and self-reflection. They are not real patient cases and do not contain actual patient information. Each one shows a plausible way AI can enter a workflow, the risks that follow, and safer alternatives.

Use them as written or adapt them to your setting. The goal is not to memorize a rule for every situation. It is to practice recognizing the moment when speed starts to outpace safety.

## Scenario 1: The time-saving chart summary

A nurse has three admissions arriving and wants to understand each patient's history quickly. They copy several paragraphs from the electronic health record into a consumer chatbot and ask for a one-paragraph summary. The summary is clear and helps them organize the shift.

**What went wrong:** Protected health information was disclosed to an unapproved tool. The fact that the output was useful does not make the input permissible. The record may also have retained the prompts, and the nurse cannot verify how the vendor stores or uses them.

**Safer response:** Use the approved chart review process and the tools within the EHR. If an AI summarization feature is approved and connected to the record, follow its access, review, and documentation rules. If a general-purpose tool is used for practice, use a fully synthetic case unrelated to these patients. At the start of the shift, ask the manager or informatics team where the approved summary tools live.

**Discussion:** What workaround might this nurse have been trying to solve? Would better orientation, staffing, or EHR design reduce the temptation?

## Scenario 2: The note that sounded better

An ambient documentation tool drafts a note for a busy clinic visit. The note is polished and includes a statement that the patient denied several symptoms. The clinician remembers discussing some symptoms but cannot recall whether all the denials were specifically addressed. The clinician is running late and signs the note.

**What went wrong:** The tool may have generated denials that were never asked or missed the patient's actual concern. A polished note increased trust and the time pressure reduced review. Signing without verification created a potentially false record.

**Safer response:** Do not sign until every negative, finding, medication, and plan detail has been verified against the conversation and the approved source. If the workflow does not allow time for that review, pause the workflow and raise the problem. A shorter, accurate note is better than a complete-looking but unreliable one. Report the discrepancy through the appropriate safety or quality channel.

**Discussion:** What would a realistic review checklist look like for this note type? Who should fix the workflow when review time is impossible?

## Scenario 3: The confident handout

A quality team wants a patient handout about a common follow-up process. They ask a general chatbot to write it, and the output includes a warning sign and a follow-up interval that were not in the approved program material. The layout is excellent. A staff member plans to post it in the waiting room because it "reads better than the old one."

**What went wrong:** The tool invented clinical content and a timeline. The staff member focused on readability and design rather than source accuracy. The document had not been through clinical review.

**Safer response:** Use only clinician-approved key points. Ask the tool to preserve facts and flag gaps. Require line-by-line clinical review, health literacy review, and organizational approval before distribution. If a fact is missing, return to the clinical owner rather than letting the model fill it in.

**Discussion:** What visual or linguistic features make a document feel official? How can a review process see past that?

## Scenario 4: The study shortcut

A nursing student is struggling with a complex concept. They paste their personal notes into an AI tutor and ask it to explain the concept and generate practice questions. The answers are clear, and the student feels much more confident. One explanation contradicts the course textbook, but the AI's version is easier to remember.

**What went wrong:** The AI may have simplified or misstated the concept. The student's confidence increased without verification. Studying the wrong model can be worse than recognizing confusion, because it makes the error harder to notice.

**Safer response:** Use the AI to test and explain from the student's own verified material, then compare with the textbook, course objectives, and instructor. Ask the tool to flag gaps and cite the exact notes it used. Treat a contradiction as a question for the instructor, not a prompt to choose the more convenient answer.

**Discussion:** How can a student tell the difference between understanding and familiarity? What study habits make verification more likely?

## Scenario 5: The quiz that taught the wrong answer

An educator uses an AI model to generate 20 practice questions. The questions look plausible and save hours. A learner finds that three questions use outdated terminology and one answer is wrong. The educator had reviewed the formatting but not every clinical fact.

**What went wrong:** The educator delegated content creation to a system without verifying clinical accuracy. The learners could have rehearsed incorrect information. The polished format made the errors less obvious.

**Safer response:** Generate questions only from current, approved course material. Require the model to show its source for each answer. Have a qualified reviewer check every item before use, including terminology, reasoning, and answer explanations. Test the questions with a small group and record corrections. A model's confidence is not a quality review.

**Discussion:** What review time is needed per question? Is that time actually available? Should generated questions be used for formative practice only, or can they serve assessment?

## Scenario 6: The portal reply

A patient sends a portal message with several new symptoms. A staff member uses an AI writing tool to create a reassuring reply that says the symptoms are common and can be watched at home. The reply is sent without clinical review because it sounds friendly and includes a disclaimer.

**What went wrong:** A non-clinician and an AI system effectively triaged the symptoms and provided patient-specific advice. The disclaimer does not make false reassurance safe. The message may have hidden urgency and delayed care.

**Safer response:** Administrative staff should use approved templates and escalation criteria, not generated clinical advice. The message should go to the appropriate clinician, who assesses the symptoms and responds according to policy. If the message suggests an emergency, follow the emergency process immediately. Use AI, if at all, only to improve the phrasing of a clinician-approved response after the clinical decision is made.

**Discussion:** Which messages can safely be answered administratively? What red flags require escalation even if the patient sounds calm?

## Scenario 7: The translation shortcut

A clinic needs discharge instructions in several languages. A staff member runs the English handout through a general AI translation tool because the next interpreter appointment is hours away. The translated text looks fluent. A family member reads it and thinks a follow-up appointment is optional.

**What went wrong:** Machine translation is not a qualified medical interpreter or translator. The wording may have changed the meaning of an instruction, and no qualified reviewer checked it. Fluency in the target language is not the same as clinical and cultural accuracy.

**Safer response:** Use the approved interpreter and translation process. For written material, use qualified translators and clinical reviewers, and allow time for revisions. If immediate communication is needed, use an interpreter service. Keep the original approved source and version. Do not distribute machine-translated clinical instructions just because the wording looks natural.

**Discussion:** What systems make it easier to wait for a qualified interpreter? How can the clinic prepare translated materials before the urgent moment?

## Scenario 8: The meeting recorder

A manager turns on an AI note-taking assistant for a monthly team meeting. The meeting includes a discussion of a colleague's performance concern, a patient complaint with identifiable details, and a staffing dispute. The transcript is stored in a shared workspace by default. A week later, staff discover that some meeting summaries are visible to the whole department.

**What went wrong:** A tool with broad access was used for sensitive employee and patient information without an approved governance review. Default sharing settings compounded the disclosure. Participants may not have known they were being recorded.

**Safer response:** Confirm whether transcription is approved, what data it captures, who can access it, and how long it is retained. Use it only for appropriate meetings, notify participants according to policy, and use the least-permissive sharing settings. Some discussions should not be recorded at all. If a disclosure occurs, report it through privacy and incident processes rather than deleting records to hide it.

**Discussion:** What types of meetings should have explicit transcription rules? Who owns the meeting record? How should dissent and sensitive context be captured?

## Scenario 9: The spreadsheet that ranked staff

An operations team uploads scheduling and productivity data to an AI assistant and asks it to recommend which staff should receive extra shifts. The output happens to disadvantage employees with caregiving responsibilities. No one knows how the model weighted the variables, and there is no appeal process.

**What went wrong:** A high-impact decision about people was delegated to an AI system without governance, transparency, or a fairness review. Proxy variables can encode discrimination, and the human review was superficial.

**Safer response:** Do not use an unapproved AI system to make or recommend employment decisions. Start with explicit, job-related criteria and labor agreements. Involve HR, legal, equity, and employee representatives. Keep human decision-makers, document the rationale, provide an appeal route, and test for disparate impacts. If automation is used, it should assist with scheduling constraints, not secretly rank people's worth.

**Discussion:** Which workforce decisions should never be automated? What would a fair appeals process require?

## Scenario 10: The helpful agent

A clinic pilots an AI assistant that can read email, schedule appointments, and send messages. A staff member asks it to "clean up the inbox" before a holiday. The assistant replies to a patient with a rescheduled appointment and copies an internal note containing a concern about the patient's care. No human sees the messages before they are sent.

**What went wrong:** The system had broad permissions, autonomous action, and insufficiently scoped instructions. The output left the organization, and combining an internal note with a patient message created a privacy and trust problem. "Clean up the inbox" was not a sufficiently precise instruction for an agent that can act.

**Safer response:** High-consequence actions such as patient communication, scheduling changes, and record access need explicit scopes, approvals, and human confirmation. Use least-privilege access and a dry-run or review mode. Test failure modes before deployment. If an incorrect message is sent, report it immediately and follow incident and correction processes.

**Discussion:** Which actions should require a human click? Which can be safely automated? Who is accountable when an agent acts on a vague instruction?

## Scenario 11: The citation that did not exist

A nurse is writing an education proposal and uses AI to find evidence. The draft includes a citation to a study that sounds exactly right. The nurse includes it in a leadership presentation. A colleague tries to find the article and discovers that the journal and authors are fabricated.

**What went wrong:** The nurse trusted a generated citation without locating it. The presentation's credibility was damaged, and the proposal may have contained unsupported claims. Fabricated evidence can spread quickly when it sounds authoritative.

**Safer response:** Search for every citation in a reliable database or publisher site. Confirm the title, authors, journal, year, DOI, and whether the source supports the claim. Use library resources for journals behind paywalls. If a source cannot be found, remove the claim or replace it with a verified one. Cite primary sources where possible, not an AI summary.

**Discussion:** What verification steps are realistic before a presentation? How should the team respond to a fabricated citation: blame the individual or fix the process?

## Scenario 12: The quiet clinical question

A nurse in an online forum asks an AI model a patient-specific question about whether a symptom is concerning. The model says it is likely benign and suggests monitoring. The nurse feels reassured and does not escalate. The next shift, the patient's condition has worsened.

**What went wrong:** A general model gave a de facto triage and treatment opinion without the full clinical context or any accountability. The disclaimer did not protect the patient. The nurse's decision to wait was influenced by an unverified source.

**Safer response:** Patient-specific concerns should be escalated through the organization's clinical process. If a nurse is unsure, ask a qualified colleague, use the agreed escalation criteria, and document the assessment and response. AI can help organize the questions to ask, but it cannot assess the patient or authorize waiting.

**Discussion:** What conditions make a nurse more likely to rely on AI for a clinical question? How can teams make it easier to ask a human?

## Running a tabletop exercise

Use these scenarios in a 45- to 60-minute session:

1. **Set ground rules:** learning, not blame; no real patient details; no recording unless approved.
2. **Choose one scenario** relevant to the group.
3. **Identify the decisions:** What happened, what data was involved, who was affected, and what was the consequence?
4. **Find the system causes:** time pressure, unclear policy, unavailable tooling, poor design, missing training, hierarchy, or productivity incentives.
5. **Design the safer workflow:** Who should do what, using which approved tool, with what review and escalation?
6. **Test the workflow:** What could still fail? Is the review realistic? How would inequity appear?
7. **Name the owner:** Who will fix the policy, training, tooling, or contract?
8. **Define a measure:** How will the team know the fix works?
9. **Close with one commitment** each participant can act on.

## Debrief questions

- Where did the AI output become more trusted than the source?
- What would a reasonable person have needed to know at the moment of use?
- Was the problem the model, the workflow, the training, the data, or the incentives?
- Who had the authority to stop the workflow? Did they know?
- What would make reporting easier?
- How would a patient from a different language, culture, ability, or access context experience this?
- What human relationship or clinical judgment was at risk of being displaced?
- What is the smallest change that would materially improve safety?

The point of scenario practice is to build a reflex: **pause, identify the source of truth, protect the data, and ask who is accountable.** That reflex is more durable than memorizing a feature list.

Next: [checklists, quick reference, and glossary](#checklists-and-glossary).


---

<a id="checklists-and-glossary"></a>

# Checklists, Quick Reference, and Glossary

Use these checklists at the point of work, in education sessions, or as a starting point for organizational policy. They are not a substitute for clinical judgment or your organization's rules. A checklist helps only when the person using it has the time, information, and authority to act on what it reveals.

## The universal pause

Before using an AI tool for work, ask:

1. **Is the tool approved for this task?** Not just "is AI allowed," but this tool, this data, this use.
2. **Does the input contain PHI or other sensitive data?** If yes, use only the approved workflow. If uncertain, stop.
3. **What is the source of truth?** AI is not the source for clinical facts, policy, legal requirements, or institutional commitments.
4. **Could the output cause harm if wrong?** If yes, the review and oversight must be stronger, or the use should not proceed.
5. **Who is accountable for the final result?** A named human or role must review, approve, or act.
6. **Can I verify the output?** If not, do not use it in a consequential workflow.
7. **Is this fair, transparent, and respectful?** Consider the patient, family, colleague, or community affected.

If any answer is unclear, pause and escalate.

## Data and privacy checklist

### Before entering information

- [ ] The tool is approved for this data type and use.
- [ ] The data is necessary for the task and limited to what is needed.
- [ ] The data is de-identified through the approved process, or the tool is authorized for PHI.
- [ ] There are no names, initials tied to clinical details, dates of care, record numbers, contact details, photos, or audio.
- [ ] There are no rare details or combinations that could identify a person.
- [ ] I am not using a personal account, device, or unapproved extension.
- [ ] I know the retention, logging, and sharing settings.
- [ ] I know how to report a privacy concern.

### Before sharing or storing the output

- [ ] The output is stored in the approved location.
- [ ] Sharing permissions are appropriate.
- [ ] The output is not being posted publicly or sent externally without review.
- [ ] Required disclosure or attribution is included.
- [ ] Temporary copies and exports are removed according to policy.

## Approved-tool checklist for managers

- [ ] The intended use and excluded uses are written down.
- [ ] The vendor contract covers confidentiality, data use, retention, and incident notification.
- [ ] The organization has completed its security, privacy, and legal review.
- [ ] The tool is validated for the actual workflow, population, and users.
- [ ] Human review is feasible within workload.
- [ ] Model and prompt changes are communicated and tracked.
- [ ] Access is least-privilege and reviewed regularly.
- [ ] Audit logs and incident routes are in place.
- [ ] Staff are trained on limits, errors, privacy, and how to stop using the tool.
- [ ] Equity, accessibility, and patient experience are evaluated.
- [ ] A stop criterion and exit plan exist.

## Documentation review checklist

- [ ] I used an approved tool and followed the data rules.
- [ ] The verified source facts are available separately from the AI output.
- [ ] I checked every medication, dose, route, frequency, and time.
- [ ] I checked identity, laterality, setting, chronology, and allergies.
- [ ] I preserved negatives, qualifiers, uncertainties, and patient-reported statements.
- [ ] I removed every fact I cannot independently verify.
- [ ] I checked the plan, responsible person, follow-up, and escalation criteria.
- [ ] I reviewed the language for bias, stigma, and unnecessary sensitive detail.
- [ ] I completed required disclosure and attestation.
- [ ] I know how to report an error or privacy concern.

## Patient education checklist

- [ ] A qualified clinician provided or approved the clinical facts.
- [ ] The draft adds no new symptom, medication, dose, timeline, restriction, or promise.
- [ ] A clinician reviewed the final wording line by line.
- [ ] The material uses plain language and a logical sequence.
- [ ] The audience's language, culture, ability, and health literacy were considered.
- [ ] A qualified interpreter or translation process is used where required.
- [ ] Teach-back questions are appropriate and open-ended.
- [ ] Contact and follow-up information is current.
- [ ] Images and diagrams are accurate and accessible, or not used.
- [ ] Version, approval date, owner, and review date are recorded.
- [ ] The patient has a way to ask a human questions.

## Studying checklist

- [ ] I am using AI to support active recall, not replace my own learning.
- [ ] My notes contain no real patient or colleague identifiers.
- [ ] The source material is mine, public, or approved for this use.
- [ ] I verify generated answers against assigned readings or instructors.
- [ ] I do not use AI to cheat, fabricate citations, or misrepresent my work.
- [ ] I follow my program's academic integrity and disclosure rules.
- [ ] I practice calculations and clinical reasoning independently.
- [ ] I can explain the material without the tool.
- [ ] I use simulations, supervision, and debriefs for clinical skill development.

## Communication checklist

- [ ] No unapproved patient, employee, or family information is in the prompt or output.
- [ ] Names, titles, dates, links, and contact information are verified.
- [ ] The draft invents no decision, commitment, policy, or result.
- [ ] High-risk clinical content was written or verified by a qualified clinician.
- [ ] The tone is respectful, inclusive, and appropriate for the audience.
- [ ] The urgency and required action are clear.
- [ ] A human has decided whether and how to send it.
- [ ] The record is stored and retained according to policy.

## Educator checklist

- [ ] The learning objectives come from the approved curriculum.
- [ ] Any clinical content is verified by a qualified reviewer.
- [ ] Generated questions use current terminology and have verified answers.
- [ ] Scenarios are fictional, free of real identifiers, and reviewed by an educator.
- [ ] The lesson does not imply competence based on AI completion alone.
- [ ] Accessibility and diverse learning needs are considered.
- [ ] Academic integrity and AI-use expectations are clear.
- [ ] Students know how to report an error in AI-generated material.
- [ ] Evaluation includes human judgment and, where appropriate, practical assessment.

## Incident response card

If an AI use causes or may cause harm:

1. **Stop** the workflow or tool if harm is ongoing.
2. **Protect** the patient or person first, following clinical and emergency protocols.
3. **Report** through the appropriate clinical, safety, privacy, security, or management channel.
4. **Preserve** relevant logs, prompts, outputs, version information, and timestamps as directed.
5. **Do not conceal, delete, or alter evidence** to avoid embarrassment.
6. **Cooperate** with assessment and correction.
7. **Tell the reporter** what changed, without breaching confidentiality.
8. **Treat it as learning**, while still addressing reckless or intentional conduct appropriately.

## Red flags in AI products and proposals

Be cautious when a vendor or colleague says:

- "It is HIPAA-compliant, so you can use it with any data."
- "The model is better than clinicians."
- "You do not need to review the output."
- "It never makes mistakes."
- "The AI will make the final decision."
- "You cannot opt out."
- "Training on your data is just how it gets better."
- "We do not have a BAA, but it is private."
- "A disclaimer is enough."
- "The pilot is free, so approval can come later."
- "Everyone is already using it."
- "You can ask it to diagnose, dose, or triage."
- "The accuracy is 99%," with no explanation of the population, task, denominator, or error types.
- "The metrics prove it is fair," with no subgroup analysis or community input.

A legitimate proposal should welcome questions about errors, oversight, data, equity, and exit.

## A 30-day responsible adoption plan

A team can use this outline to move from interest to a bounded pilot:

**Week 1: Define and check**

- Name the workflow problem and the people affected.
- Review current policy, contracts, and approved tools.
- Classify the data and decide whether PHI is necessary.
- Identify the clinical owner, privacy lead, and technical lead.
- Write explicit excluded uses.

**Week 2: Learn and test**

- Practice with synthetic examples.
- Create a review checklist tailored to the task.
- Test failure modes and unclear inputs.
- Measure the current process, including error and workload data.
- Ask frontline staff what would make the tool easier or harder to use safely.

**Week 3: Pilot with guardrails**

- Limit to a small group and a low-risk use.
- Require human review and log near misses.
- Collect feedback on workload, equity, accessibility, and trust.
- Stop if predefined safety criteria are crossed.

**Week 4: Review and decide**

- Compare accuracy, completeness, workload, equity, and incidents.
- Check whether review was meaningful or rubber-stamped.
- Document the decision, limitations, and monitoring plan.
- Expand, revise, or discontinue with an accountable owner.

## Glossary

**Agentic AI:** AI that can take actions through tools or other systems, such as sending messages or changing records, rather than only generating text. Requires strong permissions, oversight, and audit controls.

**Algorithmic bias:** Systematic unfairness in AI outputs or use, often reflecting biased data, design choices, or deployment context.

**Ambient documentation:** Technology that captures a clinical conversation and drafts documentation. Requires consent, privacy, accuracy review, and appropriate configuration.

**Audit log:** A record of system activity, such as who accessed data or what action was taken. Important for accountability and investigation.

**Automation bias:** The human tendency to over-trust automated suggestions, especially when they are fluent, fast, or presented as authoritative.

**Business associate:** A person or entity that performs certain functions or services involving PHI for a covered entity. A business associate agreement (BAA) can allocate certain obligations, but it is not a safety guarantee.

**Clinical decision support (CDS):** Technology that helps clinicians make decisions. Some CDS is regulated; not all AI features are validated CDS.

**Context window:** The amount of text or other input a model can consider at one time. Important details may be missed in long documents or conversations.

**Covered entity:** Under HIPAA, generally a health plan, healthcare clearinghouse, or healthcare provider that transmits certain health information electronically. Legal classification depends on the facts.

**Data minimization:** Collecting and sharing only the information needed for the stated purpose.

**De-identification:** Reducing identifiable health information under an applicable standard. There are different methods and legal requirements. It is not a synonym for "removed the name."

**Fine-tuning:** Further training a model on specific data to adapt its behavior. It can change performance and risks; it does not automatically make output accurate.

**Generative AI:** AI that produces new content, such as text, images, audio, or code, based on patterns in training data.

**Hallucination:** Output that is fabricated or unsupported, such as an invented citation, medication detail, or policy.

**Health literacy:** A person's ability to find, understand, and use health information and services. Clear communication supports health literacy but does not fix a person's access or circumstances.

**HIPAA:** The U.S. Health Insurance Portability and Accountability Act. Its Privacy and Security Rules set standards for certain health information. State and other laws can add requirements.

**Human-in-the-loop:** A design in which a human reviews or approves an AI output or action. It is meaningful only if the human has the expertise, time, information, and authority to intervene.

**Large language model (LLM):** A type of AI model trained on large amounts of text to generate and transform language.

**Machine translation:** Automated translation by software. It is not the same as a qualified medical interpreter or translator.

**Minimum necessary:** A HIPAA principle of using or disclosing only the information reasonably needed for a purpose, subject to applicable exceptions.

**Model card:** Documentation describing a model's intended use, performance, limitations, and ethical considerations. Useful but not a guarantee.

**Model drift:** A change in model behavior or performance over time, including changes from updates, new data, or shifts in the population or workflow.

**Multimodal:** AI that can process more than one type of input, such as text, images, or audio.

**PHI (protected health information):** Individually identifiable health information held or transmitted by a covered entity or business associate. It can exist in many forms.

**PII (personally identifiable information):** A broad term for information that can identify a person. It is not identical to PHI and varies by jurisdiction.

**Prompt:** The instruction and context given to an AI system.

**Prompt injection:** A manipulation in which content read by an AI system contains instructions that change its behavior or cause unwanted actions.

**RAG (retrieval-augmented generation):** A technique that retrieves relevant documents and includes them in the model's context. It can improve grounding but can still retrieve or interpret information incorrectly.

**Red teaming:** Deliberately testing a system for failures, misuse, bias, or security weaknesses. It should include clinical, privacy, equity, and accessibility perspectives.

**Safe Harbor:** One HIPAA de-identification method based on removing specified identifiers and having no actual knowledge of remaining identifiability. It is more specific than a casual checklist.

**Sycophancy:** The tendency of an AI model to agree with the user or produce pleasing answers rather than challenge an inaccurate premise.

**Teach-back:** A communication technique in which the learner explains information or demonstrates a skill in their own words, allowing the clinician to check understanding and correct misunderstandings.

**Token:** A unit of text used by a language model. Token limits affect how much content a model can process.

**Validated tool:** A tool with evidence that it performs appropriately for a defined use, population, and setting. Validation is not permanent and does not transfer automatically to other contexts.

**Vector database/embedding:** Technical components used in some retrieval systems to find similar text. Not required knowledge for safe use, but relevant to how retrieval tools work.

**Zero-PHI habit:** The practice of assuming a general-purpose AI tool must not receive patient information unless an approved workflow explicitly permits it.

## Further reading

These resources are starting points, not endorsements and not a substitute for current guidance. Verify versions and applicability.

- U.S. Department of Health and Human Services, HIPAA Privacy Rule: https://www.hhs.gov/hipaa/for-professionals/privacy/index.html
- HHS guidance on de-identification: https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html
- HHS Security Rule: https://www.hhs.gov/hipaa/for-professionals/security/index.html
- NIST AI Risk Management Framework: https://www.nist.gov/itl/ai-risk-management-framework
- World Health Organization, ethics and governance of AI for health: https://www.who.int/publications/i/item/9789240029200
- ANA Code of Ethics for Nurses: https://www.nursingworld.org/practice-policy/nursing-excellence/ethics/code-of-ethics-for-nurses/
- AHRQ Health Literacy Universal Precautions Toolkit: https://www.ahrq.gov/health-literacy/improve/precautions/index.html
- CDC, health literacy resources: https://www.cdc.gov/health-literacy/
- FDA, artificial intelligence and machine learning in software as a medical device: https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device
- The Joint Commission, patient safety and health information technology resources: https://www.jointcommission.org/

Links can change. When a resource matters to a policy or decision, confirm it with your organization's library, clinical leadership, or compliance team.

## Final word

AI can help nurses and healthcare workers learn, organize, communicate, and draft. It can also make mistakes at scale, expose private information, and create a false sense of certainty. The difference is not found in a perfect prompt. It is found in a culture that protects data, verifies facts, values human judgment, includes the people affected, and gives frontline staff the authority to stop.

Use the smallest tool for the task. Use the least data necessary. Keep a human accountable. Ask who could be harmed and whether the workflow makes that harm easy to miss. Those habits will matter longer than any particular model.

> **Educational disclaimer:** This guide is not medical, nursing, legal, compliance, or academic advice. It does not create a clinician-patient relationship. Always follow your organization's policies, applicable law, licensing requirements, and current clinical guidance. In an emergency, contact local emergency services.

