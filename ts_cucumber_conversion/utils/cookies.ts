
import { Page } from '@playwright/test';

export class Cookies {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async storeCookie(): Promise<void> {
    await this.page.context().storageState({
      path: 'auth.json',
    });
  }
}
