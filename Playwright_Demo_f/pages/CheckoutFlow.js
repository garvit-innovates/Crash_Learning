const { expect } = require('@playwright/test');

class CheckoutFlow {

    constructor(page) {
        this.page = page;
        this.products = page.locator('section#products .card');
        this.productsContainer = page.locator('#products .container');
        this.cartButton = page.locator('button[routerlink="/dashboard/cart"]');
        this.cartContainer = page.locator('.cart');
    }


    async open() {
        await this.page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash',{waitUntil: 'domcontentloaded'});
    }


    async verifyProductsContainer() {
        await expect(this.productsContainer).toBeVisible();
    }


    getProduct(productName) {
        return this.products.filter({hasText: productName});
    }


    async addToCart(productName, quantity = 1) {
        const product = this.getProduct(productName);

        await product.waitFor({state: 'visible'});

        for (let i = 0; i < quantity; i++) {
            await product.getByRole('button', {name: /Add To Cart/i}).click();
        }
    }


    // async goToCart() {
    //     await this.cartButton.click();
    //     await this.cartContainer.waitFor({state: 'visible'});
    // }


    async goToCart() {

        const responsePromise = this.page.waitForResponse(response =>
            response.url().includes('/api/ecom/user/get-cart-products/') &&
            response.request().method() === 'GET'
         );
        await this.cartButton.click();
        const response = await responsePromise;
        await expect([200, 304]).toContain(response.status());
        await this.cartContainer.waitFor({state: 'visible'});
    }


    async verifyCartContainer() {
        await expect(this.cartContainer).toBeVisible();
    }
}


module.exports = {CheckoutFlow};