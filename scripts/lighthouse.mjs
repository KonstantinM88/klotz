import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
// Some Windows editor shells omit System32 from PATH; chrome-launcher needs taskkill.
if (process.platform === "win32")
  process.env.PATH +=
    ";" + join(process.env.SystemRoot ?? "C:/Windows", "System32");
await mkdir(".lighthouseci", { recursive: true });
const routes = [
  "/",
  "/terrasse-garten/terrassenueberdachungen",
  "/referenzen/glasschiebewaende",
  "/wissen/lamellendach-oder-glasdach",
  "/projekt-anfragen",
];
const results = [];
const chrome = await launch({
  chromePath: chromium.executablePath(),
  chromeFlags: ["--headless", "--no-sandbox"],
});
try {
  for (const path of routes) {
    const result = await lighthouse("http://127.0.0.1:3100" + path, {
      port: chrome.port,
      output: "json",
      logLevel: "error",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    });
    const name = path === "/" ? "home" : path.replaceAll("/", "_");
    await writeFile(".lighthouseci/" + name + ".json", result.report);
    const row = {
      path,
      scores: Object.fromEntries(
        Object.entries(result.lhr.categories).map(([key, c]) => [
          key,
          Math.round(c.score * 100),
        ]),
      ),
      lcp: result.lhr.audits["largest-contentful-paint"].numericValue,
      cls: result.lhr.audits["cumulative-layout-shift"].numericValue,
      failed: Object.entries(result.lhr.audits)
        .filter(([, a]) => a.score !== null && a.score < 1)
        .map(([id, a]) => ({ id, title: a.title, score: a.score })),
    };
    results.push(row);
    console.log(JSON.stringify(row));
  }
  await writeFile(
    ".lighthouseci/summary.json",
    JSON.stringify(results, null, 2),
  );
} finally {
  try {
    await chrome.kill();
  } catch (error) {
    // Windows can briefly retain a lock on Chrome's temporary profile even
    // after the process exits. Preserve valid reports, without broad cleanup.
    if (error.code !== "EPERM") throw error;
    if (process.platform === "win32") {
      try {
        // Stop only the browser tree launched by this audit, never all Chrome processes.
        execFileSync(
          join(
            process.env.SystemRoot ?? "C:/Windows",
            "System32",
            "taskkill.exe",
          ),
          ["/PID", String(chrome.pid), "/T", "/F"],
          { windowsHide: true, stdio: "ignore" },
        );
      } catch {
        console.warn(
          "The audit browser was already stopped or needs manual cleanup: PID " +
            chrome.pid,
        );
      }
    }
    console.warn(
      "Windows locked the temporary audit profile. Reports are saved; the temporary directory is left intact.",
    );
  }
}
