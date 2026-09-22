const { test, expect } = require('@playwright/test');

const { CartPage } = require('../pages/CartPage');


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


    // 1. Open Cart
    await cartPage.open();


    // 2. Verify Cart page is loaded
    await expect(
        cartPage.cartHeading
    ).toBeVisible();


    // 3. Get cart item count
    const cartItemCount =
        await cartPage.getCartItemCount();

    console.log(
        'Cart Item Count:',
        cartItemCount
    );


    // 4. Verify expected number of items
    expect(cartItemCount).toBe(
        expectedCartItemCount
    );


    // 5. Verify all cart items are visible
    await cartPage.verifyAllItemsVisible();


    // 6. Verify specific products
    await expect(
        cartPage.getCartItem(productName)
    ).toBeVisible();

    await expect(
        cartPage.getCartItem(productName1)
    ).toBeVisible();

    await expect(
        cartPage.getCartItem(productName2)
    ).toBeVisible();


    // 7. Click Checkout
    await cartPage.clickCheckout();


    // 8. Verify Checkout page loaded
    await expect(
        page.getByText('Credit Card', { exact: true })
    ).toBeVisible();

});