import { test, expect } from "../support/browser-fixture.mjs";
import { smokeRoutes } from "../support/catalog-fixture.mjs";

for (const route of smokeRoutes) {
  test(`public route loads without browser errors: ${route}`, async ({ page }) => {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.ok(), `${route} status`).toBe(true);
    await expect(page.locator("body")).toBeVisible();
    expect(await page.title()).not.toBe("");
  });
}

test("mixed-case game routes normalize once and preserve URL state", async ({ page }) => {
  await page.goto("/games/MeTrOdAsH/?source=test#score", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveURL(/\/games\/metrodash\/\?source=test#score$/);
  await expect(page.locator('iframe[title*="MetroDash"]')).toHaveCount(1);
});

test("canonical game routes do not redirect", async ({ page }) => {
  const requested = "/games/metrodash/?source=test#score";
  await page.goto(requested, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(50);
  expect(new URL(page.url()).pathname + new URL(page.url()).search + new URL(page.url()).hash)
    .toBe(requested);
});

test("unknown routes remain on the 404 page and report once", async ({ page }) => {
  const response = await page.goto("/definitely-missing?secret=value#fragment", {
    waitUntil: "domcontentloaded"
  });

  expect(response?.status()).toBe(404);
  await expect(page).toHaveURL(/\/definitely-missing\?secret=value#fragment$/);
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();

  await expect.poll(() => page.evaluate(() => window.dataLayer
    .map((entry) => Array.from(entry))
    .filter(([command, name]) => command === "event" && name === "page_not_found")
    .map(([, , parameters]) => parameters)
  )).toEqual([{ page_path: "/definitely-missing" }]);
});
