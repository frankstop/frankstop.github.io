import { test, expect } from "../support/browser-fixture.mjs";

test("resume dialog opens with focus inside and closes to its trigger", async ({ page }) => {
  await page.goto("/about.html", { waitUntil: "domcontentloaded" });
  const trigger = page.getByRole("button", { name: "View Resume" });
  const dialog = page.getByRole("dialog", { name: "Frank Valdez Resume" });

  await trigger.click();
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: "Close resume preview" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();

  await trigger.click();
  await page.getByRole("button", { name: "Close resume preview" }).click();
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("resume dialog traps keyboard focus while open", async ({ page }) => {
  await page.goto("/about.html", { waitUntil: "domcontentloaded" });
  await page.getByRole("button", { name: "View Resume" }).click();

  const close = page.getByRole("button", { name: "Close resume preview" });
  await close.focus();
  await page.keyboard.press("Shift+Tab");
  expect(await page.evaluate(() => document
    .getElementById("resume-modal")
    .contains(document.activeElement))).toBe(true);
  await page.keyboard.press("Tab");
  expect(await page.evaluate(() => document
    .getElementById("resume-modal")
    .contains(document.activeElement))).toBe(true);
});

test("project preview renders the selected project state", async ({ page }) => {
  await page.goto("/projects.html", { waitUntil: "domcontentloaded" });
  const trigger = page.locator(".preview-btn").first();
  const expected = await trigger.evaluate((button) => ({
    internalUrl: button.dataset.previewInternalUrl,
    title: button.dataset.previewTitle,
    url: button.dataset.previewUrl
  }));

  await trigger.click();
  await expect(page.getByRole("dialog", { name: expected.title })).toBeVisible();
  await expect(page.locator("#preview-title")).toHaveText(expected.title);
  await expect(page.locator("#preview-frame")).toHaveAttribute("src", expected.url);
  await expect(page.locator("#preview-frame")).toHaveAttribute("title", `${expected.title} preview`);
  await expect(page.locator("#preview-cta")).toHaveAttribute("href", expected.internalUrl);
  await expect(page.locator("body")).toHaveClass(/overflow-hidden/);
});

test("closing project preview clears state and restores opener focus", async ({ page }) => {
  await page.goto("/projects.html", { waitUntil: "domcontentloaded" });
  const trigger = page.locator(".preview-btn").nth(1);
  await trigger.click();
  await page.getByRole("button", { name: "Close" }).click();

  await expect(page.locator("#preview-modal")).toBeHidden();
  await expect(page.locator("#preview-frame")).toHaveAttribute("src", "");
  await expect(page.locator("body")).not.toHaveClass(/overflow-hidden/);
  await expect(trigger).toBeFocused();
});

test("consecutive previews never leak previous project data", async ({ page }) => {
  await page.goto("/projects.html", { waitUntil: "domcontentloaded" });
  const first = page.locator(".preview-btn").first();
  const last = page.locator(".preview-btn").last();
  const firstTitle = await first.getAttribute("data-preview-title");
  const lastTitle = await last.getAttribute("data-preview-title");

  await first.click();
  await expect(page.locator("#preview-title")).toHaveText(firstTitle);
  await page.getByRole("button", { name: "Close" }).click();
  await last.click();

  await expect(page.locator("#preview-title")).toHaveText(lastTitle);
  await expect(page.locator("#preview-cta")).toHaveAttribute("data-analytics-project-name", lastTitle);
  expect(lastTitle).not.toBe(firstTitle);
});
