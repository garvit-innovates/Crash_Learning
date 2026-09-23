const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../test_data/loginData.json');


for (const data of loginData){
    
    test(`login test use - ${data.testName}`, async({page}) =>{
        
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login(data.email, data.password );

        const toastMessage = await loginPage.tosterText();

        if (data.expectedResult === "success") {
            expect(toastMessage).toBe("Login Successfully");
            expect(await loginPage.containerVisible()).toBe(true);
            await loginPage.storeCookie();
        } else {
            expect(toastMessage).toBe("Incorrect email or password.");
        }
    });

}
