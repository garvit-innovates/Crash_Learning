const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../test-data/loginData.json');

for (const data of loginData) {

    test(`Login Test - ${data.testName}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Open application
        await loginPage.open();

        // Login
        await loginPage.login(
            data.email,
            data.password
        );

        if (data.expectedResult === 'success') {

            // Verify successful login
            await expect(page).toHaveURL(/dashboard/);

            // Save authenticated browser state
            await page.context().storageState({
                path: 'auth.json'
            });

            console.log('Authentication state saved successfully');

        } else {

            // Verify invalid login
            await expect(page).toHaveURL(/auth\/login/);

        }
    });
}