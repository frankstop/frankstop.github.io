import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "../support/browser-fixture.mjs";
import { primaryRoutes } from "../support/catalog-fixture.mjs";

async function stabilizeRenderedState(page) {
  await page.locator(".scroll-reveal").evaluateAll((elements) => {
    for (const element of elements) element.classList.add("visible");
  });
  await page.addStyleTag({
    content: "*, *::before, *::after { animation: none !important; transition: none !important; }",
  });
}

for (const route of primaryRoutes) {
  test(`primary route has no serious accessibility violations: ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await stabilizeRenderedState(page);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    const serious = results.violations.filter(({ impact }) => ["serious", "critical"].includes(impact));

    expect(serious, JSON.stringify(serious, null, 2)).toEqual([]);
  });
}
test("open dialogs have no serious accessibility violations", async ({ page }) => {
  await page.goto("/about.html", { waitUntil: "domcontentloaded" });
  await stabilizeRenderedState(page);
  await page.getByRole("button", { name: "View Resume" }).click();
  let results = await new AxeBuilder({ page })
    .include("#resume-modal")
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  expect(results.violations.filter(({ impact }) => ["serious", "critical"].includes(impact)))
    .toEqual([]);

  await page.goto("/projects.html", { waitUntil: "domcontentloaded" });
  await stabilizeRenderedState(page);
  await page.locator(".preview-btn").first().click();
  results = await new AxeBuilder({ page })
    .include("#preview-modal")
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  expect(results.violations.filter(({ impact }) => ["serious", "critical"].includes(impact)))
    .toEqual([]);
});

for (const route of ["/", "/skills.html"]) {
  test(`reduced motion disables continuous decorative animation: ${route}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.addInitScript(() => {
      const requestFrame = window.requestAnimationFrame.bind(window);
      window.__requestedAnimationFrames = 0;
      window.requestAnimationFrame = (callback) => {
        window.__requestedAnimationFrames += 1;
        if (window.__requestedAnimationFrames > 3) return 0;
        return requestFrame(callback);
      };
    });
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(100);

    expect(await page.evaluate(() => window.__requestedAnimationFrames)).toBeLessThanOrEqual(1);
  });
}
