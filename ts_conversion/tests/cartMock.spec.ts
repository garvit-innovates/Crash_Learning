
import { test, expect } from '@playwright/test';
import CartMock from '../pages/cartMock';

test.use({ storageState: 'auth.json' });

test('Verify empty cart using API mocking',{ tag: '@cartmock' },async ({ page }) => {
    const cartMock = new CartMock(page);

    // Open Dashboard
    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
    await expect(page.getByText('Automation Practice')).toBeVisible();

    // Select product
    const product = page.locator('.card').filter({ hasText: 'ADIDAS ORIGINAL' });

    // 3. Add product normally
    await product.getByRole('button', { name: 'Add To Cart' }).click();

    // 5. Mock Cart APIs
    await cartMock.mockAllCartApis();

    // 6. Open Cart
    await page.getByRole('button', { name: /Cart/ }).first().click();

    // 7. Verify cart is empty
    await expect(page.getByText('No Products in Your Cart !')).toBeVisible();
  }
);
