const {test, expect} = require('@playwright/test');

test('client app login' , async ({ page }) =>{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("garvitchugh66@gmail.com")
    await page.locator("#userPassword").fill("Test@1234")
    await page.locator("#login").click();

    await page.waitForLoadState('networkidle')
    const titles = await page.locator(".card-body b").allTextContents()
    const products = page.locator(".card-body")  
    await page.locator(".card-body").first().waitFor();
    const count = titles.length;
    const productName = "ZARA COAT 3";
    for(let i = 0; i<count; i++){
        if(await products.nth(i).locator("b").textContent() === productName)
        {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
}

    await page.locator("[routerlink *='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator(`h3:has-text('${productName}')`).isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=checkout").click();
    await page.pause(); 
})