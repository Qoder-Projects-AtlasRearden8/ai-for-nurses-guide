import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { guide, chapters } from "./manifest.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE_DIR = path.join(ROOT, "site");
const DOCS_DIR = path.join(ROOT, "docs");
const MIN_WORDS = 12000;

let passed = 0;
const failures = [];

function check(condition, message) {
  if (condition) {
    passed += 1;
  } else {
    failures.push(message);
  }
}

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

function stripMarkdown(value) {
  return normalize(
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

function countWords(value) {
  const stripped = stripMarkdown(value);
  return stripped ? stripped.split(/\s+/).length : 0;
}

function decodeEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&nbsp;", " ");
}

function htmlToText(value) {
  return normalize(
    decodeEntities(
      value
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
        .replace(/<[^>]+>/g, " "),
    ),
  );
}

async function fileExists(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.isFile();
  } catch {
    return false;
  }
}

async function listFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".git" || entry.name === "node_modules") continue;
      files.push(...(await listFiles(entryPath)));
    } else if (entry.isFile()) {
      files.push(entryPath);
    }
  }
  return files;
}

async function readIfExists(filePath) {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch {
    return "";
  }
}

async function main() {
  const errors = [];
  const requiredStaticFiles = [
    "site/index.html",
    "site/search.html",
    "site/print.html",
    "site/404.html",
    "site/search-index.json",
    "site/build-meta.json",
    "site/assets/styles.css",
    "site/assets/app.js",
    "site/assets/favicon.svg",
    "site/download/ai-for-nurses-guide.md",
  ];

  for (const relative of requiredStaticFiles) {
    check(await fileExists(path.join(ROOT, relative)), `Required output missing: ${relative}`);
  }

  check(chapters.length === 13, `Expected 13 chapters, found ${chapters.length}`);

  let sourceWordCount = 0;
  const sourceByFile = new Map();
  for (const chapter of chapters) {
    const filePath = path.join(DOCS_DIR, chapter.file);
    const source = await readIfExists(filePath);
    check(Boolean(source), `Missing source chapter: docs/${chapter.file}`);
    if (!source) continue;
    sourceByFile.set(chapter.file, source);
    const words = countWords(source);
    sourceWordCount += words;
    check(words >= 700, `Chapter docs/${chapter.file} is unexpectedly short (${words} words)`);
    const h1 = source.match(/^#\s+(.+)$/m);
    check(Boolean(h1), `Chapter docs/${chapter.file} has no H1`);
    if (h1) {
      check(
        h1[1].trim() === chapter.title,
        `Title mismatch in docs/${chapter.file}: "${h1[1].trim()}" vs "${chapter.title}"`,
      );
    }
  }
  check(
    sourceWordCount >= MIN_WORDS,
    `Markdown source total is below 12,000 words (${sourceWordCount})`,
  );

  let meta;
  try {
    meta = JSON.parse(await fs.readFile(path.join(SITE_DIR, "build-meta.json"), "utf8"));
  } catch (error) {
    errors.push(`Cannot parse build-meta.json: ${error.message}`);
  }
  check(meta?.chapterCount === chapters.length, "build-meta chapter count is incorrect");
  check(Number(meta?.totalWords) >= MIN_WORDS, `build-meta totalWords is below ${MIN_WORDS}`);
  check(meta?.title === guide.title, "build-meta title is incorrect");

  const home = await readIfExists(path.join(SITE_DIR, "index.html"));
  check(home.includes(guide.title), "Homepage is missing the guide title");
  check(/not medical advice/i.test(home), "Homepage is missing the not-medical-advice statement");
  check(home.includes("chapters/start-here.html"), "Homepage does not link to the first chapter");
  check(home.includes("search.html"), "Homepage does not offer search");
  check(home.includes("print.html"), "Homepage does not offer the print edition");
  check(home.includes("Protect the data"), "Homepage safety rules are missing");

  let renderedWordCount = 0;
  const renderedBySlug = new Map();
  const requiredThemes = [
    [/documentation/i, "documentation"],
    [/study|studying/i, "studying"],
    [/patient education/i, "patient education"],
    [/HIPAA/i, "HIPAA"],
    [/what not to use/i, "what not to use"],
    [/prompt/i, "prompt templates"],
  ];

  for (const chapter of chapters) {
    const relative = path.join("chapters", `${chapter.slug}.html`);
    const html = await readIfExists(path.join(SITE_DIR, relative));
    check(Boolean(html), `Missing chapter page: site/${relative}`);
    if (!html) continue;
    renderedBySlug.set(chapter.slug, html);

    const h1Count = (html.match(/<h1\b/g) || []).length;
    check(h1Count === 1, `Chapter ${chapter.slug} should have exactly one H1 (found ${h1Count})`);
    check(html.includes("<!doctype html>"), `Chapter ${chapter.slug} is missing a doctype`);
    check(html.includes('<html lang="en">'), `Chapter ${chapter.slug} is missing the language attribute`);
    check(html.includes('<main id="main"'), `Chapter ${chapter.slug} is missing a main landmark`);
    check(html.includes('href="#main"'), `Chapter ${chapter.slug} is missing a skip link target`);
    check(/not medical/i.test(html), `Chapter ${chapter.slug} is missing the not-medical-advice notice`);
    check(/human/i.test(html), `Chapter ${chapter.slug} does not mention human review or accountability`);

    for (const [pattern, label] of requiredThemes) {
      if (pattern.test(chapter.title) || pattern.test(chapter.summary)) {
        check(pattern.test(html), `Chapter ${chapter.slug} is missing expected theme: ${label}`);
      }
    }

    const articleMatch = html.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<nav class="chapter-pagination"/);
    check(Boolean(articleMatch), `Chapter ${chapter.slug} article body boundary not found`);
    if (articleMatch) {
      const words = htmlToText(articleMatch[1]).split(/\s+/).filter(Boolean).length;
      renderedWordCount += words;
    }
  }

  check(
    renderedWordCount >= MIN_WORDS,
    `Rendered chapter pages total below ${MIN_WORDS} words (${renderedWordCount})`,
  );

  const privacy = renderedBySlug.get("privacy-and-hipaa") || "";
  check(privacy.includes("18 HIPAA Safe Harbor"), "Privacy chapter lacks the 18 Safe Harbor identifiers");
  check(/business associate/i.test(privacy), "Privacy chapter lacks business associate guidance");
  check(/de-identification/i.test(privacy), "Privacy chapter lacks de-identification guidance");
  check(/minimum necessary/i.test(privacy), "Privacy chapter lacks minimum-necessary guidance");

  const prohibited = renderedBySlug.get("what-not-to-use-ai-for") || "";
  check(/diagnose/i.test(prohibited), "What Not To Use chapter lacks diagnosis guidance");
  check(/triage/i.test(prohibited), "What Not To Use chapter lacks triage guidance");
  check(/medication/i.test(prohibited), "What Not To Use chapter lacks medication guidance");
  check(/interpreter/i.test(prohibited), "What Not To Use chapter lacks interpreter guidance");

  const prompts = renderedBySlug.get("prompt-library") || "";
  const promptCount = (prompts.match(/<figure class="code-block">/g) || []).length;
  check(promptCount >= 13, `Prompt library contains fewer than 13 code-block templates (${promptCount})`);
  check(/Placeholders/i.test(prompts), "Prompt library lacks placeholder/privacy guidance");

  const patientEducation = renderedBySlug.get("patient-education") || "";
  check(/teach-back/i.test(patientEducation), "Patient education chapter lacks teach-back guidance");
  check(/qualified interpreter/i.test(patientEducation), "Patient education chapter lacks interpreter guidance");
  check(/A qualified clinician must verify/i.test(patientEducation), "Patient education chapter lacks clinical review gate");

  const documentation = renderedBySlug.get("documentation-support") || "";
  check(/fabricat/i.test(documentation), "Documentation chapter lacks anti-fabrication guidance");
  check(/attest/i.test(documentation), "Documentation chapter lacks attestation guidance");

  const studying = renderedBySlug.get("studying-and-learning") || "";
  check(/academic integrity/i.test(studying), "Studying chapter lacks academic integrity guidance");
  check(/calculation/i.test(studying), "Studying chapter lacks calculation caution");

  const searchPage = await readIfExists(path.join(SITE_DIR, "search.html"));
  check(searchPage.includes('id="search-input"'), "Search page lacks a search input");
  check(searchPage.includes('id="search-results"'), "Search page lacks a results region");
  check(searchPage.includes("Browse all chapters"), "Search page lacks a no-JavaScript browse fallback");

  let searchIndex;
  try {
    searchIndex = JSON.parse(await fs.readFile(path.join(SITE_DIR, "search-index.json"), "utf8"));
  } catch (error) {
    errors.push(`Cannot parse search-index.json: ${error.message}`);
  }
  check(Array.isArray(searchIndex), "Search index is not an array");
  check(searchIndex?.length === chapters.length, "Search index entry count is incorrect");
  const hipaaEntry = searchIndex?.find((entry) => entry.slug === "privacy-and-hipaa");
  check(Boolean(hipaaEntry), "Search index is missing the privacy chapter");
  check(/hipaa/i.test(hipaaEntry?.text || ""), "Search index privacy text does not contain HIPAA");
  check(
    (searchIndex || []).every(
      (entry) => entry.title && entry.slug && entry.summary && entry.text && Array.isArray(entry.headings),
    ),
    "Search index entries are missing required fields",
  );

  const print = await readIfExists(path.join(SITE_DIR, "print.html"));
  for (const chapter of chapters) {
    check(print.includes(`id="${chapter.slug}"`), `Print edition is missing section id ${chapter.slug}`);
    check(print.includes(chapter.title), `Print edition is missing "${chapter.title}"`);
  }
  check(print.includes("Educational use only"), "Print edition is missing the educational disclaimer");
  check(print.includes("data-print"), "Print edition lacks print control");
  check(print.includes("Print or save PDF"), "Print edition lacks print label");

  const download = await readIfExists(path.join(SITE_DIR, "download", "ai-for-nurses-guide.md"));
  check(download.startsWith(`# ${guide.title}`), "Markdown download has the wrong title");
  check(download.includes("not medical"), "Markdown download lacks the disclaimer");
  for (const chapter of chapters) {
    check(download.includes(chapter.title), `Markdown download is missing "${chapter.title}"`);
  }

  const pageFiles = [
    path.join(SITE_DIR, "index.html"),
    path.join(SITE_DIR, "search.html"),
    path.join(SITE_DIR, "print.html"),
    path.join(SITE_DIR, "404.html"),
    ...chapters.map((chapter) => path.join(SITE_DIR, "chapters", `${chapter.slug}.html`)),
  ];

  const idsByFile = new Map();
  for (const pageFile of pageFiles) {
    const html = await readIfExists(pageFile);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => decodeEntities(match[1]));
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    check(duplicates.length === 0, `Duplicate IDs in ${path.relative(ROOT, pageFile)}: ${[...new Set(duplicates)].join(", ")}`);
    idsByFile.set(path.resolve(pageFile), new Set(ids));

    check(/<html lang="en">/.test(html), `Missing lang attribute: ${path.relative(ROOT, pageFile)}`);
    check(/<meta name="viewport"/.test(html), `Missing viewport meta: ${path.relative(ROOT, pageFile)}`);
    check(/<meta name="description"/.test(html), `Missing meta description: ${path.relative(ROOT, pageFile)}`);
    check(/<a class="skip-link" href="#main">/.test(html), `Missing skip link: ${path.relative(ROOT, pageFile)}`);
    check(!/<[^>]+\sstyle\s*=/.test(html), `Inline style attribute found: ${path.relative(ROOT, pageFile)}`);
    check(!/<[^>]+\son[a-z]+\s*=/i.test(html), `Inline event handler found: ${path.relative(ROOT, pageFile)}`);
    check(!/<script\b(?![^>]*\bsrc=)[^>]*>/i.test(html), `Inline script found: ${path.relative(ROOT, pageFile)}`);
    check(
      !/<(?:script|img|link)\b[^>]*(?:src|href)="https?:\/\//i.test(html),
      `Remote resource reference found: ${path.relative(ROOT, pageFile)}`,
    );

    if (!pageFile.endsWith("print.html")) {
      const h1Count = (html.match(/<h1\b/g) || []).length;
      check(h1Count === 1, `Expected one H1 in ${path.relative(ROOT, pageFile)}, found ${h1Count}`);
    }
  }

  let checkedLinks = 0;
  for (const pageFile of pageFiles) {
    const html = await readIfExists(pageFile);
    const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => decodeEntities(match[1]));
    for (const href of hrefs) {
      if (!href || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
        continue;
      }
      if (href.startsWith("data:") || href.startsWith("javascript:")) {
        failures.push(`Unsafe href in ${path.relative(ROOT, pageFile)}: ${href}`);
        continue;
      }

      let resolved;
      try {
        resolved = new URL(href, pathToFileURL(pageFile));
      } catch {
        failures.push(`Malformed href in ${path.relative(ROOT, pageFile)}: ${href}`);
        continue;
      }

      if (resolved.protocol !== "file:") {
        failures.push(`Unexpected href protocol in ${path.relative(ROOT, pageFile)}: ${href}`);
        continue;
      }

      const targetPath = path.resolve(fileURLToPath(resolved));
      const relativeTarget = path.relative(SITE_DIR, targetPath);
      if (relativeTarget.startsWith("..") || path.isAbsolute(relativeTarget)) {
        failures.push(`href escapes site directory in ${path.relative(ROOT, pageFile)}: ${href}`);
        continue;
      }

      if (!(await fileExists(targetPath))) {
        failures.push(`Broken local link in ${path.relative(ROOT, pageFile)}: ${href}`);
        continue;
      }

      checkedLinks += 1;
      if (resolved.hash) {
        let targetIds = idsByFile.get(targetPath);
        if (!targetIds && targetPath.endsWith(".html")) {
          const targetHtml = await readIfExists(targetPath);
          targetIds = new Set([...targetHtml.matchAll(/\sid="([^"]+)"/g)].map((match) => decodeEntities(match[1])));
          idsByFile.set(targetPath, targetIds);
        }
        if (targetIds) {
          const fragment = decodeURIComponent(resolved.hash.slice(1));
          check(targetIds.has(fragment), `Broken fragment in ${path.relative(ROOT, pageFile)}: ${href}`);
        }
      }
    }
  }
  check(checkedLinks > 100, `Expected more than 100 local links to verify, checked ${checkedLinks}`);

  const allSiteFiles = await listFiles(SITE_DIR);
  const allTextFiles = allSiteFiles.filter((file) =>
    /\.(html|css|js|json|md|svg|txt)$/i.test(file),
  );
  const css = await readIfExists(path.join(SITE_DIR, "assets", "styles.css"));
  check(!/@import\b/i.test(css), "CSS uses an @import");
  check(!/url\(\s*["']?https?:\/\//i.test(css), "CSS references a remote URL");

  const secretPatterns = [
    [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, "private key"],
    [/\bAKIA[0-9A-Z]{16}\b/, "AWS access key"],
    [/\bsk-[A-Za-z0-9_-]{20,}\b/, "OpenAI-style key"],
    [/\bgh[pousr]_[A-Za-z0-9]{30,}\b/, "GitHub token"],
    [/\bAIza[0-9A-Za-z_-]{35}\b/, "Google API key"],
    [/\bxox[baprs]-[A-Za-z0-9-]{10,}\b/, "Slack token"],
    [/\bBearer\s+[A-Za-z0-9._-]{20,}\b/, "bearer token"],
    [/\b(?:api[_-]?key|client[_-]?secret|access[_-]?token)\s*[:=]\s*["'][^"'\s]{12,}["']/i, "assigned credential"],
  ];

  for (const file of allTextFiles) {
    const content = await fs.readFile(file, "utf8");
    for (const [pattern, label] of secretPatterns) {
      if (pattern.test(content)) {
        failures.push(`Possible ${label} found in ${path.relative(ROOT, file)}`);
      }
    }
  }

  const forbiddenText = [
    [/\blorem ipsum\b/i, "Lorem ipsum placeholder"],
    [/\bTODO\b/, "TODO marker"],
    [/\bFIXME\b/, "FIXME marker"],
  ];
  for (const file of allTextFiles) {
    if (file.endsWith("search-index.json") || file.endsWith("build-meta.json")) continue;
    const content = await fs.readFile(file, "utf8");
    for (const [pattern, label] of forbiddenText) {
      if (pattern.test(content)) failures.push(`${label} found in ${path.relative(ROOT, file)}`);
    }
  }

  for (const file of allTextFiles) {
    const content = await fs.readFile(file, "utf8");
    if (/\b\d{3}-\d{2}-\d{4}\b/.test(content)) {
      failures.push(`Possible Social Security number pattern found in ${path.relative(ROOT, file)}`);
    }
  }

  const rootEnvironment = await fileExists(path.join(ROOT, ".env"));
  check(!rootEnvironment, ".env file should not be present");

  const readme = await readIfExists(path.join(ROOT, "README.md"));
  check(readme.length >= 400, "README.md is missing or too short");
  check(readme.includes("npm run build"), "README.md does not document the build command");
  check(/not medical/i.test(readme), "README.md lacks the not-medical-advice notice");

  const docsIndex = await readIfExists(path.join(DOCS_DIR, "README.md"));
  check(docsIndex.length >= 200, "docs/README.md is missing or too short");
  check(
    chapters.every((chapter) => docsIndex.includes(chapter.file)),
    "docs/README.md does not link every chapter source file",
  );

  const status = await readIfExists(path.join(ROOT, "STATUS.md"));
  check(status.length >= 400, "STATUS.md is missing or too short");
  check(/verification passed/i.test(status), "STATUS.md does not report verification results");
  check(/known gaps|limitations/i.test(status), "STATUS.md does not document known gaps");

  console.log("");
  console.log(`Markdown guide: ${chapters.length} chapters, ${sourceWordCount.toLocaleString("en-US")} words`);
  console.log(`Rendered chapter content: ${renderedWordCount.toLocaleString("en-US")} words`);
  console.log(`Local links checked: ${checkedLinks}`);
  console.log(`Checks passed: ${passed}`);

  if (errors.length) {
    console.error("\nErrors:");
    for (const error of errors) console.error(`- ${error}`);
  }

  if (failures.length) {
    console.error(`\nVerification failed with ${failures.length} issue(s):`);
    for (const failure of failures) console.error(`- ${failure}`);
    process.exitCode = 1;
  } else if (errors.length) {
    process.exitCode = 1;
  } else {
    console.log("Verification passed.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
