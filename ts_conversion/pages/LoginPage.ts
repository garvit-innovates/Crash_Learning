
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private toster: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#userEmail');
    this.passwordInput = page.locator('#userPassword');
    this.loginButton = page.locator('#login');
    this.toster = page.locator('#toast-container');
  }

  async tosterText(): Promise<string> {
    await this.toster.waitFor({
      state: 'visible',
      timeout: 10000,
    });

    return (await this.toster.innerText()).trim();
  }

  async containerVisible(): Promise<boolean> {
    try {
      await this.page.locator('.container').waitFor({
        state: 'visible',
        timeout: 5000,
      });

      return true;
    } catch {
      return false;
    }
  }

  async invalidValidity(): Promise<void> {
    await this.page.locator('.login-wrapper').waitFor({
      state: 'visible',
      timeout: 5000,
    });
  }

  async open(): Promise<void> {
    await this.page.goto(
      'https://rahulshettyacademy.com/client/#/auth/login',
      { waitUntil: 'domcontentloaded' }
    );
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async login(email: string, password: string): Promise<void> {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
