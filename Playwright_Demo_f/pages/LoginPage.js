class LoginPage{

    constructor(page){
        this.page = page;
        this.emailInput = page.locator("#userEmail");
        this.passwordInput = page.locator("#userPassword");
        this.loginButton = page.locator("#login");
        this.toster = page.locator("#toast-container");
    }

    async tosterText() {
        await this.toster.waitFor({ state: 'visible' });
        return (await this.toster.innerText()).trim();
    }

    async storeCookie(){
        await this.page.context().storageState({ path: 'auth.json' });
    }

    async containerVisible(){
        try{await this.page.locator('.container').waitFor({ state: 'visible' ,timeout:5000 });
        return true;}
        catch(e){return false;}
    }

    async invalidValidity(){
        await this.page.locator('.login-wrapper').waitFor({ state: 'visible',timeout:5000 });
    }

    async open() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login", {
            waitUntil: 'domcontentloaded'
        });
    }

    async enterEmail(email){
        await this.emailInput.fill(email);
    }

    async enterPassword(password){
        await this.passwordInput.fill(password);
    }

    async clickLogin(){
        await this.loginButton.click();
    }

    async login(email,password){
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

module.exports = { LoginPage };