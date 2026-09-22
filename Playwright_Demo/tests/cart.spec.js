const { test, expect } = require('@playwright/test');

const { CartPage } = require('../pages/CartPage');
const { DashboardPage } = require('../pages/DashboardPage');


// =======================
// Test Data
// =======================

const expectedCartItemCount = 3;

const productName = 'ADIDAS ORIGINAL';
const productName1 = 'ZARA COAT 3';
const productName2 = 'IPHONE 13 PRO';


// =======================
// Authentication
// =======================

test.use({
    storageState: 'auth.json'
});


// =======================
// Cart Test
// =======================

test('Cart - Verify Items and Checkout', async ({ page }) => {

    const cartPage = new CartPage(page);
    const dashboardPage = new DashboardPage(page);


    // 1. Add the expected products to cart
    await dashboardPage.open();
    await dashboardPage.addProductToCart(productName);
    await dashboardPage.addProductToCart(productName1);
    await dashboardPage.addProductToCart(productName2);


    // 2. Open Cart
    await cartPage.open();


    // 3. Verify Cart page is loaded
    await expect(
        cartPage.cartHeading
    ).toBeVisible();


    // 4. Get cart item count
    const cartItemCount =
        await cartPage.getCartItemCount();

    console.log(
        'Cart Item Count:',
        cartItemCount
    );


    // 5. Verify expected number of items
    expect(cartItemCount).toBe(
        expectedCartItemCount
    );


    // 6. Verify all cart items are visible
    await cartPage.verifyAllItemsVisible();


    // 7. Verify specific products
    await expect(
        cartPage.getCartItem(productName)
    ).toBeVisible();

    await expect(
        cartPage.getCartItem(productName1)
    ).toBeVisible();

    await expect(
        cartPage.getCartItem(productName2)
    ).toBeVisible();


    // 8. Click Checkout
    await cartPage.clickCheckout();


    // 9. Verify Checkout page loaded
    await expect(
        page.getByText('Credit Card', { exact: true })
    ).toBeVisible();

});