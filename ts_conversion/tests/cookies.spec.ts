
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test_data/loginData.json';
import { Cookies } from '../utils/cookies';

test('valid login for fetching cookies',{ tag: '@cookie' },async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cookiesManager = new Cookies(page);
    await loginPage.open();
    await loginPage.login(loginData[0].email,loginData[0].password);
    expect(await loginPage.tosterText()).toBe('Login Successfully');
    await cookiesManager.storeCookie();
  }
);
