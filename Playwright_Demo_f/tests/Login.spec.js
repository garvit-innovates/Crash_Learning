const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../test_data/loginData.json');


for (const data of loginData){
    
    test(`Login test use - ${data.testName}`,{ tag: ['@login', '@smoke'] },async ({ page }) => {
        
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login(data.email, data.password );

        if (data.expectedResult === "success") {
             expect(await loginPage.tosterText()).toBe("Login Successfully");
            expect(await loginPage.containerVisible()).toBe(true);
            // await loginPage.storeCookie();
        } else {
             expect(await loginPage.tosterText()).toBe("Incorrect email or password.");
        }
    });

}
