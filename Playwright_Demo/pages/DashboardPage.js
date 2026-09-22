const { expect } = require('@playwright/test');

class DashboardPage {

    constructor(page) {

        this.page = page;

        // Product cards
        this.products = page.locator('section#products .card');

        // Cart button
        this.cartButton = page.locator(
            'button[routerlink="/dashboard/cart"]'
        );
    }

    // Open Dashboard
    async open() {
        await this.page.goto('/client/#/dashboard/dash');
    }

    // Get total product count
    async getProductCount() {
        return await this.products.count();
    }

    // Get specific product
    getProduct(productName) {
        return this.products.filter({
            hasText: productName
        });
    }

    // Add product to cart
    async addProductToCart(productName) {

        const product = this.getProduct(productName);

        await product
            .getByRole('button', { name: /Add To Cart/i })
            .click();
    }

    // Get cart count
    async getCartCount(expectedCount) {

        // Wait until cart shows expected count
        await expect(this.cartButton).toContainText(
            expectedCount.toString()
        );

        const cartText = await this.cartButton.innerText();

        return parseInt(
            cartText.match(/\d+/)?.[0] || '0'
        );
    }
}

module.exports = { DashboardPage };