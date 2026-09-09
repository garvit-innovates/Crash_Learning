// Open https://www.wikipedia.org and find all language links displayed on the page. Print the total number of matching language elements in the console and verify that the count is greater than 0.

import {test,expect} from '@playwright/test'

test("Print the total number of matching language elements", async({page}) =>{
    await page.goto("https://www.wikipedia.org");
    const languageElements = await page.locator(".central-featured-lang");
    const count = await languageElements.count();
    console.log(`Total number of matching language elements: ${count}`);
    await expect(count).toBeGreaterThan(0);
    await page.pause();
}); 