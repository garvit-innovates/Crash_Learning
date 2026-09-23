class CheckoutFlow {

    constructor(page) {
        this.page = page;

        // Products
        this.products = page.locator('section#products .card');

        // Cart button
        this.cartButton = page.locator('button[routerlink="/dashboard/cart"]');
    }


    // Open dashboard
    async open() {
        await this.page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
    }


    // Get specific product
    getProduct(productName) {
        return this.products.filter({hasText: productName});
    }


    // Add product to cart according to quantity
    async addToCart(productName, quantity = 1) {

        const product = this.getProduct(productName);

        // Verify product is available
        await product.waitFor({state: 'visible'});

        for (let i = 0; i < quantity; i++) {
            await product.getByRole('button', {name: /Add To Cart/i}).click();
        }
    }

    // Go to cart
    async goToCart() {
        await this.cartButton.click();
    }
}


module.exports = {CheckoutFlow};