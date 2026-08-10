import { createReadStream, existsSync, readdirSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(fileURLToPath(new URL("../../", import.meta.url)));
const siteRoot = join(repositoryRoot, "_site");
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8"
};

function resolveRequestPath(url) {
  const pathname = decodeURIComponent(new URL(url, "http://127.0.0.1").pathname);
  const relativePath = normalize(pathname).replace(/^[/\\]+/, "");
  const candidate = resolve(siteRoot, relativePath);

  if (candidate !== siteRoot && !candidate.startsWith(siteRoot + sep)) {
    return null;
  }

  if (existsSync(candidate) && statSync(candidate).isDirectory()) {
    return join(candidate, "index.html");
  }

  return candidate;
}

function existsWithExactCase(path) {
  const relative = path.slice(siteRoot.length).split(sep).filter(Boolean);
  let current = siteRoot;

  for (const segment of relative) {
    if (!existsSync(current) || !readdirSync(current).includes(segment)) return false;
    current = join(current, segment);
  }

  return true;
}

const server = createServer((request, response) => {
  let filePath = resolveRequestPath(request.url || "/");
  let status = 200;

  if (!filePath || !existsWithExactCase(filePath) || !existsSync(filePath) || !statSync(filePath).isFile()) {
    filePath = join(siteRoot, "404.html");
    status = 404;
  }

  response.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Type": contentTypes[extname(filePath)] || "application/octet-stream"
  });
  createReadStream(filePath).pipe(response);
});

server.listen(4173, "127.0.0.1", () => {
  process.stdout.write("Rendered site available at http://127.0.0.1:4173\n");
});
