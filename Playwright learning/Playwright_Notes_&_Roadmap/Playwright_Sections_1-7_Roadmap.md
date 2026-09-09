# 🎭 Playwright Automation — Sections 1–7 Roadmap

> **Rahul Shetty Academy | Playwright Automation Testing**
>
> 📌 **Progress:** Sections 1–7 Completed  
> 🎯 **Goal:** Build strong Playwright fundamentals through notes, hands-on practice, and interview preparation.

---

## 🗺️ Master Roadmap

| Section | Focus | Priority |
|---|---|---|
| 1 | Introduction & Environment Setup | 🟢 Foundation |
| 2 | JavaScript / TypeScript Fundamentals | 🟢 Foundation |
| 3 | Playwright Core Concepts | 🔥 Essential |
| 4 | Basic Web Automation | 🔥 Essential |
| 5 | UI Components | 🔥 Essential |
| 6 | End-to-End Automation Practice | ⭐ Practical |
| 7 | Modern Locators, Filtering & Timeouts | ⭐ Practical |

---

# 1️⃣ Introduction to Playwright Automation

## 1.1 Playwright Overview
- What is Playwright?
- Why Playwright for automation?
- Key features of Playwright
- Playwright vs traditional Selenium-style automation
- Supported browsers
  - Chromium
  - Firefox
  - WebKit
- Cross-browser testing
- End-to-End testing concept

## 1.2 Playwright Test Ecosystem
- Playwright library
- Playwright Test Runner
- Test files
- Test execution
- Assertions
- Reports
- Debugging

## 1.3 Environment Setup
- Node.js
- npm
- VS Code
- Installing Playwright
- Installing Playwright browsers
- Creating a Playwright project
- npm / npx commands
- Windows PowerShell issues

## 1.4 Basic Playwright Test Structure

```javascript
import { test, expect } from '@playwright/test';

test('Test name', async ({ page }) => {
    await page.goto('https://example.com');
});
```

### Understand
- `test()`
- `expect()`
- `async`
- `await`
- `page`
- `page.goto()`

## 1.5 Browser Architecture

```text
Browser
   ↓
BrowserContext
   ↓
Page
   ↓
Locator
   ↓
Web Element
```

### Key Idea
- **Browser** → Browser instance
- **BrowserContext** → Isolated browser session
- **Page** → Browser tab/page
- **Locator** → Way to identify and interact with elements

---

# 2️⃣ JavaScript / TypeScript Fundamentals

> 💡 Playwright automation code is commonly written using JavaScript or TypeScript, so these fundamentals are important.

## 2.1 JavaScript Basics
- Variables
- Data types
- Strings
- Numbers
- Boolean
- Conditions
- Loops

## 2.2 Arrays
- Creating arrays
- Accessing elements
- Array length
- Looping through arrays
- `forEach()`
- `map()`
- `filter()`
- `find()`

## 2.3 Objects
- Object properties
- Nested objects
- Accessing object values
- Array of objects
- Destructuring

## 2.4 Functions
- Normal functions
- Arrow functions
- Parameters
- Return values

## 2.5 Asynchronous JavaScript
- Promises
- `async`
- `await`
- Why Playwright uses asynchronous operations

### Example

```javascript
async function login() {
    await page.getByLabel('Username').fill('testuser');
}
```

### ⭐ Most Important for Playwright
```text
async  → function handles asynchronous operations
await  → waits for the asynchronous operation to complete
```

---

# 3️⃣ Playwright Core Concepts

## 3.1 Project Setup
- npm initialization
- Installing Playwright
- Installing browsers
- Playwright project structure
- `package.json`
- `playwright.config.js` / `playwright.config.ts`
- Test directory
- Test files

## 3.2 Test Annotation & Structure

```javascript
test('Login Test', async ({ page }) => {
    // test steps
});
```

### Understand
- Test name
- Test body
- Test annotation
- Fixtures
- `async`
- `await`

## 3.3 Browser

Understand:
- Browser instance
- Browser lifecycle
- Browser types

## 3.4 BrowserContext

```text
Browser
   └── BrowserContext
```

Understand:
- Isolated browser session
- Test isolation
- Multiple contexts

## 3.5 Page

```text
BrowserContext
      ↓
     Page
```

Understand:
- Browser tab
- Navigation
- Page methods
- Interaction with web pages

## 3.6 Page Fixture

```javascript
test('Test', async ({ page }) => {
    await page.goto('https://example.com');
});
```

Understand:
- What is `page`?
- Why `{ page }` is used
- Page fixture
- Navigation and interaction

## 3.7 Playwright Configuration

Important configuration areas:
- `testDir`
- `use`
- `baseURL`
- `timeout`
- `reporter`
- `projects`
- Browser configuration

## 3.8 Multiple Browser Configuration

```text
          Playwright
              │
      ┌───────┼────────┐
      ↓       ↓        ↓
  Chromium Firefox   WebKit
```

Understand:
- Projects
- Cross-browser execution
- Browser-specific configuration

---

# 4️⃣ Basic Web Automation Methods

> 🔥 **Core hands-on section**

## 4.1 Locators

### Basic locator

```javascript
page.locator()
```

### Examples

```javascript
page.locator('#username');

page.locator('.login-button');

page.locator('input[name="email"]');
```

### Locator Concepts
- What is a locator?
- CSS selectors
- ID selectors
- Class selectors
- Attribute selectors
- Generic `locator()`
- Multiple matching elements

## 4.2 Finding Web Elements

Practice locating:
- Input
- Button
- Link
- Text
- Checkbox
- Radio button
- Dropdown
- Multiple elements

## 4.3 Filling / Typing

Important methods:

```javascript
fill()
type()
```

### Understand
- `fill()` vs `type()`
- When to use each
- Input field interaction

## 4.4 Clicking

```javascript
await locator.click();
```

Understand:
- Button clicks
- Link clicks
- Element readiness
- Playwright auto-waiting

## 4.5 Extracting Text

```javascript
await locator.textContent();
```

```javascript
await locator.innerText();
```

Understand:
- `textContent()`
- `innerText()`
- Difference between them

## 4.6 Input Values

```javascript
await locator.inputValue();
```

Useful for:
- Input fields
- Text boxes
- Form values

## 4.7 Multiple Elements

```javascript
const products = page.locator('.product');

const count = await products.count();
```

Understand:
- Multiple matching elements
- `count()`
- `nth()`
- Looping through elements
- Extracting values from lists

## 4.8 Dynamic Waiting

Understand:
- Auto-waiting
- Element readiness
- Dynamic web pages
- Waiting for elements
- Waiting for states
- Why blindly using `waitForTimeout()` is usually not the right approach

## 4.9 Assertions

Core method:

```javascript
expect()
```

### Common assertions

```javascript
await expect(locator).toBeVisible();

await expect(locator).toHaveText('Login');

await expect(page).toHaveTitle('Example');
```

### Learn
- `toBeVisible()`
- `toHaveText()`
- `toContainText()`
- `toHaveValue()`
- `toBeChecked()`
- `toBeEnabled()`
- `toBeDisabled()`
- `toHaveAttribute()`
- `toHaveCount()`
- Title assertions
- URL assertions

### Assertion Flow

```text
Action
  ↓
Expected Result
  ↓
Assertion
  ↓
Pass / Fail
```

---

# 5️⃣ UI Components

> 🎛️ Handle common real-world UI components.

## 5.1 Static Select Dropdown

Important method:

```javascript
selectOption()
```

### Practice
- Select by value
- Select by label
- Select by index
- Verify selected option

### Example

```javascript
await page.locator('#country').selectOption('India');
```

## 5.2 Radio Buttons

Important methods:

```javascript
check()
```

```javascript
await expect(locator).toBeChecked();
```

### Practice
- Selecting radio buttons
- Verifying selected radio
- Handling multiple radio options

## 5.3 Checkboxes

```javascript
check()
uncheck()
```

### Assertions

```javascript
await expect(locator).toBeChecked();
```

### Practice
- Checked state
- Unchecked state
- Multiple checkboxes

## 5.4 Attribute Validation

Important methods:

```javascript
getAttribute()
```

```javascript
toHaveAttribute()
```

Understand:
- Reading attributes
- Validating attributes
- Common attributes such as `href`, `value`, `class`, `data-*`

## 5.5 Child Windows / Tabs

### Architecture

```text
Parent Page
     ↓
New Tab / Child Page
```

Learn:
- Browser context switching
- New page event
- Multiple pages
- Child windows
- Working with parent and child pages

## 5.6 `textContent()` vs `inputValue()`

```text
<div>Apple</div>
       ↑
textContent()

<input value="Apple">
              ↑
inputValue()
```

### Key Difference
- `textContent()` → text contained by an element
- `inputValue()` → current value of an input-like element

---

# 6️⃣ End-to-End Automation Practice

> 🚀 **Connect individual Playwright skills into complete real-world flows.**

## 6.1 Analyze Application & Test Scenario

Before coding:

```text
Application
    ↓
Business Scenario
    ↓
Test Steps
    ↓
Locators
    ↓
Actions
    ↓
Assertions
```

Learn how to convert a manual test scenario into Playwright automation.

## 6.2 Dynamic Product Selection

Typical flow:

```text
Product List
     ↓
Find Required Product
     ↓
Read Product Name
     ↓
Select Product
     ↓
Add to Cart
```

Important concepts:
- Multiple locators
- Arrays
- Loops
- Dynamic selection
- Text extraction
- Conditions

## 6.3 Dynamic Product Matching

Example pattern:

```javascript
const products = page.locator('.product');

const count = await products.count();

for (let i = 0; i < count; i++) {
    const product = products.nth(i);

    // inspect product
}
```

### ⭐ Important Practical Pattern
Use a locator collection + loop when you need to inspect multiple dynamic elements.

## 6.4 Assertions After Actions

Do not only perform actions.

Always verify the result.

```text
Action
  ↓
Expected Result
  ↓
Assertion
```

Example:

```javascript
await addToCart.click();

await expect(cart).toHaveText('1');
```

## 6.5 Auto-Suggest Dropdown

Typical flow:

```text
Type "Ind"
    ↓
Suggestions Appear
    ↓
Find Required Suggestion
    ↓
Select Suggestion
    ↓
Verify Selection
```

Learn:
- Dynamic suggestions
- Waiting for suggestions
- Locating suggestions
- Selecting a suggestion
- Validating the selected value

## 6.6 Complete E2E Flow

Example:

```text
Open Application
      ↓
Login
      ↓
Select Product
      ↓
Add Product
      ↓
Open Cart
      ↓
Verify Product
      ↓
Place Order
      ↓
Capture Order ID
```

## 6.7 Order ID Extraction

Important pattern:

```text
UI
 ↓
Extract Text
 ↓
Store in Variable
 ↓
Use Later
```

Example:

```javascript
const orderId = await page.locator('.order-id').textContent();

console.log(orderId);
```

## 6.8 Order History

Practice:
- Navigate to order history
- Search orders
- Find previously generated order
- Dynamically identify an order
- Validate order details

### ⭐ Key Skill
Connect data generated in one step with validation in a later step.

---

# 7️⃣ Modern Playwright Locators + Test Runner

> ⭐ **Section 7 — Modern locator strategy, filtering, chaining and timeout concepts**

## 7.1 `getByRole()`

```javascript
page.getByRole()
```

### Example

```javascript
page.getByRole('button', { name: 'Login' });
```

Understand:
- ARIA roles
- Accessible name
- Button
- Link
- Heading
- Checkbox
- Radio
- Textbox
- List
- Option

## 7.2 `getByText()`

```javascript
page.getByText('Login');
```

Learn:
- Exact text
- Partial text
- Text matching
- When to use text locator

## 7.3 `getByLabel()`

```javascript
page.getByLabel('Username');
```

Useful for:
- Input fields
- Checkbox
- Radio
- Form controls

## 7.4 `getByPlaceholder()`

```javascript
page.getByPlaceholder('Enter username');
```

Use when the input has a meaningful placeholder.

## 7.5 `getByTestId()`

```javascript
page.getByTestId('login-button');
```

HTML example:

```html
<button data-testid="login-button">
    Login
</button>
```

## 7.6 Locator Chaining

Example:

```javascript
page.locator('.product')
    .getByText('Apple');
```

### Concept

```text
Page
 ↓
Parent Locator
 ↓
Child Locator
 ↓
Target Element
```

## 7.7 `filter()`

Important method:

```javascript
filter()
```

Example:

```javascript
page.locator('.product').filter({
    hasText: 'Apple'
});
```

Use filtering when multiple elements match and you need to narrow down the correct element.

## 7.8 `hasText`

```javascript
filter({
    hasText: 'Apple'
})
```

Use it to identify an element based on its text/content.

## 7.9 `has`

Understand filtering based on another locator.

### Concept

```text
Find Product Card
      ↓
Card Contains Required Button
      ↓
Select Correct Card
```

## 7.10 Combining Locators

### Powerful pattern

```javascript
page.getByRole('listitem')
    .filter({ hasText: 'Apple' })
    .getByRole('button', { name: 'Add to cart' });
```

### Think Like This

```text
Find Parent
    ↓
Filter Correct Parent
    ↓
Find Child
    ↓
Perform Action
```

## 7.11 UI Runner / UI Mode

Learn:
- Running tests visually
- Seeing test steps
- Debugging tests
- Inspecting locators
- Test execution
- Debugging failures

## 7.12 Assertion Timeout

Understand:

```text
Assertion
    ↓
Wait
    ↓
Retry
    ↓
Pass / Timeout
```

Example:

```javascript
await expect(locator).toBeVisible({
    timeout: 10000
});
```

## 7.13 Global Assertion Timeout

Understand configuration-level assertion timeout.

Concept:

```javascript
expect: {
    timeout: 10000
}
```

## 7.14 Individual Assertion Timeout

```javascript
await expect(locator).toBeVisible({
    timeout: 10000
});
```

Understand:

```text
Global Assertion Timeout
          vs
Individual Assertion Timeout
```

## 7.15 Test Timeout

Test timeout applies to the overall test execution.

Example:

```javascript
test.setTimeout(60000);
```

Understand:
- Test starts
- Test executes
- Test timeout
- Pass / Fail

## 7.16 Action Timeout

Understand timeout behavior for actions such as:

```text
click()
fill()
check()
selectOption()
```

## 7.17 Timeout Hierarchy

```text
                 PLAYWRIGHT TIMEOUTS
                         │
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
   Test Timeout     Action Timeout   Expect Timeout
        │                                  │
   Whole Test                         Assertions
```

### Remember

```text
Test Timeout
→ Controls overall test execution

Action Timeout
→ Controls individual actions

Expect Timeout
→ Controls assertion waiting/retry
```

---

# 🧠 Sections 1–7 — Complete Skill Map

```text
PLAYWRIGHT AUTOMATION
│
├── 1. INTRODUCTION
│   ├── What is Playwright
│   ├── Features
│   ├── Browsers
│   ├── Test Runner
│   └── Environment Setup
│
├── 2. JAVASCRIPT / TYPESCRIPT
│   ├── Variables
│   ├── Arrays
│   ├── Objects
│   ├── Functions
│   ├── Array Methods
│   ├── Promises
│   ├── async
│   └── await
│
├── 3. PLAYWRIGHT CORE
│   ├── Project Setup
│   ├── Test Structure
│   ├── Test Annotation
│   ├── Browser
│   ├── BrowserContext
│   ├── Page
│   ├── Fixtures
│   ├── Configuration
│   └── Multiple Browsers
│
├── 4. BASIC WEB AUTOMATION
│   ├── Locators
│   ├── CSS
│   ├── Attributes
│   ├── Fill
│   ├── Type
│   ├── Click
│   ├── Text Extraction
│   ├── Multiple Elements
│   ├── Count
│   ├── Dynamic Waiting
│   └── Assertions
│
├── 5. UI COMPONENTS
│   ├── Dropdown
│   ├── Radio Button
│   ├── Checkbox
│   ├── Attributes
│   ├── Child Windows
│   ├── Multiple Tabs
│   ├── textContent
│   └── inputValue
│
├── 6. E2E AUTOMATION
│   ├── Scenario Analysis
│   ├── Dynamic Products
│   ├── Product Selection
│   ├── Loops
│   ├── Assertions
│   ├── Auto Suggest
│   ├── Cart
│   ├── Order Placement
│   ├── Order ID
│   └── Order History
│
└── 7. MODERN LOCATORS & RUNNER
    ├── getByRole
    ├── getByText
    ├── getByLabel
    ├── getByPlaceholder
    ├── getByTestId
    ├── Locator Chaining
    ├── filter()
    ├── hasText
    ├── has
    ├── UI Runner / UI Mode
    ├── Assertion Timeout
    ├── Test Timeout
    ├── Action Timeout
    └── Timeout Hierarchy
```

---

# 🎯 Practical Readiness Checklist

After completing Sections 1–7, you should be comfortable with:

- [ ] Create a Playwright project
- [ ] Write a basic Playwright test
- [ ] Understand `async/await`
- [ ] Understand Browser → Context → Page
- [ ] Use the `page` fixture
- [ ] Configure Playwright
- [ ] Run tests on multiple browsers
- [ ] Locate web elements
- [ ] Use CSS locators
- [ ] Use `fill()`
- [ ] Use `type()`
- [ ] Use `click()`
- [ ] Extract text
- [ ] Extract input values
- [ ] Handle multiple elements
- [ ] Use `count()`
- [ ] Use `nth()`
- [ ] Use assertions
- [ ] Handle dropdowns
- [ ] Handle radio buttons
- [ ] Handle checkboxes
- [ ] Validate attributes
- [ ] Handle multiple tabs/windows
- [ ] Automate dynamic products
- [ ] Handle auto-suggest dropdowns
- [ ] Extract and reuse Order IDs
- [ ] Use `getByRole()`
- [ ] Use `getByText()`
- [ ] Use `getByLabel()`
- [ ] Use `getByPlaceholder()`
- [ ] Use `getByTestId()`
- [ ] Chain locators
- [ ] Use `filter()`
- [ ] Use `hasText`
- [ ] Understand `has`
- [ ] Use UI Mode / Runner
- [ ] Understand assertion timeout
- [ ] Understand action timeout
- [ ] Understand test timeout
- [ ] Understand timeout hierarchy

---

# 🏆 Final Goal

Don't aim to **memorize Playwright methods**.

Aim to understand this automation thought process:

```text
MANUAL TEST SCENARIO
        ↓
Understand Application
        ↓
Identify Element
        ↓
Choose Best Locator
        ↓
Perform Action
        ↓
Handle Dynamic UI
        ↓
Wait Automatically
        ↓
Validate Result
        ↓
Debug if Failed
```

> **🔥 If you can independently convert a real manual test case into this flow, you have a strong foundation for the next Playwright topics.**

---

## 📚 Recommended Study Pattern

For every topic, follow:

```text
1. 📖 Short Notes
        ↓
2. 💻 Syntax
        ↓
3. 🌐 Real Example
        ↓
4. 🧪 Practice Question
        ↓
5. 🐛 Common Mistakes
        ↓
6. 💼 Interview Question
        ↓
7. 🔥 Real-world Scenario
```

**Sections 1–7 = Foundation + Core UI Automation + Practical E2E + Modern Locator Skills**
