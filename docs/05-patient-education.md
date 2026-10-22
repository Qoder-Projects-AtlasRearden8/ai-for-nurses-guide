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

Next: [communication, handoffs, and administrative work](06-communication-admin.md).
