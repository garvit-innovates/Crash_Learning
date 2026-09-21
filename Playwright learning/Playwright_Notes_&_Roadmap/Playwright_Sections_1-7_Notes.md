# 🎭 PLAYWRIGHT AUTOMATION — MASTER NOTES
## Sections 1–7 | Fresher → Confident Automation Tester

> **📌 Purpose of this notebook**
>
> This is not a "syntax dump". It is a **long-term Playwright reference notebook** designed to remove confusion for a fresher.
>
> For every important concept, learn in this order:
>
> **Definition → Mental Model → Why → Syntax → Example → Use Case → Common Mistake → Interview Point → Practice**
>
> **Golden rule:** Understand *why* a method exists before memorizing *how* to write it.

---

# 🧭 HOW TO USE THESE NOTES

### The 5-question rule

Whenever you learn a Playwright concept, ask:

1. **What is it?** → Definition
2. **Why do we need it?** → Purpose
3. **How does it work?** → Mental model
4. **How do I write it?** → Syntax
5. **When should I use it?** → Practical use case

If you can answer all five, you actually understand the topic.

---

# 📚 TABLE OF CONTENTS

- [1. Playwright Fundamentals](#1️⃣-playwright-fundamentals)
- [2. JavaScript Fundamentals for Playwright](#2️⃣-javascript-fundamentals-for-playwright)
- [3. Playwright Project & Core Architecture](#3️⃣-playwright-project--core-architecture)
- [4. Locators & Basic Web Automation](#4️⃣-locators--basic-web-automation)
- [5. UI Components](#5️⃣-ui-components)
- [6. End-to-End Automation](#6️⃣-end-to-end-automation)
- [7. Modern Locators, Chaining, Filtering & Timeouts](#7️⃣-modern-locators-chaining-filtering--timeouts)
- [8. Core Playwright Cheat Sheet](#8️⃣-core-playwright-cheat-sheet)
- [9. Locator Decision Guide](#9️⃣-locator-decision-guide)
- [10. Fresher Interview Questions](#🔟-fresher-interview-questions)
- [11. Common Mistakes](#1️⃣1️⃣-common-fresher-mistakes)
- [12. Practical Readiness Checklist](#1️⃣2️⃣-practical-readiness-checklist)
- [13. Final Mental Model](#1️⃣3️⃣-final-mental-model)

---

# 1️⃣ PLAYWRIGHT FUNDAMENTALS

## 1.1 What is Playwright?

### 📖 Definition

**Playwright is an open-source browser automation and end-to-end testing framework created by Microsoft.**

It allows us to control real browser engines through code so that we can automate actions such as:

- opening a website
- clicking buttons
- entering text
- selecting options
- reading page content
- handling multiple tabs
- validating expected results

Playwright supports **Chromium, Firefox and WebKit**.

### 🧠 Fresher mental model

Think of Playwright as:

> **A robot that can control a web browser exactly like a user, but using code.**

Example:

```text
Human Tester
    ↓
Open Browser
    ↓
Enter Username
    ↓
Enter Password
    ↓
Click Login
    ↓
Verify Dashboard

Playwright
    ↓
page.goto()
    ↓
locator.fill()
    ↓
locator.fill()
    ↓
locator.click()
    ↓
expect()
```

### 🎯 Why do we use Playwright?

Manual testing is useful, but repeating the same regression scenarios manually is time-consuming.

Automation helps us:

- repeat tests quickly
- reduce repetitive manual work
- execute regression tests consistently
- run tests across browsers
- detect failures early
- integrate tests with CI/CD

### ⭐ Interview definition

> Playwright is an open-source end-to-end browser automation framework developed by Microsoft that supports Chromium, Firefox and WebKit and provides features such as auto-waiting, locators, assertions, browser contexts and a test runner.

---

## 1.2 What is Browser Automation?

### 📖 Definition

**Browser automation means controlling a web browser programmatically instead of manually performing every user action.**

Example:

```javascript
await page.goto('https://example.com');

await page.getByLabel('Username').fill('admin');

await page.getByLabel('Password').fill('secret');

await page.getByRole('button', { name: 'Login' }).click();
```

### Real-world example

Manual:

```text
Open Chrome
→ Enter URL
→ Type username
→ Type password
→ Click Login
```

Automation:

```text
page.goto()
→ fill()
→ fill()
→ click()
```

---

## 1.3 What is End-to-End (E2E) Testing?

### 📖 Definition

**End-to-End testing validates a complete business or user workflow from the starting point to the final expected result.**

Example:

```text
Open Application
      ↓
Login
      ↓
Search Product
      ↓
Select Product
      ↓
Add to Cart
      ↓
Checkout
      ↓
Place Order
      ↓
Verify Order
```

### Why is E2E testing important?

A login test alone may prove that login works.

An E2E test can prove that:

```text
Login
+
Product
+
Cart
+
Checkout
+
Order
```

work together correctly.

### ⭐ Remember

> **E2E = complete business flow, not just one UI action.**

---

## 1.4 What is a Test Case?

### 📖 Definition

A **test case is a documented set of steps, conditions and expected results used to verify a specific requirement or behavior.**

Example:

```text
Test Case: Successful Login

Precondition:
User has valid credentials.

Steps:
1. Open login page.
2. Enter username.
3. Enter password.
4. Click Login.

Expected Result:
Dashboard should be displayed.
```

Playwright converts those steps into executable automation code.

---

## 1.5 What is an Assertion?

### 📖 Definition

**An assertion is a verification that compares the application's actual state with the expected state.**

Example:

```javascript
await expect(page).toHaveTitle(/Dashboard/);
```

Meaning:

> "I expect the current page title to contain Dashboard."

### Mental model

```text
Action
  ↓
Application changes
  ↓
Expected result
  ↓
Assertion
  ↓
PASS / FAIL
```

---

## 1.6 Playwright's Major Strengths

### 1. Cross-browser testing

Run the same tests against:

```text
Chromium
Firefox
WebKit
```

### 2. Auto-waiting

Playwright waits for supported actions to become actionable instead of requiring fixed sleeps in normal cases.

### 3. Strong locators

Examples:

```javascript
getByRole()
getByLabel()
getByText()
getByPlaceholder()
getByTestId()
```

### 4. BrowserContext isolation

Each test can run in a clean isolated environment.

### 5. Web-first assertions

Assertions retry while the application reaches the expected state.

### 6. Test runner

Playwright Test provides:

- test execution
- fixtures
- assertions
- configuration
- reporting
- parallelism
- debugging support

---

# 2️⃣ JAVASCRIPT FUNDAMENTALS FOR PLAYWRIGHT

> 💡 You do not need to know every part of JavaScript before starting Playwright. You need enough JavaScript to understand and write automation confidently.

---

## 2.1 Variable

### 📖 Definition

**A variable is a named reference used to store or point to a value so that the value can be used later in a program.**

Example:

```javascript
const username = 'admin';
let count = 10;
```

### `const`

Use when the variable binding should not be reassigned.

```javascript
const browser = 'chromium';
```

### `let`

Use when the variable needs reassignment.

```javascript
let count = 1;

count = 2;
```

### Fresher rule

> Prefer `const` unless you genuinely need reassignment.

---

## 2.2 Data Types

Common types:

```javascript
const name = 'Garvit';       // string
const age = 25;              // number
const active = true;         // boolean
const value = null;          // null
let result;                  // undefined
```

### Why this matters in automation

You constantly store:

```text
username → string
count → number
isChecked → boolean
orderId → string
product → object
products → array
```

---

## 2.3 String

### 📖 Definition

**A string is a sequence of characters used to represent text.**

```javascript
const username = 'admin';
```

Useful methods:

```javascript
username.length;
username.toUpperCase();
username.toLowerCase();
username.includes('adm');
username.trim();
```

### Template literal

```javascript
const product = 'Laptop';

console.log(`Selected product: ${product}`);
```

---

## 2.4 Array

### 📖 Definition

**An array is an ordered collection of values stored under one variable.**

```javascript
const browsers = ['Chromium', 'Firefox', 'WebKit'];
```

Access:

```javascript
console.log(browsers[0]);
```

Result:

```text
Chromium
```

Length:

```javascript
console.log(browsers.length);
```

### Automation example

```javascript
const expectedProducts = [
    'Laptop',
    'Phone',
    'Headphones'
];
```

---

## 2.5 Object

### 📖 Definition

**An object is a collection of related data represented as key-value pairs.**

```javascript
const user = {
    username: 'admin',
    password: 'secret',
    role: 'tester'
};
```

Access:

```javascript
user.username;
user.password;
```

---

## 2.6 Array of Objects

Extremely important for test data.

```javascript
const products = [
    {
        name: 'Laptop',
        price: 50000
    },
    {
        name: 'Mouse',
        price: 1000
    }
];
```

You can loop through it:

```javascript
for (const product of products) {
    console.log(product.name);
}
```

---

## 2.7 Function

### 📖 Definition

**A function is a reusable block of code that performs a specific task.**

```javascript
function login(username, password) {
    console.log(username);
    console.log(password);
}
```

Call:

```javascript
login('admin', 'secret');
```

### Why functions matter in automation

You often repeat actions:

```text
login
search product
logout
create user
```

Functions let you reuse those behaviors.

---

## 2.8 Arrow Function

A shorter function syntax.

```javascript
const login = (username) => {
    console.log(username);
};
```

Common in array methods:

```javascript
products.forEach(product => {
    console.log(product.name);
});
```

---

## 2.9 Condition

### 📖 Definition

A condition allows the program to make a decision based on whether an expression is true or false.

```javascript
if (product === 'Laptop') {
    console.log('Found');
} else {
    console.log('Not found');
}
```

Common operators:

```text
===  equal value and type
!==  not equal
>    greater than
<    less than
>=   greater than or equal
<=   less than or equal
&&   AND
||   OR
```

---

## 2.10 Loop

### 📖 Definition

**A loop repeatedly executes a block of code while a condition or collection requires it.**

### `for`

```javascript
for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
}
```

### `for...of`

```javascript
for (const product of products) {
    console.log(product.name);
}
```

### `forEach`

```javascript
products.forEach(product => {
    console.log(product.name);
});
```

### Practical Playwright use

Loops are useful when a page contains:

```text
10 products
20 table rows
5 menu items
many orders
```

---

## 2.11 `map()`

### Definition

**`map()` creates a new array by transforming every element of an existing array.**

```javascript
const names = products.map(product => product.name);
```

Example:

```text
Input:
[
  { name: "Laptop" },
  { name: "Mouse" }
]

Output:
[
  "Laptop",
  "Mouse"
]
```

---

## 2.12 `filter()`

### Definition

**`filter()` creates a new array containing only the elements that satisfy a condition.**

```javascript
const expensive = products.filter(
    product => product.price > 2000
);
```

### Important

JavaScript `filter()` and Playwright locator `.filter()` are related in name but are different concepts.

```text
Array.filter()
→ filters JavaScript array data

Locator.filter()
→ narrows Playwright locators
```

---

## 2.13 `find()`

### Definition

**`find()` returns the first array element that satisfies a condition.**

```javascript
const laptop = products.find(
    product => product.name === 'Laptop'
);
```

---

## 2.14 Promise

### 📖 Definition

**A Promise is a JavaScript object representing the eventual completion or failure of an asynchronous operation and its resulting value.**

Mental model:

```text
Operation starts
      ↓
Pending
      ↓
Resolved OR Rejected
```

Many Playwright operations are asynchronous.

---

## 2.15 `async`

### Definition

**`async` marks a function as asynchronous and makes it return a Promise.**

```javascript
async function login() {
    // async work
}
```

---

## 2.16 `await`

### Definition

**`await` pauses the execution of the current async function until the awaited Promise settles, then gives you its result or throws its error.**

Example:

```javascript
await page.goto('https://example.com');
```

### Important mental model

Do not think:

> "await means sleep."

Think:

> **"await means wait for this asynchronous operation to complete before continuing this async function."**

---

# 3️⃣ PLAYWRIGHT PROJECT & CORE ARCHITECTURE

# 3.1 Installing Playwright

Typical setup:

```bash
npm init playwright@latest
```

Existing project:

```bash
npm install -D @playwright/test
npx playwright install
```

Check:

```bash
npx playwright --version
```

---

## 3.2 What is a Playwright Project?

### Definition

A **Playwright project is a configured automation codebase containing tests, configuration, dependencies and supporting files.**

Typical structure:

```text
playwright-project/
│
├── tests/
│   └── login.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── node_modules/
```

---

## 3.3 `package.json`

### Definition

`package.json` is the main npm project metadata file.

It can contain:

- project information
- dependencies
- development dependencies
- scripts
- version information

Example:

```json
{
    "scripts": {
        "test": "playwright test"
    }
}
```

---

## 3.4 `playwright.config.js`

### Definition

**The Playwright configuration file defines default behavior and settings for Playwright Test.**

Example:

```javascript
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    use: {
        baseURL: 'https://example.com',
        headless: true
    }
});
```

Common settings:

```text
testDir
use
baseURL
timeout
expect
reporter
projects
workers
```

---

# 3.5 Test File

A Playwright test file commonly ends with:

```text
.spec.js
.spec.ts
```

Example:

```text
login.spec.js
checkout.spec.js
product.spec.ts
```

---

# 3.6 Basic Test Structure

```javascript
import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {

    await page.goto('/login');

    await page.getByLabel('Username').fill('admin');

    await page.getByLabel('Password').fill('secret');

    await page.getByRole('button', {
        name: 'Login'
    }).click();

    await expect(
        page.getByText('Dashboard')
    ).toBeVisible();
});
```

### Read it as English

```text
Test "Login test"
→ open login page
→ fill username
→ fill password
→ click Login
→ verify Dashboard is visible
```

---

# 3.7 What is `test()`?

### Definition

`test()` declares an individual automated test case.

Syntax:

```javascript
test('test name', async ({ page }) => {
    // test steps
});
```

---

# 3.8 What is `expect()`?

### Definition

`expect()` starts an assertion. It is used to express the expected state of the application.

```javascript
await expect(locator).toBeVisible();
```

---

# 3.9 What is a Browser?

### Definition

A **Browser is the Playwright representation of a running browser engine instance.**

Examples:

```text
Chromium
Firefox
WebKit
```

Mental model:

```text
Browser
   ↓
contains browser contexts
   ↓
contexts contain pages
```

---

# 3.10 What is a BrowserContext?

### Definition

**A BrowserContext is an isolated browser session similar to a fresh browser profile.**

It has its own browser state such as:

- cookies
- local storage
- session storage
- permissions
- cache-related state

Mental model:

```text
Browser
│
├── Context A
│     └── Page
│
└── Context B
      └── Page
```

### Why important?

Test isolation.

One test should not accidentally inherit the login/session state of another test.

---

# 3.11 What is a Page?

### Definition

**A Page represents a single browser tab or page within a BrowserContext.**

Example:

```javascript
await page.goto('https://example.com');
```

Common page operations:

```javascript
await page.goto(url);
await page.reload();
await page.goBack();
await page.goForward();

await page.title();
await page.url();
```

---

# 3.12 Browser vs BrowserContext vs Page

This is a very important interview topic.

```text
Browser
  │
  ├── BrowserContext
  │       │
  │       ├── Page
  │       └── Page
  │
  └── BrowserContext
          │
          └── Page
```

### Easy memory

```text
Browser       → actual browser engine
Context       → isolated browser session/profile
Page          → one tab
```

---

# 3.13 What is a Fixture?

### Definition

**A fixture is a reusable piece of test setup/environment that Playwright Test prepares and provides to a test when requested.**

Example:

```javascript
test('example', async ({ page }) => {
});
```

Here:

```text
{ page }
```

is a built-in fixture.

Common built-in fixtures:

```text
page
context
browser
browserName
request
```

### Why fixtures?

Instead of manually creating everything for every test:

```text
Create browser
Create context
Create page
Run test
Clean up
```

Playwright Test manages the test environment for you.

---

# 3.14 Test Isolation

### Definition

**Test isolation means each test runs independently without relying on the state created by another test.**

Playwright achieves this primarily through BrowserContexts.

Example:

```text
Test A
→ login as User A

Test B
→ starts with its own isolated context
→ User A's cookies do not automatically leak into Test B
```

### Why important?

Without isolation:

```text
Test A fails
   ↓
Test B receives bad state
   ↓
Test B fails
   ↓
Hard to find root cause
```

With isolation:

```text
Test A ── isolated
Test B ── isolated
Test C ── isolated
```

---

# 3.15 `baseURL`

### Definition

**`baseURL` defines the common root URL used by navigation and related APIs.**

Configuration:

```javascript
use: {
    baseURL: 'https://example.com'
}
```

Then:

```javascript
await page.goto('/login');
```

instead of:

```javascript
await page.goto('https://example.com/login');
```

### Benefit

If the application URL changes:

```text
QA URL
Staging URL
Production URL
```

you can manage the root centrally.

---

# 3.16 Projects

### Definition

**A Playwright project is a logical configuration for running tests under a specific browser/device/environment setup.**

For example:

```text
Chromium project
Firefox project
WebKit project
Mobile project
```

Concept:

```javascript
projects: [
    {
        name: 'chromium',
        use: { browserName: 'chromium' }
    },
    {
        name: 'firefox',
        use: { browserName: 'firefox' }
    }
]
```

---

# 4️⃣ LOCATORS & BASIC WEB AUTOMATION

# 4.1 What is a Web Element?

### Definition

A **web element is an HTML element represented in the browser's DOM**, such as:

```html
<button>Login</button>
<input id="username">
<a href="/home">Home</a>
```

A tester interacts with these elements.

---

# 4.2 What is the DOM?

### Definition

**DOM (Document Object Model) is the browser's object representation of the HTML document.**

Example HTML:

```html
<body>
    <button>Login</button>
</body>
```

The browser builds a tree-like structure:

```text
Document
  ↓
body
  ↓
button
  ↓
"Login"
```

### Why testers care

Locators ultimately identify elements represented in this structure.

---

# 4.3 What is a Locator?

### 📖 Definition

**A Locator is Playwright's way of describing how to find an element or group of elements on a page at the time an action or assertion is performed.**

Examples:

```javascript
page.getByRole('button', { name: 'Login' });
```

```javascript
page.locator('#username');
```

### Important mental model

A locator is not simply a stored DOM element.

Think:

```text
Locator
   ↓
Find current matching element
   ↓
Check/action/assert
```

This helps Playwright work well with dynamic pages.

---

# 4.4 Why Locators Are Important

Locators are central to:

- finding elements
- auto-waiting
- retrying
- actions
- assertions
- resilient tests

### Best practice

Prefer stable, user-facing locators and explicit test contracts where appropriate.

---

# 4.5 CSS Selector

### Definition

**A CSS selector is a pattern used to select HTML elements based on tags, IDs, classes, attributes and relationships.**

### ID

```javascript
page.locator('#username');
```

### Class

```javascript
page.locator('.login-button');
```

### Tag

```javascript
page.locator('button');
```

### Attribute

```javascript
page.locator('input[name="username"]');
```

### Combined

```javascript
page.locator('input.form-control[name="email"]');
```

---

# 4.6 `click()`

### Definition

`click()` performs a mouse click on the element represented by the locator.

Syntax:

```javascript
await locator.click();
```

Example:

```javascript
await page.getByRole('button', {
    name: 'Login'
}).click();
```

### Common uses

- submit
- login
- open menu
- add to cart
- navigate
- select an option

---

# 4.7 `fill()`

### Definition

`fill()` sets the value of an input-like element.

```javascript
await page.getByLabel('Username').fill('admin');
```

Use for:

- username
- password
- email
- search box
- address
- form fields

### Mental model

```text
Input field
   ↓
fill("admin")
   ↓
value becomes admin
```

---

# 4.8 `type()`

### Definition

`type()` types text into an element, sending characters as typing input.

```javascript
await page.locator('#username').type('admin');
```

### `fill()` vs `type()`

```text
fill()
→ set/fill the input value

type()
→ type characters into the input
```

For normal form automation, `fill()` is usually the simpler choice.

Use typing behavior deliberately when the application depends on keyboard/input events generated during typing.

---

# 4.9 `textContent()`

### Definition

`textContent()` reads the text content of the DOM node.

```javascript
const text = await locator.textContent();
```

Example:

```html
<div>Hello World</div>
```

```javascript
const text = await locator.textContent();
```

Result:

```text
Hello World
```

---

# 4.10 `innerText()`

### Definition

`innerText()` reads text in a way that reflects rendered/visible text behavior.

```javascript
const text = await locator.innerText();
```

### Simple difference

```text
textContent()
→ DOM text

innerText()
→ rendered/visible text behavior
```

### Practical advice

For verification, prefer Playwright assertions such as:

```javascript
await expect(locator).toHaveText('Hello');
```

instead of manually extracting text and comparing it whenever an assertion directly expresses the requirement.

---

# 4.11 `inputValue()`

### Definition

`inputValue()` returns the current value of an input-like element.

```javascript
const value = await locator.inputValue();
```

Example:

```html
<input value="admin">
```

```javascript
const value = await locator.inputValue();
```

Result:

```text
admin
```

### Remember

```text
Visible/DOM text → textContent / innerText
Input value      → inputValue
```

---

# 4.12 `count()`

### Definition

`count()` returns the number of elements currently matched by a locator.

```javascript
const count = await page.locator('.product').count();
```

Use for:

- product count
- table row count
- link count
- menu item count

---

# 4.13 `nth()`

### Definition

`nth(index)` returns a locator pointing to the element at the specified zero-based index among the matching elements.

```javascript
const thirdProduct = page
    .locator('.product')
    .nth(2);
```

Remember:

```text
0 → first
1 → second
2 → third
```

### Caution

If the order changes, `nth()` may select a different element.

Prefer a meaningful locator when possible.

---

# 4.14 `first()` and `last()`

```javascript
locator.first();
locator.last();
```

Useful when the requirement genuinely means:

```text
first matching element
last matching element
```

Do not use them just because the locator is ambiguous; first understand why multiple elements match.

---

# 4.15 Working with Multiple Elements

```javascript
const products = page.locator('.product');

const count = await products.count();

for (let i = 0; i < count; i++) {
    console.log(
        await products.nth(i).innerText()
    );
}
```

### Mental model

```text
Locator collection
       ↓
count()
       ↓
loop
       ↓
nth(i)
       ↓
read/action
```

---

# 4.16 Auto-Waiting

### Definition

**Auto-waiting means Playwright automatically performs relevant actionability checks and waits for conditions needed by supported actions before acting.**

For example, before clicking, Playwright can wait for the target to be:

- attached
- visible
- stable
- enabled
- able to receive the action

### Why this matters

Without proper synchronization:

```text
Test runs
   ↓
Element not ready
   ↓
Click fails
```

With Playwright's actionability waiting:

```text
Test runs
   ↓
Playwright checks element
   ↓
Waits if needed
   ↓
Element becomes actionable
   ↓
Click
```

---

# 4.17 Fixed Wait vs Condition-Based Waiting

### Fixed wait

```javascript
await page.waitForTimeout(5000);
```

Meaning:

> Always wait five seconds.

Problem:

```text
Page ready in 1 sec
→ waste 4 sec

Page ready in 8 sec
→ test may still fail
```

### Better approach

Use:

```javascript
await locator.click();
```

or:

```javascript
await expect(locator).toBeVisible();
```

These are condition-oriented.

### Golden rule

> **Do not use fixed sleeps as your normal synchronization strategy.**

---

# 4.18 Assertions — Complete Concept

### Definition

An assertion verifies that the actual state of the application matches the expected state.

Example:

```javascript
await expect(
    page.getByText('Dashboard')
).toBeVisible();
```

### Common assertions

```javascript
toBeVisible()
toBeHidden()
toBeEnabled()
toBeDisabled()
toBeChecked()
toBeEditable()
toHaveText()
toContainText()
toHaveValue()
toHaveAttribute()
toHaveCount()
toHaveURL()
toHaveTitle()
```

---

# 4.19 Web-First Assertions

### Definition

**A web-first assertion is an assertion designed to work with dynamic web applications by automatically retrying until the expected condition is met or the assertion timeout expires.**

Example:

```javascript
await expect(
    page.getByText('Order placed')
).toBeVisible();
```

### Mental model

```text
Check condition
     ↓
Pass?
 ┌───┴───┐
Yes      No
 ↓        ↓
PASS    Retry
          ↓
       Timeout?
```

This is better than manually reading the value once when the page is still changing.

---

# 5️⃣ UI COMPONENTS

# 5.1 Native Select Dropdown

### Definition

A native dropdown is typically represented by an HTML `<select>` element containing `<option>` elements.

Example:

```html
<select id="country">
    <option value="IN">India</option>
    <option value="US">USA</option>
</select>
```

### Playwright

```javascript
await page.locator('#country')
    .selectOption('IN');
```

By label:

```javascript
await page.locator('#country')
    .selectOption({ label: 'India' });
```

By index:

```javascript
await page.locator('#country')
    .selectOption({ index: 1 });
```

### Important

`selectOption()` is for native `<select>` controls.

A custom JavaScript dropdown may need normal locator interactions.

---

# 5.2 Radio Button

### Definition

A radio button allows the user to select one option from a group of mutually exclusive choices.

Example:

```html
<input type="radio" name="gender" value="male">
<input type="radio" name="gender" value="female">
```

### Select

```javascript
await page.getByLabel('Male').check();
```

### Verify

```javascript
await expect(
    page.getByLabel('Male')
).toBeChecked();
```

---

# 5.3 Checkbox

### Definition

A checkbox represents an independent on/off selection.

Unlike radio buttons, multiple checkboxes can usually be selected.

### Check

```javascript
await page.getByLabel('Remember me').check();
```

### Uncheck

```javascript
await page.getByLabel('Remember me').uncheck();
```

### Verify

```javascript
await expect(
    page.getByLabel('Remember me')
).toBeChecked();
```

---

# 5.4 Radio vs Checkbox

| Radio | Checkbox |
|---|---|
| Usually one choice in a group | Multiple can be selected |
| Mutually exclusive | Independent selections |
| Example: Gender | Example: Hobbies |
| `check()` | `check()` / `uncheck()` |

---

# 5.5 Attributes

### Definition

**An HTML attribute provides additional information or configuration for an HTML element.**

Example:

```html
<a href="/login" class="link">Login</a>
```

Attributes:

```text
href
class
```

### Read attribute

```javascript
const href = await locator.getAttribute('href');
```

### Assert attribute

```javascript
await expect(locator).toHaveAttribute(
    'href',
    '/login'
);
```

Common attributes:

```text
id
class
href
src
value
name
type
placeholder
aria-label
data-testid
```

---

# 5.6 Child Window / New Tab

### Definition

A child/new tab is another Page created within the same browser context after a user action.

Example flow:

```text
Parent Page
    ↓
Click link
    ↓
New Page opens
```

### Pattern

```javascript
const newPagePromise = page.waitForEvent('page');

await page.getByText('Open New Tab').click();

const newPage = await newPagePromise;

await newPage.waitForLoadState();
```

Now:

```text
page
→ original page

newPage
→ new tab/page
```

# 🎭 Playwright — Child Window / New Tab Cheat Sheet

| # | Concept | Syntax | Purpose / Meaning |
|---|---|---|---|
| 1 | Current tab | `page` | Represents the current browser tab/page. |
| 2 | Same-tab navigation | `await page.goto(url)` | Opens a URL in the current tab. |
| 3 | Click normal link | `await page.getByRole('link', { name: 'Products' }).click()` | Navigates through the UI, usually in the same tab. |
| 4 | Create blank new tab | `const newPage = await context.newPage()` | Creates a new Page inside the current Browser Context. |
| 5 | Navigate new tab | `await newPage.goto(url)` | Opens a URL in the newly created tab. |
| 6 | Wait for new page | `context.waitForEvent('page')` | Waits for a new Page/tab to be created in the context. |
| 7 | Capture new page | `const newPage = await newPagePromise` | Gets the newly opened Page object. |
| 8 | Recommended new-tab pattern | `Promise.all([...])` | Waits for the new page while performing the action that opens it. |
| 9 | Wait for loading | `await newPage.waitForLoadState()` | Waits for the new page to reach a load state. |
| 10 | Get URL | `await newPage.url()` | Returns the current URL of the new page. |
| 11 | Get title | `await newPage.title()` | Returns the title of the new page. |
| 12 | Verify URL | `await expect(newPage).toHaveURL(/products/)` | Verifies that the new page has the expected URL. |
| 13 | Verify title | `await expect(newPage).toHaveTitle(/Example/)` | Verifies the page title. |
| 14 | Popup / child window | `page.waitForEvent('popup')` | Waits for a popup opened by the current page. |
| 15 | Capture popup | `const popup = await popupPromise` | Gets the popup as a Page object. |
| 16 | Recommended popup pattern | `Promise.all([...])` | Waits for the popup while performing the triggering action. |
| 17 | Get all tabs | `context.pages()` | Returns all open Page objects in the Browser Context. |
| 18 | Count tabs | `context.pages().length` | Returns the number of open pages/tabs. |
| 19 | First tab | `pages[0]` | Gets the first page in the pages array. |
| 20 | Second tab | `pages[1]` | Gets the second page in the pages array. |
| 21 | Close tab | `await newPage.close()` | Closes the specified tab/page. |
| 22 | Close current tab | `await page.close()` | Closes the current page. |
| 23 | Check closed | `newPage.isClosed()` | Returns `true` when the page is closed. |
| 24 | Close multiple tabs | `for (const p of context.pages()) await p.close()` | Closes pages one by one; use carefully. |
| 25 | Browser hierarchy | `Browser → BrowserContext → Page` | Playwright's basic browser structure. |
| 26 | Multiple tabs model | `Context → Page 1, Page 2, Page 3` | Each tab/window is represented by a Page object. |
| 27 | Page fixture | `async ({ page })` | Gives the test its default Page. |
| 28 | Context fixture | `async ({ context })` | Gives access to the Browser Context. |
| 29 | Correct event order | `wait → action → capture` | Start listening before the click/action. |
| 30 | Incorrect event order | `action → wait` | Risky because the event may already have happened and can cause a timeout. |
| 31 | `goto()` vs click | `page.goto()` / `.click()` | `goto()` directly navigates; `.click()` tests UI navigation. |
| 32 | Main mental model | `const newPage = ...` | Treat a new tab/window as another Page object. |
| 33 | New-tab flow | `wait → click → capture → load → interact → close` | Standard workflow for handling a new tab. |
| 34 | Popup flow | `wait → click → capture → load → interact → close` | Standard workflow for handling a popup. |
| 35 | Create vs detect page | `context.newPage()` / `context.waitForEvent('page')` | First creates a page yourself; second waits for the application to create one. |
| 36 | Traditional window switching | Not required | Playwright normally works directly with Page objects instead of Selenium-style window handles. |

## ⭐ Recommended New Tab Pattern

```js
const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Open New Tab' }).click()
]);

await newPage.waitForLoadState();

console.log(await newPage.url());
console.log(await newPage.title());

await expect(newPage).toHaveURL(/example/);

await newPage.close();
```

## ⭐ Recommended Popup Pattern

```js
const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Open Window' }).click()
]);

await popup.waitForLoadState();

console.log(await popup.url());

await popup.close();
```

## 🧠 One-Line Memory Rules

| Situation | Remember |
|---|---|
| Same tab | `page` |
| Direct navigation | `page.goto()` |
| New blank tab | `context.newPage()` |
| App opens new page/tab | `context.waitForEvent('page')` |
| Current page opens popup | `page.waitForEvent('popup')` |
| Get new tab object | `const newPage = await newPagePromise` |
| Wait for loading | `newPage.waitForLoadState()` |
| Get URL | `newPage.url()` |
| Get title | `newPage.title()` |
| Get all tabs | `context.pages()` |
| Close tab | `newPage.close()` |
| Check closed | `newPage.isClosed()` |
| Main mental model | **Every tab/window is a `Page` object** |
| Golden rule | **Listen first → perform action → capture page → interact** |


### Important mental model

Playwright represents tabs/pages using **Page objects**.

You normally do not need Selenium-style window handles.

---

# 5.7 Multiple Pages

A context can contain multiple pages:

```text
BrowserContext
   │
   ├── Page 1
   ├── Page 2
   └── Page 3
```

Each Page represents a tab/window-like browsing surface.

---

# 6️⃣ END-TO-END AUTOMATION

# 6.1 What Makes a Good E2E Test?

A good E2E test:

- represents a meaningful business scenario
- uses stable locators
- contains useful assertions
- avoids unnecessary waits
- is understandable
- is isolated
- fails for a meaningful reason

---

# 6.2 Manual Scenario → Automation

Use this conversion process:

```text
Requirement
    ↓
Business Scenario
    ↓
Manual Steps
    ↓
Identify UI Elements
    ↓
Choose Locators
    ↓
Perform Actions
    ↓
Validate Expected Results
```

---

# 6.3 Dynamic Product Selection

Suppose:

```text
Laptop
Phone
Keyboard
Mouse
```

You want:

```text
Laptop
```

Do not depend on:

```javascript
.nth(0)
```

unless the order itself is part of the requirement.

Better:

```javascript
const product = page
    .getByRole('listitem')
    .filter({
        hasText: 'Laptop'
    });
```

Then:

```javascript
await product
    .getByRole('button', {
        name: 'Add to cart'
    })
    .click();
```

---

# 6.4 Dynamic Element

### Definition

A dynamic element is an element whose presence, content, position or state can change based on data, timing or user interaction.

Examples:

```text
Product list
Search suggestions
Order rows
Notifications
Cart items
```

### Automation challenge

You cannot safely assume:

```text
"the third element is always Laptop"
```

Instead identify the element by meaningful properties.

---

# 6.5 Locator Filtering for Products

```javascript
const product = page
    .getByRole('listitem')
    .filter({
        hasText: 'Laptop'
    });

await product
    .getByRole('button', {
        name: 'Add to cart'
    })
    .click();
```

### Read as English

> Find list items → keep the one containing Laptop → find Add to cart inside it → click.

---

# 6.6 Loop Through Products

```javascript
const products = page.locator('.product');

const count = await products.count();

for (let i = 0; i < count; i++) {

    const name = await products
        .nth(i)
        .innerText();

    console.log(name);
}
```

Use loops when the requirement actually requires processing multiple elements.

---

# 6.7 Dynamic Matching with Loop

```javascript
const products = page.locator('.product');

const count = await products.count();

for (let i = 0; i < count; i++) {

    const product = products.nth(i);

    const name = await product.innerText();

    if (name.includes('Laptop')) {

        await product
            .getByRole('button', {
                name: 'Add to cart'
            })
            .click();

        break;
    }
}
```

### Important

There are often two valid approaches:

```text
Approach A
→ Locator filtering

Approach B
→ Loop + inspect data
```

Prefer the simpler, more resilient locator approach when it clearly expresses the requirement.

---

# 6.8 Auto-Suggest Dropdown

### Definition

An auto-suggest dropdown displays matching options dynamically while the user types.

Example:

```text
Type: Ind

India
Indonesia
Indianapolis
```

### Automation flow

```text
Fill search input
      ↓
Wait for suggestions through locator/actionability
      ↓
Find desired suggestion
      ↓
Click suggestion
      ↓
Verify selected value
```

Example:

```javascript
await page
    .getByPlaceholder('Country')
    .fill('Ind');

await page
    .getByRole('option', { name: 'India' })
    .click();
```

If the application uses custom markup:

```javascript
await page
    .locator('.suggestion')
    .filter({ hasText: 'India' })
    .click();
```

---

# 6.9 Complete Shopping E2E Flow

```text
Open application
       ↓
Login
       ↓
Verify Dashboard
       ↓
Find product
       ↓
Add to cart
       ↓
Open cart
       ↓
Verify product
       ↓
Checkout
       ↓
Place order
       ↓
Capture Order ID
       ↓
Open Order History
       ↓
Find Order ID
       ↓
Verify order
```

---

# 6.10 Order ID

### Definition

An Order ID is a unique identifier generated by an application for a particular order.

Example:

```text
Order ID: 123456
```

### Extract

```javascript
const orderId = await page
    .locator('.order-id')
    .innerText();

console.log(orderId);
```

### Reuse

```javascript
await page.getByRole('link', {
    name: 'Order History'
}).click();

await expect(
    page.getByText(orderId)
).toBeVisible();
```

### Why this is important

This demonstrates **data flow between test steps**:

```text
Action
 ↓
Application generates data
 ↓
Automation captures data
 ↓
Automation stores data
 ↓
Later step uses data
 ↓
Assertion
```

---

# 6.11 Order History Validation

Example:

```javascript
const orders = page.locator('.order-row');

const count = await orders.count();

for (let i = 0; i < count; i++) {

    const order = orders.nth(i);

    const text = await order.innerText();

    if (text.includes(orderId)) {
        await expect(order).toContainText(orderId);
        break;
    }
}
```

---

# 7️⃣ MODERN LOCATORS, CHAINING, FILTERING & TIMEOUTS

# 7.1 Why Modern Locators?

A locator should describe the element in a stable and meaningful way.

Prefer:

```javascript
page.getByRole('button', {
    name: 'Login'
});
```

over fragile selectors such as:

```javascript
page.locator(
    'div.container:nth-child(2) > div > button'
);
```

### Core principle

> **Locate elements the way a user or accessibility technology understands them whenever practical.**

---

# 7.2 `getByRole()`

### 📖 Definition

**`getByRole()` locates an element by its ARIA/accessibility role and optionally its accessible name.**

Syntax:

```javascript
page.getByRole('role', {
    name: 'accessible name'
});
```

Examples:

```javascript
page.getByRole('button', {
    name: 'Login'
});

page.getByRole('link', {
    name: 'Home'
});

page.getByRole('heading', {
    name: 'Dashboard'
});

page.getByRole('checkbox', {
    name: 'Remember me'
});

page.getByRole('textbox', {
    name: 'Username'
});
```

### Why use it?

Because it is close to the way users and assistive technologies perceive the page.

### Important

For an interactive element, try to use the role plus accessible name when that makes the locator unique.

---

# 7.3 What is an Accessible Role?

### Definition

An accessibility role describes what an element represents to assistive technology and users.

Examples:

```text
button
link
checkbox
radio
heading
textbox
list
listitem
dialog
tab
```

Example:

```html
<button>Login</button>
```

Its role is:

```text
button
```

---

# 7.4 Accessible Name

### Definition

The accessible name is the name used by accessibility APIs to identify an element to users of assistive technologies.

Example:

```html
<button>Login</button>
```

Role:

```text
button
```

Accessible name:

```text
Login
```

Therefore:

```javascript
page.getByRole('button', {
    name: 'Login'
});
```

---

# 7.5 `getByText()`

### Definition

`getByText()` locates an element based on text content.

```javascript
page.getByText('Welcome');
```

Exact:

```javascript
page.getByText('Welcome', {
    exact: true
});
```

Regular expression:

```javascript
page.getByText(/welcome/i);
```

### Best use

Good for visible, non-interactive content.

For buttons and links, prefer role locators when practical.

---

# 7.6 `getByLabel()`

### Definition

`getByLabel()` locates a form control by its associated label text.

HTML:

```html
<label for="username">Username</label>
<input id="username">
```

Playwright:

```javascript
page.getByLabel('Username');
```

Use:

```javascript
await page
    .getByLabel('Username')
    .fill('admin');
```

---

# 7.7 `getByPlaceholder()`

### Definition

`getByPlaceholder()` locates an input by its placeholder text.

HTML:

```html
<input placeholder="Enter username">
```

Playwright:

```javascript
page.getByPlaceholder('Enter username');
```

### Caution

A placeholder is not always a good permanent contract. If the UI changes its placeholder, the test can break.

Use it when it is stable and meaningful.

---

# 7.8 `getByTestId()`

### Definition

`getByTestId()` locates an element using a test identifier, commonly `data-testid`.

HTML:

```html
<button data-testid="login-button">
    Login
</button>
```

Playwright:

```javascript
page.getByTestId('login-button');
```

### Why useful?

A test ID can be a deliberate, stable automation contract between developers and testers.

### Important

Do not add random test IDs everywhere. Use them when user-facing attributes are not suitable or when the team has agreed on test contracts.

---

# 7.9 `getByAltText()`

### Definition

`getByAltText()` locates an element using alternative text, commonly used for images.

HTML:

```html
<img alt="Playwright logo">
```

Playwright:

```javascript
page.getByAltText('Playwright logo');
```

Useful for:

- images
- image-like accessible elements

---

# 7.10 `getByTitle()`

### Definition

`getByTitle()` locates an element using its `title` attribute.

HTML:

```html
<button title="Refresh">↻</button>
```

Playwright:

```javascript
page.getByTitle('Refresh');
```

---

# 7.11 `locator()`

### Definition

`page.locator()` creates a locator using a CSS selector or another supported selector syntax.

Example:

```javascript
page.locator('#username');
```

Use it when:

- semantic locators are unavailable
- CSS structure is stable
- you need a specific CSS relationship
- working with existing application markup

---

# 7.12 Locator Chaining

### Definition

**Locator chaining means narrowing a search from a broader locator to a specific descendant or related target.**

Example:

```javascript
const product = page
    .getByRole('listitem')
    .filter({
        hasText: 'Laptop'
    });

await product
    .getByRole('button', {
        name: 'Add to cart'
    })
    .click();
```

### Mental model

```text
Page
 ↓
Parent
 ↓
Correct Parent
 ↓
Child
 ↓
Action
```

---

# 7.13 `filter()`

### Definition

**Locator `filter()` narrows an existing locator to matching elements based on conditions such as text or descendant locators.**

Example:

```javascript
page.getByRole('listitem')
    .filter({
        hasText: 'Laptop'
    });
```

### Important distinction

```text
JavaScript Array.filter()
→ filters data

Playwright Locator.filter()
→ filters/narrows UI locators
```

---

# 7.14 `hasText`

### Definition

`hasText` filters matching elements based on text contained within them.

```javascript
page
    .getByRole('listitem')
    .filter({
        hasText: 'Laptop'
    });
```

Meaning:

> Keep list items that contain "Laptop".

---

# 7.15 `has`

### Definition

`has` filters an outer locator to elements that contain a matching descendant locator.

Example:

```javascript
const product = page
    .getByRole('listitem')
    .filter({
        has: page.getByRole('heading', {
            name: 'Laptop'
        })
    });
```

Then:

```javascript
await product
    .getByRole('button', {
        name: 'Add to cart'
    })
    .click();
```

### Mental model

```text
Find parent
    ↓
Does it contain required child?
    ↓
YES → keep parent
```

---

# 7.16 Relative Nature of `has`

Important concept:

The locator used inside `has` should make sense relative to the outer locator.

Think:

```text
Outer locator
    ↓
Search inside each outer match
    ↓
Find inner locator
```

Not:

```text
Search entire page independently
```

This matters when pages contain repeated structures.

---

# 7.17 Powerful Locator Pattern

```javascript
const product = page
    .getByRole('listitem')
    .filter({
        hasText: 'Product 2'
    });

await product
    .getByRole('button', {
        name: 'Add to cart'
    })
    .click();
```

### Read as English

> Find a list item → keep the item containing Product 2 → find its Add to cart button → click.

This is one of the most important patterns from Section 7.

---

# 7.18 UI Mode / UI Runner

### Definition

**Playwright UI Mode is a visual interface for running and debugging Playwright tests.**

Typical command:

```bash
npx playwright test --ui
```

It helps you:

- run tests
- inspect tests
- debug failures
- inspect steps
- work interactively with test execution

---

# 7.19 What is a Timeout?

### Definition

**A timeout is the maximum amount of time Playwright allows an operation or test to wait before considering it failed.**

Timeouts prevent a test from waiting forever.

---

# 7.20 Test Timeout

### Definition

**Test timeout limits the overall duration allowed for a test.**

Example:

```javascript
test.setTimeout(60000);
```

Meaning:

```text
This test can run for up to 60 seconds.
```

### Mental model

```text
TEST
 ├── navigation
 ├── action
 ├── assertion
 └── other steps

        ↓

Overall Test Timeout
```

---

# 7.21 Action Timeout

### Definition

**Action timeout controls how long Playwright waits for an individual action to complete or become actionable.**

Examples of actions:

```text
click()
fill()
check()
uncheck()
selectOption()
```

Configuration concept:

```javascript
use: {
    actionTimeout: 10000
}
```

Meaning:

```text
Individual action
→ maximum configured wait
→ fail if it cannot complete
```

---

# 7.22 Expect Timeout

### Definition

**Expect timeout controls how long a Playwright assertion retries while waiting for the expected condition.**

Example:

```javascript
await expect(locator).toBeVisible({
    timeout: 10000
});
```

Meaning:

> Keep retrying this assertion for up to 10 seconds.

---

# 7.23 Timeout Hierarchy

```text
                    TIMEOUTS
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
   Test Timeout   Action Timeout  Expect Timeout
        │              │              │
   Whole test      One action      One assertion
```

### Easy memory

```text
TEST
→ How long can the test run?

ACTION
→ How long can this action wait?

EXPECT
→ How long can this assertion retry?
```

---

# 7.24 Global vs Local Timeout

### Global/default configuration

```javascript
expect: {
    timeout: 10000
}
```

### Local override

```javascript
await expect(locator).toBeVisible({
    timeout: 20000
});
```

### Mental model

```text
Default
  ↓
applies generally

Local override
  ↓
specific case
```

Use local overrides intentionally. Do not increase every timeout just to hide a slow or broken test.

---

# 8️⃣ CORE PLAYWRIGHT CHEAT SHEET

## 🧭 Navigation

```javascript
await page.goto(url);

await page.reload();

await page.goBack();

await page.goForward();

await page.title();

await page.url();
```

---

## 🎯 Locators

```javascript
page.getByRole('button', { name: 'Login' });

page.getByText('Login');

page.getByLabel('Username');

page.getByPlaceholder('Enter username');

page.getByTestId('login-button');

page.getByAltText('Logo');

page.getByTitle('Refresh');

page.locator('#username');
```

---

## 🖱️ Actions

```javascript
await locator.click();

await locator.fill('text');

await locator.type('text');

await locator.check();

await locator.uncheck();

await locator.selectOption('value');
```

---

## 📖 Reading Data

```javascript
await locator.textContent();

await locator.innerText();

await locator.inputValue();

await locator.getAttribute('href');

await locator.count();
```

---

## 🔎 Narrowing Locators

```javascript
locator.first();

locator.last();

locator.nth(0);

locator.filter({
    hasText: 'Laptop'
});

locator.filter({
    has: childLocator
});
```

---

## ✅ Assertions

```javascript
await expect(locator).toBeVisible();

await expect(locator).toBeHidden();

await expect(locator).toBeEnabled();

await expect(locator).toBeDisabled();

await expect(locator).toBeChecked();

await expect(locator).toHaveText('Login');

await expect(locator).toContainText('Login');

await expect(locator).toHaveValue('admin');

await expect(locator).toHaveAttribute(
    'href',
    '/login'
);

await expect(locator).toHaveCount(3);

await expect(page).toHaveTitle(/Dashboard/);

await expect(page).toHaveURL(/dashboard/);
```

---

# 9️⃣ LOCATOR DECISION GUIDE

When you need an element, do not immediately write CSS.

Ask:

```text
What is this element?
        ↓
Is it interactive?
        ↓
Can I identify it by role?
        ↓
Is it a form control with a label?
        ↓
Does it have a stable placeholder?
        ↓
Is its visible text unique?
        ↓
Is there a stable test ID?
        ↓
Can CSS identify it reliably?
```

### Practical order

```text
1. getByRole()
2. getByLabel()
3. getByPlaceholder()
4. getByText()
5. getByTestId()
6. getByAltText()
7. getByTitle()
8. locator(CSS)
```

This is a guideline, not a rigid law. Choose the locator that best expresses the requirement and remains stable.

---

# 🔟 FRESHER INTERVIEW QUESTIONS

## Q1. What is Playwright?

> Playwright is an open-source browser automation and end-to-end testing framework developed by Microsoft. It supports Chromium, Firefox and WebKit and provides a test runner, locators, auto-waiting, assertions, browser contexts and debugging capabilities.

---

## Q2. What is browser automation?

> Browser automation is the process of controlling a web browser programmatically to perform actions and validate application behavior.

---

## Q3. What is E2E testing?

> E2E testing validates a complete user or business workflow across the application from start to expected final result.

---

## Q4. What is a Browser?

> Browser represents a running browser engine instance controlled by Playwright.

---

## Q5. What is BrowserContext?

> BrowserContext is an isolated browser session similar to a fresh browser profile. It provides isolation for browser state such as cookies and storage.

---

## Q6. What is a Page?

> Page represents a single browser tab or page within a BrowserContext.

---

## Q7. Difference between Browser, Context and Page?

```text
Browser
→ browser engine instance

BrowserContext
→ isolated browser session

Page
→ one tab/page
```

---

## Q8. What is a fixture?

> A fixture is reusable test setup/environment that Playwright Test prepares and provides to a test when requested.

Example:

```javascript
async ({ page }) => {}
```

---

## Q9. What is a locator?

> A locator is Playwright's mechanism for describing how to find elements on a page and then interact with or assert against them.

---

## Q10. Why are locators important?

> Locators are central to Playwright's auto-waiting and retry behavior and provide a stable way to find elements.

---

## Q11. What is `getByRole()`?

> `getByRole()` locates an element using its accessibility role and optionally its accessible name.

---

## Q12. What is `getByLabel()`?

> `getByLabel()` locates a form control using its associated label text.

---

## Q13. What is `getByTestId()`?

> `getByTestId()` locates an element using a test identifier such as `data-testid`.

---

## Q14. What is `filter()`?

> Locator `filter()` narrows an existing locator based on conditions such as contained text or a matching descendant locator.

---

## Q15. What is `hasText`?

> `hasText` filters a locator based on text contained within the matching elements.

---

## Q16. What is `has`?

> `has` filters an outer locator to elements that contain a matching descendant locator.

---

## Q17. What is auto-waiting?

> Auto-waiting is Playwright's behavior of waiting for required actionability conditions before supported actions are performed.

---

## Q18. What are web-first assertions?

> Web-first assertions automatically retry expected conditions on a dynamic web page until they pass or the assertion timeout is reached.

---

## Q19. Difference between `textContent()` and `inputValue()`?

> `textContent()` reads DOM text content, while `inputValue()` reads the current value of an input-like element.

---

## Q20. Difference between `fill()` and `type()`?

> `fill()` sets an input's value and is generally convenient for normal form automation. `type()` sends typing input character by character and can be useful when typing behavior matters.

---

## Q21. What is test isolation?

> Test isolation means tests execute independently with separate browser state so one test does not unintentionally affect another.

---

## Q22. What is `baseURL`?

> `baseURL` defines a common root URL so tests can navigate using relative paths.

---

## Q23. What is test timeout?

> Test timeout limits the overall time allowed for a test to complete.

---

## Q24. What is action timeout?

> Action timeout controls how long Playwright waits for an individual action to complete or become actionable.

---

## Q25. What is expect timeout?

> Expect timeout controls how long an assertion retries while waiting for the expected condition.

---

# 1️⃣1️⃣ COMMON FRESHER MISTAKES

## ❌ Mistake 1 — Using fixed waits everywhere

Bad:

```javascript
await page.waitForTimeout(5000);
```

Why?

- wastes time
- can still fail
- hides synchronization problems

Better:

```javascript
await expect(locator).toBeVisible();
```

or use a supported action that performs appropriate waiting.

---

## ❌ Mistake 2 — Using fragile selectors

Bad:

```javascript
div:nth-child(3) > div > button:nth-child(2)
```

Why?

Small UI changes can break it.

Better:

```javascript
page.getByRole('button', {
    name: 'Add to cart'
});
```

---

## ❌ Mistake 3 — Using `nth()` without thinking

Bad:

```javascript
page.locator('.product').nth(2);
```

If product order changes, your test can select the wrong product.

Better:

```javascript
page
    .getByRole('listitem')
    .filter({ hasText: 'Laptop' });
```

---

## ❌ Mistake 4 — No assertion after important action

Weak:

```javascript
await loginButton.click();
```

Better:

```javascript
await loginButton.click();

await expect(
    page.getByText('Dashboard')
).toBeVisible();
```

---

## ❌ Mistake 5 — Forgetting `await`

Usually:

```javascript
await page.goto(url);
await locator.click();
await locator.fill('text');
```

Do not blindly remove `await` from asynchronous Playwright operations.

---

## ❌ Mistake 6 — Confusing `textContent()` and input value

```text
<div>Apple</div>
→ textContent()

<input value="Apple">
→ inputValue()
```

---

## ❌ Mistake 7 — Confusing JavaScript `filter()` and Playwright `filter()`

```text
Array.filter()
→ filters JavaScript data

Locator.filter()
→ filters UI locator matches
```

---

## ❌ Mistake 8 — Increasing timeouts to hide failures

Bad thinking:

> "The test fails, so let's make timeout 60 seconds."

Better thinking:

```text
Why is it slow?
Why is it not found?
Is locator correct?
Is application actually loading?
Is there a synchronization issue?
```

Timeout should solve legitimate timing requirements, not hide broken tests.

---

# 1️⃣2️⃣ PRACTICAL READINESS CHECKLIST

## 🟢 Section 1 — Foundation

- [ ] I can explain Playwright in simple words.
- [ ] I understand browser automation.
- [ ] I understand E2E testing.
- [ ] I can explain why automation is useful.
- [ ] I know Chromium, Firefox and WebKit.
- [ ] I understand test case vs assertion.

## 🟢 Section 2 — JavaScript

- [ ] Variables
- [ ] `const` / `let`
- [ ] Strings
- [ ] Arrays
- [ ] Objects
- [ ] Array of objects
- [ ] Functions
- [ ] Arrow functions
- [ ] Conditions
- [ ] Loops
- [ ] `map()`
- [ ] `filter()`
- [ ] `find()`
- [ ] Promises
- [ ] `async`
- [ ] `await`

## 🟡 Section 3 — Core

- [ ] I can create a Playwright project.
- [ ] I understand project structure.
- [ ] I understand `test()`.
- [ ] I understand `expect()`.
- [ ] I understand Browser.
- [ ] I understand BrowserContext.
- [ ] I understand Page.
- [ ] I understand fixtures.
- [ ] I understand test isolation.
- [ ] I understand `baseURL`.
- [ ] I understand browser projects.

## 🟡 Section 4 — Basic Automation

- [ ] I understand the DOM.
- [ ] I understand locators.
- [ ] I can write CSS locators.
- [ ] I can click elements.
- [ ] I can fill forms.
- [ ] I understand `fill()` vs `type()`.
- [ ] I can extract text.
- [ ] I can read input values.
- [ ] I can count elements.
- [ ] I understand `nth()`.
- [ ] I can write assertions.
- [ ] I understand auto-waiting.
- [ ] I avoid unnecessary fixed waits.

## 🟡 Section 5 — UI Components

- [ ] Native dropdowns
- [ ] `selectOption()`
- [ ] Radio buttons
- [ ] Checkboxes
- [ ] `check()`
- [ ] `uncheck()`
- [ ] Attribute validation
- [ ] Child pages
- [ ] Multiple tabs

## 🔵 Section 6 — E2E

- [ ] Convert manual test into automation.
- [ ] Automate login.
- [ ] Select dynamic products.
- [ ] Work with multiple elements.
- [ ] Handle auto-suggestions.
- [ ] Add product to cart.
- [ ] Verify cart.
- [ ] Place order.
- [ ] Capture Order ID.
- [ ] Reuse Order ID.
- [ ] Verify Order History.

## 🔵 Section 7 — Modern Playwright

- [ ] `getByRole()`
- [ ] Accessible role
- [ ] Accessible name
- [ ] `getByText()`
- [ ] `getByLabel()`
- [ ] `getByPlaceholder()`
- [ ] `getByTestId()`
- [ ] `getByAltText()`
- [ ] `getByTitle()`
- [ ] Locator chaining
- [ ] `filter()`
- [ ] `hasText`
- [ ] `has`
- [ ] UI Mode
- [ ] Test timeout
- [ ] Action timeout
- [ ] Expect timeout
- [ ] Timeout hierarchy

---

# 1️⃣3️⃣ FINAL MENTAL MODEL

## 🧠 The Complete Playwright Thought Process

```text
                TEST REQUIREMENT
                       ↓
                TEST SCENARIO
                       ↓
                TEST STEPS
                       ↓
              INSPECT THE PAGE
                       ↓
                FIND ELEMENT
                       ↓
             CHOOSE BEST LOCATOR
                       ↓
              PERFORM ACTION
                       ↓
          PLAYWRIGHT AUTO-WAITS
                       ↓
              APPLICATION CHANGES
                       ↓
             VERIFY EXPECTATION
                       ↓
                 PASS / FAIL
```

---

# 🏆 THE 10 GOLDEN RULES

### 1. Understand the requirement before writing code.

### 2. Choose the most stable locator, not the shortest locator.

### 3. Prefer user-facing and accessible locators where practical.

### 4. Do not use fixed sleeps as your normal synchronization strategy.

### 5. Every important business action should have a meaningful verification.

### 6. Use locator filtering/chaining for repeated UI structures.

### 7. Do not use `nth()` just because it is easy.

### 8. Keep tests isolated and independent.

### 9. Do not increase timeouts just to make failures disappear.

### 10. Write automation that another tester can understand six months later.

---

# 🔥 ONE COMPLETE EXAMPLE

Below is the type of thinking you should eventually be able to do independently.

```javascript
import { test, expect } from '@playwright/test';

test('Place order for Laptop', async ({ page }) => {

    // 1. Navigate
    await page.goto('/login');

    // 2. Login
    await page.getByLabel('Username').fill('admin');

    await page.getByLabel('Password').fill('secret');

    await page.getByRole('button', {
        name: 'Login'
    }).click();

    // 3. Verify login
    await expect(
        page.getByRole('heading', {
            name: 'Dashboard'
        })
    ).toBeVisible();

    // 4. Find product
    const product = page
        .getByRole('listitem')
        .filter({
            hasText: 'Laptop'
        });

    // 5. Add product
    await product
        .getByRole('button', {
            name: 'Add to cart'
        })
        .click();

    // 6. Verify cart
    await expect(
        page.getByRole('link', {
            name: /cart/i
        })
    ).toBeVisible();

    // 7. Continue checkout
    await page.getByRole('link', {
        name: /cart/i
    }).click();

    // 8. Verify selected product
    await expect(
        page.getByText('Laptop')
    ).toBeVisible();

});
```

### What this example demonstrates

```text
Navigation
   ↓
Fixture
   ↓
Locator
   ↓
fill()
   ↓
getByRole()
   ↓
click()
   ↓
Web-first assertion
   ↓
Locator filtering
   ↓
Locator chaining
   ↓
Business validation
```

---

# 📌 REVISION METHOD

Do not read this file from beginning to end every day.

Use **three levels of revision**.

## Level 1 — Daily

Review:

```text
Locator
Actions
Assertions
async/await
```

## Level 2 — Weekly

Practice:

```text
Login
Dropdown
Checkbox
Radio
Multiple elements
Dynamic product
Auto-suggest
Order flow
```

## Level 3 — Before Interview

Revise:

```text
Browser
BrowserContext
Page
Fixtures
Locators
Auto-waiting
Assertions
getByRole
filter
hasText
has
Timeouts
Test isolation
```

---

# 🧪 BEST PRACTICE FOR LEARNING

For each topic:

```text
STEP 1
Read the definition
       ↓
STEP 2
Explain it in your own words
       ↓
STEP 3
Type the example yourself
       ↓
STEP 4
Change the example
       ↓
STEP 5
Break the code intentionally
       ↓
STEP 6
Understand the error
       ↓
STEP 7
Solve one practical problem
       ↓
STEP 8
Explain the solution without notes
```

### The strongest test of understanding

Close the notes and ask yourself:

> **"Can I explain this concept to another fresher using a simple example?"**

If yes → you understand it.

If no → revise it.

---

# 📝 PERSONAL NOTES AREA

Use this section when you discover something important during practice.

## Things I often forget

```text
1.
2.
3.
4.
5.
```

## Errors I faced

```text
Error:
Cause:
Solution:
Lesson:
```

## Interview questions I need to revise

```text
1.
2.
3.
4.
5.
```

## Important real-world patterns

```text
1.
2.
3.
4.
5.
```

---

# 🎯 FINAL GOAL AFTER SECTION 7

You do **not** need to know every Playwright API yet.

You should be able to independently look at a web page and think:

```text
"What am I testing?"
        ↓
"Which element do I need?"
        ↓
"What is the most stable locator?"
        ↓
"What action should I perform?"
        ↓
"What should happen after that?"
        ↓
"How will I assert it?"
        ↓
"Is the UI dynamic?"
        ↓
"Do I need filtering/chaining?"
        ↓
"Am I using unnecessary waits?"
        ↓
"Will this test remain understandable later?"
```

If you can consistently think this way, you are moving from:

```text
❌ Learning Playwright syntax
```

to:

```text
✅ Thinking like an Automation Tester
```

---

# 🌟 FINAL REMINDER

> **Playwright is not about remembering hundreds of methods.**
>
> **Automation testing is about understanding the application, selecting reliable elements, performing meaningful actions, and proving the expected result.**

```text
UNDERSTAND
    ↓
LOCATE
    ↓
ACT
    ↓
WAIT
    ↓
ASSERT
    ↓
DEBUG
    ↓
IMPROVE
```

### 🎭 Sections 1–7 = Your Playwright Foundation

Once these concepts are strong, advanced topics become much easier because they build on the same foundation.

---

## 📚 Official Documentation

For syntax that changes over time, always verify against the official Playwright documentation.

Key areas:

- Locators
- Assertions
- Fixtures
- Browser contexts
- Timeouts
- Best practices

> **Note:** This notebook is a learning/reference guide. Exact defaults and APIs can change between Playwright versions, so use the official documentation when a version-specific detail matters.
