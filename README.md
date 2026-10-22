# AI for Nurses and Healthcare Workers

A safety-first field guide to using generative AI for documentation support, studying, patient education drafts, communication, and administrative work — with explicit limits for what must stay in human hands.

It is written for nurses, nursing students, community health workers, medical assistants, allied health professionals, educators, and the administrative teams who support them. No technical background is assumed.

> **Educational use only.** This guide is not medical, nursing, legal, compliance, or academic advice, and it does not create a clinician–patient relationship. AI output can be confidently wrong. Follow your organization's policies, current clinical guidance, licensing requirements, and applicable law. A qualified human remains accountable for every patient-facing decision and record.

## What is included

- **13 Markdown chapters** in `docs/`, totaling roughly 27,900 words, organized into four parts: foundations, everyday practice, prompts and boundaries, and systems and reference.
- **A 13-template prompt library**, plus prompting foundations, review gates, checklists, an incident card, scenario exercises, and a glossary.
- **A generated static site** in `site/` with the full guide, client-side search, a print edition for saving as PDF, and a combined Markdown download.
- **Automated checks** for word count, required safety content, internal links and anchors, search indexing, CSP-safe markup, remote resources, and accidental secret or placeholder patterns.
- **No external runtime dependencies.** The site uses local assets only: no analytics, tracking, external fonts, CDNs, or API keys.

Start reading with [Chapter 1: Start Here](docs/00-start-here.md) or browse the [chapter index](docs/README.md).

## Quick start

Requires **Node.js 20 or newer**. There are no npm dependencies, so there is no install step.

```bash
node --version    # verify v20+
npm run build     # regenerate site/ from docs/
npm run verify    # content, link, accessibility, and safety checks
npm test          # build, then verify
npm start         # serve at http://127.0.0.1:4173
```

To bind a different address or port:

```bash
HOST=0.0.0.0 PORT=8080 npm start
```

The included server is for local preview. It sends CSP and related security headers, but it has no TLS, authentication, or production caching. Put a properly configured web server or platform in front of the static files if you deploy them elsewhere.

## Where to go in the site

| Page | Purpose |
| --- | --- |
| `site/index.html` | Guide home, safety rules, and all chapters |
| `site/chapters/start-here.html` | Scope, ground rules, and how to use the guide |
| `site/search.html` | Search across chapter text and headings; supports `?q=` links |
| `site/print.html` | Single-page print edition for paper or PDF |
| `site/download/ai-for-nurses-guide.md` | Combined Markdown edition |
| `site/404.html` | Custom not-found page |

The print edition has its own continuous table of contents. Chapter pages include a sticky section outline, copy buttons on prompt templates, previous/next links, and an on-page disclaimer.

## Editing the guide

Content and site generation are deliberately simple:

| Path | Role |
| --- | --- |
| `docs/*.md` | Chapter source, one H1 per chapter |
| `scripts/manifest.mjs` | Single source of truth for guide metadata, parts, order, titles, and slugs |
| `scripts/build.mjs` | Custom dependency-free Markdown renderer and site generator |
| `scripts/verify.mjs` | Automated project verification |
| `scripts/serve.mjs` | Minimal static preview server with security headers |
| `src/styles.css` | Site design system, responsive and print styles |
| `src/app.js` | Navigation, copy buttons, search, and print controls |
| `site/` | Generated output; edit source files, not this directory |

To change a chapter, edit its Markdown and rebuild. The manifest title must match the chapter's H1; the build fails if it does not. Re-run `npm test` after content or template changes.

## Privacy and safety by design

- The guide uses synthetic or de-identified examples. It does not invite readers to paste PHI into unapproved tools.
- The built site contains no remote scripts, styles, fonts, images, or analytics.
- The preview server applies a restrictive Content Security Policy and related headers.
- Repository files are scanned for common credential patterns during verification.
- Search indexing happens at build time and is served locally; queries never leave the browser.

See [Chapter 3: Privacy, HIPAA, and Responsible Data Handling](docs/02-privacy-hipaa.md) for the operational rules, and [Chapter 10: What Not to Use AI For](docs/09-what-not-to-use-ai-for.md) for the stop list.

## Verification

Last verified **2026-10-22**:

```text
Markdown guide: 13 chapters, 27,920 words
Rendered chapter content: 28,022 words
Local links checked: 1177
Checks passed: 1255
Verification passed.
```

Headless Chromium checks also exercised mobile navigation, Escape-to-close with focus return, clipboard copy behavior, search results, print layout, and responsive screenshots. See [STATUS.md](STATUS.md) for the full results, limitations, and known gaps.
