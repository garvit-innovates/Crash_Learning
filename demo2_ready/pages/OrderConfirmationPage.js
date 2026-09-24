const { expect } = require('@playwright/test');

class OrderConfirmationPage {

    constructor(page) {
        this.page = page;
        this.thankYouMessage = page.getByRole('heading',{ name: /Thankyou for the order/i });
    }

    async verifyThankYouMessage() {
        await this.thankYouMessage.waitFor({state: 'visible',timeout: 10000});
        await expect(this.thankYouMessage).toBeVisible();
    }
}

module.exports = {OrderConfirmationPage};