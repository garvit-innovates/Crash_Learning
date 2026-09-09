# 🎭 Playwright Automation Testing
### 🚀 Practical Notes & Quick Revision Cheat Sheet

> **Goal:** Learn Playwright from fundamentals → practical automation → interview confidence.

---

## 🧭 LEARNING ROADMAP

```text
Playwright Basics
      ↓
Setup & Test Structure
      ↓
Async / Await
      ↓
Browser Context + Page
      ↓
Locators
      ↓
Actions + Text Extraction
      ↓
Assertions
      ↓
Multiple Elements
      ↓
Auto-Waiting
      ↓
Dropdowns / Radio / Checkbox
      ↓
Tabs & Child Windows
      ↓
Practical Automation
      ↓
Interview Preparation
```

---

# 1️⃣ What is Playwright?

**Playwright** is an end-to-end browser automation and testing framework for modern web applications.

### 🌐 Browser Support

- Chromium
- Firefox
- WebKit

### 🧪 Common Uses

- UI automation
- End-to-end testing
- Assertions
- Cross-browser testing
- Multiple pages/tabs
- Network/API-related testing

---

# 2️⃣ Playwright Setup

## Check Node.js & npm

```bash
node -v
npm -v
```

## Create a project

```bash
mkdir playwright-demo
cd playwright-demo
npm init -y
npm init playwright@latest
```

## Run tests

```bash
npx playwright test
```

### Run in headed mode

```bash
npx playwright test --headed
```

### Open HTML report

```bash
npx playwright show-report
```

---

# 3️⃣ 🧱 Basic Test Structure

```js
import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {

    await page.goto('https://example.com');

    await expect(page).toHaveTitle(/Example/);
});
```

### 🔑 Remember

| Keyword | Meaning |
|---|---|
| `test` | Defines a test |
| `expect` | Performs an assertion |
| `page` | Represents a browser tab/page |
| `async` | Handles asynchronous function |
| `await` | Waits for an async operation |

---

# 4️⃣ ⏳ Async / Await

Playwright browser operations are asynchronous.

```js
await page.goto(url);

await page.locator('#username').fill('Garvit');

await page.getByRole('button', { name: 'Login' }).click();
```

### 🧠 Easy Rule

```text
Playwright Action
       ↓
     await
       ↓
Next Action
```

Use `await` with Playwright actions and assertions.

---

# 5️⃣ 🌐 Browser → Context → Page

```text
Browser
   │
   ├── Browser Context
   │       │
   │       ├── Page / Tab
   │       └── Page / Tab
   │
   └── Browser Context
```

### Browser Context

An **isolated browser session** with its own:

- Cookies
- Local storage
- Session storage
- Login state

### Page

A `Page` represents a **browser tab/page**.

```js
test('example', async ({ page }) => {

    await page.goto('https://example.com');

});
```

---

# 6️⃣ ⚙️ Playwright Configuration

Main configuration file:

```text
playwright.config.js
```

It can control:

- Test directory
- Base URL
- Browser projects
- Retries
- Timeout
- Reporter
- Parallel execution
- Trace
- Screenshots
- Videos

### Example

```js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    use: {
        baseURL: 'https://example.com',
        trace: 'on-first-retry'
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
});
```

---

# 7️⃣ 🌍 Multiple Browser Configuration

```js
projects: [

    {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] }
    },

    {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] }
    },

    {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] }
    }

]
```

### 🎯 Why?

To perform **cross-browser testing**.

---

# 8️⃣ 🎯 Locators

A **locator identifies a web element** so Playwright can interact with or validate it.

### Common Locators

```js
page.getByRole()
page.getByText()
page.getByLabel()
page.getByPlaceholder()
page.getByAltText()
page.getByTestId()
page.locator()
```

### ⭐ Locator Preference

```text
getByRole()
     ↓
getByLabel()
     ↓
getByPlaceholder()
     ↓
getByText()
     ↓
getByTestId()
     ↓
locator()
```

> Prefer stable, user-facing locators whenever possible.

---

# 9️⃣ getByRole()

Locates elements by their accessible role.

```js
await page.getByRole('button', {
    name: 'Login'
}).click();
```

### Common Roles

```text
button
textbox
link
checkbox
radio
heading
combobox
```

---

# 🔟 getByText()

Locates an element by visible text.

```js
await page.getByText('Welcome Garvit').click();
```

---

# 1️⃣1️⃣ getByLabel()

Useful for form controls.

HTML:

```html
<label for="email">Email</label>
<input id="email">
```

Playwright:

```js
await page.getByLabel('Email')
    .fill('garvit@example.com');
```

---

# 1️⃣2️⃣ getByPlaceholder()

HTML:

```html
<input placeholder="Enter username">
```

Playwright:

```js
await page.getByPlaceholder('Enter username')
    .fill('Garvit');
```

---

# 1️⃣3️⃣ getByTestId()

HTML:

```html
<button data-testid="login-button">
    Login
</button>
```

Playwright:

```js
await page.getByTestId('login-button').click();
```

---

# 1️⃣4️⃣ locator()

Can use CSS selectors and other supported selector forms.

```js
await page.locator('#username')
    .fill('Garvit');

await page.locator('.login-button')
    .click();
```

---

# 1️⃣5️⃣ ✍️ Common Actions

### Click

```js
await locator.click();
```

### Fill

```js
await locator.fill('Garvit');
```

### Check

```js
await locator.check();
```

### Uncheck

```js
await locator.uncheck();
```

### Select

```js
await locator.selectOption('india');
```

---

# 1️⃣6️⃣ 📖 Text Extraction

```js
const text =
    await page.locator('.message').textContent();

console.log(text);
```

### `textContent()`

Used to read text content from an element.

---

# 1️⃣7️⃣ textContent() vs inputValue()

### textContent()

```js
const text =
    await page.locator('.message').textContent();
```

Used for **normal element text**.

### inputValue()

```js
const value =
    await page.locator('#username').inputValue();
```

Used for the **current value of an input**.

### 🧠 Memory Trick

```text
Normal Element
      ↓
textContent()

Input
      ↓
inputValue()
```

---

# 1️⃣8️⃣ ✅ Assertions

Import:

```js
import { test, expect } from '@playwright/test';
```

### Title

```js
await expect(page)
    .toHaveTitle('Home Page');
```

### URL

```js
await expect(page)
    .toHaveURL(/dashboard/);
```

### Text

```js
await expect(locator)
    .toHaveText('Success');
```

### Visibility

```js
await expect(locator)
    .toBeVisible();
```

### Enabled

```js
await expect(locator)
    .toBeEnabled();
```

### Checked

```js
await expect(locator)
    .toBeChecked();
```

---

# 1️⃣9️⃣ 🏷️ Attribute Validation

```js
await expect(page.locator('#username'))
    .toHaveAttribute('type', 'text');
```

Another example:

```js
await expect(page.locator('#username'))
    .toHaveAttribute('placeholder', 'Enter username');
```

---

# 2️⃣0️⃣ 📋 Multiple Elements

```js
const items = page.locator('.product');
```

### Count

```js
console.log(await items.count());
```

### Access by index

```js
await items.nth(0).click();
await items.nth(1).click();
```

### 🧠 Remember

```text
nth(0) → First
nth(1) → Second
nth(2) → Third

count() → Number of matching elements
```

---

# 2️⃣1️⃣ Loop Through Multiple Elements

```js
const products = page.locator('.product');

const count = await products.count();

for (let i = 0; i < count; i++) {

    console.log(
        await products.nth(i).textContent()
    );

}
```

---

# 2️⃣2️⃣ ⏱️ Auto-Waiting

One of Playwright's important features is **auto-waiting**.

Example:

```js
await page.getByRole('button', {
    name: 'Submit'
}).click();
```

Playwright waits for the element to become actionable for many normal actions.

### ❌ Avoid unnecessary hard waits

```js
await page.waitForTimeout(5000);
```

### ✅ Prefer condition-based waiting

```js
await expect(page.locator('.status'))
    .toHaveText('Completed');
```

This helps reduce flaky tests.

---

# 2️⃣3️⃣ 🔄 Dynamic Waiting

Instead of waiting for a fixed time:

```js
await page.waitForTimeout(5000);
```

Prefer waiting for the required condition:

```js
await expect(page.locator('.status'))
    .toHaveText('Completed');
```

### 🧠 Goal

```text
Wait for CONDITION
        ↓
Not fixed TIME
```

---

# 2️⃣4️⃣ 🔽 Static Select Dropdown

For a normal HTML `<select>`:

```js
await page.locator('#country')
    .selectOption('india');
```

Or:

```js
await page.getByLabel('Country')
    .selectOption('india');
```

By visible label:

```js
await page.locator('#country')
    .selectOption({ label: 'India' });
```

---

# 2️⃣5️⃣ 🔘 Radio Buttons

Select:

```js
await page.getByLabel('Male').check();
```

Validate:

```js
await expect(page.getByLabel('Male'))
    .toBeChecked();
```

---

# 2️⃣6️⃣ ☑️ Checkboxes

Check:

```js
await page.getByLabel('Terms and Conditions')
    .check();
```

Validate:

```js
await expect(page.getByLabel('Terms and Conditions'))
    .toBeChecked();
```

Uncheck:

```js
await page.getByLabel('Terms and Conditions')
    .uncheck();
```

---

# 2️⃣7️⃣ 🪟 Child Windows / New Tabs

When an action opens a new page:

```js
const newPagePromise =
    page.waitForEvent('popup');

await page.getByRole('link', {
    name: 'Open Details'
}).click();

const newPage =
    await newPagePromise;

await newPage.waitForLoadState();

console.log(await newPage.title());
```

### 🔑 Pattern

```text
Wait for popup
      ↓
Perform action
      ↓
Capture new page
      ↓
Work with new page
```

---

# 2️⃣8️⃣ 📑 Multiple Pages

A browser context can contain multiple pages.

```js
const context =
    await browser.newContext();

const page1 =
    await context.newPage();

const page2 =
    await context.newPage();
```

---

# 2️⃣9️⃣ 🧪 Practical Test Pattern

```text
Open Application
       ↓
Locate Element
       ↓
Perform Action
       ↓
Wait for Expected State
       ↓
Assert Result
```

### Example

```js
await page.goto('/login');

await page.getByLabel('Username')
    .fill('Garvit');

await page.getByLabel('Password')
    .fill('12345');

await page.getByRole('button', {
    name: 'Login'
}).click();

await expect(page.getByText('Welcome'))
    .toBeVisible();
```

---

# 3️⃣0️⃣ 🏗️ Complete Test Structure

```js
import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {

    test('Valid login', async ({ page }) => {

        await page.goto('/login');

        await page.getByLabel('Username')
            .fill('Garvit');

        await page.getByLabel('Password')
            .fill('12345');

        await page.getByRole('button', {
            name: 'Login'
        }).click();

        await expect(page)
            .toHaveURL(/dashboard/);

    });

});
```

---

# 3️⃣1️⃣ 🖥️ Useful Commands

### Run all tests

```bash
npx playwright test
```

### Headed mode

```bash
npx playwright test --headed
```

### Specific file

```bash
npx playwright test tests/login.spec.js
```

### Specific test

```bash
npx playwright test -g "Login test"
```

### Debug

```bash
npx playwright test --debug
```

### Report

```bash
npx playwright show-report
```

---

# 3️⃣2️⃣ 💼 Interview Quick Revision

### What is Playwright?

A modern browser automation and end-to-end testing framework for web applications.

### What is a locator?

A locator identifies a web element for interaction or validation.

### What is auto-waiting?

Playwright waits for elements to become ready for many actions and assertions.

### What is Browser Context?

An isolated browser session with its own state such as cookies and storage.

### What is Page?

A browser tab/page represented by Playwright's `Page` object.

### Why use async/await?

Playwright operations are asynchronous, so `await` ensures dependent operations execute after the required operation completes.

### What is `expect()`?

It is used to validate expected application behavior.

---

# ⚡ FINAL QUICK CHEAT SHEET

## Navigation

```js
await page.goto(url);
```

## Locators

```js
page.getByRole()
page.getByText()
page.getByLabel()
page.getByPlaceholder()
page.getByAltText()
page.getByTestId()
page.locator()
```

## Actions

```js
await locator.click();
await locator.fill('text');
await locator.check();
await locator.uncheck();
await locator.selectOption('value');
```

## Read

```js
await locator.textContent();
await locator.inputValue();
```

## Assertions

```js
await expect(locator).toBeVisible();
await expect(locator).toHaveText('text');
await expect(locator).toBeChecked();
await expect(locator).toBeEnabled();
await expect(locator).toHaveAttribute('name', 'value');

await expect(page).toHaveTitle('title');
await expect(page).toHaveURL(/url/);
```

## Multiple Elements

```js
await locator.count();
await locator.nth(0);
await locator.nth(1);
```

## New Page

```js
const newPagePromise =
    page.waitForEvent('popup');

await locator.click();

const newPage =
    await newPagePromise;
```

## Test

```js
test('name', async ({ page }) => {

    // test code

});
```

## Import

```js
import { test, expect } from '@playwright/test';
```

---

# 🧠 ONE-PAGE MEMORY MAP

```text
                 PLAYWRIGHT
                     │
       ┌─────────────┼─────────────┐
       ↓             ↓             ↓
    Browser       Context         Page
                                  │
                                  ↓
                               Locator
                                  │
                    ┌─────────────┼─────────────┐
                    ↓             ↓             ↓
                  Action        Extract       Assert
                    │             │             │
                  click()    textContent()   expect()
                  fill()     inputValue()    toHaveText()
                  check()                    toBeVisible()
                  select()                   toBeChecked()
                    │
                    ↓
                 Wait
              Auto-waiting
                    │
                    ↓
              Test Result
```

---

# 📚 CURRENT TOPICS COVERED

- Playwright introduction
- Test Automation Ecosystem
- Node.js / npm setup
- Playwright installation
- Test structure
- Async / await
- Browser Context
- Page fixture
- Configuration
- Multiple browsers
- Locators
- Typing / filling
- Text extraction
- Multiple elements
- Locator auto-waiting
- Dynamic waiting
- Assertions
- Attribute validation
- Static dropdowns
- Radio buttons
- Checkboxes
- Child windows / tabs
- `textContent()` vs `inputValue()`
- Basic interview concepts

> **When you provide new Playwright topics, continue this document and add the new concepts without unnecessarily repeating completed topics.**
