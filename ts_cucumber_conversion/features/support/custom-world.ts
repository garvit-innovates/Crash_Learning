import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CheckoutFlow } from '../../pages/CheckoutFlow';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { OrderConfirmationPage } from '../../pages/OrderConfirmationPage';
import CartMock from '../../pages/cartMock';
import { Cookies } from '../../utils/cookies';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  loginPage!: LoginPage;
  checkoutFlow!: CheckoutFlow;
  cartPage!: CartPage;
  checkoutPage!: CheckoutPage;
  orderConfirmationPage!: OrderConfirmationPage;
  cartMock!: CartMock;
  cookiesManager!: Cookies;

  testData: Record<string, any> = {};

  constructor(options: IWorldOptions) {
    super(options);
  }

  async initPage(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.checkoutFlow = new CheckoutFlow(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.orderConfirmationPage = new OrderConfirmationPage(page);
    this.cartMock = new CartMock(page);
    this.cookiesManager = new Cookies(page);
  }
}

setWorldConstructor(CustomWorld);
