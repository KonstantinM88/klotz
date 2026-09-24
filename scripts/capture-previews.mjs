import { chromium, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";

await mkdir("test-results/previews", { recursive: true });
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
    locale: "de-DE",
  });
  for (const [name, route, section] of [
    ["home", "/", ".atelier-hero"],
    ["service", "/terrasse-garten/terrassenueberdachungen", ".page-intro"],
    ["reference", "/referenzen/glasschiebewaende", ".project-gallery"],
    ["article", "/wissen/lamellendach-oder-glasdach", ".article-body"],
    ["form", "/projekt-anfragen", ".request-form"],
  ]) {
    await page.goto("http://127.0.0.1:3100" + route);
    await page.evaluate(() => document.fonts.ready);
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0))
        .toBe(true);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `test-results/previews/${name}-mobile.png` });
    const target = page.locator(section).first();
    if (await target.count()) {
      await target.scrollIntoViewIfNeeded();
      await page.screenshot({
        path: `test-results/previews/${name}-detail-mobile.png`,
      });
    }
  }
  console.log("Mobile viewport previews saved in test-results/previews");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("http://127.0.0.1:3100/");
  for (const img of await page.locator("img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0))
      .toBe(true);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: "test-results/previews/home-desktop.png" });
  await page.screenshot({
    path: "test-results/previews/home-desktop-full.png",
    fullPage: true,
  });
} finally {
  await browser.close();
}
