import {test,expect} from "@playwright/test"

test("verify login", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    // Open a new blank tab
    const newTab = await page.context().newPage();
    await newTab.goto("https://rahulshettyacademy.com/");
    const heading = (await newTab.getByText("Ready to Transform Your").innerText()).toUpperCase();
    console.log(heading);
    await page.bringToFront();
    await page.locator("#userEmail").type("garvitchugh66@gmail.com");
    await page.locator("#userPassword").type("Test@1234");
    await page.locator("#login").click();
    await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
    // await page.getByPlaceholder("search").first().fill(heading);
    // await page.locator('[formControlName="productName"]').fill(heading);
    await page.locator('[formControlName="productName"]:visible').fill(heading);
    await newTab.bringToFront();
    await page.pause();
})

