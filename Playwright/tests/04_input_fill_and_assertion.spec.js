// Open https://www.wikipedia.org, locate the language search/input field, enter "India", and verify that the input contains "India".

import {test,expect} from '@playwright/test'

test("verify input field", async({page}) =>{
    await page.goto("https://www.wikipedia.org");
    await page.locator("#searchInput").fill("India");
    await page.locator(".sprite.svg-search-icon").click();
    await expect(page).toHaveURL("https://en.wikipedia.org/wiki/India");
    await page.pause();
});