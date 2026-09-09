// Create a Playwright test that opens https://www.wikipedia.org and verifies that the page title contains "Wikipedia".

import { test, expect } from "@playwright/test";

test("Verify title", async ({ page }) => {
    await page.goto("https://www.wikipedia.org");

    await expect(page).toHaveTitle(/Wikipedia/);
});