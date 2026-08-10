import { test, expect } from "../support/browser-fixture.mjs";

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/about.html", { waitUntil: "domcontentloaded" });
});

test("mobile menu keeps visibility and aria-expanded synchronized", async ({ page }) => {
  const toggle = page.locator("[data-menu-toggle]");
  const menu = page.locator("#primary-navigation");

  await expect(menu).toBeHidden();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");

  await toggle.click();
  await expect(menu).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");

  await toggle.click();
  await expect(menu).toBeHidden();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("Escape closes mobile navigation and restores toggle focus", async ({ page }) => {
  const toggle = page.locator("[data-menu-toggle]");
  await toggle.click();
  await page.getByRole("link", { name: "Skills" }).focus();
  await page.keyboard.press("Escape");

  await expect(page.locator("#primary-navigation")).toBeHidden();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
});

test("desktop breakpoint resets an open mobile menu", async ({ page }) => {
  const toggle = page.locator("[data-menu-toggle]");
  await toggle.click();
  await page.setViewportSize({ width: 1024, height: 768 });

  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#primary-navigation")).toBeVisible();
});

for (const [route, label] of [
  ["/", "Frank Valdez"],
  ["/about.html", "About"],
  ["/skills.html", "Skills"],
  ["/projects.html", "Projects"],
  ["/games/", "Games"],
  ["/experience.html", "Experience"],
  ["/education.html", "Education"],
  ["/contact.html", "Contact"]
]) {
  test(`current page is identified exactly once: ${route}`, async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const current = page.locator('[aria-current="page"]');

    await expect(current).toHaveCount(1);
    await expect(current).toHaveText(label);
  });
}
