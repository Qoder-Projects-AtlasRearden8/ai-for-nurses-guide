import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE_DIR = path.join(ROOT, "site");
const HOST = process.env.HOST || "127.0.0.1";
const PORT = Number(process.env.PORT || 4173);

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".md", "text/markdown; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".png", "image/png"],
  [".ico", "image/x-icon"],
]);

const securityHeaders = {
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "no-referrer",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
  "Cache-Control": "no-store",
};

function notFound(response) {
  return fs
    .readFile(path.join(SITE_DIR, "404.html"))
    .then((body) => {
      response.writeHead(404, {
        ...securityHeaders,
        "Content-Type": "text/html; charset=utf-8",
      });
      response.end(body);
    })
    .catch(() => {
      response.writeHead(404, { ...securityHeaders, "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
    });
}

const server = http.createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method || "GET")) {
    response.writeHead(405, { ...securityHeaders, Allow: "GET, HEAD", "Content-Type": "text/plain; charset=utf-8" });
    response.end("Method not allowed");
    return;
  }

  let pathname;
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
    pathname = decodeURIComponent(url.pathname);
  } catch {
    response.writeHead(400, { ...securityHeaders, "Content-Type": "text/plain; charset=utf-8" });
    response.end("Bad request");
    return;
  }

  if (pathname.endsWith("/")) pathname += "index.html";

  const filePath = path.resolve(SITE_DIR, `.${pathname}`);
  const relative = path.relative(SITE_DIR, filePath);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    response.writeHead(403, { ...securityHeaders, "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  try {
    const stat = await fs.stat(filePath);
    if (!stat.isFile()) {
      await notFound(response);
      return;
    }

    const body = await fs.readFile(filePath);
    const contentType = contentTypes.get(path.extname(filePath).toLowerCase()) || "application/octet-stream";

    response.writeHead(200, {
      ...securityHeaders,
      "Content-Type": contentType,
      "Content-Length": body.length,
    });

    if (request.method === "HEAD") {
      response.end();
    } else {
      response.end(body);
    }
  } catch (error) {
    if (error && (error.code === "ENOENT" || error.code === "ENOTDIR")) {
      await notFound(response);
      return;
    }
    console.error(error);
    response.writeHead(500, { ...securityHeaders, "Content-Type": "text/plain; charset=utf-8" });
    response.end("Internal server error");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Serving site at http://${HOST}:${PORT}`);
  console.log("Press Ctrl+C to stop.");
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
