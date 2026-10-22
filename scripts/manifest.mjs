export const guide = {
  title: "AI for Nurses and Healthcare Workers",
  subtitle: "A safety-first field guide to documentation help, studying, patient education, privacy, and knowing the limits.",
  description:
    "A practical, safety-first guide for nurses and healthcare workers using generative AI. Covers HIPAA and privacy cautions, documentation support, studying, patient education drafts, prompt templates, and uses to avoid.",
  edition: "October 2026",
};

export const parts = [
  {
    id: "foundations",
    title: "Foundations",
    description: "Build a working model of the technology, the privacy rules, and the habits that keep people safe.",
  },
  {
    id: "practice",
    title: "Everyday practice",
    description: "Apply bounded AI support to documentation, learning, patient education, and communication.",
  },
  {
    id: "boundaries",
    title: "Prompts and boundaries",
    description: "Use clear prompts and reusable templates, and know exactly where general-purpose AI must stop.",
  },
  {
    id: "systems",
    title: "Systems and reference",
    description: "Move from individual caution to team governance, scenario practice, and quick-reference tools.",
  },
];

export const chapters = [
  {
    number: "01",
    file: "00-start-here.md",
    slug: "start-here",
    navTitle: "Start here",
    title: "Start Here: Scope, Safety, and How to Use This Guide",
    summary:
      "Why this guide exists, the three rules for safe use, and a clear statement of what AI should and should not do in healthcare work.",
    part: "foundations",
  },
  {
    number: "02",
    file: "01-how-generative-ai-works.md",
    slug: "how-generative-ai-works",
    navTitle: "How generative AI works",
    title: "How Generative AI Works for Healthcare Workers",
    summary:
      "A plain-language explanation of large language models, hallucination, bias, automation bias, and why fluent output is not verified output.",
    part: "foundations",
  },
  {
    number: "03",
    file: "02-privacy-hipaa.md",
    slug: "privacy-and-hipaa",
    navTitle: "Privacy and HIPAA",
    title: "Privacy, HIPAA, and Responsible Data Handling",
    summary:
      "PHI, the 18 Safe Harbor identifiers, de-identification cautions, vendor questions, ambient recording, and a zero-PHI baseline for unapproved tools.",
    part: "foundations",
  },
  {
    number: "04",
    file: "03-documentation.md",
    slug: "documentation-support",
    navTitle: "Documentation support",
    title: "AI-Assisted Clinical Documentation Support",
    summary:
      "A workflow for using AI as a clarity and structure aid without fabricating findings, altering facts, or signing an unreviewed record.",
    part: "practice",
  },
  {
    number: "05",
    file: "04-studying.md",
    slug: "studying-and-learning",
    navTitle: "Studying and learning",
    title: "Studying and Professional Learning with AI",
    summary:
      "Evidence-aligned study techniques, safeguards for generated quizzes and explanations, calculation cautions, privacy, and academic integrity.",
    part: "practice",
  },
  {
    number: "06",
    file: "05-patient-education.md",
    slug: "patient-education",
    navTitle: "Patient education",
    title: "Patient Education Drafts: Clarity Without Guessing",
    summary:
      "A clinician-review workflow for plain-language education, teach-back, accessibility, translation, and preventing invented clinical instructions.",
    part: "practice",
  },
  {
    number: "07",
    file: "06-communication-admin.md",
    slug: "communication-and-admin",
    navTitle: "Communication and admin",
    title: "Communication, Handoffs, and Administrative Work",
    summary:
      "Lower-risk drafting uses for email, agendas, and training, plus high-risk cautions for handoffs, portal messages, and sensitive meetings.",
    part: "practice",
  },
  {
    number: "08",
    file: "07-prompting-foundations.md",
    slug: "prompting-foundations",
    navTitle: "Prompting foundations",
    title: "Prompting Foundations for Nurses and Healthcare Workers",
    summary:
      "A seven-part prompt structure, source-grounding techniques, prompt injection, iteration, and five questions for evaluating an AI output.",
    part: "boundaries",
  },
  {
    number: "09",
    file: "08-prompt-library.md",
    slug: "prompt-library",
    navTitle: "Prompt library",
    title: "Prompt Library",
    summary:
      "Thirteen privacy-conscious, review-gated templates for documentation clarity, education drafts, studying, training, and communication.",
    part: "boundaries",
  },
  {
    number: "10",
    file: "09-what-not-to-use-ai-for.md",
    slug: "what-not-to-use-ai-for",
    navTitle: "What not to use AI for",
    title: "What Not to Use AI For",
    summary:
      "A practical stop list covering diagnosis, triage, medication calculations, image interpretation, patient-specific advice, high-impact decisions, and more.",
    part: "boundaries",
  },
  {
    number: "11",
    file: "10-governance-equity.md",
    slug: "governance-and-equity",
    navTitle: "Governance and equity",
    title: "Governance, Equity, and Professional Accountability",
    summary:
      "Pilot design, vendor questions, monitoring, equity analysis, transparency, workforce impact, and what meaningful human oversight requires.",
    part: "systems",
  },
  {
    number: "12",
    file: "11-scenarios.md",
    slug: "scenario-practice",
    navTitle: "Scenario practice",
    title: "Scenario Practice and Red Flags",
    summary:
      "Twelve fictional cases for team discussion, each with the failure mode, a safer response, and questions for a tabletop exercise.",
    part: "systems",
  },
  {
    number: "13",
    file: "12-checklists-glossary.md",
    slug: "checklists-and-glossary",
    navTitle: "Checklists and glossary",
    title: "Checklists, Quick Reference, and Glossary",
    summary:
      "Privacy, documentation, education, communication, and governance checklists, an incident card, a glossary, and further reading.",
    part: "systems",
  },
];

export function getChapterByFile(file) {
  return chapters.find((chapter) => chapter.file === file);
}
