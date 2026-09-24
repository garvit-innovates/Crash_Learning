class CartMock {

    constructor(page) {
        this.page = page;
    }

    // Mock Add To Cart API
    async mockAddToCart() {

        await this.page.route(
            '**/api/ecom/user/add-to-cart',
            async route => {

                await route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({})
                });

            }
        );
    }


    // Mock Cart Count API
    async mockCartCount() {

        await this.page.route(
            '**/api/ecom/user/get-cart-count/**',
            async route => {

                await route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        count: 0
                    })
                });

            }
        );
    }


    // Mock Cart Products API
    async mockCartProducts() {

        await this.page.route(
            '**/api/ecom/user/get-cart-products/**',
            async route => {

                await route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify([])
                });

            }
        );
    }


    // Apply all mocks
    async mockAllCartApis() {

        await this.mockAddToCart();
        await this.mockCartCount();
        await this.mockCartProducts();

    }
}

module.exports = CartMock;