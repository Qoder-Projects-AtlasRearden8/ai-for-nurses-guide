(() => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.getElementById("primary-nav");

  if (navToggle && nav) {
    const closeNav = () => {
      navToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        navToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        nav.classList.contains("is-open") &&
        !nav.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        closeNav();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeNav();
    });
  }

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const block = button.closest(".code-block");
      const code = block ? block.querySelector("code") : null;
      if (!code) return;

      const text = code.textContent || "";
      const previousLabel = button.textContent;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.setAttribute("readonly", "");
          textarea.className = "copy-helper";
          document.body.appendChild(textarea);
          textarea.select();
          const copied = document.execCommand("copy");
          textarea.remove();
          if (!copied) throw new Error("Copy command failed");
        }
        button.textContent = "Copied";
      } catch {
        button.textContent = "Copy failed";
      }

      window.setTimeout(() => {
        button.textContent = previousLabel;
      }, 1800);
    });
  });

  document.querySelectorAll("[data-print]").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });

  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const searchStatus = document.getElementById("search-status");
  const searchAll = document.getElementById("search-all");

  if (searchInput && searchResults) {
    let entries = [];
    let failsafe = null;

    const textFor = (entry) => {
      const headingText = (entry.headings || []).map((heading) => heading.text).join(" ");
      return `${entry.title} ${entry.summary} ${headingText} ${entry.text}`.toLowerCase();
    };

    const excerptFor = (text, query) => {
      const lower = text.toLowerCase();
      const index = lower.indexOf(query.toLowerCase());
      if (index === -1) return text.slice(0, 180).trim() + (text.length > 180 ? "..." : "");
      const start = Math.max(0, index - 70);
      const end = Math.min(text.length, index + query.length + 120);
      return `${start > 0 ? "..." : ""}${text.slice(start, end).trim()}${end < text.length ? "..." : ""}`;
    };

    const showAll = () => {
      searchResults.replaceChildren();
      if (searchAll) searchAll.hidden = false;
      if (searchStatus) searchStatus.textContent = "";
    };

    const render = (query) => {
      const trimmed = query.trim();
      if (!trimmed) {
        showAll();
        return;
      }

      if (searchAll) searchAll.hidden = true;
      if (failsafe) failsafe.hidden = true;

      const tokens = trimmed
        .toLowerCase()
        .split(/\s+/)
        .filter((token) => token.length > 1);

      const terms = tokens.length ? tokens : [trimmed.toLowerCase()];

      const matches = entries
        .map((entry) => {
          const haystack = textFor(entry);
          if (!terms.every((term) => haystack.includes(term))) return null;

          const title = entry.title.toLowerCase();
          const summary = entry.summary.toLowerCase();
          let score = 0;
          for (const term of terms) {
            if (title.includes(term)) score += 8;
            if (summary.includes(term)) score += 4;
            if ((entry.headings || []).some((heading) => heading.text.toLowerCase().includes(term))) score += 2;
            score += 1;
          }
          return { entry, score };
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

      searchResults.replaceChildren();

      if (!matches.length) {
        const empty = document.createElement("p");
        empty.className = "search-empty";
        empty.textContent = "No chapter matched all of those words. Try fewer or broader terms.";
        searchResults.appendChild(empty);
        if (searchStatus) searchStatus.textContent = "No results found.";
        return;
      }

      if (searchStatus) {
        searchStatus.textContent = `${matches.length} chapter${matches.length === 1 ? "" : "s"} found.`;
      }

      for (const { entry } of matches) {
        const link = document.createElement("a");
        link.className = "search-result";
        link.href = `chapters/${entry.slug}.html`;

        const meta = document.createElement("span");
        meta.className = "search-result-meta";
        meta.textContent = `Chapter ${entry.number} · ${entry.readTime} min read`;

        const title = document.createElement("span");
        title.className = "search-result-title";
        title.textContent = entry.title;

        const excerpt = document.createElement("span");
        excerpt.className = "search-result-excerpt";
        excerpt.textContent = excerptFor(entry.text, terms[0]);

        link.append(meta, title, excerpt);
        searchResults.appendChild(link);
      }
    };

    fetch("search-index.json", { credentials: "same-origin" })
      .then((response) => {
        if (!response.ok) throw new Error("Search index unavailable");
        return response.json();
      })
      .then((data) => {
        entries = Array.isArray(data) ? data : [];
        failsafe = document.querySelector("[data-search-fallback]");
        if (failsafe) failsafe.hidden = true;
        searchInput.disabled = false;
        searchInput.placeholder = "Try “documentation”, “HIPAA”, “prompt”...";
        const initialQuery = new URLSearchParams(window.location.search).get("q");
        if (initialQuery) searchInput.value = initialQuery;
        render(searchInput.value);
      })
      .catch(() => {
        if (searchStatus) searchStatus.textContent = "Search could not load. Browse all chapters below.";
      });

    let timer;
    searchInput.addEventListener("input", () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => render(searchInput.value), 120);
    });
  }
})();
