const { test, expect } = require('@playwright/test');

const { DashboardPage } = require('../pages/DashboardPage');


// =======================
// Test Data
// =======================

const expectedProductCount = 3;

const productName = 'ADIDAS ORIGINAL';
const productName1 = 'ZARA COAT 3';
const productName2 = 'IPHONE 13 PRO';

const expectedCartCount = 3;


// =======================
// Authentication
// =======================

test.use({
    storageState: 'auth.json'
});


// =======================
// Dashboard Test
// =======================

test('Dashboard - Verify Products and Add Product to Cart', async ({ page }) => {

    const dashboardPage = new DashboardPage(page);


    // 1. Open Dashboard
    await dashboardPage.open();


    // 2. Verify all products are loaded
    const productCount = await dashboardPage.getProductCount();

    console.log('Total Products:', productCount);

    expect(productCount).toBe(expectedProductCount);


    // 3. Verify first product is visible
    await expect(
        dashboardPage.getProduct(productName)
    ).toBeVisible();


    // 4. Add first product to cart
    await dashboardPage.addProductToCart(productName);


    // 5. Add second product to cart
    await dashboardPage.addProductToCart(productName1);
    await dashboardPage.addProductToCart(productName2);


    // 6. Get cart count
    const cartCount = await dashboardPage.getCartCount(
        expectedCartCount
    );

    console.log('Cart Count:', cartCount);


    // 7. Verify cart count
    expect(cartCount).toBe(expectedCartCount);
    await page.pause();

});