import { test as base, expect } from "@playwright/test";

export const test = base.extend({
  page: async ({ page }, use) => {
    const failures = [];

    page.on("pageerror", (error) => failures.push(`pageerror: ${error.message}`));
    page.on("console", (message) => {
      if (message.type() === "error" && !message.text().startsWith("Failed to load resource:")) {
        failures.push(`console: ${message.text()}`);
      }
    });

    await page.addInitScript(() => {
      window.dataLayer = [];
    });

    await page.route(/^https?:\/\/(?!127\.0\.0\.1:4173)/, async (route) => {
      await route.fulfill({ body: "", status: 204 });
    });

    await use(page);
    expect(failures, failures.join("\n")).toEqual([]);
  }
});

export { expect };
