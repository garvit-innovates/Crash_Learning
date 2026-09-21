# 🎭 Playwright Complete Notes — Fresher Friendly Edition

> 👨‍🏫 **Written like a 20-year Playwright tutor explaining to a first-day student.**
> Every topic follows the same easy pattern so you can revise fast:
>
> **📖 Simple Meaning → 💻 Example → ✅ When to Use → ⚠️ Common Mistake**

> 📌 **Source Reference:** These notes are built from your uploaded file
> `Playwright_Complete_Course_Roadmap.md` (25 Sections). Every section below
> shows `📌 Reference: Section X` so you know exactly which part of your
> course/roadmap it belongs to.

---

## 🧭 How to use this notes file

1. Read the **simple meaning** first — don't touch code yet.
2. Then read the **example** slowly, line by line.
3. Then ask yourself: *"When would I actually use this in real testing?"*
4. Then read the **common mistake** so you don't repeat it.
5. Close the notes and try to write the same code yourself from memory.

> 💡 **Golden Rule for freshers:** Don't memorize code. Understand *why* the code is written that way. Playwright interviews test understanding, not memorization.

---

## 📑 Table of Contents

- [PHASE 1 — Foundation (Sections 1–3)](#phase-1--foundation)
- [PHASE 2 — Core UI Automation (Sections 4–7)](#phase-2--core-ui-automation)
- [PHASE 3 — Debugging & Complex UI (Sections 8–10)](#phase-3--debugging--complex-ui)
- [PHASE 4 — API + Network (Sections 11–12)](#phase-4--api--network)
- [PHASE 5 — Framework Engineering (Sections 13–19)](#phase-5--framework-engineering)
- [PHASE 6 — Reporting & CI/CD (Sections 20–23)](#phase-6--reporting--cicd)
- [PHASE 7 — AI-Assisted Playwright (Sections 24–25)](#phase-7--ai-assisted-playwright)
- [🎯 Interview Cheat Sheet](#-interview-cheat-sheet)
- [⚠️ Beginner Mistakes Master List](#️-beginner-mistakes-master-list)

---
---

# PHASE 1 — FOUNDATION

# 📘 SECTION 1 — Introduction to Playwright & Course Expectations
📌 **Reference: Section 1** — *Introduction to Playwright Automation & Course Expectations*

## 🎯 In one line
Understand what Playwright is, why it exists, and how the pieces (Browser → Context → Page) fit together.

### 1.1 What is Test Automation?
- 📖 **Simple meaning:** Instead of a human clicking buttons on a website again and again to check if it works, we write a **program** that does the clicking, typing, and checking automatically.
- 💻 **Example (human vs automation):**
  - Human: opens browser → types URL → logs in → checks dashboard loads (5 minutes, every time, gets bored/misses bugs)
  - Automation: `npx playwright test login.spec.ts` → same steps done in 5 seconds, every single time, never gets tired.
- ✅ **When to use:** Any repetitive test (login, checkout, search) that you'll run more than once.
- ⚠️ **Common mistake:** Beginners try to automate *everything* on day 1. Start small — one login test first.

### 1.2 Why Playwright (and not Selenium/Cypress)?
- 📖 **Simple meaning:** Playwright is a modern tool (made by Microsoft) that controls real browsers (Chrome, Firefox, Safari/WebKit) using code, and it **auto-waits** for elements — meaning it's smart enough to wait for a button to actually be clickable before clicking it.
- ✅ **When to use:** Whenever you need cross-browser testing, fast execution, and built-in tools like Trace Viewer.
- ⚠️ **Common mistake:** Thinking Playwright = only Chrome. It supports Chromium, Firefox, and WebKit (Safari engine).

### 1.3 Playwright Architecture: Browser → Context → Page → Locator → Action
- 📖 **Simple meaning:** Think of it like a building:
  - **Browser** = the whole browser application (like Chrome itself opening)
  - **BrowserContext** = one incognito-like window/session inside that browser (isolated cookies, storage — like one "user session")
  - **Page** = one tab inside that context
  - **Locator** = a pointer to one element on that page (a button, a text box)
  - **Action** = what you do with that locator (click, type, etc.)
- 💻 **Example:**
  ```ts
  const browser = await chromium.launch();      // 1. Open the browser
  const context = await browser.newContext();   // 2. Create an isolated session
  const page = await context.newPage();         // 3. Open a tab
  await page.goto('https://example.com');       // 4. Navigate
  await page.getByRole('button', { name: 'Login' }).click(); // Locator + Action
  ```
- ✅ **When to use:** You need multiple `context`s when testing **multiple users** at once (e.g., Admin + Customer) in the same test, because each context is isolated (separate cookies/login).
- ⚠️ **Common mistake:** Creating a new `browser` for every test (very slow). Normally Playwright Test framework handles this for you — you just use `page`.

### 1.4 Role of Node.js and npm
- 📖 **Simple meaning:** Playwright is a JavaScript/TypeScript tool, so it needs **Node.js** (the engine that runs JS outside a browser) and **npm** (Node Package Manager — downloads Playwright and other libraries).
- 💻 **Example:**
  ```bash
  node -v        # check Node.js is installed
  npm init -y    # create a package.json (project identity file)
  npm install @playwright/test   # download Playwright library
  ```
- ✅ **When to use:** Every single Playwright project needs this as the very first step.
- ⚠️ **Common mistake:** Skipping `npx playwright install` — this downloads the actual browser binaries. Without it, tests fail with "browser not found."

### ✅ Section 1 Mastery Checkpoint
You should be able to answer: *"What is Playwright, why do we use it, and how does Browser → Context → Page → Locator → Action work?"* — in your own words, no notes.

---

# 📘 SECTION 2 — JavaScript & TypeScript Fundamentals
📌 **Reference: Section 2** — *JavaScript & TypeScript Fundamentals*

> 🚨 **Don't skip this section.** Every later topic (fixtures, POM, data-driven testing) becomes 10x harder if these basics are weak.

### 2.1 Variables: `let`, `const`, `var`
- 📖 **Simple meaning:** Boxes that store values. `const` = value never changes. `let` = value can change. `var` = old style, avoid it.
- 💻 **Example:**
  ```js
  const username = "admin";   // won't change during the test
  let counter = 0;            // will change (e.g., loop counter)
  counter = counter + 1;
  ```
- ✅ **When to use:** Use `const` by default. Use `let` only when the value must change.
- ⚠️ **Common mistake:** Using `let` everywhere out of habit — makes code harder to trust (anyone could accidentally change the value).

### 2.2 Data Types, Strings & Template Literals
- 📖 **Simple meaning:** Data can be text (`string`), numbers, true/false (`boolean`). Template literals let you insert variables into text using backticks and `${}`.
- 💻 **Example:**
  ```js
  const orderId = 1023;
  console.log(`Your order number is ${orderId}`); // "Your order number is 1023"
  ```
- ✅ **When to use:** Anytime you build dynamic locator text or log messages with variable values.
- ⚠️ **Common mistake:** Using `+` string concatenation everywhere (`"Order " + orderId`) — works, but template literals are cleaner and less error-prone.

### 2.3 Arrays & Objects
- 📖 **Simple meaning:** An **array** is a list `[]`. An **object** is a labeled bundle of data `{}` (like a form with named fields).
- 💻 **Example:**
  ```js
  const products = ["Laptop", "Mouse", "Keyboard"]; // array
  const user = { name: "Rahul", age: 25, isAdmin: false }; // object
  console.log(products[0]);   // "Laptop"
  console.log(user.name);     // "Rahul"
  ```
- ✅ **When to use:** Arrays for lists of test data (multiple users, multiple products). Objects for one record's details (one user's data).
- ⚠️ **Common mistake:** Confusing `products[0]` (array — index number) with `user.name` (object — named property).

### 2.4 Functions & Arrow Functions
- 📖 **Simple meaning:** A function is a reusable block of code. Arrow functions `() => {}` are a shorter, modern way to write functions — Playwright uses them everywhere.
- 💻 **Example:**
  ```js
  // normal function
  function add(a, b) { return a + b; }

  // arrow function (same thing, shorter)
  const add2 = (a, b) => a + b;

  // Playwright test itself uses an arrow function:
  test('login test', async ({ page }) => {
      await page.goto('https://example.com');
  });
  ```
- ✅ **When to use:** Use arrow functions in Playwright tests, callbacks, and array methods.
- ⚠️ **Common mistake:** Forgetting `async` before an arrow function that uses `await` inside — causes a syntax error.

### 2.5 Conditions & Loops
- 📖 **Simple meaning:** `if/else` = make a decision. `for`/`while` = repeat something.
- 💻 **Example:**
  ```js
  if (price > 1000) {
      console.log("Expensive item");
  } else {
      console.log("Affordable item");
  }

  for (let i = 0; i < products.length; i++) {
      console.log(products[i]);
  }
  ```
- ✅ **When to use:** Loops are used to go through a list of products/rows and click/verify each one.
- ⚠️ **Common mistake:** Using `for` loops with `await` incorrectly — always use a normal `for` loop (not `forEach`) when you need `await` inside, because `forEach` does not wait properly.

### 2.6 Important Array Methods: `map`, `filter`, `find`, `forEach`, `some`, `every`
- 📖 **Simple meaning:**
  - `map` → transforms each item into something new, returns a new array.
  - `filter` → keeps only items matching a condition.
  - `find` → returns the *first* matching item.
  - `forEach` → just loops (no return value, no `await` support).
  - `some` → true if *at least one* item matches.
  - `every` → true only if *all* items match.
- 💻 **Example:**
  ```js
  const prices = [500, 1500, 800, 3000];

  const expensive = prices.filter(p => p > 1000);   // [1500, 3000]
  const doubled = prices.map(p => p * 2);           // [1000, 3000, 1600, 6000]
  const firstExpensive = prices.find(p => p > 1000); // 1500
  const anyExpensive = prices.some(p => p > 2000);   // true
  const allExpensive = prices.every(p => p > 100);   // true
  ```
- ✅ **When to use:** `filter`/`find` are extremely common in Playwright to pick one product from a dynamic list of API results or scraped text.
- ⚠️ **Common mistake:** Using `map` when you meant `forEach` (map creates and wastes a new array you never use).

### 2.7 Destructuring & Spread/Rest Operators
- 📖 **Simple meaning:** Destructuring = quickly pulling values out of an object/array into separate variables. This is **exactly** how Playwright gives you `page`, `context`, `request` in every test!
- 💻 **Example:**
  ```js
  // Destructuring — this is literally Playwright's test signature:
  test('my test', async ({ page, context, request }) => {
      // page, context, request pulled out of the fixtures object
  });

  const user = { name: "Amit", age: 30 };
  const { name, age } = user; // destructuring an object

  // Spread
  const newUser = { ...user, age: 31 }; // copy user, but change age
  ```
- ✅ **When to use:** Anytime you write a Playwright test — the `{ page }` parameter IS destructuring.
- ⚠️ **Common mistake:** Not recognizing `{ page }` as destructuring and being confused where `page` "comes from."

### 2.8 Promises & `async`/`await`
- 📖 **Simple meaning:** A **Promise** is JavaScript's way of saying "this will finish later" (like clicking a button that loads a new page — it takes time). `async`/`await` is the clean way to *wait* for that promise to finish before moving to the next line.
- 💻 **Example:**
  ```js
  async function loginUser(page) {
      await page.fill('#username', 'admin'); // wait for typing to finish
      await page.click('#loginBtn');         // wait for click to finish
      await page.waitForURL('**/dashboard'); // wait for page to navigate
  }
  ```
- ✅ **When to use:** EVERY Playwright action needs `await` in front of it, because browser actions take time.
- ⚠️ **Common mistake:** Forgetting `await`. Example: `page.click('#loginBtn')` without `await` — the test moves to the next line *before* the click even finishes, causing random failures ("flaky tests").

### 2.9 Modules: `import`/`export`
- 📖 **Simple meaning:** Splitting code into multiple files and reusing them. `export` shares a function/class from one file; `import` brings it into another file.
- 💻 **Example:**
  ```ts
  // loginPage.ts
  export class LoginPage {
      constructor(private page) {}
      async login(username: string, password: string) {
          await this.page.fill('#username', username);
          await this.page.fill('#password', password);
          await this.page.click('#loginBtn');
      }
  }

  // test.spec.ts
  import { LoginPage } from './loginPage';
  ```
- ✅ **When to use:** This is the backbone of Page Object Model (Section 17) — every Page Object file exports a class.
- ⚠️ **Common mistake:** Forgetting `export` on a class/function, then getting "not exported" errors when importing.

### 2.10 Error Handling: `try`/`catch`
- 📖 **Simple meaning:** Lets your code "try" something risky, and if it fails, "catch" the error instead of crashing.
- 💻 **Example:**
  ```js
  try {
      await page.click('#maybeMissingButton', { timeout: 3000 });
  } catch (error) {
      console.log('Button not found, continuing test:', error.message);
  }
  ```
- ✅ **When to use:** Optional elements (like a cookie-consent popup that doesn't always appear).
- ⚠️ **Common mistake:** Wrapping *every* action in try/catch to "hide" failures — this hides real bugs. Use it sparingly, only for genuinely optional steps.

### 2.11 JSON
- 📖 **Simple meaning:** JSON (JavaScript Object Notation) is a text format for storing data — looks exactly like a JS object. APIs send/receive data in JSON.
- 💻 **Example:**
  ```json
  { "username": "admin", "password": "Pass123" }
  ```
  ```js
  const data = JSON.parse(jsonString);      // text → object
  const text = JSON.stringify(dataObject);  // object → text
  ```
- ✅ **When to use:** Reading test data files (Section 17) and parsing API responses (Section 11).
- ⚠️ **Common mistake:** Trying to read `.property` directly on a JSON *string* without `JSON.parse()` first.

### 2.12 TypeScript Foundation (Types, Interfaces, Generics basics)
- 📖 **Simple meaning:** TypeScript = JavaScript + "labels" that say what type of data a variable should hold. This catches mistakes *before* running the test.
- 💻 **Example:**
  ```ts
  let username: string = "admin";     // type annotation
  let age: number = 25;

  interface User {                     // interface = shape of an object
      name: string;
      age: number;
      isAdmin?: boolean;              // optional property (the ? mark)
  }

  function greet(user: User): string { // function types
      return `Hello ${user.name}`;
  }
  ```
- ✅ **When to use:** Once your project grows beyond a few tests — TypeScript prevents typos like `user.naem` from becoming runtime bugs.
- ⚠️ **Common mistake:** Marking everything `any` type just to avoid errors — this defeats the entire purpose of TypeScript.

---

# 📘 SECTION 3 — Getting Started with Playwright Core Concepts
📌 **Reference: Section 3** — *Getting Started with Playwright Automation Core Concepts*

### 3.1 Project Structure
- 📖 **Simple meaning:** A fresh Playwright project has a fixed set of files/folders.
- 💻 **Example:**
  ```text
  project/
  ├── tests/                 → your test files live here
  ├── playwright.config.ts   → settings (browser, baseURL, timeouts)
  ├── package.json           → project info + installed libraries
  ├── package-lock.json      → exact version lock file
  └── node_modules/          → downloaded libraries (never edit this)
  ```
- ✅ **When to use:** Understand this on day 1 so you're not scared to open `playwright.config.ts`.
- ⚠️ **Common mistake:** Manually editing files inside `node_modules` — always gets overwritten and should never be touched.

### 3.2 Anatomy of a Playwright Test
- 📖 **Simple meaning:** Every test has 3 hidden parts: **Arrange** (set up), **Act** (do something), **Assert** (check the result).
- 💻 **Example:**
  ```ts
  import { test, expect } from '@playwright/test';

  test('user can see the homepage title', async ({ page }) => {
      // Arrange
      await page.goto('https://example.com');
      // Act
      // (nothing to click here — just navigating)
      // Assert
      await expect(page).toHaveTitle(/Example Domain/);
  });
  ```
- ✅ **When to use:** Structure every test this way — it makes tests easy to read and debug.
- ⚠️ **Common mistake:** Mixing assertions randomly throughout the test with no clear "final check" — makes failures hard to interpret.

### 3.3 `test`, `expect`, `page`, `context`, `browser` — the core objects
- 📖 **Simple meaning:**
  | Object | What it is |
  |---|---|
  | `test` | Defines a test case |
  | `expect` | Used to assert/verify something |
  | `page` | The browser tab you interact with |
  | `context` | An isolated browser session (cookies/storage) |
  | `browser` | The actual browser application instance |
- 💻 **Example:**
  ```ts
  test('example', async ({ page, context, browser }) => {
      console.log(browser.version());   // browser info
      await page.goto('https://example.com');
  });
  ```
- ✅ **When to use:** `page` is used in 95% of tests. `context`/`browser` are used for advanced scenarios (multi-user, multi-tab).
- ⚠️ **Common mistake:** Thinking you must manually create these — Playwright Test runner auto-creates a fresh `page`/`context` for every test (fixtures — see Section 13).

### 3.4 Fixtures (Intro)
- 📖 **Simple meaning:** Fixtures are "ready-made tools" that Playwright hands to your test automatically — like `page` being handed to you without you creating it.
- ✅ **When to use:** Every test — you're already using fixtures the moment you write `async ({ page }) =>`.
- ⚠️ **Common mistake:** Not realizing `page` IS a fixture — this becomes important later in Section 13 (custom fixtures).

### 3.5 `async`/`await` in Playwright context
- 📖 **Simple meaning:** As covered in Section 2, but specifically: Playwright's `test` callback itself must be `async`, and every Playwright action (`click`, `fill`, `goto`) returns a Promise, so needs `await`.
- ⚠️ **Common mistake:** Missing `await` on `page.goto()` — test may try to interact with elements before the page even loads.

### 3.6 Playwright Configuration File (`playwright.config.ts`)
- 📖 **Simple meaning:** The "settings file" for your whole project — which browser to use, base URL, timeouts, retries, reporters.
- 💻 **Example:**
  ```ts
  import { defineConfig } from '@playwright/test';

  export default defineConfig({
      testDir: './tests',
      timeout: 30000,
      use: {
          baseURL: 'https://example.com',
          headless: true,
          screenshot: 'only-on-failure',
      },
      projects: [
          { name: 'chromium', use: { browserName: 'chromium' } },
          { name: 'firefox', use: { browserName: 'firefox' } },
      ],
  });
  ```
- ✅ **When to use:** Set `baseURL` once here so every test can write `page.goto('/login')` instead of the full URL every time.
- ⚠️ **Common mistake:** Hardcoding the full URL in every single test file — makes it painful to switch environments (dev/staging/prod).

### 3.7 Assertions (Intro) & Multiple Browser Configuration
- 📖 **Simple meaning:** Assertions are how you tell Playwright "check that this is true, otherwise fail the test."
- 💻 **Example:**
  ```ts
  await expect(page).toHaveURL('https://example.com/dashboard');
  await expect(page.getByText('Welcome')).toBeVisible();
  ```
- ✅ **When to use:** At the end of every test — a test with zero assertions doesn't actually verify anything, it just "runs."
- ⚠️ **Common mistake:** Writing tests with only actions and no `expect()` — the test will pass even if the feature is broken!

### ✅ Section 3 Mastery Checkpoint
You should be able to create a brand-new Playwright project and write one working test **without copying** from the instructor.

---
---

# PHASE 2 — CORE UI AUTOMATION

# 📘 SECTION 4 — Playwright Basic Methods for Web Automation
📌 **Reference: Section 4** — *Playwright Basic Methods for Web Automation*

### 4.1 Locators — how Playwright finds elements
- 📖 **Simple meaning:** A locator is "directions" telling Playwright where an element is on the page — like giving someone an address.
- 💻 **Example — all the main locator types:**
  ```ts
  page.getByRole('button', { name: 'Submit' }); // by accessibility role
  page.getByText('Welcome back');               // by visible text
  page.getByLabel('Email address');             // by <label> text
  page.getByPlaceholder('Enter your email');    // by placeholder attribute
  page.getByAltText('Company logo');            // by image alt text
  page.getByTitle('Close');                     // by title attribute
  page.getByTestId('submit-btn');               // by data-testid attribute
  page.locator('.css-class');                   // CSS selector
  page.locator('//button[text()="Submit"]');    // XPath
  ```
- ✅ **When to use priority order:** `getByRole` → `getByLabel` → `getByTestId` → `getByText` → CSS → XPath (only as last resort).
- ⚠️ **Common mistake:** Jumping straight to XPath/CSS because it "feels familiar" from Selenium. XPath breaks easily when developers change the HTML structure. Semantic locators (`getByRole`, `getByLabel`) are far more stable.

### 4.2 Typing & Filling Elements
- 📖 **Simple meaning:** `fill()` clears and types a value instantly. `type()` types character-by-character (simulates real typing, slower).
- 💻 **Example:**
  ```ts
  await page.getByLabel('Username').fill('admin');       // fast, clears first
  await page.getByLabel('Search').pressSequentially('shoes'); // types char by char (modern replacement for type())
  ```
- ✅ **When to use:** `fill()` for 99% of cases. Use character-by-character typing only when testing autosuggest/autocomplete dropdowns that react to each keystroke.
- ⚠️ **Common mistake:** Using `type()` everywhere — it's much slower and usually unnecessary.

### 4.3 Extracting Text
- 📖 **Simple meaning:** Reading what text is displayed on the page so you can verify it or use it later.
- 💻 **Example:**
  ```ts
  const heading = await page.getByRole('heading').textContent();
  console.log(heading); // "Welcome, Admin!"
  ```
- ✅ **When to use:** When you need to grab dynamic data (like an Order ID) to use in a later assertion.
- ⚠️ **Common mistake:** Forgetting `await` — `textContent()` returns a Promise, so without `await` you'll get `[object Promise]` instead of the actual text.

### 4.4 Locators That Return Multiple Elements
- 📖 **Simple meaning:** Sometimes a locator matches *many* elements (like all products in a list). Playwright gives you tools to loop through them.
- 💻 **Example:**
  ```ts
  const products = page.locator('.product-card');
  const count = await products.count();
  for (let i = 0; i < count; i++) {
      console.log(await products.nth(i).textContent());
  }
  ```
- ✅ **When to use:** Product lists, search results, table rows.
- ⚠️ **Common mistake:** Calling `.click()` directly on a locator that matches multiple elements without `.first()`/`.nth()`/`.filter()` — Playwright throws a "strict mode violation" error.

### 4.5 Wait Mechanism for Lists
- 📖 **Simple meaning:** When a list loads from the server (like search results), Playwright automatically waits for elements to appear before counting/clicking — but you should wait for the *right* condition.
- 💻 **Example:**
  ```ts
  await page.waitForSelector('.product-card'); // wait until at least 1 exists
  await expect(page.locator('.product-card')).toHaveCount(5); // waits + asserts
  ```
- ✅ **When to use:** Anytime a list is populated by an API call after page load.
- ⚠️ **Common mistake:** Counting the list immediately after `page.goto()` without waiting — you'll get `0` because the list hasn't loaded yet.

### 4.6 Waiting for a New Page (dynamic navigation)
- 📖 **Simple meaning:** Some actions open a *new* page/tab. You must tell Playwright to "listen" for that new page.
- 💻 **Example:**
  ```ts
  const [newPage] = await Promise.all([
      context.waitForEvent('page'),      // start listening
      page.getByText('Open in new tab').click(), // action that triggers it
  ]);
  await newPage.waitForLoadState();
  ```
- ✅ **When to use:** "Open in new tab" links, payment gateway redirects, service-based apps that open sub-windows.
- ⚠️ **Common mistake:** Clicking first, then trying to wait for the new page — this is a race condition. Always set up the listener (`waitForEvent`) **before** the click, using `Promise.all`.

### 4.7 Actions Cheat List
| Action | Meaning |
|---|---|
| `click()` | Click an element |
| `fill()` | Clear + type value |
| `press()` | Press a keyboard key (e.g. `Enter`) |
| `check()` / `uncheck()` | Tick/untick a checkbox |
| `selectOption()` | Pick a dropdown option |
| `hover()` | Move mouse over an element |
| `focus()` | Give keyboard focus |
| `clear()` | Clear an input field |

### 4.8 Assertions Cheat List
| Assertion | Checks |
|---|---|
| `toHaveURL()` | Current page URL |
| `toHaveTitle()` | Page title |
| `toHaveText()` / `toContainText()` | Exact / partial text |
| `toHaveValue()` | Input field's value |
| `toHaveAttribute()` | An HTML attribute |
| `toBeVisible()` / `toBeHidden()` | Visibility |
| `toBeEnabled()` / `toBeDisabled()` | Enabled state |
| `toBeChecked()` | Checkbox/radio state |
| `toHaveCount()` | Number of matching elements |

### 4.9 Waiting Model — The Most Important Concept in Section 4
- 📖 **Simple meaning:** Playwright has **auto-waiting** built in — before clicking, it automatically waits for the element to be visible, stable, and enabled. You rarely need manual waits.
- 💻 **Example of what NOT to do:**
  ```ts
  // ❌ BAD
  await page.waitForTimeout(5000); // blindly waits 5 seconds no matter what

  // ✅ GOOD — wait for a real condition
  await expect(page.getByText('Order placed')).toBeVisible();
  ```
- ✅ **When to use manual waits:** Only for genuinely unpredictable timing (e.g., waiting for a specific network response) — use `page.waitForResponse()`, not `waitForTimeout()`.
- ⚠️ **Common mistake (🚨 KEY RULE of this section):** Solving every synchronization problem by throwing in `waitForTimeout()`. This makes tests slow AND unreliable. Always wait for a meaningful condition (element appearing, network response, URL change).

---

# 📘 SECTION 5 — UI Components: Dropdowns, Radio Buttons, Child Windows & Tabs
📌 **Reference: Section 5** — *UI Components: Dropdowns, Radio Buttons, Child Windows & Tabs*

### 5.1 Static Select Dropdowns
- 📖 **Simple meaning:** A normal HTML `<select>` dropdown — Playwright has a dedicated method for it.
- 💻 **Example:**
  ```ts
  await page.getByLabel('Country').selectOption('India');
  await page.getByLabel('Country').selectOption({ label: 'India' });
  await page.getByLabel('Country').selectOption({ value: 'IN' });
  ```
- ✅ **When to use:** Only for real `<select>` elements. For custom JS dropdowns (divs styled to look like dropdowns), use normal `click()` on the option instead.
- ⚠️ **Common mistake:** Trying to use `selectOption()` on a custom (non-`<select>`) dropdown — it will fail because it's not a real HTML select element.

### 5.2 Radio Buttons & Checkboxes
- 📖 **Simple meaning:** Radio buttons = pick ONE from a group. Checkboxes = pick ANY number.
- 💻 **Example:**
  ```ts
  await page.getByRole('radio', { name: 'Male' }).check();
  await page.getByRole('checkbox', { name: 'I agree to terms' }).check();
  await expect(page.getByRole('checkbox', { name: 'I agree' })).toBeChecked();
  ```
- ✅ **When to use:** Forms, filters, settings pages.
- ⚠️ **Common mistake:** Using `.click()` instead of `.check()` on a checkbox that's already checked — `.click()` will *toggle* it off by mistake. `.check()` is safe (does nothing if already checked).

### 5.3 Validating Attributes
- 📖 **Simple meaning:** Sometimes you need to check an HTML attribute (like `disabled`, `href`, `class`) rather than visible text.
- 💻 **Example:**
  ```ts
  await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs');
  ```
- ✅ **When to use:** Checking links point to the right place, or a button is properly disabled/enabled.

### 5.4 Child Windows & Tabs (Browser Contexts)
- 📖 **Simple meaning:** When a link opens a new tab or popup, it becomes a *new Page object* within the same context. You must switch your automation focus to it.
- 💻 **Example:**
  ```ts
  const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByText('Open Popup').click(),
  ]);
  await popup.waitForLoadState();
  await expect(popup).toHaveTitle(/Popup Page/);
  await popup.close(); // then switch back to original 'page' automatically
  ```
- ✅ **When to use:** "Open in new tab", payment redirects, social login popups (Google/Facebook login windows).
- ⚠️ **Common mistake:** Continuing to use the *old* `page` object after a popup opens, expecting it to control the popup — you must capture the *new* page object.

### 5.5 `textContent()` vs `inputValue()`
- 📖 **Simple meaning:** `textContent()` reads what's *displayed* inside an element (like a `<div>` or `<span>`). `inputValue()` reads what's *typed* inside a form field (`<input>`, `<textarea>`, `<select>`).
- 💻 **Example:**
  ```ts
  const heading = await page.locator('h1').textContent();       // for display text
  const typedValue = await page.locator('#username').inputValue(); // for input fields
  ```
- ✅ **When to use:** Use `inputValue()` specifically for form fields — `textContent()` will return empty string for inputs because their value isn't stored as visible "text content" in the HTML.
- ⚠️ **Common mistake:** Using `textContent()` on an `<input>` field and getting confused why it always returns an empty string.

---

# 📘 SECTION 6 — End-to-End Web Automation Practice
📌 **Reference: Section 6** — *End-to-End Web Automation Practice*

### 6.1 What "End-to-End (E2E)" Means
- 📖 **Simple meaning:** Instead of testing one button in isolation, you test a full real-world journey a user takes — like Login → Search → Buy → Check Order History — in a single connected test.
- ✅ **When to use:** For the most important business flows of an app (the ones that make the company money — e.g checkout flow).

### 6.2 Dynamically Finding an Element from a List
- 📖 **Simple meaning:** Instead of hardcoding "the 3rd product," find the product whose name matches what you searched for — because list order can change.
- 💻 **Example:**
  ```ts
  const targetProduct = "Wireless Mouse";
  const products = page.locator('.product-card');
  const count = await products.count();
  for (let i = 0; i < count; i++) {
      const name = await products.nth(i).locator('.product-name').textContent();
      if (name?.trim() === targetProduct) {
          await products.nth(i).getByRole('button', { name: 'Add to Cart' }).click();
          break;
      }
  }
  ```
- ✅ **When to use:** Any list where order/position isn't guaranteed (search results, product lists).
- ⚠️ **Common mistake:** Hardcoding `.nth(2)` — this breaks the moment the list re-orders itself.

### 6.3 Auto-Suggestive Dropdowns (Autocomplete/Search-as-you-type)
- 📖 **Simple meaning:** Boxes that show suggestions *while* you type (like Google search). Requires typing character-by-character to trigger the suggestions.
- 💻 **Example:**
  ```ts
  await page.getByPlaceholder('Search products').pressSequentially('lap', { delay: 100 });
  await page.getByText('Laptop Bag').click(); // click the suggestion that appears
  ```
- ✅ **When to use:** Search boxes, city/address pickers, tag inputs.
- ⚠️ **Common mistake:** Using `fill()` instead of typing character-by-character — `fill()` sets the value instantly and may not trigger the JavaScript "keyup" events that generate suggestions.

### 6.4 Complete E2E Order Flow + Extracting a Dynamic Order ID
- 📖 **Simple meaning:** After placing an order, the site shows a unique Order ID. You must capture it in a variable so you can search for it later (e.g., in Order History).
- 💻 **Example:**
  ```ts
  await page.getByRole('button', { name: 'Place Order' }).click();
  const orderId = await page.getByTestId('order-id').textContent();
  console.log(`Captured Order ID: ${orderId}`);

  // Later, use it to find the order:
  await page.goto('/order-history');
  await expect(page.getByText(orderId!)).toBeVisible();
  ```
- ✅ **When to use:** Any workflow that generates unique/dynamic data you need to verify later in the same test.
- ⚠️ **Common mistake:** Assuming the Order ID text has no extra spaces/characters — always `.trim()` extracted text before comparing.

### 6.5 Mandatory Practice Flow
```text
Login → Search Product → Select Dynamic Product → Add to Cart
→ Checkout → Place Order → Capture Order ID
→ Open Order History → Find Order → Assert Order Details
```
> 🏆 **Task:** Build this flow completely from memory, without watching the video again. This is the real test of whether Sections 1–6 have sunk in.

---

# 📘 SECTION 7 — Smart GetBy Locators, Filtering & Test Runner
📌 **Reference: Section 7** — *Smart GetBy Locators, Filtering & Test Runner*

### 7.1 Master Locator Strategy (Priority Order)
- 📖 **Simple meaning:** When multiple locator options exist, follow this preference order because it produces the most stable, human-readable tests:
  ```text
  getByRole → getByLabel → getByTestId → getByText → CSS/XPath (last resort)
  ```
- ✅ **When to use:** Always start by asking "how would a screen-reader/user identify this element?" — that's usually `getByRole`.

### 7.2 Locator Chaining & `filter()`
- 📖 **Simple meaning:** You can narrow down a broad locator by chaining `.filter()` — e.g., "find the list item, but only the one that has this text inside it."
- 💻 **Example:**
  ```ts
  // Find the product row that contains "Wireless Mouse", then click its "Add to Cart" button
  await page.locator('.product-row')
      .filter({ hasText: 'Wireless Mouse' })
      .getByRole('button', { name: 'Add to Cart' })
      .click();

  // filter using another locator with `has`
  await page.locator('.product-row')
      .filter({ has: page.getByText('Out of Stock') })
      .count();
  ```
- ✅ **When to use:** This REPLACES the manual for-loop from Section 6.2! It's the modern, cleaner way to find a dynamic item in a list.
- ⚠️ **Common mistake:** Using `hasText` with a super generic word that matches multiple rows — be specific enough to match only one.

### 7.3 Locator Strictness
- 📖 **Simple meaning:** Playwright is "strict" by default — if your locator matches more than 1 element and you call an action like `.click()`, it throws an error instead of guessing which one you meant.
- ✅ **When to use:** This is a *safety feature*, not a bug — it stops you from accidentally clicking the wrong element.
- ⚠️ **Common mistake:** Getting a "strict mode violation" error and just adding `.first()` to silence it — instead, ask *why* multiple elements matched, and write a more specific locator.

### 7.4 Timeout Model — 4 Types (Very Important for Interviews!)
| Timeout Type | Purpose | Where it's set |
|---|---|---|
| **Action timeout** | Max time for one action (click, fill) to succeed | `page.click(sel, {timeout: 5000})` or config `use.actionTimeout` |
| **Assertion timeout** | Max time an `expect()` keeps retrying until true | `expect(locator).toBeVisible({timeout: 5000})` or config `expect.timeout` |
| **Test timeout** | Max time for one entire test | config `timeout: 30000` |
| **Global timeout** | Max time for the ENTIRE test run (all tests combined) | config `globalTimeout` |

- 💻 **Example:**
  ```ts
  export default defineConfig({
      timeout: 30000,              // test timeout
      globalTimeout: 600000,       // global timeout for whole run
      expect: { timeout: 5000 },   // assertion timeout
      use: { actionTimeout: 10000 }, // action timeout
  });
  ```
- ⚠️ **Common mistake:** Confusing "assertion timeout" with `waitForTimeout()` — assertion timeout keeps *retrying the check* until it's true (smart), while `waitForTimeout()` just pauses blindly (dumb).

### 7.5 Rewriting Tests with Modern Locators (Refactoring)
- 📖 **Simple meaning:** Going back to older tests (like your Section 6 E2E test) and replacing brittle CSS/XPath locators with `getByRole`, `getByText`, and `filter()`.
- ✅ **When to use:** This is a professional habit — as you learn better techniques, refactor old code instead of leaving it "as it works."

---
---

# PHASE 3 — DEBUGGING & COMPLEX UI

# 📘 SECTION 8 — Inspector, Trace Viewer & Codegen
📌 **Reference: Section 8** — *Inspector, Trace Viewer & Codegen*

### 8.1 Playwright Inspector
- 📖 **Simple meaning:** A visual debugging tool that pauses your test and lets you step through it action by action, like a video's pause/play button but for automation.
- 💻 **Example:**
  ```bash
  npx playwright test --debug
  # or inside code:
  await page.pause();
  ```
- ✅ **When to use:** When a test fails and you don't know why — pause it and inspect the exact state of the page.

### 8.2 Codegen (Record & Playback)
- 📖 **Simple meaning:** A tool that watches you click around a real website and auto-generates Playwright code for those actions.
- 💻 **Example:**
  ```bash
  npx playwright codegen https://example.com
  ```
- ✅ **When to use:** Great for quickly discovering locators for a new page, or as a starting draft.
- ⚠️ **🚨 Important (per your roadmap):** Codegen is a **starting point, not the final framework design**. Its auto-generated locators are often fragile CSS selectors — always review and improve them (usually switch to `getByRole`/`getByLabel`).

### 8.3 Trace Viewer
- 📖 **Simple meaning:** A "flight recorder" for your test — it records a full timeline: every action, screenshot, network call, and console log, so you can see EXACTLY what happened, step by step, after the test finished.
- 💻 **Example:**
  ```ts
  // playwright.config.ts
  use: { trace: 'on-first-retry' }
  ```
  ```bash
  npx playwright show-trace trace.zip
  ```
- ✅ **When to use:** Debugging CI failures where you can't watch the test live — the trace file shows you everything after the fact.
- ⚠️ **Common mistake:** Setting `trace: 'on'` for every run in a huge suite — this creates huge files and slows CI. Use `'on-first-retry'` or `'retain-on-failure'` instead.

### 8.4 HTML Reports, Screenshots, Videos, Logs
- 📖 **Simple meaning:** Additional evidence Playwright can capture automatically when tests fail — screenshots (image), videos (recording), logs (console/network text).
- 💻 **Example:**
  ```ts
  use: {
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
  }
  ```
- ✅ **When to use:** Always enable "only-on-failure" settings in CI — you get evidence without wasting storage on passing tests.

### 🧪 Debugging Practice (from roadmap)
Take one intentionally failing test and debug it using: **1) Inspector → 2) Trace → 3) Screenshot → 4) HTML report.** Doing this once teaches you the full debugging workflow for life.

---

# 📘 SECTION 9 — Assignment Checkpoint
📌 **Reference: Section 9** — *Assignment Checkpoint*

### 9.1 What This Section Is For
- 📖 **Simple meaning:** A checkpoint to test if you can build a real workflow (like a booking flow or refund logic) *independently*, without watching solution videos.
- ✅ **Assignment quality standard (from the roadmap):**
  - Good locators (semantic, not fragile)
  - Clear test structure (Arrange-Act-Assert)
  - Meaningful assertions
  - Proper synchronization (no `waitForTimeout`)
  - Reusable methods where it makes sense
  - Clean, descriptive naming
- 🏆 **Checkpoint rule:** If you cannot complete Assignment 1 without watching the solution, **go back and revise Sections 4–7** before continuing. This is not a failure — it's the system working correctly.

---

# 📘 SECTION 10 — Web Dialogs, Frames & Event Listeners
📌 **Reference: Section 10** — *Web Dialogs, Frames & Event Listeners*

### 10.1 Hidden vs Visible Elements
- 📖 **Simple meaning:** An element can exist in the HTML (`attached`) but not be visible to the user (`hidden` via CSS). Playwright can check both states separately.
- 💻 **Example:**
  ```ts
  await expect(page.getByText('Error message')).toBeHidden();
  await expect(page.getByText('Success message')).toBeVisible();
  const visible = await page.getByText('Optional Banner').isVisible();
  ```
- ✅ **When to use:** Testing conditional UI — like an error message that only shows after a failed form submission.

### 10.2 JavaScript Dialogs — Alert, Confirm, Prompt
- 📖 **Simple meaning:** Native browser popups (`alert()`, `confirm()`, `prompt()`) are NOT part of the HTML page, so normal locators can't find them. You must listen for the `dialog` event.
- 💻 **Example:**
  ```ts
  page.on('dialog', async (dialog) => {
      console.log(dialog.message()); // read the alert text
      await dialog.accept();          // click OK
      // await dialog.dismiss();      // or click Cancel
  });
  await page.getByRole('button', { name: 'Delete' }).click(); // triggers the alert
  ```
- ✅ **When to use:** Delete confirmations, "Are you sure?" popups, logout confirmations.
- ⚠️ **Common mistake:** Setting up the `page.on('dialog', ...)` listener AFTER clicking the button that triggers it — you must register the listener BEFORE the triggering action.

### 10.3 Frames (`iframe`)
- 📖 **Simple meaning:** An iframe is "a webpage embedded inside another webpage" (common for payment gateways, embedded videos, chat widgets). Playwright needs a special locator to "enter" the frame first.
- 💻 **Example:**
  ```ts
  const frame = page.frameLocator('#payment-frame');
  await frame.getByLabel('Card Number').fill('4111111111111111');
  await frame.getByRole('button', { name: 'Pay Now' }).click();
  ```
- ✅ **When to use:** Payment forms (Stripe/PayPal widgets), embedded third-party widgets.
- ⚠️ **Common mistake:** Trying to use `page.getByLabel(...)` directly on an element that's actually inside an iframe — it will never find it. You must go through `frameLocator()` first.

### 10.4 Event Listeners
- 📖 **Simple meaning:** Playwright lets you "listen" for browser events happening in the background — like new pages opening, console messages, or network requests.
- 💻 **Example:**
  ```ts
  page.on('console', msg => console.log('Browser console:', msg.text()));
  page.on('request', req => console.log('Request:', req.url()));
  ```
- ✅ **When to use:** Debugging, or capturing events like popups/downloads that happen asynchronously.

---
---

# PHASE 4 — API + NETWORK

# 📘 SECTION 11 — API Testing with Playwright + Web/API Mix
📌 **Reference: Section 11** — *API Testing with Playwright + Web/API Mix*

### 11.1 Why Combine API + UI Testing?
- 📖 **Simple meaning:** UI actions (clicking through 10 screens to set up test data) are SLOW. APIs can create that same data in one fast HTTP call. Use API for **setup**, UI for **validating the actual user experience**.
- 💻 **Example strategy:**
  ```text
  API → Create test data (fast)
  API → Authenticate (fast)
  UI  → Validate user experience (the actual thing you're testing)
  API → Verify backend result (fast confirmation)
  ```
- ✅ **When to use:** Whenever a test needs "setup steps" that aren't actually the thing you're testing (e.g., testing "view order details" shouldn't require manually placing an order through the UI every time — create it via API instead).

### 11.2 HTTP Basics: Methods, Status Codes, Headers, Body
- 📖 **Simple meaning:**
  - **GET** = read data. **POST** = create data. **PUT/PATCH** = update data. **DELETE** = remove data.
  - **Status codes:** `200` OK, `201` Created, `400` Bad Request, `401` Unauthorized, `404` Not Found, `500` Server Error.
  - **Headers** = metadata about the request (like `Authorization: Bearer token`).
  - **Body** = the actual data sent/received (usually JSON).
- ✅ **When to use:** Every API call requires understanding these — this is foundational web knowledge, not just Playwright-specific.

### 11.3 Playwright's `APIRequestContext`
- 📖 **Simple meaning:** Playwright's built-in tool for making API calls, separate from browser actions.
- 💻 **Example:**
  ```ts
  test('create order via API', async ({ request }) => {
      const response = await request.post('/api/orders', {
          data: { productId: 101, quantity: 2 },
          headers: { Authorization: `Bearer ${token}` },
      });
      expect(response.status()).toBe(201);
      const body = await response.json();
      console.log(body.orderId);
  });
  ```
- ✅ **When to use:** Any test that needs to call a REST API directly, whether for pure API testing or as UI test setup.
- ⚠️ **Common mistake:** Forgetting `await response.json()` — response body parsing is also async.

### 11.4 Parsing Response & Passing Token to Browser (Local Storage Injection)
- 📖 **Simple meaning:** After logging in via API (fast), you take the returned auth token and manually inject it into the browser's storage — so the UI thinks you're already logged in, skipping the slow UI login form.
- 💻 **Example:**
  ```ts
  const response = await request.post('/api/login', { data: { username, password } });
  const { token } = await response.json();

  await page.goto('/'); // must visit the domain first before setting storage
  await page.evaluate((t) => {
      localStorage.setItem('authToken', t);
  }, token);
  await page.reload(); // reload so app picks up the token
  ```
- ✅ **When to use:** Skipping repetitive login UI steps in every test — huge time saver across a large test suite.
- ⚠️ **Common mistake:** Trying to set `localStorage` before navigating to the page even once — `localStorage` belongs to a specific domain, so the browser must already be on that domain.

### 11.5 Refactoring API Calls into Utilities (`apiUtils.ts`)
- 📖 **Simple meaning:** Instead of writing raw `request.post(...)` calls in every test file, wrap them into reusable functions in a separate utility file.
- 💻 **Example:**
  ```ts
  // utils/apiUtils.ts
  export async function loginViaApi(request, username: string, password: string) {
      const res = await request.post('/api/login', { data: { username, password } });
      return (await res.json()).token;
  }
  ```
- ✅ **When to use:** As soon as you copy-paste the same API call into a 2nd test file — that's your sign to extract it into a utility.
- ⚠️ **Common mistake:** Mixing raw API logic directly inside UI test files — makes tests harder to read and maintain.

---

# 📘 SECTION 12 — Session Storage & Network Interception
📌 **Reference: Section 12** — *Session Storage & Network Interception*

### 12.1 Saving & Reusing Authentication State (`storageState`)
- 📖 **Simple meaning:** Instead of logging in for every single test, log in ONCE, save the browser's cookies/storage to a file, then reuse that file to start every future test already logged in.
- 💻 **Example:**
  ```ts
  // save state once (e.g. in a setup file)
  await page.context().storageState({ path: 'auth.json' });

  // reuse it in a new context for other tests
  const context = await browser.newContext({ storageState: 'auth.json' });
  ```
- ✅ **When to use:** ANY test suite where multiple tests need to be logged in — massive speed improvement.
- ⚠️ **Common mistake:** Re-logging in via UI at the start of every single test — wastes minutes across a large suite for no reason.

### 12.2 Network Interception — `page.route()`
- 📖 **Simple meaning:** Playwright can "intercept" (catch) network requests before they reach the server, and decide to let them through, change them, block them, or fake a response.
- 💻 **Example — Mock a response:**
  ```ts
  await page.route('**/api/products', async (route) => {
      await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify([{ id: 1, name: 'Mocked Laptop' }]),
      });
  });
  await page.goto('/products'); // page will show the FAKE data
  ```
- 💻 **Example — Abort a request:**
  ```ts
  await page.route('**/api/analytics', route => route.abort());
  ```
- 💻 **Example — Modify a request:**
  ```ts
  await page.route('**/api/user', async (route) => {
      const response = await route.fetch();
      const json = await response.json();
      json.isPremium = true; // force a scenario that's hard to set up normally
      await route.fulfill({ response, json });
  });
  ```
- ✅ **When to use:**
  - Testing UI behavior for rare scenarios (server error, empty list) without needing the real backend to produce them.
  - Speeding up tests by mocking slow third-party APIs.
  - Blocking ads/analytics calls that aren't relevant to your test.
- ⚠️ **Common mistake:** Mocking so much that your test stops testing anything real — only mock what's necessary to create the scenario; let the rest of the app behave normally.

### 12.3 Debugging API Steps + Trace Viewer for API logging
- 📖 **Simple meaning:** Trace Viewer (Section 8) also records every network request/response — extremely useful when debugging API-based tests.
- ✅ **When to use:** When an API-driven test fails and you need to see the exact request/response payload that was sent.

---
---

# PHASE 5 — FRAMEWORK ENGINEERING

# 📘 SECTION 13 — Playwright Fixtures & Custom Fixtures
📌 **Reference: Section 13** — *Playwright Fixtures & Custom Fixtures*

### 13.1 What Is a Fixture? (Deeper Explanation)
- 📖 **Simple meaning:** A fixture is a piece of "test environment setup" that Playwright prepares FOR you and hands over automatically — you just ask for it by name in your test's parameters. `page`, `context`, `browser`, `request` are all **built-in fixtures**. You can also create your OWN.
- ✅ **When to use:** Custom fixtures remove repeated setup code (like "log in" or "create test data") from every test.

### 13.2 Building a Custom Fixture (Login Fixture Example)
- 📖 **Simple meaning:** You extend Playwright's base `test` object to add your own fixture — e.g., a `loggedInPage` fixture that's already logged in before the test body even starts.
- 💻 **Example:**
  ```ts
  // fixtures/login.fixture.ts
  import { test as base } from '@playwright/test';

  type MyFixtures = { loggedInPage: any };

  export const test = base.extend<MyFixtures>({
      loggedInPage: async ({ page }, use) => {
          // 🔧 SETUP (runs before the test)
          await page.goto('/login');
          await page.getByLabel('Username').fill('admin');
          await page.getByLabel('Password').fill('Pass123');
          await page.getByRole('button', { name: 'Login' }).click();

          await use(page); // ▶️ hand control to the test now

          // 🧹 TEARDOWN (runs after the test, even if it fails)
          console.log('Test finished, cleaning up...');
      },
  });
  export { expect } from '@playwright/test';
  ```
  ```ts
  // usage in a test file
  import { test, expect } from '../fixtures/login.fixture';

  test('dashboard shows welcome message', async ({ loggedInPage }) => {
      await expect(loggedInPage.getByText('Welcome')).toBeVisible();
  });
  ```
- ✅ **When to use:** Any repeated setup (login, opening a specific page, creating a specific database record) needed across many tests.
- ⚠️ **Common mistake:** Forgetting to call `await use(page)` — the fixture won't correctly hand control to the test, and it may hang or fail confusingly.

### 13.3 Fixture Scope
- 📖 **Simple meaning:** Fixtures can run once per **test** (default) or once per **worker** (shared across many tests on the same worker — faster, but riskier for isolation).
- 💻 **Example:**
  ```ts
  loggedInPage: [async ({ page }, use) => { /* ... */ }, { scope: 'worker' }],
  ```
- ✅ **When to use:** `worker` scope for expensive setup that's safe to share (e.g., one API token used read-only across tests). Default `test` scope for anything that changes state.
- ⚠️ **Common mistake:** Using `worker` scope for something that gets modified by tests — tests could interfere with each other.

### 13.4 API Setup/Teardown via Fixtures
- 📖 **Simple meaning:** Combine API calls (fast) with fixtures to set up data before a test and clean it up after, automatically.
- 💻 **Example:**
  ```ts
  testUser: async ({ request }, use) => {
      const res = await request.post('/api/users', { data: { name: 'Temp User' } });
      const user = await res.json();
      await use(user);
      await request.delete(`/api/users/${user.id}`); // cleanup after test
  },
  ```
- ✅ **When to use:** Ensures your database doesn't fill up with junk test data over time.

---

# 📘 SECTION 14 — API Testing & Mocking Assignments
📌 **Reference: Section 14** — *API Testing & Mocking Assignments*

### 14.1 What These Assignments Prove
- 📖 **Simple meaning:** This section is pure practice — combining API setup, mocking (Section 12), and custom fixtures (Section 13) into real scenarios like:
  - Sandbox banner visibility controlled by an API-mocked flag
  - Cross-user access denial (User A can't see User B's booking)
  - Two fixtures chained together (login fixture + event-creation fixture)
- 💻 **Example — combining two fixtures:**
  ```ts
  export const test = base.extend<{ loggedInPage: any; createdEvent: any }>({
      loggedInPage: async ({ page }, use) => { /* login steps */ await use(page); },
      createdEvent: async ({ loggedInPage, request }, use) => {
          const res = await request.post('/api/events', { data: { title: 'Demo Event' } });
          await use(await res.json());
      },
  });
  ```
- ✅ **When to use:** This is exactly how real frameworks are built — fixtures depending on other fixtures.
- ⚠️ **Common mistake:** Testing "Access Denied" scenarios without a real second user's session — you need two separate logged-in contexts to properly test authorization boundaries.

---

# 📘 SECTION 15 — Visual Testing with Playwright
📌 **Reference: Section 15** — *Visual Testing with Playwright*

### 15.1 What Is Visual Testing?
- 📖 **Simple meaning:** Instead of checking text/values, you take a **screenshot** and compare it pixel-by-pixel against a saved "baseline" (approved) image. If anything visually changed (even 1 pixel of layout shift), the test fails.
- 💻 **Example:**
  ```ts
  await expect(page).toHaveScreenshot('homepage.png');               // full page
  await expect(page.locator('.product-card')).toHaveScreenshot('card.png'); // one element
  ```
- ✅ **When to use:** Checking that CSS/layout hasn't broken — great for design-sensitive pages (landing pages, marketing pages, component libraries).
- ⚠️ **Common mistake:** Using visual testing on pages with lots of dynamic content (dates, random data, ads) — causes constant false failures. Visual testing works best on stable, static-looking UI.

### 15.2 Baseline Images & Updating Them
- 📖 **Simple meaning:** The first time you run a visual test, Playwright saves the screenshot as the "correct" baseline. Future runs compare against it.
- 💻 **Example:**
  ```bash
  npx playwright test --update-snapshots  # re-approve new baseline after an intentional design change
  ```
- ⚠️ **Common mistake:** Blindly running `--update-snapshots` every time a test fails, without checking WHY it changed — you might be approving an actual bug as the new "correct" state.

---

# 📘 SECTION 16 — Excel Utilities + Uploads & Downloads
📌 **Reference: Section 16** — *Excel Utilities + Uploads & Downloads*

### 16.1 Reading/Writing Excel Files with `exceljs`
- 📖 **Simple meaning:** A library that lets your test read test data from an Excel file (rows/columns) and even write results back into it.
- 💻 **Example:**
  ```ts
  import ExcelJS from 'exceljs';

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('testdata.xlsx');
  const sheet = workbook.getWorksheet('Users');

  const username = sheet.getRow(2).getCell(1).value; // row 2, column 1
  console.log(username);

  sheet.getRow(2).getCell(3).value = 'Passed'; // write result
  await workbook.xlsx.writeFile('testdata.xlsx');
  ```
- ✅ **When to use:** Data-driven testing where test data is managed by non-technical team members in Excel (common in real companies).
- ⚠️ **Common mistake:** Hardcoding Excel row/column NUMBERS everywhere — if someone adds a column, all your tests break. Prefer reading by header name via a small helper utility.

### 16.2 File Uploads
- 📖 **Simple meaning:** Playwright can directly set files onto an `<input type="file">` element without needing to interact with the OS file-picker window.
- 💻 **Example:**
  ```ts
  await page.getByLabel('Upload Resume').setInputFiles('files/resume.pdf');
  ```
- ✅ **When to use:** Any file upload form — profile pictures, document uploads.

### 16.3 File Downloads
- 📖 **Simple meaning:** You must listen for the `download` event, because the file save happens outside the normal page lifecycle.
- 💻 **Example:**
  ```ts
  const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByText('Download Invoice').click(),
  ]);
  await download.saveAs('downloads/invoice.pdf');
  console.log(download.suggestedFilename());
  ```
- ⚠️ **Common mistake:** Clicking the download link first, then trying to catch the event — same "race condition" mistake as Section 4.6. Always set up `waitForEvent` before the triggering click.

---

# 📘 SECTION 17 — Page Object Model & Data-Driven Parameterization
📌 **Reference: Section 17** — *Page Object Model & Data-Driven Parameterization*

### 17.1 What Is the Page Object Model (POM)?
- 📖 **Simple meaning:** A design pattern where each web page gets its own class file containing that page's locators and actions. Your test files then just call simple, readable methods like `loginPage.login(user, pass)` instead of repeating raw Playwright code everywhere.
- 💻 **Example:**
  ```ts
  // pages/LoginPage.ts
  import { Page, Locator } from '@playwright/test';

  export class LoginPage {
      readonly page: Page;
      readonly usernameInput: Locator;
      readonly passwordInput: Locator;
      readonly loginButton: Locator;

      constructor(page: Page) {
          this.page = page;
          this.usernameInput = page.getByLabel('Username');
          this.passwordInput = page.getByLabel('Password');
          this.loginButton = page.getByRole('button', { name: 'Login' });
      }

      async login(username: string, password: string) {
          await this.usernameInput.fill(username);
          await this.passwordInput.fill(password);
          await this.loginButton.click();
      }
  }
  ```
  ```ts
  // test file
  import { LoginPage } from '../pages/LoginPage';

  test('valid login redirects to dashboard', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await page.goto('/login');
      await loginPage.login('admin', 'Pass123');
      await expect(page).toHaveURL('/dashboard');
  });
  ```
- ✅ **When to use:** As soon as your project has more than 3–4 test files — POM prevents the same locators from being copy-pasted (and duplicated bugs) everywhere.
- ⚠️ **Common mistake (🚨 per your roadmap):** Putting business assertions (`expect(...)`) INSIDE the Page Object. Page Objects should only contain **locators + actions**, not test verification logic — keep assertions in the test file.

### 17.2 Recommended Folder Structure
```text
tests/       → test files (.spec.ts)
pages/       → Page Object classes
fixtures/    → custom fixtures
utils/       → helper functions (API, Excel, etc.)
test-data/   → JSON data files
config/      → environment configs
```

### 17.3 Data-Driven Testing with JSON
- 📖 **Simple meaning:** Instead of writing 5 nearly-identical tests for 5 different users, write ONE test and loop it over an array of data.
- 💻 **Example:**
  ```json
  // test-data/users.json
  [
      { "username": "admin", "password": "Admin123", "expected": "/admin-dashboard" },
      { "username": "guest", "password": "Guest123", "expected": "/guest-dashboard" }
  ]
  ```
  ```ts
  import users from '../test-data/users.json';

  for (const user of users) {
      test(`login works for ${user.username}`, async ({ page }) => {
          const loginPage = new LoginPage(page);
          await page.goto('/login');
          await loginPage.login(user.username, user.password);
          await expect(page).toHaveURL(user.expected);
      });
  }
  ```
- ✅ **When to use:** Login variations, form validation with multiple invalid inputs, testing across multiple user roles.
- ⚠️ **Common mistake:** Copy-pasting a whole test 5 times for 5 datasets instead of looping — much harder to maintain (a small fix means editing 5 places instead of 1).

---

# 📘 SECTION 18 — Project Configuration & Robust Framework Design
📌 **Reference: Section 18** — *Project Configuration & Robust Framework Design*

### 18.1 The `use` Property Deep Dive
- 📖 **Simple meaning:** `use` in `playwright.config.ts` sets DEFAULT behavior for every test — like a template applied automatically.
- 💻 **Example:**
  ```ts
  use: {
      baseURL: 'https://staging.example.com',
      headless: process.env.CI ? true : false,
      viewport: { width: 1280, height: 720 },
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'on-first-retry',
      ignoreHTTPSErrors: true, // for self-signed SSL certs in test environments
  }
  ```
- ✅ **When to use:** Set once here instead of repeating in every test.

### 18.2 Mobile Device Emulation
- 📖 **Simple meaning:** Playwright can pretend to be a mobile phone (screen size, touch events, user-agent) using built-in device presets.
- 💻 **Example:**
  ```ts
  import { devices } from '@playwright/test';

  projects: [
      { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
      { name: 'Mobile Safari', use: { ...devices['iPhone 13'] } },
  ]
  ```
- ✅ **When to use:** Testing responsive designs without needing a real physical device.

### 18.3 Browser Projects (Cross-Browser Testing)
- 📖 **Simple meaning:** "Projects" let you run the same test suite against multiple browsers/configurations in one command.
- 💻 **Example:**
  ```ts
  projects: [
      { name: 'chromium', use: { browserName: 'chromium' } },
      { name: 'firefox', use: { browserName: 'firefox' } },
      { name: 'webkit', use: { browserName: 'webkit' } },
  ]
  ```
  ```bash
  npx playwright test --project=chromium
  ```
- ✅ **When to use:** Cross-browser compatibility testing before a release.

### 18.4 Environment-Specific Configuration (Local vs CI)
- 📖 **Simple meaning:** Behaving differently depending on whether the test runs on your laptop or in a CI pipeline (e.g., always headless + retries in CI, headed + no retries locally).
- 💻 **Example:**
  ```ts
  export default defineConfig({
      retries: process.env.CI ? 2 : 0,
      workers: process.env.CI ? 2 : undefined,
      use: { headless: !!process.env.CI },
  });
  ```
- ⚠️ **Common mistake:** Hardcoding settings that only make sense locally (like `headless: false`) and pushing that to CI, where there's no visual display — this breaks the pipeline.

---

# 📘 SECTION 19 — Retries, Serial/Parallel Execution & Tags
📌 **Reference: Section 19** — *Retries, Serial/Parallel Execution & Tags*

### 19.1 Retries
- 📖 **Simple meaning:** If a test fails, Playwright can automatically re-run it a set number of times before marking it truly "failed" — useful for genuinely flaky external factors (slow network).
- 💻 **Example:**
  ```ts
  export default defineConfig({ retries: 2 }); // retry failed tests up to 2 times
  ```
- ⚠️ **🚨 Important principle (from your roadmap):** Retries should **never** be used to hide bad automation. Correct order: **Find root cause → Fix synchronization/state/isolation → THEN add retries only where it makes sense** (e.g., known-flaky 3rd-party integrations).

### 19.2 Parallel vs Serial Execution
- 📖 **Simple meaning:** By default, Playwright runs different test FILES in parallel (multiple "workers"/browsers at once) for speed. "Serial" mode forces tests within one file to run in strict order, one after another.
- 💻 **Example:**
  ```ts
  test.describe.serial('checkout flow depends on order', () => {
      test('step 1: add to cart', async ({ page }) => { /* ... */ });
      test('step 2: checkout', async ({ page }) => { /* ... */ }); // depends on step 1
  });
  ```
- ✅ **When to use serial:** Only when tests genuinely depend on each other's state (rare, and often a sign your tests aren't well isolated).
- ⚠️ **Common mistake:** Writing tests that depend on execution order without using `.serial`, then wondering why parallel runs randomly fail — always design tests to be independent when possible.

### 19.3 Test Isolation & Race Conditions
- 📖 **Simple meaning:** Each test should set up its own data and not depend on leftover data from a previous test — this is what makes parallel execution safe.
- ⚠️ **Common mistake:** Multiple tests using the *same* hardcoded username, causing conflicts when run in parallel (both try to log into/modify the same account at once).

### 19.4 Tags & Filtered Execution
- 📖 **Simple meaning:** Labels attached to tests so you can run only a subset (e.g., only "smoke" tests before a quick deploy).
- 💻 **Example:**
  ```ts
  test('checkout works @smoke @regression', async ({ page }) => { /* ... */ });
  ```
  ```bash
  npx playwright test --grep @smoke
  ```
- ✅ **When to use:** Running a fast "smoke suite" on every commit, and a full "regression suite" nightly.

---
---

# PHASE 6 — REPORTING & CI/CD

# 📘 SECTION 20 — HTML & Allure Reporting + Jenkins Integration
📌 **Reference: Section 20** — *HTML & Allure Reporting + Jenkins Integration*

### 20.1 HTML Reports (Built-in)
- 📖 **Simple meaning:** Playwright's own visual report showing pass/fail status, screenshots, traces, and timing for every test — opens in your browser.
- 💻 **Example:**
  ```ts
  reporter: [['html', { open: 'never' }]]
  ```
  ```bash
  npx playwright show-report
  ```
- ✅ **When to use:** Default choice for most teams — no extra setup needed.

### 20.2 Allure Reports
- 📖 **Simple meaning:** A more advanced, customizable reporting tool (works with many frameworks, not just Playwright) — better for large teams needing detailed dashboards, history trends, and categorization.
- 💻 **Example:**
  ```bash
  npm install -D allure-playwright
  ```
  ```ts
  reporter: [['allure-playwright']]
  ```
- ✅ **When to use:** Enterprise projects needing richer reporting than the built-in HTML report.

### 20.3 Jenkins Integration
- 📖 **Simple meaning:** Jenkins is a popular CI/CD server that can automatically run your Playwright tests whenever code changes, and publish the results.
- 💻 **Example (npm script triggered by Jenkins):**
  ```json
  // package.json
  "scripts": { "test": "playwright test" }
  ```
- ✅ **When to use:** Companies with on-premise or self-hosted CI infrastructure (common in enterprises alongside cloud CI like GitHub Actions).

---

# 📘 SECTION 21 — TypeScript Basics & Refactoring to TypeScript
📌 **Reference: Section 21** — *TypeScript Basics & Refactoring Playwright to TypeScript*

### 21.1 Why TypeScript for Frameworks?
- 📖 **Simple meaning:** As your framework grows (many Page Objects, fixtures, utils), TypeScript's type-checking catches mistakes at write-time instead of at test-run-time — like a spell-checker for your code's logic.
- 💻 **Example (type-safe Page Object):**
  ```ts
  export class LoginPage {
      constructor(private readonly page: Page) {}   // access modifier + readonly
      async login(username: string, password: string): Promise<void> {
          await this.page.getByLabel('Username').fill(username);
      }
  }
  ```
- ✅ **When to use:** Any serious/long-term framework — TypeScript is the industry standard for Playwright frameworks today.

### 21.2 Access Modifiers: `public`, `private`, `readonly`
- 📖 **Simple meaning:** `public` = accessible from anywhere (default). `private` = only accessible inside that class. `readonly` = can be set once (usually in constructor) and never changed again.
- ✅ **When to use:** Mark Page Object locators as `readonly` (they never change after being set up) and internal helper methods as `private` if outside code shouldn't call them directly.

### 21.3 Type-Safe Fixtures
- 📖 **Simple meaning:** Declaring the "shape" of your custom fixtures so TypeScript can autocomplete and catch typos.
- 💻 **Example:**
  ```ts
  type MyFixtures = { loginPage: LoginPage };
  export const test = base.extend<MyFixtures>({
      loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
  });
  ```

---

# 📘 SECTION 22 — Cucumber Framework Integration
📌 **Reference: Section 22** — *Cucumber Framework Integration*

### 22.1 What Is BDD (Behavior-Driven Development) / Cucumber?
- 📖 **Simple meaning:** Writing tests in plain English sentences (called "Gherkin") that non-technical people (Product Managers, clients) can read and understand, while the actual Playwright code sits behind the scenes.
- 💻 **Example — Feature file (Gherkin):**
  ```gherkin
  Feature: Login
    Scenario: Successful login with valid credentials
      Given the user is on the login page
      When the user enters valid username and password
      Then the user should see the dashboard
  ```
  ```ts
  // step definitions — connects English to Playwright code
  Given('the user is on the login page', async function () {
      await this.page.goto('/login');
  });
  When('the user enters valid username and password', async function () {
      await this.page.getByLabel('Username').fill('admin');
      await this.page.getByLabel('Password').fill('Pass123');
      await this.page.getByRole('button', { name: 'Login' }).click();
  });
  Then('the user should see the dashboard', async function () {
      await expect(this.page).toHaveURL('/dashboard');
  });
  ```
- ✅ **When to use:** Teams where business stakeholders need to read/write test scenarios, or when tests double as living documentation.
- ⚠️ **Career note (from your roadmap):** Know **why and when** a team chooses Cucumber — not every project needs it. It adds structure overhead that's only worth it for the collaboration benefit.

### 22.2 Key Cucumber Concepts
| Term | Meaning |
|---|---|
| **Feature file** | The `.feature` file with Gherkin scenarios |
| **Scenario** | One test case in plain English |
| **Step definitions** | Code that maps English steps to Playwright actions |
| **Hooks** | Code that runs before/after scenarios (like fixtures) |
| **World** | Shared object/context passed between steps |
| **Tags** | Labels on scenarios (`@smoke`) to filter execution |
| **Scenario Outline** | A templated scenario run with multiple data sets (like data-driven testing) |

---

# 📘 SECTION 23 — E2E Playwright DevOps with Azure Cloud + GitHub Actions
📌 **Reference: Section 23** — *E2E Playwright DevOps with Azure Cloud + GitHub Actions*

### 23.1 What Is QAOps?
- 📖 **Simple meaning:** Applying DevOps principles (automation, continuous integration) specifically to the Quality Assurance/testing process — making sure tests run automatically as part of the software delivery pipeline, not manually by a person.
- 💻 **Flow:**
  ```text
  Developer → Git → Pull Request → CI Pipeline → Playwright Tests
  → Cloud Browsers → Reports/Artifacts → Quality Gate (block bad merges)
  ```

### 23.2 GitHub Actions — Basic Workflow File
- 📖 **Simple meaning:** A `.yml` file that tells GitHub "when code is pushed/PR'd, run these commands automatically" (like installing dependencies and running your Playwright tests).
- 💻 **Example:**
  ```yaml
  # .github/workflows/playwright.yml
  name: Playwright Tests
  on:
    push:
      branches: [main]
    pull_request:
      branches: [main]
  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with: { node-version: '20' }
        - run: npm ci
        - run: npx playwright install --with-deps
        - run: npx playwright test
        - uses: actions/upload-artifact@v4
          if: always()
          with:
            name: playwright-report
            path: playwright-report/
  ```
- ✅ **When to use:** Any GitHub-hosted project — this is the most common CI setup for Playwright today.
- ⚠️ **Common mistake:** Forgetting `npx playwright install --with-deps` in the pipeline — CI machines don't have browsers pre-installed like your laptop does.

### 23.3 Azure Playwright Cloud Workspace
- 📖 **Simple meaning:** A managed cloud service to run Playwright tests on remote browsers at scale (useful when you need way more parallel workers than your CI machine offers).
- ✅ **When to use:** Large test suites needing massive parallelization beyond local CI capacity.

---
---

# PHASE 7 — AI-ASSISTED PLAYWRIGHT

# 📘 SECTION 24 — Playwright Agents, MCP & GitHub Copilot
📌 **Reference: Section 24** — *Playwright Agents, MCP & GitHub Copilot*

### 24.1 What Is MCP (Model Context Protocol)?
- 📖 **Simple meaning:** A standard way for AI models (like Claude or Copilot) to connect to external tools (like a real browser) so the AI can actually "see" and "control" a webpage, not just write text about it.
- ✅ **When to use:** Whenever you want an AI assistant to autonomously interact with a real browser to generate or fix tests.

### 24.2 Playwright's Built-in Agents (Planner, Generator, Healing)
| Agent | Job |
|---|---|
| **Planner Agent** | Reads the app and creates a test plan (list of scenarios) |
| **Generator Agent** | Turns the plan into actual Playwright test code |
| **Healing Agent** | Detects failing tests (e.g., due to changed locators) and attempts to auto-repair them |

- 💻 **Example workflow:**
  ```text
  You: "Create tests for the checkout flow"
  → Planner Agent creates a test plan
  → Generator Agent writes Playwright code
  → You run the tests
  → Healing Agent fixes broken locators when the UI changes slightly
  ```
- ⚠️ **🚨 Professional rule (from your roadmap):** AI-generated tests STILL require human review for correct assertions, reliable locators, business understanding, and security awareness. AI increases productivity — it does NOT replace engineering judgment.

---

# 📘 SECTION 25 — Playwright CLI with Claude Code AI Agent
📌 **Reference: Section 25** — *Playwright CLI with Claude Code AI Agent*

### 25.1 Playwright CLI vs MCP — What's the Difference?
- 📖 **Simple meaning:**
  - **Playwright CLI** = command-line tools you run yourself (`npx playwright test`, `codegen`, etc.) — YOU are in control.
  - **MCP** = a live connection that lets an AI agent control the browser autonomously, step by step, based on your prompts.
- ✅ **When to use CLI + Claude Code:** Asking an AI coding assistant (like Claude Code) to analyze an app, propose test scenarios, generate a test file, and even run it — while you supervise and refine the output.

### 25.2 Recommended AI-Assisted Workflow (from your roadmap)
```text
1. Analyze the application
2. Propose test scenarios
3. Generate a test
4. Review the locator strategy
5. Improve assertions
6. Execute the test
7. Debug the failure
8. Refactor the final test manually
```
- ⚠️ **Common mistake:** Treating AI output as "final" — always do step 8 (manual refactor/review). AI is a fast first draft, not a replacement for your engineering judgment.

---
---

# 🎯 INTERVIEW CHEAT SHEET

If you're prepping for a Playwright/SDET interview, be ready to explain each of these **in plain English with an example**:

| # | Topic | One-line answer you should be able to give |
|---|---|---|
| 1 | Locators | Prefer `getByRole`/`getByLabel`/`getByTestId` over CSS/XPath for stability |
| 2 | Auto-waiting | Playwright waits for actionability (visible, stable, enabled) before acting |
| 3 | Assertions | `expect()` retries automatically until the condition is true or times out |
| 4 | Browser vs Context vs Page | Browser = app instance, Context = isolated session, Page = one tab |
| 5 | Fixtures | Reusable setup/teardown injected automatically into tests |
| 6 | Page Object Model | One class per page: locators + actions, no assertions inside |
| 7 | Parameterization | Loop a test over an array of data instead of duplicating tests |
| 8 | APIRequestContext | Playwright's built-in tool for making raw HTTP calls |
| 9 | API + UI hybrid | Use API for fast setup, UI for validating real user experience |
| 10 | Storage state | Save login session once, reuse across tests to skip repeated logins |
| 11 | Network interception | `page.route()` to mock, modify, or abort network requests |
| 12 | Timeouts | 4 types: action, assertion, test, global — know the difference |
| 13 | Retries & flaky tests | Fix root cause first; retries are not a fix for bad automation |
| 14 | Parallel execution | Different files run in parallel across "workers" by default |
| 15 | Configuration | `playwright.config.ts` controls baseURL, timeouts, projects, reporters |
| 16 | Projects/multi-browser | Run the same suite across Chromium/Firefox/WebKit/mobile |
| 17 | Trace Viewer | Post-run "flight recorder" for debugging CI failures |
| 18 | HTML reports | Built-in visual pass/fail report with evidence |
| 19 | CI/CD | GitHub Actions/Jenkins auto-run tests on push/PR |
| 20 | TypeScript | Adds type safety, catches mistakes before running tests |
| 21 | Cucumber/BDD | Plain-English scenarios mapped to code via step definitions |
| 22 | Mocking | Fake a network response to test hard-to-reproduce scenarios |
| 23 | Debugging | Inspector → Trace → Screenshot → HTML report, in that order |

---

# ⚠️ BEGINNER MISTAKES MASTER LIST

Keep this list pinned somewhere visible — these are the mistakes that separate freshers from professionals:

- ❌ Using `page.waitForTimeout()` everywhere instead of waiting for real conditions
- ❌ Using XPath for every element instead of semantic locators
- ❌ Writing huge, unfocused test files
- ❌ Duplicating login code in every test instead of using a fixture
- ❌ Putting assertions inside Page Object classes
- ❌ Hardcoding test data directly in test files
- ❌ Writing tests that depend on execution order
- ❌ Using retries to hide flaky/broken tests
- ❌ Ignoring API testing entirely and only doing UI automation
- ❌ Avoiding TypeScript because "JavaScript is easier"
- ❌ Copying Codegen output without reviewing/cleaning the locators
- ❌ Writing all assertions only at the very end instead of at meaningful points
- ❌ Ignoring trace/report evidence when debugging CI failures
- ❌ Trying to build a "framework" before understanding Playwright fundamentals

---

# 🏁 Final Word from Your Tutor

> You don't "know" Playwright because you finished the videos.
> You know Playwright when you can take a brand-new website you've never seen,
> and build reliable tests for it — locators, assertions, waits, API setup,
> POM, fixtures, and CI — **without watching anyone else do it first.**
>
> Revisit this file after every section. Re-read the "common mistakes" every
> time you're stuck — most beginner bugs come from that list.

