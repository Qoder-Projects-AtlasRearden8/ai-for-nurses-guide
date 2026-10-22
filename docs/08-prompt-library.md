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

Next: [what not to use AI for](09-what-not-to-use-ai-for.md).
