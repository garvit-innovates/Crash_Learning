import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/custom-world';

Given(
  'the user verifies {string} header is visible',
  async function (this: CustomWorld, headerText: string) {
    await expect(this.page.getByText(headerText)).toBeVisible();
  }
);

When(
  'the user adds product {string} to the cart',
  async function (this: CustomWorld, productName: string) {
    const product = this.page
      .locator('.card')
      .filter({ hasText: productName });
    await product.getByRole('button', { name: 'Add To Cart' }).click();
  }
);

When(
  'the user mocks all cart APIs to return empty cart',
  async function (this: CustomWorld) {
    await this.cartMock.mockAllCartApis();
  }
);

When('the user opens the cart', async function (this: CustomWorld) {
  await this.page.getByRole('button', { name: /Cart/ }).first().click();
});

Then(
  'the empty cart message {string} should be displayed',
  async function (this: CustomWorld, message: string) {
    await expect(this.page.getByText(message)).toBeVisible();
  }
);