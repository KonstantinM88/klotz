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

test("editorial content works without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/");
  await expect(page.locator("h1")).toContainText("Raum für");
  await expect(page.locator(".expertise-card")).toHaveCount(4);
  await page.locator(".expertise-card").first().click();
  await expect(page).toHaveURL(/terrasse-garten$/);
  await context.close();
});

test("reduced motion keeps all editorial content readable", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const section of await page.locator("[data-reveal]").all()) {
    await section.scrollIntoViewIfNeeded();
    await expect(section).toBeVisible();
  }
  expect(
    await page.evaluate(
      () =>
        document.getAnimations().filter((a) => a.playState === "running")
          .length,
    ),
  ).toBe(0);
});

test("project guide opens, answers, links and closes accessibly", async ({
  page,
}) => {
  const postedMessages: Array<Array<{ role: string; text: string }>> = [];
  await page.route("**/api/assistant", async (route) => {
    if (route.request().method() === "GET")
      return route.fulfill({
        contentType: "application/json",
        body: JSON.stringify({ mode: "guided" }),
      });
    postedMessages.push(route.request().postDataJSON().messages);
    return route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        mode: "guided",
        answer:
          "Terrassenüberdachungen und Lamellendächer sind mögliche Richtungen. Was möchten Sie auf der Terrasse tun?",
        href: "/terrasse-garten",
        linkLabel: "Terrasse & Garten ansehen",
      }),
    });
  });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Projektlotse" });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: /Ihr Projekt beginnt/ });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("keine Live-KI")).toBeVisible();
  await expect(dialog.getByLabel("Ihre Frage")).toBeFocused();
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(audit.violations).toEqual([]);
  await dialog.getByRole("button", { name: "Terrasse planen" }).click();
  await expect(
    dialog.getByText("Terrassenüberdachungen und Lamellendächer", {
      exact: false,
    }),
  ).toBeVisible();
  await dialog.getByLabel("Ihre Frage").fill("Und seitlicher Schutz?");
  await dialog.getByRole("button", { name: "Frage senden" }).click();
  await expect.poll(() => postedMessages.length).toBe(2);
  expect(postedMessages[1]).toEqual([
    { role: "visitor", text: "Terrasse planen" },
    {
      role: "guide",
      text: "Terrassenüberdachungen und Lamellendächer sind mögliche Richtungen. Was möchten Sie auf der Terrasse tun?",
    },
    { role: "visitor", text: "Und seitlicher Schutz?" },
  ]);
  await dialog
    .getByRole("link", { name: "Terrasse & Garten ansehen" })
    .last()
    .click();
  await expect(page).toHaveURL(/terrasse-garten$/);
  await expect(dialog).not.toBeVisible();
  await trigger.click();
  await dialog.getByRole("button", { name: "Neu starten" }).click();
  await expect(
    dialog.getByRole("button", { name: "Terrasse planen" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test("project guide keeps the beginning of a long Russian answer visible", async ({
  page,
}, testInfo) => {
  const longAnswer =
    "Для выбора решения сначала уточните, как вы хотите использовать пространство. ".repeat(
      18,
    );
  await page.route("**/api/assistant", async (route) => {
    const isGet = route.request().method() === "GET";
    return route.fulfill({
      contentType: "application/json",
      body: JSON.stringify(
        isGet
          ? { mode: "live" }
          : {
              mode: "live",
              answer: longAnswer,
              href: "/terrasse-garten",
              linkLabel: "Посмотреть решения для террасы",
            },
      ),
    });
  });
  await page.goto("/");
  await page.getByRole("button", { name: "Projektlotse" }).click();
  const dialog = page.getByRole("dialog", { name: /Ihr Projekt beginnt/ });
  await dialog
    .getByLabel("Ihre Frage")
    .fill("Какой навес подойдёт для террасы?");
  await dialog.getByRole("button", { name: "Frage senden" }).click();
  const answer = dialog.locator(".project-guide__message--guide").last();
  await expect(answer).toContainText("Для выбора решения");
  await expect
    .poll(async () =>
      dialog.locator(".project-guide__conversation").evaluate((scroller) => {
        const message = scroller.querySelector<HTMLElement>(
          ".project-guide__message--guide:last-of-type",
        );
        if (!message) return false;
        const distance =
          message.getBoundingClientRect().top -
          scroller.getBoundingClientRect().top;
        return scroller.scrollTop > 0 && distance >= 0 && distance < 35;
      }),
    )
    .toBe(true);
  await expect(dialog.getByLabel("Ihre Frage")).toBeFocused();
  await dialog.screenshot({
    path: testInfo.outputPath("long-russian-answer.png"),
  });
});
