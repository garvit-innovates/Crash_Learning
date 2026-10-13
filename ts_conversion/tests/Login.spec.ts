
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test_data/loginData.json';

for (const data of loginData) {test(`Login test use - ${data.testName}`,{ tag: ['@login', '@smoke'] },async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.open();
      await loginPage.login(data.email, data.password);
      if (data.expectedResult === 'success') {
        expect(await loginPage.tosterText()).toBe('Login Successfully');
        expect(await loginPage.containerVisible()).toBe(true);
      } else {
        expect(await loginPage.tosterText()).toBe(
          'Incorrect email or password.'
        );
      }
    }
  );
}
