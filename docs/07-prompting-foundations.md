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

Next: [the prompt library](08-prompt-library.md).
