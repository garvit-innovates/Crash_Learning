// Create a Playwright test that opens https://www.google.com and verifies that the page title contains "Google".

import { test, expect } from "@playwright/test";

test("Verify Google logo", async ({ page }) => {
    await page.goto("https://www.google.com");

    const logo = page.getByRole("img", { name: "Google" });

    await expect(logo).toBeVisible();
});
