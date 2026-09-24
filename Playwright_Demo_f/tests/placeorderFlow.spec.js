const { test } = require('@playwright/test');
const { CheckoutFlow } = require('../pages/CheckoutFlow');
const { CartPage } = require('../pages/CartPage');
const { readExcelData } = require('../utils/excelUtils');
const { CheckoutPage } = require('../pages/CheckoutPage');
const checkoutFormData = require('../test_data/checkoutFormData.json');
const { OrderConfirmationPage } = require('../pages/OrderConfirmationPage');
const path = require('path');


test.use({storageState: 'auth.json'});

test('Validating checkout flow',{ tag: ['@checkout', '@regression'] },async ({ page }) => {

    const checkoutFlow = new CheckoutFlow(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const orderConfirmationPage = new OrderConfirmationPage(page);

    
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
    await checkoutPage.waitForPageLoad();
    await checkoutPage.verifyPersonalInformation();
    await checkoutPage.verifyShippingInformation();

    const formData = checkoutFormData[0];
    await checkoutPage.fillCardDetails(formData);
    await checkoutPage.verifyCardDetails(formData);
    await checkoutPage.selectCountry(formData.country,formData.countryName);
    await checkoutPage.verifyCountry(formData.countryName);
    await checkoutPage.verifyPlaceOrderButton();
    await checkoutPage.placeOrder();
    await orderConfirmationPage.verifyThankYouMessage();
    // await page.pause();
});