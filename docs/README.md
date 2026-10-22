# Chapter Index

These 13 Markdown files are the source of the guide. The built site adds navigation, search, print layout, and copyable prompt blocks, but every chapter can be read on its own here.

> **Educational use only.** This guide is not medical, nursing, legal, compliance, or academic advice. AI output can be wrong; follow local policy and current clinical guidance, and keep a qualified human accountable.

## Part 1 — Foundations

1. [Start Here: Scope, Safety, and How to Use This Guide](./00-start-here.md)  
   Purpose, audience, ground rules, and the boundary between helpful drafting and unsafe delegation.
2. [How Generative AI Works for Healthcare Workers](./01-how-generative-ai-works.md)  
   Large language models, hallucination, bias, automation bias, and why fluent output is not verified output.
3. [Privacy, HIPAA, and Responsible Data Handling](./02-privacy-hipaa.md)  
   PHI, the 18 Safe Harbor identifiers, de-identification cautions, vendor questions, ambient recording, and the zero-PHI baseline.

## Part 2 — Everyday practice

4. [AI-Assisted Clinical Documentation Support](./03-documentation.md)  
   Using AI for clarity and structure without inventing findings, altering facts, or signing an unreviewed record.
5. [Studying and Professional Learning with AI](./04-studying.md)  
   Evidence-aligned study techniques, generated quizzes, calculation cautions, privacy, and academic integrity.
6. [Patient Education Drafts: Clarity Without Guessing](./05-patient-education.md)  
   A clinician-review workflow for plain language, teach-back, accessibility, translation, and invented instructions.
7. [Communication, Handoffs, and Administrative Work](./06-communication-admin.md)  
   Lower-risk drafting for email and training, plus high-risk cautions for handoffs and patient-portal messages.

## Part 3 — Prompts and boundaries

8. [Prompting Foundations for Nurses and Healthcare Workers](./07-prompting-foundations.md)  
   A seven-part prompt structure, source grounding, prompt injection, iteration, and output evaluation.
9. [Prompt Library](./08-prompt-library.md)  
   Thirteen reusable, review-gated templates for documentation clarity, education drafts, studying, training, and communication.
10. [What Not to Use AI For](./09-what-not-to-use-ai-for.md)  
    A practical stop list covering diagnosis, triage, calculations, image interpretation, patient-specific advice, and high-impact decisions.

## Part 4 — Systems and reference

11. [Governance, Equity, and Professional Accountability](./10-governance-equity.md)  
    Pilot design, vendor questions, monitoring, equity analysis, transparency, workforce impact, and meaningful oversight.
12. [Scenario Practice and Red Flags](./11-scenarios.md)  
    Twelve fictional cases for team discussion, each with a failure mode, safer response, and tabletop questions.
13. [Checklists, Quick Reference, and Glossary](./12-checklists-glossary.md)  
    Privacy, documentation, education, communication, and governance checklists, an incident card, glossary, and further reading.

## Suggested reading paths

- **Direct care and documentation:** 1 → 3 → 4 → 6 → 9 → 13
- **Students and educators:** 1 → 2 → 5 → 8 → 9 → 10
- **Team leads and governance:** 1 → 3 → 7 → 10 → 11 → 13
- **Full read:** chapters 1 through 13 in order

## Rebuilding the site

The chapter order and titles live in `scripts/manifest.mjs`. After editing a chapter, return to the project root and run:

```bash
npm test
npm start
```

See the [project README](../README.md) for setup, verification details, and the full site tour.
