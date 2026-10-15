import { BeforeAll, AfterAll, Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { CustomWorld } from './custom-world';
import * as fs from 'fs';
import * as path from 'path';

let browser: Browser;

// Set default timeout for Cucumber steps
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  // Ensure reports directory exists
  const reportsDir = path.join(process.cwd(), 'reports', 'screenshots');
  fs.mkdirSync(reportsDir, { recursive: true });

  const isHeadless = process.env.HEADLESS !== 'false';
  browser = await chromium.launch({
    headless: isHeadless,
  });
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});

Before(async function (this: CustomWorld, scenario) {
  this.browser = browser;

  const tags = scenario.pickle.tags.map((t) => t.name);
  const useAuth =
    tags.includes('@authenticated') ||
    tags.includes('@checkout') ||
    tags.includes('@cartmock');

  const authPath = path.join(process.cwd(), 'auth.json');
  const contextOptions: { storageState?: string } = {};

  if (useAuth && fs.existsSync(authPath)) {
    contextOptions.storageState = authPath;
  }

  this.context = await browser.newContext(contextOptions);
  const page = await this.context.newPage();
  await this.initPage(page);
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    if (this.page) {
      const sanitizedName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
      const screenshotPath = path.join(
        process.cwd(),
        'reports',
        'screenshots',
        `${sanitizedName}_failed.png`
      );

      try {
        const screenshot = await this.page.screenshot({
          path: screenshotPath,
          fullPage: true,
        });
        await this.attach(screenshot, 'image/png');
      } catch (err) {
        console.warn('Failed to capture failure screenshot:', err);
      }
    }
  }

  if (this.context) {
    await this.context.close();
  }
});
