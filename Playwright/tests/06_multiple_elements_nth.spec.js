// Open https://www.wikipedia.org, locate all language elements, get the text of the first language element using nth(), and verify that it contains "English".

import { test, expect } from "@playwright/test";

test("Verify first language element", async ({ page }) => {
    await page.goto("https://www.wikipedia.org");

    const languages = page.locator(".central-featured-lang");

    const firstLanguage = languages.nth(0);

    const text = await firstLanguage.textContent();

    await expect(text).toContain("English");
});