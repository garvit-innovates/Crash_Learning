class LoginPage {

    constructor(page) {
        this.page = page;

        // Locators
        this.emailInput = page.locator('#userEmail');
        this.passwordInput = page.locator('#userPassword');
        this.loginButton = page.locator('#login');

        // Dashboard element after successful login
        this.dashboardTitle = page.getByText('Automation Practice');
    }

    async open() {
        await this.page.goto('/client/');
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }

}

module.exports = { LoginPage };