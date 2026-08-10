import { resolve } from "node:path";
import { test, expect } from "../support/browser-fixture.mjs";
import { repositoryRoot } from "../support/catalog-fixture.mjs";

const embedAnalyticsPath = resolve(repositoryRoot, "assets/js/embed-analytics.js");

test("marked interactions emit one sanitized portfolio event", async ({ page }) => {
  await page.goto("/about.html", { waitUntil: "domcontentloaded" });
  await page.evaluate(() => {
    window.__gtagCalls = [];
    window.gtag = (...arguments_) => window.__gtagCalls.push(arguments_);
  });

  await page.getByRole("button", { name: "View Resume" }).click();
  expect(await page.evaluate(() => window.__gtagCalls)).toEqual([[
    "event",
    "resume_view",
    { placement: "about" }
  ]]);

  const directResult = await page.evaluate(() => window.portfolioAnalytics.track("contact_click", {
    destination_url: "https://example.com/private",
    email_address: "private@example.com",
    method: "email",
    placement: "about"
  }));
  expect(directResult).toBe(true);
  expect(await page.evaluate(() => window.__gtagCalls.at(-1))).toEqual([
    "event",
    "contact_click",
    { method: "email", placement: "about" }
  ]);
});

test("portfolio analytics rejects invalid calls and survives unavailable gtag", async ({ page }) => {
  await page.goto("/about.html", { waitUntil: "domcontentloaded" });

  expect(await page.evaluate(() => {
    window.gtag = undefined;
    return [
      window.portfolioAnalytics.track(""),
      window.portfolioAnalytics.track(null),
      window.portfolioAnalytics.track("resume_view")
    ];
  })).toEqual([false, false, false]);

  expect(await page.evaluate(() => {
    window.gtag = () => { throw new Error("blocked"); };
    return window.portfolioAnalytics.track("resume_view");
  })).toBe(false);
});

test("embed analytics configures the loader exactly once", async ({ page }) => {
  await page.goto("about:blank");
  await page.evaluate(() => {
    window.__gtagCalls = [];
    window.gtag = (...arguments_) => window.__gtagCalls.push(arguments_);
  });

  await page.addScriptTag({ path: embedAnalyticsPath });
  await page.addScriptTag({ path: embedAnalyticsPath });

  expect(await page.locator('script[src*="googletagmanager.com/gtag/js"]').count()).toBe(1);
  expect(await page.evaluate(() => window.__gtagCalls.filter(([command]) => command === "config")))
    .toHaveLength(1);
});

test("embed run lifecycle emits one start and one terminal event", async ({ page }) => {
  await page.goto("about:blank");
  await page.evaluate(() => {
    window.__now = 1_000;
    Date.now = () => window.__now;
    window.__gtagCalls = [];
    window.gtag = (...arguments_) => window.__gtagCalls.push(arguments_);
  });
  await page.addScriptTag({ path: embedAnalyticsPath });

  expect(await page.evaluate(() => window.embedAnalytics.startRun("TestGame"))).toBe(true);
  expect(await page.evaluate(() => {
    window.__now = 8_400;
    return window.embedAnalytics.endRun("win", 42);
  })).toBe(true);

  expect(await page.evaluate(() => window.__gtagCalls
    .filter(([command]) => command === "event")))
    .toEqual([
      ["event", "game_start", { game_name: "TestGame" }],
      ["event", "game_end", {
        duration_seconds: 7,
        game_name: "TestGame",
        outcome: "win",
        score: 42
      }]
    ]);
});

test("abandoned embed runs emit exactly one quit beacon", async ({ page }) => {
  await page.goto("about:blank");
  await page.evaluate(() => {
    window.__gtagCalls = [];
    window.gtag = (...arguments_) => window.__gtagCalls.push(arguments_);
  });
  await page.addScriptTag({ path: embedAnalyticsPath });
  await page.evaluate(() => {
    window.embedAnalytics.startRun("TestGame", () => 17);
    window.dispatchEvent(new PageTransitionEvent("pagehide"));
    window.dispatchEvent(new PageTransitionEvent("pagehide"));
  });

  const endings = await page.evaluate(() => window.__gtagCalls
    .filter(([command, name]) => command === "event" && name === "game_end"));
  expect(endings).toHaveLength(1);
  expect(endings[0][2]).toMatchObject({
    game_name: "TestGame",
    outcome: "quit",
    score: 17,
    transport_type: "beacon"
  });
});

test("invalid lifecycle calls preserve the active run", async ({ page }) => {
  await page.goto("about:blank");
  await page.evaluate(() => {
    window.__gtagCalls = [];
    window.gtag = (...arguments_) => window.__gtagCalls.push(arguments_);
  });
  await page.addScriptTag({ path: embedAnalyticsPath });

  expect(await page.evaluate(() => window.embedAnalytics.startRun(""))).toBe(false);
  expect(await page.evaluate(() => window.embedAnalytics.startRun("FirstGame"))).toBe(true);
  expect(await page.evaluate(() => window.embedAnalytics.startRun("SecondGame"))).toBe(false);
  expect(await page.evaluate(() => window.embedAnalytics.endRun("nonsense", 10))).toBe(false);
  expect(await page.evaluate(() => window.embedAnalytics.endRun("complete", 10))).toBe(true);
  expect(await page.evaluate(() => window.embedAnalytics.endRun("win", 11))).toBe(false);

  const events = await page.evaluate(() => window.__gtagCalls
    .filter(([command]) => command === "event"));
  expect(events).toEqual([
    ["event", "game_start", { game_name: "FirstGame" }],
    ["event", "game_end", expect.objectContaining({
      game_name: "FirstGame",
      outcome: "complete",
      score: 10
    })]
  ]);
});

test("score callback failure still ends the active run", async ({ page }) => {
  await page.goto("about:blank");
  await page.evaluate(() => {
    window.__gtagCalls = [];
    window.gtag = (...arguments_) => window.__gtagCalls.push(arguments_);
  });
  await page.addScriptTag({ path: embedAnalyticsPath });
  const result = await page.evaluate(() => {
    window.embedAnalytics.startRun("TestGame", () => { throw new Error("score unavailable"); });
    return window.embedAnalytics.endRun("lose");
  });

  expect(result).toBe(true);
  const ending = await page.evaluate(() => window.__gtagCalls
    .find(([command, name]) => command === "event" && name === "game_end"));
  expect(ending[2]).toMatchObject({ game_name: "TestGame", outcome: "lose" });
  expect(ending[2]).not.toHaveProperty("score");
});
