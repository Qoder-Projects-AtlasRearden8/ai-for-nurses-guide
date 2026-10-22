# AI for Nurses and Healthcare Workers

A safety-first field guide to using generative AI for documentation support, studying, patient education drafts, communication, and administrative work — with explicit limits for what must stay in human hands.

It is written for nurses, nursing students, community health workers, medical assistants, allied health professionals, educators, and the administrative teams who support them. No technical background is assumed.

> **Educational use only.** This guide is not medical, nursing, legal, compliance, or academic advice, and it does not create a clinician–patient relationship. AI output can be confidently wrong. Follow your organization's policies, current clinical guidance, licensing requirements, and applicable law. A qualified human remains accountable for every patient-facing decision and record.

## At a glance

| | |
| --- | --- |
| **Format** | 13 Markdown chapters in `docs/` plus a generated static site in `site/` |
| **Length** | 27,931 source words (28,033 rendered words) |
| **Prompt library** | 13 reusable, review-gated templates |
| **Also included** | Scenario exercises, printable checklists, an incident card, glossary, and further reading |
| **Requirements** | Node.js 20+; no npm dependencies, no install step |
| **Verification** | `npm test` — 1,304 automated checks; browser and HTTP checks summarized in [STATUS.md](STATUS.md) |
| **Edition** | October 2026 |

## Contents

- [Why this guide exists](#why-this-guide-exists)
- [Start reading](#start-reading)
- [Run it locally](#run-it-locally)
- [Site map](#site-map)
- [Project layout](#project-layout)
- [Editing and rebuilding](#editing-and-rebuilding)
- [Verification](#verification)
- [Privacy, safety, and accessibility](#privacy-safety-and-accessibility)
- [Review before local use](#review-before-local-use)
- [Known limitations](#known-limitations)

## Why this guide exists

Generative AI is already appearing in healthcare email, meeting notes, study tools, patient handouts, and documentation workflows. A nurse may use it to organize a de-identified draft, a student may ask for another explanation of a concept, and a manager may tighten a message containing no patient information. These can be useful writing and learning tasks.

They can also fail quietly. A note can be fluent and wrong, a handout can contain an invented warning sign, a citation can be fabricated, and a de-identification shortcut can leave a patient identifiable. This guide treats those failures as design problems: protect the data, constrain the task, verify the facts, and keep a named human accountable.

The guide does not assume AI is either magic or forbidden. It shows where bounded assistance is plausible and where general-purpose AI must stop.

## Start reading

- **If you have ten minutes:** [Start Here](docs/00-start-here.md), then [What Not to Use AI For](docs/09-what-not-to-use-ai-for.md).
- **Direct care and documentation:** [Privacy and HIPAA](docs/02-privacy-hipaa.md) → [Documentation support](docs/03-documentation.md) → [Patient education](docs/05-patient-education.md) → [Prompt library](docs/08-prompt-library.md) → [Checklists](docs/12-checklists-glossary.md).
- **Students and educators:** [How generative AI works](docs/01-how-generative-ai-works.md) → [Studying](docs/04-studying.md) → [Prompting foundations](docs/07-prompting-foundations.md) → [Scenario practice](docs/11-scenarios.md).
- **Managers, informatics, and governance:** [Privacy](docs/02-privacy-hipaa.md) → [Communication and admin](docs/06-communication-admin.md) → [Governance and equity](docs/10-governance-equity.md) → [Checklists](docs/12-checklists-glossary.md).

The [full chapter index](docs/README.md) has one-line descriptions of all 13 chapters.

## Run it locally

Requires **Node.js 20 or newer**. There is no `npm install` step because the project uses only Node built-ins.

```bash
node --version    # confirm v20+
npm test          # build site/ and run verification
npm start         # serve at http://127.0.0.1:4173
```

Open `http://127.0.0.1:4173/` after starting the server. Use the server rather than opening `site/index.html` from disk: browsers can block local file requests used by search and some navigation.

Other commands:

```bash
npm run build                          # rebuild site/ only
npm run verify                         # verify the existing build and docs
HOST=0.0.0.0 PORT=8080 npm start       # bind another address/port
```

The included server is a local preview tool. It sends a restrictive Content Security Policy and related security headers, but it has no TLS, authentication, compression, or production caching. Do not expose it as a production service. For internal deployment, serve the static `site/` directory over HTTPS from a properly configured host. The custom 404 page uses root-relative URLs, so deploy the site at the domain root or adapt those paths for a subdirectory.

## Site map

| Path | Purpose |
| --- | --- |
| `site/index.html` | Guide home, safety rules, and all chapters |
| `site/chapters/start-here.html` | Scope, ground rules, and how to use the guide |
| `site/chapters/*.html` | 13 rendered chapters with outlines and previous/next links |
| `site/search.html` | Client-side search; supports shareable `?q=` links |
| `site/print.html` | Single-page print edition with a continuous table of contents |
| `site/download/ai-for-nurses-guide.md` | Self-contained Markdown edition with internal chapter links |
| `site/404.html` | Custom not-found page |
| `site/search-index.json` | Local search index generated from chapter text and headings |

Prompt templates include copy buttons. The print edition can be printed or saved as a PDF from the browser. No page includes remote fonts, scripts, images, analytics, or tracking.

## Project layout

```text
.
├── docs/                   # 13 chapter sources and chapter index
├── scripts/
│   ├── manifest.mjs        # guide metadata, part order, titles, slugs
│   ├── build.mjs           # Markdown renderer and static site build
│   ├── verify.mjs          # content, link, security, and docs checks
│   └── serve.mjs           # local preview server with security headers
├── src/
│   ├── styles.css          # visual system, responsive and print styles
│   ├── app.js              # navigation, copy buttons, search, print
│   └── favicon.svg
├── site/                   # generated static site (do not edit by hand)
├── README.md
└── STATUS.md               # latest results, limitations, and known gaps
```

## Editing and rebuilding

The Markdown files are the source of truth; `site/` is generated output.

1. Edit or add a chapter in `docs/`. Each chapter must have one H1.
2. Update `scripts/manifest.mjs` for guide metadata, part assignment, chapter titles, slugs, and order.
3. If you add a chapter, add it to `docs/README.md` and the suggested reading paths.
4. Run `npm test`. The build fails if a manifest title differs from the chapter's H1.
5. Run `npm start` and review the page at desktop and mobile widths.

Cross-chapter links in `docs/` can use the chapter's Markdown filename, such as `03-documentation.md`. The site build rewrites these to chapter HTML, and the combined Markdown build rewrites them to in-document anchors.

| Path | Responsibility |
| --- | --- |
| `docs/*.md` | Educational content and prompt templates |
| `scripts/manifest.mjs` | Single source of truth for structure and metadata |
| `scripts/build.mjs` | Markdown parsing, TOC, links, printing, search index, downloads |
| `scripts/verify.mjs` | Automated project and safety checks |
| `src/styles.css` | Screen, responsive, motion, and print presentation |
| `src/app.js` | Progressive client behavior; no third-party code |
| `site/` | Generated pages and assets, rebuilt from source |

## Verification

Run:

```bash
npm test
```

The command rebuilds the site and checks:

- chapter count, title consistency, minimum chapter length, and the 12,000-word requirement;
- required safety themes and the not-medical-advice notice on every generated page;
- HIPAA/Safe Harbor, de-identification, documentation attestation, teach-back, interpreter, and prohibited-use coverage;
- 13 prompt templates and their privacy/review guidance;
- all local links, fragments, unique IDs, and no-JavaScript search navigation;
- search index completeness, print edition sections, and self-contained Markdown download links;
- CSP-compatible markup, no inline scripts/styles/handlers, no remote resources, and no common secret, `.env`, placeholder, or SSN patterns;
- presence and basic quality of `README.md`, `docs/README.md`, and `STATUS.md`.

Latest result (2026-10-22):

```text
Markdown guide: 13 chapters, 27,931 words
Rendered chapter content: 28,033 words
Local links checked: 1177
Checks passed: 1304
Verification passed.
```

Headless Chromium checks also exercised mobile navigation, Escape-to-close with focus return, prompt copying, live search, nested-path 404 styling, print layout, and responsive screenshots. These are manual/browser checks, not a formal accessibility audit. See [STATUS.md](STATUS.md) for details and remaining gaps.

## Privacy, safety, and accessibility

- The guide uses synthetic or de-identified examples and repeatedly warns against putting PHI into unapproved tools.
- The site is fully local: no analytics, cookies, accounts, external fonts, CDNs, or API keys.
- Search runs in the browser against a build-time index; queries are not sent anywhere.
- The preview server applies CSP, `nosniff`, frame denial, a strict referrer policy, and a restrictive Permissions Policy.
- Pages use semantic landmarks, a skip link, visible focus styles, labeled search, live result status, responsive navigation, reduced-motion support, and a print stylesheet.
- Accessibility has been reviewed through markup checks, headless Chromium interactions, and responsive screenshots, but not certified against WCAG or tested with screen readers and real devices.

## Review before local use

This repository is an educational starting point, not an approved clinical or compliance artifact. Before adopting or adapting it:

- Have a qualified clinician, nurse educator, privacy/compliance officer, and legal reviewer check the parts relevant to your setting.
- Replace generic placeholders with your approved policies, escalation routes, and teaching materials.
- Confirm every AI tool, integration, and vendor is approved for the exact data type and workflow.
- Re-check external guidance and regulatory references for currency.
- Arrange a formal accessibility, cross-browser, and real-device review if the site is published widely.
- Add a review owner and renewal date so the guidance does not silently age.

No vendor, product, or model is endorsed by this guide.

## Known limitations

- The content has not been professionally reviewed or accredited and is not legal advice.
- The HIPAA discussion is U.S.-focused and simplified; other jurisdictions and stricter local rules may apply.
- Search uses simple client-side matching and returns chapter-level results.
- The print layout depends on the browser and has no committed PDF artifact.
- The preview server is not production hosting.
- Automated checks and headless Chromium tests do not replace clinical review, formal accessibility testing, or a cross-browser/device matrix.

The full list of verified results and known gaps is maintained in [STATUS.md](STATUS.md).
