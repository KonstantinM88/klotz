import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/terrasse-garten/terrassenueberdachungen",
  "/referenzen/glasschiebewaende",
  "/wissen/lamellendach-oder-glasdach",
  "/projekt-anfragen",
];
for (const path of routes)
  test(
    "presentation, SEO and accessibility: " + path,
    async ({ page }, info) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        /noindex/,
      );
      expect(response?.headers()["x-robots-tag"]).toContain("noindex");
      const canonical = await page
        .locator('link[rel="canonical"]')
        .getAttribute("href");
      expect(new URL(canonical!).pathname).toBe(path);
      await page.evaluate(async () => {
        await document.fonts.ready;
      });
      for (const img of await page.locator("img").all()) {
        await img.scrollIntoViewIfNeeded();
        await expect
          .poll(() =>
            img.evaluate(
              (el) =>
                (el as HTMLImageElement).complete &&
                (el as HTMLImageElement).naturalWidth > 0,
            ),
          )
          .toBe(true);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      const audit = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(audit.violations).toEqual([]);
      for (const schema of await page
        .locator('script[type="application/ld+json"]')
        .all()) {
        const data = JSON.parse((await schema.textContent())!);
        expect(data["@type"]).toBe("BreadcrumbList");
      }
      expect(errors).toEqual([]);
      await page.screenshot({
        path: info.outputPath("page.png"),
        fullPage: true,
      });
    },
  );
test("reference filter and crawlable links", async ({ page }) => {
  await page.goto("/referenzen");
  await expect(page.locator(".reference-card")).toHaveCount(4);
  await page.getByRole("button", { name: "Zaun & Tor", exact: true }).click();
  await expect(page.locator(".reference-card")).toHaveCount(1);
  await page.locator(".reference-card").click();
  await expect(page).toHaveURL(/einzaeunung-stadtstadion/);
});
test("form validates, preserves errors and never pretends to send", async ({
  page,
}) => {
  await page.goto("/projekt-anfragen");
  await page.getByRole("button", { name: "Demo-Anfrage prüfen" }).click();
  await expect(page.locator(".error-summary")).toBeFocused();
  await expect(page.locator(".error-summary")).toContainText("Vorname");
  await page.getByLabel("Vorname", { exact: false }).fill("Demo");
  await page.getByLabel("Nachname", { exact: false }).fill("Test");
  await page.getByLabel("E-Mail", { exact: false }).fill("demo@example.com");
  await page.getByLabel("Projektort / PLZ", { exact: false }).fill("06217");
  await page
    .getByLabel("Leistungsbereich", { exact: false })
    .selectOption("Terrasse & Garten");
  await page
    .getByLabel("Ihr Vorhaben", { exact: false })
    .fill("Wir testen eine Terrasse mit Glasdach.");
  await page.locator("#request-consent").check();
  await page.route("**/api/inquiries", (route) =>
    route.fulfill({
      status: 503,
      contentType: "application/json",
      body: JSON.stringify({ message: "Demo: Bitte erneut versuchen." }),
    }),
  );
  await page.getByRole("button", { name: "Demo-Anfrage prüfen" }).click();
  await expect(page.locator(".error-summary")).toBeFocused();
  await expect(page.getByLabel("E-Mail", { exact: false })).toHaveValue(
    "demo@example.com",
  );
  await page.unroute("**/api/inquiries");
  const response = page.waitForResponse(
    (r) =>
      r.url().endsWith("/api/inquiries") && r.request().method() === "POST",
  );
  await page.getByRole("button", { name: "Demo-Anfrage prüfen" }).click();
  expect((await response).status()).toBe(200);
  await expect(
    page.getByText("nicht versendet oder gespeichert", { exact: false }),
  ).toBeVisible();
  await expect(page.locator(".form-success")).toBeFocused();
});
test("mobile menu keyboard and responsive widths", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  await page.getByRole("button", { name: "Menü" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  for (let i = 0; i < 12; i++) {
    await page.keyboard.press("Tab");
    expect(
      await page
        .getByRole("dialog")
        .evaluate((dialog) => dialog.contains(document.activeElement)),
    ).toBe(true);
  }
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(page.getByRole("button", { name: "Menü" })).toBeFocused();
  for (const width of [320, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});
test("unknown routes and indexing", async ({ request }) => {
  expect((await request.get("/referenzen/nonexistent")).status()).toBe(404);
  expect((await request.get("/terrasse-garten/nonexistent")).status()).toBe(
    404,
  );
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "Disallow: /",
  );
  expect(await (await request.get("/sitemap.xml")).text()).not.toContain(
    "<loc>",
  );
});
