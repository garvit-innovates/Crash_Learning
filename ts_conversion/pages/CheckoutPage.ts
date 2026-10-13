
import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  private page: Page;
  private personalInformation: Locator;
  private shippingInformation: Locator;
  private creditCardNumber: Locator;
  private expiryMonth: Locator;
  private expiryYear: Locator;
  private cvv: Locator;
  private nameOnCard: Locator;
  private countryInput: Locator;
  private placeOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.personalInformation = page.getByText(
      'Personal Information',
      { exact: true }
    );
    this.shippingInformation = page.getByText(
      'Shipping Information',
      { exact: true }
    );
    this.creditCardNumber = page.locator('.payment__cc input').first();
    this.expiryMonth = page.locator('.payment__cc select').nth(0);
    this.expiryYear = page.locator('.payment__cc select').nth(1);
    this.cvv = page.locator('.payment__cc input').nth(1);
    this.nameOnCard = page.locator('.payment__cc input').nth(2);
    this.countryInput = page.getByPlaceholder('Select Country');
    this.placeOrderButton = page.locator('a.action__submit');
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
    await this.personalInformation.waitFor({ state: 'visible' });
  }

  async verifyPersonalInformation(): Promise<void> {
    await expect(this.personalInformation).toBeVisible();
  }

  async verifyShippingInformation(): Promise<void> {
    await expect(this.shippingInformation).toBeVisible();
  }

  async fillCardDetails(data: {
    cardNumber: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    nameOnCard: string;
  }): Promise<void> {
    await this.creditCardNumber.fill(data.cardNumber);
    await this.expiryMonth.selectOption(data.expiryMonth);
    await this.expiryYear.selectOption(data.expiryYear);
    await this.cvv.fill(data.cvv);
    await this.nameOnCard.fill(data.nameOnCard);
  }

  async verifyCardDetails(data: {
    cardNumber: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    nameOnCard: string;
  }): Promise<void> {
    await expect(this.creditCardNumber).toHaveValue(data.cardNumber);
    await expect(this.expiryMonth).toHaveValue(data.expiryMonth);
    await expect(this.expiryYear).toHaveValue(data.expiryYear);
    await expect(this.cvv).toHaveValue(data.cvv);
    await expect(this.nameOnCard).toHaveValue(data.nameOnCard);
  }

  async selectCountry(
    country: string,
    countryName: string
  ): Promise<void> {
    await this.countryInput.type(country);

    const countryOption = this.page
      .locator('section.ta-results button')
      .getByText(countryName, { exact: true });

    await countryOption.waitFor({ state: 'visible' });
    await countryOption.click();
  }

  async verifyCountry(countryName: string): Promise<void> {
    await expect(this.countryInput).toHaveValue(countryName);
  }

  async verifyPlaceOrderButton(): Promise<void> {
    await expect(this.placeOrderButton).toBeVisible();
    await expect(this.placeOrderButton).toBeEnabled();
  }

  async placeOrder(): Promise<void> {
    await this.placeOrderButton.click();
  }
}
