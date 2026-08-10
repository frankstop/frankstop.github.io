import { test, expect } from "../support/browser-fixture.mjs";

async function fillValidMessage(page) {
  await page.locator("#spName").fill("Jane Rivera");
  await page.locator("#spEmail").fill("jane@example.com");
  await page.locator("#spTopic").selectOption("Collaboration");
  await page.locator("#spMessage").fill("I would like to discuss a practical collaboration.");
}

test.beforeEach(async ({ page }) => {
  await page.goto("/contact.html", { waitUntil: "domcontentloaded" });
});

test("invalid submission identifies every invalid field and focuses the first", async ({ page }) => {
  let requestCount = 0;
  await page.route("https://api.web3forms.com/submit", async (route) => {
    requestCount += 1;
    await route.fulfill({ json: { success: true } });
  });

  await page.locator("#spSubmit").click();

  await expect(page.locator("#spName")).toHaveAttribute("aria-invalid", "true");
  await expect(page.locator("#spEmail")).toHaveAttribute("aria-invalid", "true");
  await expect(page.locator("#spMessage")).toHaveAttribute("aria-invalid", "true");
  await expect(page.locator("#spStatus")).toContainText("highlighted fields");
  await expect(page.locator("#spName")).toBeFocused();
  expect(requestCount).toBe(0);
});

test("correcting a field clears only that field error", async ({ page }) => {
  await page.locator("#spSubmit").click();
  await page.locator("#spName").fill("Jane");

  await expect(page.locator("#spName")).toHaveAttribute("aria-invalid", "false");
  await expect(page.locator("#spEmail")).toHaveAttribute("aria-invalid", "true");
  await expect(page.locator("#spMessage")).toHaveAttribute("aria-invalid", "true");
});

test("valid submission sends one exact provider request", async ({ page }) => {
  const requests = [];
  let releaseResponse;
  const responseGate = new Promise((resolve) => { releaseResponse = resolve; });

  await page.route("https://api.web3forms.com/submit", async (route) => {
    requests.push({
      headers: route.request().headers(),
      method: route.request().method(),
      payload: route.request().postDataJSON()
    });
    await responseGate;
    await route.fulfill({ json: { success: true } });
  });

  await fillValidMessage(page);
  await page.locator("#spSubmit").click();
  await expect(page.locator("#spSubmit")).toBeDisabled();
  await expect(page.locator("#spSubmitLabel")).toHaveText("Sending…");
  releaseResponse();
  await expect(page.locator("#spSuccess")).toBeVisible();

  expect(requests).toHaveLength(1);
  expect(requests[0].method).toBe("POST");
  expect(requests[0].headers["content-type"]).toContain("application/json");
  expect(requests[0].payload).toMatchObject({
    email: "jane@example.com",
    from_name: "frankiejvaldez.com",
    message: "I would like to discuss a practical collaboration.",
    name: "Jane Rivera",
    replyto: "jane@example.com",
    subject: "Portfolio contact: Collaboration — Jane Rivera",
    topic: "Collaboration"
  });
  expect(requests[0].payload.access_key).toMatch(/^[a-f0-9-]+$/);
});

test("successful delivery renders success state and analytics", async ({ page }) => {
  await page.evaluate(() => {
    window.__capturedEvents = [];
    window.portfolioAnalytics = {
      track: (...arguments_) => window.__capturedEvents.push(arguments_)
    };
  });
  await page.route("https://api.web3forms.com/submit", (route) => route.fulfill({
    json: { success: true }
  }));

  await fillValidMessage(page);
  await page.locator("#spSubmit").click();

  await expect(page.locator("#spForm")).toBeHidden();
  await expect(page.locator("#spSuccess")).toBeVisible();
  await expect(page.locator("#spSuccessHeading")).toBeFocused();
  expect(await page.evaluate(() => window.__capturedEvents)).toEqual([[
    "contact_click",
    { method: "form", placement: "contact_page" }
  ]]);
});

test("failed delivery restores an actionable form", async ({ page }) => {
  await page.route("https://api.web3forms.com/submit", (route) => route.fulfill({
    json: { message: "Nope", success: false },
    status: 200
  }));
  await fillValidMessage(page);
  await page.locator("#spSubmit").click();

  await expect(page.locator("#spSubmit")).toBeEnabled();
  await expect(page.locator("#spSubmitLabel")).toHaveText("Send message");
  await expect(page.locator("#spStatus")).toContainText("didn’t go through");
  await expect(page.locator("#spForm")).toBeVisible();
});

test("network failure restores an actionable form", async ({ page }) => {
  await page.route("https://api.web3forms.com/submit", (route) => route.abort("failed"));
  await fillValidMessage(page);
  await page.locator("#spSubmit").click();

  await expect(page.locator("#spSubmit")).toBeEnabled();
  await expect(page.locator("#spStatus")).toContainText("didn’t go through");
  await expect(page.locator("#spForm")).toBeVisible();
});

test("malformed provider response does not report success", async ({ page }) => {
  await page.route("https://api.web3forms.com/submit", (route) => route.fulfill({
    body: "not-json",
    contentType: "text/plain",
    status: 200
  }));
  await fillValidMessage(page);
  await page.locator("#spSubmit").click();

  await expect(page.locator("#spSubmit")).toBeEnabled();
  await expect(page.locator("#spStatus")).toContainText("didn’t go through");
  await expect(page.locator("#spSuccess")).toBeHidden();
});

test("honeypot submissions remain silent", async ({ page }) => {
  let requestCount = 0;
  await page.route("https://api.web3forms.com/submit", async (route) => {
    requestCount += 1;
    await route.fulfill({ json: { success: true } });
  });
  await fillValidMessage(page);
  await page.locator("#spBotcheck").evaluate((input) => { input.value = "robot"; });
  await page.locator("#spSubmit").click();
  await page.waitForTimeout(50);

  expect(requestCount).toBe(0);
  await expect(page.locator("#spForm")).toBeVisible();
  await expect(page.locator("#spSuccess")).toBeHidden();
});

test("reset restores a clean form", async ({ page }) => {
  await page.route("https://api.web3forms.com/submit", (route) => route.fulfill({
    json: { success: true }
  }));
  await fillValidMessage(page);
  await page.locator("#spSubmit").click();
  await page.locator("#spReset").click();

  await expect(page.locator("#spForm")).toBeVisible();
  await expect(page.locator("#spSuccess")).toBeHidden();
  await expect(page.locator("#spName")).toHaveValue("");
  await expect(page.locator("#spEmail")).toHaveValue("");
  await expect(page.locator("#spMessage")).toHaveValue("");
  await expect(page.locator("#spSubmit")).toBeEnabled();
  await expect(page.locator("#spName")).toBeFocused();
});
