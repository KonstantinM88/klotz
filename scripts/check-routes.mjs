import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const base = "http://127.0.0.1:3100";
const manifest = JSON.parse(
  await readFile(".next/prerender-manifest.json", "utf8"),
);
const routes = Object.keys(manifest.routes).filter(
  (path) => !path.includes(".") && !path.startsWith("/_"),
);
const internalLinks = new Set();
let redirects = 0;
for (const path of routes) {
  if (path === "/ueber-uns") {
    const response = await fetch(base + path, { redirect: "manual" });
    assert.equal(response.status, 308, path);
    assert.equal(response.headers.get("location"), "/unternehmen");
    redirects += 1;
    continue;
  }
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  assert.match(response.headers.get("x-robots-tag"), /noindex/, path);
  const html = await response.text();
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `one h1: ${path}`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, `canonical: ${path}`);
  assert.equal(new URL(canonical[1]).pathname, path);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  for (const [, href] of html.matchAll(/<a[^>]*href="([^"#]+)"/g)) {
    if (href.startsWith("/") && !href.startsWith("//"))
      internalLinks.add(href.split("#")[0]);
  }
}
for (const href of internalLinks) {
  const response = await fetch(base + href);
  assert.equal(response.status, 200, `link: ${href}`);
}
console.log(
  JSON.stringify({
    pages: routes.length - redirects,
    redirects,
    internalLinks: internalLinks.size,
    status: "passed",
  }),
);
