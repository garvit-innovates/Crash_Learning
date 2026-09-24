const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../test_data/loginData.json');
const {cookies} = require("../utils/cookies");

test ("valid login for featching cookies" , { tag: '@cookie' }, async ({page}) => {
    const loginPage = new LoginPage(page);
    const Cookies = new cookies(page)
    await loginPage.open();
    await loginPage.login(loginData[0].email, loginData[0].password);
    expect(await loginPage.tosterText()).toBe("Login Successfully");
    await Cookies.storeCookie();
})
