import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/custom-world';

Given('the user navigates to the login page', async function (this: CustomWorld) {
  await this.loginPage.open();
});

When(
  'the user logs in with email {string} and password {string}',
  async function (this: CustomWorld, email: string, password: string) {
    await this.loginPage.login(email, password);
  }
);

Then(
  'the user should see toast message {string}',
  async function (this: CustomWorld, expectedMessage: string) {
    const message = await this.loginPage.tosterText();
    expect(message).toBe(expectedMessage);
  }
);

Then(
  'the user should be redirected to the dashboard',
  async function (this: CustomWorld) {
    const isVisible = await this.loginPage.containerVisible();
    expect(isVisible).toBe(true);
  }
);

Then(
  'the authentication state should be saved to {string}',
  async function (this: CustomWorld, _filePath: string) {
    await this.cookiesManager.storeCookie();
  }
);
