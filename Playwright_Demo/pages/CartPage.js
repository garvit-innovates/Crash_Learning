const { expect } = require('@playwright/test');

class CartPage {

    constructor(page) {

        this.page = page;

        // Cart heading
        this.cartHeading = page.getByRole('heading', {
            name: 'My Cart',
            exact: true
        });

        // Each product in cart
        this.cartItems = page.locator('ul:has(h3)');

        // Checkout button
        this.checkoutButton = page.getByRole('button', {
            name: /Checkout/i
        });
    }


    // Open Cart
    async open() {

        await this.page.goto(
            '/client/#/dashboard/cart'
        );
    }


    // Get cart item count
    async getCartItemCount() {

        return await this.cartItems.count();
    }


    // Get specific cart item
    getCartItem(productName) {

        return this.cartItems.filter({
            hasText: productName
        });
    }


    // Verify all cart items are visible
    async verifyAllItemsVisible() {

        const count = await this.cartItems.count();

        for (let i = 0; i < count; i++) {

            await expect(
                this.cartItems.nth(i)
            ).toBeVisible();
        }
    }


    // Click Checkout
    async clickCheckout() {

        await this.checkoutButton.click();
    }
}

module.exports = { CartPage };