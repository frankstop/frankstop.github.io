import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import test from "node:test";
import { load } from "cheerio";
import {
  routeToFile,
  siteRoot,
  sitemapRoutes,
  smokeRoutes
} from "../support/catalog-fixture.mjs";

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(path) : [path];
  }));
  return nested.flat();
}

function routeForFile(path) {
  const relative = path.slice(siteRoot.length).replaceAll("\\", "/");
  if (relative === "/index.html") return "/";
  return relative.endsWith("/index.html") ? relative.slice(0, -"index.html".length) : relative;
}

function localTarget(pathname) {
  if (pathname === "/") return resolve(siteRoot, "index.html");
  if (extname(pathname)) return resolve(siteRoot, pathname.slice(1));
  return resolve(siteRoot, pathname.slice(1), "index.html");
}

test("jekyll build leaves no unresolved templates", async () => {
  const htmlFiles = (await filesUnder(siteRoot)).filter((path) => path.endsWith(".html"));
  assert.ok(htmlFiles.length > 30, "expected a complete rendered site");

  for (const path of htmlFiles) {
    const html = await readFile(path, "utf8");
    assert.doesNotMatch(html, /{{|{%|^---$/m, path);
  }
});
test("every internal document and asset reference resolves", async () => {
  const htmlFiles = (await filesUnder(siteRoot)).filter((path) => path.endsWith(".html"));

  for (const path of htmlFiles) {
    const route = routeForFile(path);
    const $ = load(await readFile(path, "utf8"));

    for (const element of $("[href], [src]").toArray()) {
      const value = $(element).attr("href") || $(element).attr("src");
      if (!value || /^(?:#|mailto:|tel:|data:|javascript:)/.test(value)) continue;

      const url = new URL(value, `https://frankiejvaldez.com${route}`);
      if (url.origin !== "https://frankiejvaldez.com") continue;

      await assert.doesNotReject(
        access(localTarget(url.pathname)),
        `${route} references missing ${url.pathname}`
      );
    }
  }
});

test("sitemap exactly matches the public route inventory", async () => {
  const xml = await readFile(resolve(siteRoot, "sitemap.xml"), "utf8");
  const $ = load(xml, { xmlMode: true });
  const actual = $("loc").toArray().map((node) => new URL($(node).text()).pathname).sort();
  const expected = [...new Set(sitemapRoutes)].sort();

  assert.deepEqual(actual, expected);
});

test("every public document has one canonical identity", async () => {
  for (const route of sitemapRoutes) {
    const $ = load(await readFile(routeToFile(route), "utf8"));

    assert.equal($("html[lang]").length, 1, `${route} language`);
    assert.equal($("title").length, 1, `${route} title count`);
    assert.ok($("title").text().trim(), `${route} title content`);
    assert.equal($("meta[name=description]").length, 1, `${route} description count`);
    assert.ok($("meta[name=description]").attr("content")?.trim(), `${route} description content`);
    assert.equal($("link[rel=canonical]").length, 1, `${route} canonical count`);
    assert.equal($("link[rel=canonical]").attr("href"), `https://frankiejvaldez.com${route}`, `${route} canonical`);
  }
});

test("every public document loads analytics exactly once", async () => {
  for (const route of [...smokeRoutes, "/404.html"]) {
    const $ = load(await readFile(routeToFile(route), "utf8"));
    const loader = $('script[src*="googletagmanager.com/gtag/js"]');
    const helper = $('script[src$="/assets/js/analytics.js"]');

    assert.equal(loader.length, 1, `${route} GA loader count`);
    assert.equal(helper.length, 1, `${route} analytics helper count`);
  }
});
