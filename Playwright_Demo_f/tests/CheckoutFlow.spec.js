const { test, expect } = require('@playwright/test');
const { CheckoutFlow } = require('../pages/CheckoutFlow');
const { CartPage } = require('../pages/CartPage');
const { readExcelData } = require('../utils/excelUtils');
const path = require('path');

// Bypass login
test.use({storageState: 'auth.json'}, { headless: true });

test('Validating checkout flow', async ({ page }) => {

    const checkoutFlow = new CheckoutFlow(page);

    // Open dashboard
    await checkoutFlow.open();

    // Check products container
    await expect(page.locator('#products .container')).toBeVisible();

    // Excel file
    const excelPath = path.join(__dirname,'../test_data/checkoutData.xlsx');

    // Read Excel data
    const checkoutData = readExcelData(excelPath,'Sheet1');

    // Add products
    for (const data of checkoutData) {
        await checkoutFlow.addToCart(data.productName,Number(data.quantity));
    }

    // Go to cart
    await checkoutFlow.goToCart();

    // Verify cart page
    await expect(page).toHaveURL(/.*dashboard\/cart/);

    const cartPage = new CartPage(page);

    await cartPage.verifyProductCount(checkoutData.length);

    await cartPage.verifyAllProducts(checkoutData);

    await cartPage.clickCheckout();

    // await page.pause();
});