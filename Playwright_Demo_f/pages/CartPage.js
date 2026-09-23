const { expect } = require('@playwright/test');

class CartPage {

    constructor(page) {

        this.page = page;

        this.cartProducts = page.locator('div.cartSection h3');

        this.checkoutButton = page.getByRole('button', {
            name: /Checkout/i
        });
    }

    async verifyProduct(productName) {

        await this.page
            .getByRole('heading', {
                name: productName,
                exact: true
            })
            .waitFor({
                state: 'visible'
            });
    }

    async verifyAllProducts(products) {

        for (const product of products) {

            await this.verifyProduct(
                product.productName
            );
        }
    }

    async verifyProductCount(expectedCount) {

        await expect(
            this.cartProducts
        ).toHaveCount(expectedCount);
    }

    async clickCheckout() {

        await this.checkoutButton.click();
    }
}

module.exports = {
    CartPage
};