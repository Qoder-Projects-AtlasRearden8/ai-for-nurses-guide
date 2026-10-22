import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { guide, parts, chapters } from "./manifest.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DOCS_DIR = path.join(ROOT, "docs");
const SITE_DIR = path.join(ROOT, "site");
const SRC_DIR = path.join(ROOT, "src");

const chapterByFile = new Map(chapters.map((chapter) => [chapter.file, chapter]));
const partById = new Map(parts.map((part, index) => [part.id, { ...part, index }]));

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const escapeAttr = escapeHtml;

const icons = {
  mark: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 3.5l3.15 9.35L28.5 16l-9.35 3.15L16 28.5l-3.15-9.35L3.5 16l9.35-3.15L16 3.5Z" fill="currentColor"/><circle cx="26" cy="6" r="2.4" fill="#e5b36d"/></svg>`,
  arrow: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3.5 10h12M11 5.5l4.5 4.5-4.5 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  search: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.7" cy="8.7" r="5.2" stroke="currentColor" stroke-width="1.7"/><path d="M12.7 12.7l4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  alert: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2.8 18 17H2L10 2.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M10 7.2v4.5M10 14.6v.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  menu: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  print: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5.5 7V3.5h9V7M5.5 14.5H4A1.5 1.5 0 0 1 2.5 13V8.5A1.5 1.5 0 0 1 4 7h12a1.5 1.5 0 0 1 1.5 1.5V13a1.5 1.5 0 0 1-1.5 1.5h-1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="5.5" y="12" width="9" height="5" rx="1" stroke="currentColor" stroke-width="1.6"/></svg>`,
};

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function stripMarkdown(value) {
  return normalizeWhitespace(
    value
      .replace(/```[^\n]*\n([\s\S]*?)```/g, "$1")
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/^\s*>\s?/gm, "")
      .replace(/^\s*(?:[-*+]|\d+\.)\s+/gm, "")
      .replace(/\|/g, " ")
      .replace(/[*_`~]/g, "")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function slugify(value) {
  const slug = value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "section";
}

function countWords(value) {
  const stripped = stripMarkdown(value);
  return stripped ? stripped.split(/\s+/).length : 0;
}

function readingTime(words) {
  return Math.max(2, Math.ceil(words / 220));
}

function formatNumber(value) {
  return Number(value).toLocaleString("en-US");
}

function isSafeHref(href) {
  return /^(https?:\/\/|mailto:|#)/i.test(href);
}

function renderMarkdown(source, options = {}) {
  const lines = source.replace(/\r\n?/g, "\n").split("\n");
  const usedIds = new Set();
  const headings = [];
  const tokens = [];
  let html = "";
  let paragraphLines = [];
  let documentTitle = "";
  let index = 0;

  const hold = (fragment) => {
    const token = `\u0000MDTOKEN${tokens.length}\u0000`;
    tokens.push(fragment);
    return token;
  };

  const uniqueId = (text) => {
    const base = `${options.idPrefix || ""}${slugify(text)}`;
    let candidate = base;
    let suffix = 2;
    while (usedIds.has(candidate)) {
      candidate = `${base}-${suffix}`;
      suffix += 1;
    }
    usedIds.add(candidate);
    return candidate;
  };

  const resolveHref = (rawHref) => {
    const href = rawHref.trim();
    if (!href) return null;

    if (/\.md(?:#.*)?$/i.test(href)) {
      const [file, hash = ""] = href.split("#");
      const target = chapterByFile.get(file);
      if (!target) return null;
      if (options.docHref) return options.docHref(target, hash);
      return `${target.slug}.html${hash ? `#${hash}` : ""}`;
    }

    if (isSafeHref(href)) return href;
    if (/^([a-z0-9._/-]+)(#[a-z0-9._-]+)?$/i.test(href) && !href.startsWith("//")) {
      return href;
    }
    return null;
  };

  const formatLabel = (label) => {
    let result = escapeHtml(label);
    result = result.replace(/`([^`]+)`/g, (_, code) => `<code>${code}</code>`);
    result = result.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    result = result.replace(/__([^_]+)__/g, "<strong>$1</strong>");
    return result;
  };

  const inline = (raw) => {
    const localTokens = [];
    let text = String(raw);

    const stash = (fragment) => {
      const token = `\u0000TOKEN${localTokens.length}\u0000`;
      localTokens.push(fragment);
      return token;
    };

    text = text.replace(/`([^`\n]+)`/g, (_, code) => stash(`<code>${escapeHtml(code)}</code>`));

    text = text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => {
      const resolved = resolveHref(href);
      if (!resolved) return stash(formatLabel(label));
      return stash(`<a href="${escapeAttr(resolved)}">${formatLabel(label)}</a>`);
    });

    text = escapeHtml(text);

    text = text.replace(/\bhttps?:\/\/[^\s<]+/g, (match) => {
      let url = match;
      let suffix = "";

      while (/[.,;:!?]$/.test(url)) {
        suffix = url.slice(-1) + suffix;
        url = url.slice(0, -1);
      }

      while (url.endsWith(")")) {
        const opens = (url.match(/\(/g) || []).length;
        const closes = (url.match(/\)/g) || []).length;
        if (closes <= opens) break;
        suffix = ")" + suffix;
        url = url.slice(0, -1);
      }

      return `${stash(`<a href="${url}">${url}</a>`)}${suffix}`;
    });

    text = text.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/__([^_\n]+)__/g, "<strong>$1</strong>");
    text = text.replace(/(^|[^\w*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>");

    return text.replace(/\u0000TOKEN(\d+)\u0000/g, (_, tokenIndex) => localTokens[Number(tokenIndex)]);
  };

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    const paragraph = paragraphLines.join(" ").trim();
    if (paragraph) html += `<p>${inline(paragraph)}</p>\n`;
    paragraphLines = [];
  };

  const renderHeading = (level, rawText) => {
    if (level === 1) {
      documentTitle = stripMarkdown(rawText);
      return;
    }
    const id = uniqueId(stripMarkdown(rawText));
    const renderedText = inline(rawText);
    const tocText = stripMarkdown(rawText);
    if (level === 2 || level === 3) {
      headings.push({ level, id, text: tocText });
    }
    html += `<h${level} id="${escapeAttr(id)}">${renderedText}<a class="heading-anchor" href="#${escapeAttr(id)}" aria-label="Permalink to ${escapeAttr(tocText)}">#</a></h${level}>\n`;
  };

  const isTableStart = (lineIndex) => {
    const current = lines[lineIndex] || "";
    const next = lines[lineIndex + 1] || "";
    return current.includes("|") && /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(next);
  };

  const splitTableRow = (line) => {
    let row = line.trim();
    if (row.startsWith("|")) row = row.slice(1);
    if (row.endsWith("|")) row = row.slice(0, -1);
    return row.split("|").map((cell) => cell.trim());
  };

  const isListLine = (line) => /^\s*(?:[-*+]|\d+\.)\s+/.test(line);
  const isBlockStart = (line) =>
    /^\s*```/.test(line) ||
    /^#{1,6}\s+/.test(line) ||
    /^\s*>\s?/.test(line) ||
    isListLine(line) ||
    /^\s*---+\s*$/.test(line) ||
    isTableStart(index);

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      flushParagraph();
      index += 1;
      continue;
    }

    const fenceMatch = line.match(/^\s*```([a-zA-Z0-9_-]*)\s*$/);
    if (fenceMatch) {
      flushParagraph();
      const language = (fenceMatch[1] || "").toLowerCase();
      const codeLines = [];
      index += 1;
      while (index < lines.length && !/^\s*```\s*$/.test(lines[index])) {
        codeLines.push(lines[index]);
        index += 1;
      }
      if (index < lines.length) index += 1;

      const labelMap = {
        text: "Prompt template",
        prompt: "Prompt template",
        markdown: "Markdown example",
        json: "JSON example",
        bash: "Command example",
      };
      const label = labelMap[language] || "Example";
      html += `<figure class="code-block"><figcaption><span>${escapeHtml(label)}</span><button class="copy-button" type="button" data-copy aria-label="Copy ${escapeAttr(label.toLowerCase())}">Copy</button></figcaption><pre tabindex="0"><code>${escapeHtml(codeLines.join("\n"))}</code></pre></figure>\n`;
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      renderHeading(headingMatch[1].length, headingMatch[2].trim());
      index += 1;
      continue;
    }

    if (isTableStart(index)) {
      flushParagraph();
      const headerCells = splitTableRow(line);
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }
      html += '<div class="table-wrap" tabindex="0" role="region" aria-label="Table"><table><thead><tr>';
      for (const cell of headerCells) html += `<th scope="col">${inline(cell)}</th>`;
      html += "</tr></thead><tbody>";
      for (const row of rows) {
        html += "<tr>";
        for (const cell of row) html += `<td>${inline(cell)}</td>`;
        html += "</tr>";
      }
      html += "</tbody></table></div>\n";
      continue;
    }

    if (isListLine(line)) {
      flushParagraph();
      const listMatch = line.match(/^\s*([-*+]|\d+\.)\s+(.*)$/);
      const ordered = /\d+\./.test(listMatch[1]);
      const items = [];
      let currentItem = null;

      while (index < lines.length) {
        const itemMatch = lines[index].match(/^\s*([-*+]|\d+\.)\s+(.*)$/);
        if (itemMatch) {
          const taskMatch = itemMatch[2].match(/^\[([ xX])\]\s+(.*)$/);
          currentItem = {
            text: taskMatch ? taskMatch[2] : itemMatch[2],
            task: Boolean(taskMatch),
            checked: taskMatch ? taskMatch[1].toLowerCase() === "x" : false,
          };
          items.push(currentItem);
          index += 1;
          continue;
        }

        if (lines[index].trim() && /^\s{2,}/.test(lines[index]) && currentItem) {
          currentItem.text = `${currentItem.text} ${lines[index].trim()}`;
          index += 1;
          continue;
        }
        break;
      }

      const hasTasks = items.some((item) => item.task);
      const tag = ordered ? "ol" : "ul";
      html += `<${tag}${hasTasks ? ' class="checklist"' : ""}>`;
      for (const item of items) {
        if (item.task) {
          html += `<li class="task-item"><input type="checkbox" disabled tabindex="-1" aria-hidden="true"${item.checked ? " checked" : ""}>${inline(item.text)}</li>`;
        } else {
          html += `<li>${inline(item.text)}</li>`;
        }
      }
      html += `</${tag}>\n`;
      continue;
    }

    if (/^\s*>\s?/.test(line)) {
      flushParagraph();
      const quoteLines = [];
      while (index < lines.length && /^\s*>\s?/.test(lines[index])) {
        quoteLines.push(lines[index].replace(/^\s*>\s?/, ""));
        index += 1;
      }
      const quoteText = quoteLines.join(" ").trim();
      const isSafety = /disclaimer|not medical advice|educational use only/i.test(quoteText);
      html += `<blockquote${isSafety ? ' class="callout-safety"' : ""}><p>${inline(quoteText)}</p></blockquote>\n`;
      continue;
    }

    if (/^\s*---+\s*$/.test(line)) {
      flushParagraph();
      html += "<hr>\n";
      index += 1;
      continue;
    }

    if (isBlockStart(line)) {
      flushParagraph();
    }

    paragraphLines.push(line.trim());
    index += 1;
  }

  flushParagraph();

  return {
    html,
    headings,
    title: documentTitle,
    wordCount: countWords(source),
    plainText: stripMarkdown(source),
  };
}

function siteHeader(prefix, activeNav) {
  const navItems = [
    { key: "home", label: "Guide", href: `${prefix}index.html` },
    { key: "prompt-library", label: "Prompt library", href: `${prefix}chapters/prompt-library.html` },
    {
      key: "what-not-to-use-ai-for",
      label: "What not to use",
      href: `${prefix}chapters/what-not-to-use-ai-for.html`,
    },
    {
      key: "checklists-and-glossary",
      label: "Checklists",
      href: `${prefix}chapters/checklists-and-glossary.html`,
    },
    { key: "search", label: "Search", href: `${prefix}search.html`, icon: icons.search },
  ];

  const navHtml = navItems
    .map(
      (item) =>
        `<a class="nav-link" href="${item.href}"${activeNav === item.key ? ' aria-current="page"' : ""}>${item.icon || ""}<span>${item.label}</span></a>`,
    )
    .join("");

  return `<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="${prefix}index.html" aria-label="${escapeAttr(guide.title)} home">
      <span class="brand-mark">${icons.mark}</span>
      <span>
        <span class="brand-title">AI for Nurses</span>
        <span class="brand-kicker">Healthcare field guide</span>
      </span>
    </a>
    <button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="primary-nav">
      ${icons.menu}
      <span>Menu</span>
    </button>
    <nav class="primary-nav" id="primary-nav" aria-label="Primary navigation">
      ${navHtml}
    </nav>
  </div>
</header>
<div class="notice-bar" role="note">
  <div class="wrap notice-inner">
    <span class="notice-dot" aria-hidden="true"></span>
    <p><strong>Educational use only.</strong> Not medical, legal, or compliance advice. AI output requires human review.</p>
  </div>
</div>`;
}

function siteFooter(prefix) {
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-about-wrap">
        <a class="footer-brand" href="${prefix}index.html">
          <span class="footer-mark">${icons.mark}</span>
          <span>AI for Nurses and Healthcare Workers</span>
        </a>
        <p class="footer-about">A practical field guide to using generative AI with privacy, verification, and human accountability. Built to be read offline, with no accounts, analytics, or external assets.</p>
      </div>
      <div>
        <p class="footer-heading">Read</p>
        <ul class="footer-links">
          <li><a href="${prefix}index.html#contents">All chapters</a></li>
          <li><a href="${prefix}chapters/prompt-library.html">Prompt library</a></li>
          <li><a href="${prefix}chapters/what-not-to-use-ai-for.html">What not to use AI for</a></li>
          <li><a href="${prefix}chapters/checklists-and-glossary.html">Checklists</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-heading">Use</p>
        <ul class="footer-links">
          <li><a href="${prefix}search.html">Search the guide</a></li>
          <li><a href="${prefix}print.html">Print edition</a></li>
          <li><a href="${prefix}download/ai-for-nurses-guide.md">Markdown edition</a></li>
          <li><a href="${prefix}chapters/start-here.html">Scope and disclaimer</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Educational use only. This guide is not medical, nursing, legal, or compliance advice and does not create a clinician-patient relationship. Always follow local policy and current authoritative guidance. Edition ${escapeHtml(guide.edition)}.</p>
      <p class="footer-note">No tracking · No API keys · Static site</p>
    </div>
  </div>
</footer>`;
}

function documentShell({ fullTitle, description, prefix, activeNav, bodyClass = "", content }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="theme-color" content="#073e3a">
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'">
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeAttr(description)}">
  <meta property="og:title" content="${escapeAttr(fullTitle)}">
  <meta property="og:description" content="${escapeAttr(description)}">
  <meta property="og:type" content="website">
  <link rel="icon" href="${prefix}assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${prefix}assets/styles.css">
  <script src="${prefix}assets/app.js" defer></script>
</head>
<body class="${escapeAttr(bodyClass)}">
  <a class="skip-link" href="#main">Skip to main content</a>
  ${siteHeader(prefix, activeNav)}
  ${content}
  ${siteFooter(prefix)}
</body>
</html>
`;
}

function chapterCard(chapter, readTime, options = {}) {
  const { compact = false } = options;
  return `<a class="chapter-card" href="chapters/${chapter.slug}.html">
  <span class="card-topline">
    <span class="card-number">${chapter.number}</span>
    <span class="card-time">${readTime} min read</span>
  </span>
  <h3 class="card-title">${escapeHtml(chapter.title)}</h3>
  ${compact ? "" : `<span class="card-summary">${escapeHtml(chapter.summary)}</span>`}
  <span class="card-cta">Read chapter ${icons.arrow}</span>
</a>`;
}

function renderHome(chapterData, totalWords) {
  const wordLabel = `About ${formatNumber(Math.round(totalWords / 1000) * 1000)} words`;
  const contents = parts
    .map((part, partIndex) => {
      const partChapters = chapterData.filter((chapter) => chapter.part === part.id);
      return `<section class="guide-part" aria-labelledby="part-${part.id}">
  <div class="part-head">
    <p class="part-label" id="part-${part.id}">Part ${partIndex + 1} · ${escapeHtml(part.title)}</p>
    <p class="part-description">${escapeHtml(part.description)}</p>
  </div>
  <div class="chapter-grid">
    ${partChapters.map((chapter) => chapterCard(chapter, chapter.readTime)).join("\n    ")}
  </div>
</section>`;
    })
    .join("\n");

  const content = `<main id="main">
  <section class="home-hero" aria-labelledby="home-title">
    <div class="wrap hero-grid">
      <div>
        <p class="eyebrow">A safety-first field guide</p>
        <h1 class="hero-title" id="home-title">AI for <span class="title-accent">Nurses</span><br>and Healthcare Workers</h1>
        <p class="hero-lede">A practical guide to using generative AI without outsourcing judgment. Clear workflows for documentation support, studying, patient education, and communication, with explicit limits for what must never leave human hands.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="chapters/start-here.html">Start with the ground rules ${icons.arrow}</a>
          <a class="btn btn-secondary" href="chapters/prompt-library.html">Browse prompt templates</a>
        </div>
        <div class="hero-meta" aria-label="Guide details">
          <span>${chapterData.length} chapters</span>
          <span>${escapeHtml(wordLabel)}</span>
          <span>Free to read offline</span>
        </div>
      </div>
      <aside class="safety-card" aria-labelledby="safety-card-title">
        <p class="safety-kicker">Before you press send</p>
        <h2 class="safety-title" id="safety-card-title">Three rules that outrank speed.</h2>
        <ol class="safety-rules">
          <li>
            <span class="safety-rule-number">01</span>
            <div><strong>Protect the data.</strong><p>No PHI in unapproved tools. Removing a name is not de-identification.</p></div>
          </li>
          <li>
            <span class="safety-rule-number">02</span>
            <div><strong>Verify the facts.</strong><p>Every clinical claim needs a source outside the model. Fluency is not evidence.</p></div>
          </li>
          <li>
            <span class="safety-rule-number">03</span>
            <div><strong>Keep a human accountable.</strong><p>A named professional reviews, signs, and owns the result. AI does not inherit responsibility.</p></div>
          </li>
        </ol>
        <p class="safety-card-foot">If any answer is unclear, stop and ask. <a href="chapters/what-not-to-use-ai-for.html">See the full stop list →</a></p>
      </aside>
    </div>
  </section>

  <section class="scope-note" aria-labelledby="scope-title">
    <div class="wrap scope-note-inner">
      <p class="scope-label" id="scope-title">${icons.alert}<span>Not medical advice</span></p>
      <p class="scope-copy"><strong>This is an educational guide, not a clinical protocol.</strong> It does not replace your organization’s policies, applicable law, licensing requirements, current clinical guidelines, or the judgment of a qualified professional. Do not use AI to diagnose, treat, triage, prescribe, or make decisions about a specific patient. <a href="chapters/start-here.html">Read the full scope and disclaimer</a>.</p>
    </div>
  </section>

  <section class="contents-section wrap" id="contents" aria-labelledby="contents-title">
    <div class="section-head">
      <div>
        <p class="eyebrow">The field guide</p>
        <h2 class="section-title" id="contents-title">Start small. Stay accountable.</h2>
        <p class="section-intro">Thirteen focused chapters move from how the technology works to where it must stop — with practical templates, review gates, and team exercises along the way.</p>
      </div>
      <a class="section-link" href="print.html">View print edition ${icons.arrow}</a>
    </div>
    ${contents}
  </section>

  <section class="wrap" aria-labelledby="paths-title">
    <div class="pathways">
      <p class="eyebrow">Choose a path</p>
      <h2 id="paths-title">Use the guide the way you work.</h2>
      <p class="pathways-intro">You do not need to read every chapter before doing something useful. Start with the risk level and the decision in front of you.</p>
      <div class="pathway-grid">
        <div class="pathway">
          <span class="pathway-label">New to AI</span>
          <h3>Build the foundation first.</h3>
          <p>Understand the failure modes, the privacy boundary, and the three rules before you try a real workflow.</p>
          <a href="chapters/start-here.html">Start with chapter 1 →</a>
        </div>
        <div class="pathway">
          <span class="pathway-label">Need a safe starting task</span>
          <h3>Use a bounded template.</h3>
          <p>Start with low-risk studying or drafting tasks. Use only synthetic or approved data, then review against the source.</p>
          <a href="chapters/prompt-library.html">Open the prompt library →</a>
        </div>
        <div class="pathway">
          <span class="pathway-label">Leading a rollout</span>
          <h3>Govern before you scale.</h3>
          <p>Define the problem, validate the workflow, examine equity, and make human oversight real.</p>
          <a href="chapters/governance-and-equity.html">Read the governance chapter →</a>
        </div>
      </div>
    </div>
  </section>

  <section class="wrap">
    <div class="utility-band">
      <div>
        <h2>Take the guide with you.</h2>
        <p>Use the searchable site, open the print edition for a clean page-by-page read, or download the Markdown edition to adapt for local training.</p>
      </div>
      <div class="utility-actions">
        <a class="btn btn-primary" href="search.html">${icons.search} Search the guide</a>
        <a class="btn btn-secondary" href="print.html">${icons.print} Print edition</a>
      </div>
    </div>
  </section>
</main>`;

  return documentShell({
    fullTitle: `${guide.title}: A Safety-First Field Guide`,
    description: guide.description,
    prefix: "",
    activeNav: "home",
    bodyClass: "page-home",
    content,
  });
}

function renderToc(headings) {
  if (!headings.length) return "";
  return `<ol class="toc-list">${headings
    .map(
      (heading) =>
        `<li class="toc-level-${heading.level}"><a href="#${escapeAttr(heading.id)}">${escapeHtml(heading.text)}</a></li>`,
    )
    .join("")}</ol>`;
}

function renderChapter(chapter, parsed, readTime) {
  const part = partById.get(chapter.part);
  const chapterIndex = chapters.findIndex((item) => item.slug === chapter.slug);
  const previous = chapters[chapterIndex - 1];
  const next = chapters[chapterIndex + 1];
  const toc = renderToc(parsed.headings);
  const articleHtml = parsed.html;

  const previousHtml = previous
    ? `<a class="pagination-link" href="${previous.slug}.html"><span class="pagination-label">Previous</span><span class="pagination-title">${escapeHtml(previous.title)}</span></a>`
    : `<span class="pagination-spacer" aria-hidden="true"></span>`;
  const nextHtml = next
    ? `<a class="pagination-link is-next" href="${next.slug}.html"><span class="pagination-label">Next chapter</span><span class="pagination-title">${escapeHtml(next.title)}</span></a>`
    : `<span class="pagination-spacer" aria-hidden="true"></span>`;

  const content = `<main id="main" class="page-shell">
  <div class="chapter-layout">
    <article class="chapter" aria-labelledby="chapter-title">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="../index.html">Guide</a></li>
          <li><a href="../index.html#contents">Chapters</a></li>
          <li aria-current="page">Chapter ${chapter.number}</li>
        </ol>
      </nav>

      <header class="chapter-header">
        <div class="chapter-kicker">
          <span class="chapter-badge">Chapter ${chapter.number}</span>
          <span class="chapter-part">Part ${part.index + 1} · ${escapeHtml(part.title)}</span>
        </div>
        <h1 class="chapter-title" id="chapter-title">${escapeHtml(chapter.title)}</h1>
        <p class="chapter-summary">${escapeHtml(chapter.summary)}</p>
        <div class="chapter-meta">
          <span>${readTime} min read</span>
          <span>Chapter ${chapter.number} of ${chapters.length}</span>
        </div>
      </header>

      <details class="toc-mobile">
        <summary>On this page</summary>
        ${toc}
      </details>

      <div class="inline-disclaimer" role="note">
        ${icons.alert}
        <p><strong>Educational use only.</strong> This chapter is not medical, legal, or compliance advice. Verify clinical facts, follow local policy, and keep a qualified human accountable for any patient-facing output.</p>
      </div>

      <div class="article-body">
        ${articleHtml}
      </div>

      <nav class="chapter-pagination" aria-label="Chapter navigation">
        ${previousHtml}
        ${nextHtml}
      </nav>

      <aside class="article-review" aria-label="Review reminder">
        <strong>Keep the review gate:</strong> if you used AI to draft or organize anything, compare every factual statement with its approved source before it reaches a patient, record, learner, colleague, or the public. When unsure, stop and ask.
      </aside>
    </article>

    <aside class="toc-aside" aria-label="Chapter contents">
      <div class="toc-card">
        <p class="toc-label">On this page</p>
        <nav aria-label="Table of contents">
          ${toc}
        </nav>
      </div>
      <div class="aside-safety">
        <strong>Human review required.</strong>
        AI can help with structure and wording. It cannot provide clinical judgment, verify its own facts, or assume professional accountability. <a href="what-not-to-use-ai-for.html">Read the stop list</a>.
      </div>
    </aside>
  </div>
</main>`;

  return documentShell({
    fullTitle: `${chapter.title} | ${guide.title}`,
    description: chapter.summary,
    prefix: "../",
    activeNav: chapter.slug,
    bodyClass: "page-chapter",
    content,
  });
}

// Kept separate so chapter rendering never silently uses a stale parsed document.
const sourceCache = new Map();
function requireChapterSource(chapter) {
  if (!sourceCache.has(chapter.file)) {
    throw new Error(`Missing source for ${chapter.file}`);
  }
  return sourceCache.get(chapter.file);
}

function renderSearch(chapterData) {
  const browseCards = chapterData
    .map(
      (chapter) => `<a class="chapter-card" href="chapters/${chapter.slug}.html">
        <span class="card-topline"><span class="card-number">${chapter.number}</span><span class="card-time">${chapter.readTime} min</span></span>
        <span class="card-title">${escapeHtml(chapter.title)}</span>
        <span class="card-cta">Open chapter ${icons.arrow}</span>
      </a>`,
    )
    .join("\n");

  const content = `<main id="main" class="search-main">
  <div class="wrap">
    <header class="search-hero">
      <p class="eyebrow">Find a section</p>
      <h1>Search the field guide.</h1>
      <p>Search across all ${chapters.length} chapters for privacy, documentation, patient education, prompts, governance, and the guardrails that keep AI use safe.</p>
    </header>

    <section class="search-panel" aria-labelledby="search-heading">
      <label class="search-label" id="search-heading" for="search-input">Search words or topics</label>
      <div class="search-input-wrap">
        ${icons.search}
        <input class="search-input" id="search-input" type="search" placeholder="Loading search index..." autocomplete="off" spellcheck="false" aria-controls="search-results" aria-describedby="search-hint search-status" disabled>
      </div>
      <p class="search-hint visually-hidden" id="search-hint">Results update as you type and link to chapters that match every word.</p>
      <p class="search-status" id="search-status" role="status" aria-live="polite"></p>
      <div class="search-results" id="search-results"></div>
    </section>

    <section class="search-browse" id="search-all" aria-labelledby="browse-title">
      <h2 id="browse-title">Browse all chapters</h2>
      <div class="chapter-grid">
        ${browseCards}
      </div>
      <noscript><p class="search-fallback">JavaScript is off, so live search is unavailable. The chapter links above still work.</p></noscript>
    </section>
  </div>
</main>`;

  return documentShell({
    fullTitle: `Search the guide | ${guide.title}`,
    description: "Search the AI for Nurses and Healthcare Workers field guide.",
    prefix: "",
    activeNav: "search",
    bodyClass: "page-search",
    content,
  });
}

function renderPrint(chapterData) {
  const printChapters = chapterData
    .map((chapter) => {
      const parsed = renderMarkdown(requireChapterSource(chapter), {
        idPrefix: `${chapter.slug}--`,
        docHref: (target) => `#${target.slug}`,
      });
      return `<section class="print-chapter" id="${chapter.slug}" aria-labelledby="${chapter.slug}-title">
  <header class="chapter-header">
    <div class="chapter-kicker">
      <span class="chapter-badge">Chapter ${chapter.number}</span>
      <span class="chapter-part">Part ${partById.get(chapter.part).index + 1} · ${escapeHtml(partById.get(chapter.part).title)}</span>
    </div>
    <h1 class="chapter-title" id="${chapter.slug}-title">${escapeHtml(chapter.title)}</h1>
    <p class="chapter-summary">${escapeHtml(chapter.summary)}</p>
    <div class="chapter-meta"><span>${chapter.readTime} min read</span><span>${formatNumber(chapter.wordCount)} words</span></div>
  </header>
  <div class="article-body">
    ${parsed.html}
  </div>
</section>`;
    })
    .join("\n");

  const toc = parts
    .map((part, partIndex) => {
      const partChapters = chapterData.filter((chapter) => chapter.part === part.id);
      return `<div>
        <p class="part-label">Part ${partIndex + 1} · ${escapeHtml(part.title)}</p>
        <ol start="${partChapters[0].number}">
          ${partChapters.map((chapter) => `<li><a href="#${chapter.slug}">${escapeHtml(chapter.title)}</a></li>`).join("")}
        </ol>
      </div>`;
    })
    .join("");

  const content = `<main id="main" class="print-main">
  <div class="print-toolbar">
    <p>This is the full guide in a clean, print-friendly layout. Use the button to print or save as PDF. Links to other chapters jump within this page.</p>
    <div class="utility-actions">
      <button class="btn btn-primary" type="button" data-print>${icons.print} Print or save PDF</button>
      <a class="btn btn-secondary" href="download/ai-for-nurses-guide.md">Markdown edition</a>
    </div>
  </div>

  <header class="print-cover">
    <p class="eyebrow">A safety-first field guide</p>
    <h1>${escapeHtml(guide.title)}</h1>
    <p class="print-subtitle">${escapeHtml(guide.subtitle)}</p>
    <p class="print-edition">Edition ${escapeHtml(guide.edition)} · ${chapters.length} chapters</p>
    <div class="print-disclaimer"><strong>Educational use only.</strong> This guide is not medical, legal, compliance, or academic advice. It does not create a clinician-patient relationship. Follow your organization’s policies and current clinical guidance. AI output can be wrong; keep a qualified human accountable.</div>
  </header>

  <nav class="print-toc" aria-label="Print edition contents">
    <h2>Contents</h2>
    ${toc}
  </nav>

  ${printChapters}
</main>`;

  return documentShell({
    fullTitle: `Print edition | ${guide.title}`,
    description: "The complete AI for Nurses and Healthcare Workers guide in a print-friendly layout.",
    prefix: "",
    activeNav: "",
    bodyClass: "page-print",
    content,
  });
}

function render404() {
  // A 404 can be served at any URL depth, so relative asset paths would break
  // when the missing path contains directory segments. Root-relative paths
  // keep the page intact when the site is hosted at the domain root.
  const prefix = "/";
  const content = `<main id="main" class="simple-main">
  <div class="wrap">
    <p class="eyebrow">Page not found</p>
    <h1>That page is not in the guide.</h1>
    <p>The link may be out of date. Start with the guide contents, search for a topic, or return to the beginning.</p>
    <div class="hero-actions simple-actions">
      <a class="btn btn-primary" href="${prefix}index.html">Go to the guide ${icons.arrow}</a>
      <a class="btn btn-secondary" href="${prefix}search.html">Search</a>
    </div>
  </div>
</main>`;
  return documentShell({
    fullTitle: `Page not found | ${guide.title}`,
    description: "The requested page was not found.",
    prefix,
    activeNav: "",
    bodyClass: "page-simple",
    content,
  });
}

function buildSearchIndex(chapterData) {
  return chapterData.map((chapter) => {
    const bodyText = chapter.plainText.startsWith(chapter.title)
      ? chapter.plainText.slice(chapter.title.length).trim()
      : chapter.plainText;

    return {
      number: chapter.number,
      slug: chapter.slug,
      title: chapter.title,
      summary: chapter.summary,
      readTime: chapter.readTime,
      headings: chapter.headings,
      text: bodyText,
    };
  });
}

function buildCombinedMarkdown(chapterData) {
  const byFile = new Map(chapterData.map((chapter) => [chapter.file, chapter]));
  const toc = chapterData
    .map((chapter) => `${chapter.number}. [${chapter.title}](#${chapter.slug})`)
    .join("\n");
  const body = chapterData
    .map((chapter) => {
      const source = requireChapterSource(chapter).replace(
        /\]\((?:\.\/)?([^/)#]+\.md)(?:#[^)]*)?\)/g,
        (match, fileName) => {
          const target = byFile.get(fileName);
          return target ? `](#${target.slug})` : match;
        },
      );
      return `<a id="${chapter.slug}"></a>\n\n${source}`;
    })
    .join("\n\n---\n\n");
  return `# ${guide.title}

${guide.subtitle}

Edition: ${guide.edition}

> Educational use only. This guide is not medical, nursing, legal, or compliance advice and does not create a clinician-patient relationship. AI output requires human verification. Follow local policy and current authoritative guidance. In an emergency, contact local emergency services.

This single-file Markdown edition is for offline reading and local adaptation. Chapter links jump within this file; use a Markdown viewer that supports internal links and inline HTML anchors.

## Contents

${toc}

---

${body}
`;
}

async function writeFile(relativePath, content) {
  const destination = path.join(SITE_DIR, relativePath);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, content);
}

async function main() {
  const sourceEntries = await Promise.all(
    chapters.map(async (chapter) => {
      const source = await fs.readFile(path.join(DOCS_DIR, chapter.file), "utf8");
      sourceCache.set(chapter.file, source);
      return [chapter.file, source];
    }),
  );
  sourceCache.clear();
  for (const [file, source] of sourceEntries) sourceCache.set(file, source);

  const chapterData = [];
  for (const chapter of chapters) {
    const source = requireChapterSource(chapter);
    const parsed = renderMarkdown(source, {});
    if (parsed.title !== chapter.title) {
      throw new Error(
        `Title mismatch in ${chapter.file}: manifest has "${chapter.title}", document has "${parsed.title}"`,
      );
    }
    const words = countWords(source);
    chapterData.push({
      ...chapter,
      html: parsed.html,
      headings: parsed.headings,
      wordCount: words,
      plainText: parsed.plainText,
      readTime: readingTime(words),
    });
  }

  const totalWords = chapterData.reduce((total, chapter) => total + chapter.wordCount, 0);

  await fs.rm(SITE_DIR, { recursive: true, force: true });
  await fs.mkdir(path.join(SITE_DIR, "assets"), { recursive: true });
  await fs.mkdir(path.join(SITE_DIR, "chapters"), { recursive: true });
  await fs.mkdir(path.join(SITE_DIR, "download"), { recursive: true });

  await fs.copyFile(path.join(SRC_DIR, "styles.css"), path.join(SITE_DIR, "assets", "styles.css"));
  await fs.copyFile(path.join(SRC_DIR, "app.js"), path.join(SITE_DIR, "assets", "app.js"));
  await fs.copyFile(path.join(SRC_DIR, "favicon.svg"), path.join(SITE_DIR, "assets", "favicon.svg"));

  await writeFile("index.html", renderHome(chapterData, totalWords));

  // Re-render each chapter for its own relative-link context. The first pass
  // supplies validated headings and statistics; the second keeps links local.
  for (const chapter of chapterData) {
    const rendered = renderChapter(chapter, chapter, chapter.readTime);
    await writeFile(path.join("chapters", `${chapter.slug}.html`), rendered);
  }

  await writeFile("search.html", renderSearch(chapterData));
  await writeFile("print.html", renderPrint(chapterData));
  await writeFile("404.html", render404());
  await writeFile("search-index.json", JSON.stringify(buildSearchIndex(chapterData), null, 2));
  await writeFile("download/ai-for-nurses-guide.md", buildCombinedMarkdown(chapterData));
  await writeFile(
    "build-meta.json",
    JSON.stringify(
      {
        title: guide.title,
        edition: guide.edition,
        generatedAt: new Date().toISOString(),
        chapterCount: chapters.length,
        totalWords,
        chapters: chapterData.map((chapter) => ({
          number: chapter.number,
          slug: chapter.slug,
          title: chapter.title,
          words: chapter.wordCount,
          readTime: chapter.readTime,
        })),
      },
      null,
      2,
    ),
  );

  console.log(`Built ${chapters.length} chapters (${formatNumber(totalWords)} words) into site/`);
  console.log(`Homepage, chapter pages, search, print edition, 404, and downloadable Markdown generated.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
