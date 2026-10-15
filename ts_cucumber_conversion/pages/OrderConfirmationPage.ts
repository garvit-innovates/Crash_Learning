
import { Page, Locator, expect } from '@playwright/test';

export class OrderConfirmationPage {
  private page: Page;
  private thankYouMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.thankYouMessage = page.getByRole('heading', {
      name: /Thankyou for the order/i,
    });
  }

  async verifyThankYouMessage(): Promise<void> {
    await this.thankYouMessage.waitFor({
      state: 'visible',
      timeout: 10000,
    });

    await expect(this.thankYouMessage).toBeVisible();
  }
}
