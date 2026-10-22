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

Next: [checklists, quick reference, and glossary](12-checklists-glossary.md).
