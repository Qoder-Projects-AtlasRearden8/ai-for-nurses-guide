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

Next: [studying and professional learning with AI](04-studying.md).
