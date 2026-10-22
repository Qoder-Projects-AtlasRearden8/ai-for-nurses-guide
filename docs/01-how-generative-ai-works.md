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

Next: [privacy, HIPAA, and responsible data handling](02-privacy-hipaa.md).
