// Open https://www.wikipedia.org and verify that the "Wikipedia" logo is visible on the page.


import { test, expect } from "@playwright/test";

test("verify the Wikipedia is visible on page", async ({ page }) => {
    await page.goto("https://www.wikipedia.org/");
    
    await expect(page.locator(".central-featured-logo")).toBeVisible();
});