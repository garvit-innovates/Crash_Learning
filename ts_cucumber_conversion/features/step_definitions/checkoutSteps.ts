import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { readExcelData } from '../../utils/excelUtils';
import * as path from 'path';
import * as fs from 'fs';

Given('the user is on the dashboard page', async function (this: CustomWorld) {
  await this.checkoutFlow.open();
});

Given('the products container is visible', async function (this: CustomWorld) {
  await this.checkoutFlow.verifyProductsContainer();
});

When(
  'the user adds products to the cart from {string}',
  async function (this: CustomWorld, relativeFilePath: string) {
    const excelPath = path.isAbsolute(relativeFilePath)
      ? relativeFilePath
      : path.join(process.cwd(), relativeFilePath);

    const checkoutData = readExcelData(excelPath, 'Sheet1') as {
      productName: string;
      quantity: string | number;
    }[];

    this.testData['checkoutData'] = checkoutData;

    for (const item of checkoutData) {
      await this.checkoutFlow.addToCart(
        item.productName,
        Number(item.quantity)
      );
    }
  }
);

When(
  'the user adds product {string} with quantity {int} to the cart',
  async function (this: CustomWorld, productName: string, quantity: number) {
    await this.checkoutFlow.addToCart(productName, quantity);
  }
);

When('the user navigates to the cart page', async function (this: CustomWorld) {
  await this.checkoutFlow.goToCart();
  await this.checkoutFlow.verifyCartContainer();
});

Then(
  'the user should see the correct number of products in the cart',
  async function (this: CustomWorld) {
    const checkoutData = this.testData['checkoutData'] as {
      productName: string;
    }[];
    if (checkoutData) {
      await this.cartPage.verifyProductCount(checkoutData.length);
    }
  }
);

Then(
  'the user should see {int} products in the cart',
  async function (this: CustomWorld, count: number) {
    await this.cartPage.verifyProductCount(count);
  }
);

Then(
  'the user verifies all added products in the cart',
  async function (this: CustomWorld) {
    const checkoutData = this.testData['checkoutData'] as {
      productName: string;
    }[];
    if (checkoutData) {
      await this.cartPage.verifyAllProducts(checkoutData);
    }
  }
);

When('the user proceeds to checkout', async function (this: CustomWorld) {
  await this.cartPage.clickCheckout();
});

Then(
  'the checkout page should be loaded with personal and shipping information',
  async function (this: CustomWorld) {
    await this.checkoutPage.waitForPageLoad();
    await this.checkoutPage.verifyPersonalInformation();
    await this.checkoutPage.verifyShippingInformation();
  }
);

When(
  'the user fills payment and shipping details using {string}',
  async function (this: CustomWorld, relativeFilePath: string) {
    const jsonPath = path.isAbsolute(relativeFilePath)
      ? relativeFilePath
      : path.join(process.cwd(), relativeFilePath);

    const formDataList = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    const formData = formDataList[0];

    await this.checkoutPage.fillCardDetails(formData);
    await this.checkoutPage.verifyCardDetails(formData);
    await this.checkoutPage.selectCountry(
      formData.country,
      formData.countryName
    );
    await this.checkoutPage.verifyCountry(formData.countryName);
    await this.checkoutPage.verifyPlaceOrderButton();
  }
);

When('the user places the order', async function (this: CustomWorld) {
  await this.checkoutPage.placeOrder();
});

Then(
  'the order confirmation message should be displayed',
  async function (this: CustomWorld) {
    await this.orderConfirmationPage.verifyThankYouMessage();
  }
);
