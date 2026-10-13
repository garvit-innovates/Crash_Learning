import { Page, Route } from '@playwright/test';

class CartMock {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Mock Add To Cart API
  async mockAddToCart(): Promise<void> {await this.page.route('**/api/ecom/user/add-to-cart',async (route: Route) => {
        await route.fulfill({status: 200,contentType: 'application/json',body: JSON.stringify({}),});}
    );}

  // Mock Cart Count API
  async mockCartCount(): Promise<void> {await this.page.route('**/api/ecom/user/get-cart-count/**',
      async (route: Route) => {
        await route.fulfill({status: 200,contentType: 'application/json',body: JSON.stringify({count: 0,}),});}
    );}

  // Mock Cart Products API
  async mockCartProducts(): Promise<void> {await this.page.route('**/api/ecom/user/get-cart-products/**',
      async (route: Route) => {await route.fulfill({status: 200,contentType: 'application/json',body: JSON.stringify([]),});}
    );}

  // Apply all mocks
  async mockAllCartApis(): Promise<void> {
    await this.mockAddToCart();
    await this.mockCartCount();
    await this.mockCartProducts();
  }
}

export default CartMock;