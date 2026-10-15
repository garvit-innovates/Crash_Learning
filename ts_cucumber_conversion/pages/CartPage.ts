
import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  private page: Page;
  private cartProducts: Locator;
  private checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartProducts = page.locator('div.cartSection h3');
    this.checkoutButton = page.getByRole('button', {
      name: /Checkout/i,
    });
  }

  async verifyProduct(productName: string): Promise<void> {
    await this.page
      .getByRole('heading', {
        name: productName,
        exact: true,
      })
      .waitFor({ state: 'visible' });
  }

  async verifyAllProducts(
    products: { productName: string }[]
  ): Promise<void> {
    for (const product of products) {
      await this.verifyProduct(product.productName);
    }
  }

  async verifyProductCount(expectedCount: number): Promise<void> {
    await this.cartProducts
      .first()
      .waitFor({ state: 'visible', timeout: 10000 });

    await expect(this.cartProducts).toHaveCount(expectedCount);
  }

  async clickCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
