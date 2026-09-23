const { test } = require('@playwright/test');
const { CheckoutFlow } = require('../pages/CheckoutFlow');
const { CartPage } = require('../pages/CartPage');
const { readExcelData } = require('../utils/excelUtils');
const path = require('path');


test.use({storageState: 'auth.json'});

test('Validating checkout flow', async ({ page }) => {
    const checkoutFlow = new CheckoutFlow(page);
    const cartPage = new CartPage(page);


    await checkoutFlow.open();
    await checkoutFlow.verifyProductsContainer();

    const excelPath = path.join(__dirname,'../test_data/checkoutData.xlsx');
    const checkoutData = readExcelData(excelPath,'Sheet1');


    for (const data of checkoutData) {
        await checkoutFlow.addToCart(data.productName,Number(data.quantity));
    }


    await checkoutFlow.goToCart();
    await checkoutFlow.verifyCartContainer();
    await cartPage.verifyProductCount(checkoutData.length);

    await cartPage.verifyAllProducts(checkoutData);
    await cartPage.clickCheckout();
    // await page.pause();
});