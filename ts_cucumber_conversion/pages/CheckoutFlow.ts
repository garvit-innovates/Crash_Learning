
import { Page, Locator, expect } from '@playwright/test';

export class CheckoutFlow {
  private page: Page;
  private products: Locator;
  private productsContainer: Locator;
  private cartButton: Locator;
  private cartContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator('section#products .card');
    this.productsContainer = page.locator('#products .container');
    this.cartButton = page.locator(
      'button[routerlink="/dashboard/cart"]'
    );
    this.cartContainer = page.locator('.cart');
  }

  async open(): Promise<void> {
    await this.page.goto(
      'https://rahulshettyacademy.com/client/#/dashboard/dash',
      { waitUntil: 'domcontentloaded' }
    );
  }

  async verifyProductsContainer(): Promise<void> {
    await expect(this.productsContainer).toBeVisible();
  }

  getProduct(productName: string): Locator {
    return this.products.filter({ hasText: productName });
  }

  async addToCart(
    productName: string,
    quantity: number = 1
  ): Promise<void> {
    const product = this.getProduct(productName);

    await product.waitFor({ state: 'visible' });

    for (let i = 0; i < quantity; i++) {
      await product
        .getByRole('button', { name: /Add To Cart/i })
        .click();
    }
  }

  // Navigate to cart and verify the API response
  async goToCart(): Promise<void> {
    const responsePromise = this.page.waitForResponse(
      (response) =>
        response.url().includes(
          '/api/ecom/user/get-cart-products/'
        ) &&
        response.request().method() === 'GET'
    );

    await this.cartButton.click();

    const response = await responsePromise;

    await expect([200, 304]).toContain(response.status());

    await this.cartContainer.waitFor({ state: 'visible' });
  }

  async verifyCartContainer(): Promise<void> {
    await expect(this.cartContainer).toBeVisible();
  }
}
