# 🎭 Playwright Sections 8–13 — Detailed Master Notes

## 🌟 Fresher-Friendly Reference | Proper Definitions • Why • How • Syntax • Examples • Mistakes • Interview Questions

> **Goal of these notes:** Understand every concept deeply enough that you can explain it in an interview, write the code yourself, debug failures, and use the concept in a real automation project.

---

# 🗺️ Sections 8–13 at a Glance

```text
SECTION 8
Debugging + Inspector + Codegen + Trace Viewer
        ↓
SECTION 9
Practical Assignments + Business Scenario Thinking
        ↓
SECTION 10
Visibility + JavaScript Dialogs + Frames
        ↓
SECTION 11
API Testing + Authentication + Web/API Hybrid
        ↓
SECTION 12
Session Storage + Network Monitoring + Interception
        ↓
SECTION 13
Fixtures + Custom Fixtures + Setup/Teardown
        ↓
🔥 Real-World Playwright Automation Skills
```

---

# 📚 Complete Topic Map

| Section | Lecture | Topic |
|---|---:|---|
| 8 | 48 | Playwright Inspector and debugging |
| 8 | 49 | Codegen: record and generate automation |
| 8 | 50 | Trace Viewer, HTML reports, logs and screenshots |
| 9 | 51 | Practice application / assignment checkpoint |
| 9 | — | Full Booking Flow with Event Creation |
| 9 | — | Refund Eligibility Check |
| 10 | 52 | Validate hidden/displayed elements |
| 10 | 53 | JavaScript Alert popups |
| 10 | 54 | Frames / iframes |
| 11 | 55 | API integration calls for web tests |
| 11 | 56 | Playwright API request and response |
| 11 | 57 | Parse API response and use token in browser storage |
| 11 | 58 | Create order through API + UI |
| 11 | 59 | End-to-end Web + API validation |
| 11 | 60 | Prerequisite / concept review |
| 11 | 61 | Refactor API calls into utilities |
| 11 | 62 | Continue API utility refactoring |
| 11 | 63 | APIUtils code reference |
| 11 | 64 | Web/API integration code reference |
| 12 | 65 | Save and reuse session storage |
| 12 | 66 | Debug API steps in Visual Studio Code |
| 12 | 67 | Trace Viewer for API request/response analysis |
| 12 | 68 | Intercept network responses |
| 12 | 69 | `route()` and its parameters |
| 12 | 70 | Code reference |
| 12 | 71 | Intercept network requests |
| 12 | 72 | Code reference |
| 12 | 73 | Abort network requests |
| 13 | 74 | Playwright Fixtures |
| 13 | 75 | UI Login Fixture + API Fixture |
| 13 | 76 | Custom Fixtures: data, UI, API + setup/teardown |

---

# 8️⃣ SECTION 8 — INSPECTOR, CODEGEN & TRACE VIEWER

## 🎯 What You Will Learn

Section 8 is about **understanding what your test is doing and how to find the reason when it fails**.

Before this section:

```text
Write test → Run test → See pass/fail
```

After this section:

```text
Write test
    ↓
Run test
    ↓
Failure
    ↓
Debug
    ↓
Inspect action
    ↓
Inspect locator
    ↓
Inspect screenshot / trace / logs
    ↓
Find root cause
    ↓
Fix
```

---

# 8.1 What Is Debugging?

## Definition

**Debugging is the systematic process of finding, understanding and fixing the reason why a program or automated test is not behaving as expected.**

In Playwright, debugging means investigating things such as:

- Why did the locator fail?
- Why did the click not happen?
- Why did the page not navigate?
- Why was an element hidden?
- Why did an API request fail?
- Why did the assertion fail?
- Why did the test time out?

### Important Difference

```text
Failure ≠ Root Cause
```

Example:

```text
Test failed
    ↓
"Dashboard" not visible
```

The real problem could be:

```text
Login button didn't click
OR
Login API returned 401
OR
Wrong user credentials
OR
Wrong locator
OR
Application bug
```

Debugging helps find the actual cause.

---

# 8.2 Playwright Inspector

## Proper Definition

**Playwright Inspector is an interactive debugging tool that allows you to pause a Playwright test and inspect the test execution, locator information and browser state step-by-step.**

It is especially useful while developing or troubleshooting tests.

---

## 8.3 `page.pause()`

The simplest way to pause execution is:

```js
await page.pause();
```

Example:

```js
import { test } from '@playwright/test';

test('Login test', async ({ page }) => {

    await page.goto('https://example.com');

    await page.pause();

    await page.getByLabel('Username')
        .fill('testuser');

});
```

When execution reaches `page.pause()`, the test stops at that point so you can inspect the page and continue manually.

---

## 8.4 Why Use `page.pause()`?

Use it when:

- You are developing a new test.
- You are unsure about a locator.
- You want to inspect the current page.
- You want to understand the current UI state.
- You want to step through actions.
- You want to debug a failing flow.

---

## 8.5 Inspector Mental Model

```text
Test
 ↓
Open page
 ↓
Perform some actions
 ↓
page.pause()
 ↓
🛑 Execution paused
 ↓
Inspect browser + locator
 ↓
Continue
 ↓
Remaining test executes
```

---

# 8.6 Debugging a Locator

Suppose:

```js
await page.getByRole('button', {
    name: 'Login'
}).click();
```

does not work.

Instead of randomly changing the locator, pause:

```js
await page.pause();
```

Then inspect:

```text
Is the button actually present?
        ↓
Is the accessible name "Login"?
        ↓
Is it inside an iframe?
        ↓
Is another element covering it?
        ↓
Is the page fully loaded?
```

This is much better than adding random waits.

---

# 8.7 Codegen

## Definition

**Playwright Codegen is a browser automation generation tool that records your browser interactions and produces Playwright code representing those interactions.**

Think:

```text
Human Action
     ↓
Codegen observes it
     ↓
Playwright code
```

---

## 8.8 Codegen Example

Suppose you manually:

```text
Open website
 ↓
Click Login
 ↓
Enter username
 ↓
Enter password
 ↓
Click Submit
```

Codegen can produce Playwright actions similar to:

```js
await page.goto('https://example.com');

await page.getByRole('button', {
    name: 'Login'
}).click();

await page.getByLabel('Username')
    .fill('testuser');

await page.getByLabel('Password')
    .fill('password');

await page.getByRole('button', {
    name: 'Submit'
}).click();
```

---

# 8.9 Why Codegen Is Useful

Codegen is useful for:

### 1. Learning

It helps beginners understand Playwright syntax.

### 2. Locator discovery

It can suggest locators based on the page.

### 3. Faster prototyping

You can quickly create the first version of a test.

### 4. Understanding application behavior

You can record a real user flow and inspect the generated steps.

---

# 8.10 Codegen Is NOT a Replacement for Learning

A common fresher mistake is:

```text
Record everything
 ↓
Copy generated code
 ↓
Submit project
```

This may create fragile automation.

Instead:

```text
Codegen
   ↓
Starting point
   ↓
Understand generated locator
   ↓
Review
   ↓
Improve
   ↓
Maintainable test
```

---

# 8.11 Locator Review After Codegen

Suppose Codegen gives:

```js
page.locator('div:nth-child(4)').click();
```

Ask:

> Is there a better user-facing locator?

Maybe:

```js
page.getByRole('button', {
    name: 'Login'
}).click();
```

is clearer and more stable.

---

# 8.12 Trace Viewer

## Definition

**Trace Viewer is a Playwright tool used to inspect recorded details of a test run so that you can understand what happened during execution and investigate failures.**

A trace can provide a much deeper view than a simple pass/fail result.

---

## 8.13 Why Trace Viewer Is Important

Imagine this:

```text
Test failed after 40 seconds.
```

A simple error message may not immediately tell you what happened.

A trace can help you investigate:

```text
Step 1 → passed
Step 2 → passed
Step 3 → passed
Step 4 → failed
             ↓
        Screenshot
             ↓
        DOM state
             ↓
        Network information
             ↓
        Timing
```

---

## 8.14 What Can You Inspect?

Depending on the trace configuration and test run, you can investigate:

- Actions
- Action timing
- Screenshots
- DOM snapshots / page state information
- Network requests and responses
- Console messages
- Errors
- Test steps
- Before/after state

---

# 8.15 Trace Mental Model

```text
Test starts
    ↓
Actions happen
    ↓
Trace records execution details
    ↓
Test fails
    ↓
Open Trace Viewer
    ↓
Select failed step
    ↓
Inspect what happened
    ↓
Find root cause
```

---

# 8.16 HTML Report

## Definition

**The Playwright HTML report is a visual test report that summarizes test execution and provides details for individual tests, including failures and related debugging information.**

Typical result:

```text
Playwright Test Results

✓ Login Test
✓ Product Search
✗ Checkout Test
✓ Logout Test
```

Clicking a failed test can provide more information.

---

# 8.17 Logs and Screenshots

Logs tell you:

```text
What happened?
What values were used?
What response was received?
```

Screenshots tell you:

```text
What did the page look like?
```

Example:

```js
await page.screenshot({
    path: 'failure.png'
});
```

In real projects, screenshots are often captured automatically for failures through configuration/reporting.

---

# ⭐ Section 8 — Fresher Interview Answer

### Q: How do you debug a Playwright test?

> "First I reproduce the failure and understand which step is failing. During development I can use `page.pause()` and Playwright Inspector to debug interactively. For deeper investigation I use the HTML report and Trace Viewer to inspect actions, timing, screenshots, network activity and other recorded information. I then identify the root cause and fix the locator, synchronization, data or application issue accordingly."

---

# 9️⃣ SECTION 9 — ASSIGNMENT CHECKPOINT

## 🎯 Purpose

This section is not mainly about learning a new Playwright API.

It is about proving:

> **Can I take a real requirement and automate it independently?**

---

# 9.1 What Is a Test Scenario?

## Definition

**A test scenario is a high-level description of a behavior or business condition that needs to be tested.**

Example:

```text
Verify that a user can create a booking successfully.
```

A scenario can then be converted into detailed test steps.

---

# 9.2 What Is a Business Flow?

## Definition

**A business flow is the sequence of actions through which a user or business process completes a particular task in an application.**

Example:

```text
Search
 ↓
Select
 ↓
Enter details
 ↓
Confirm
 ↓
Verify
```

---

# 9.3 Assignment Approach

Before coding:

```text
Requirement
    ↓
Understand expected behavior
    ↓
Identify test data
    ↓
Break into steps
    ↓
Identify UI components
    ↓
Choose locators
    ↓
Automate
    ↓
Assert
    ↓
Debug
```

---

# 9.4 Assignment Checklist

Before writing code, ask:

### Application

- What is the starting URL?
- What is the starting state?
- Is login required?

### Data

- Which user?
- Which booking?
- Which dates?
- Which IDs?
- Which values?

### UI

- Which fields?
- Which buttons?
- Which dropdowns?
- Which tables?
- Which dynamic elements?

### Special Handling

- New tab?
- Dialog?
- iframe?
- API?
- Dynamic loading?

### Validation

- What should happen?
- What message should appear?
- What value should change?
- What should be displayed/hidden?

---

# 9.5 Do Not Copy the Solution First

Use this method:

```text
Attempt yourself
     ↓
Run
     ↓
Debug
     ↓
Try fixing
     ↓
Only then compare with reference
```

This creates actual problem-solving ability.

---

# 🔟 SECTION 10 — VISIBILITY, JAVASCRIPT DIALOGS & FRAMES

---

# 10.1 Visibility Assertions

## Definition

**A visibility assertion verifies whether an element is visible or hidden according to Playwright's visibility checks.**

Visible:

```js
await expect(locator).toBeVisible();
```

Hidden:

```js
await expect(locator).toBeHidden();
```

---

# 10.2 Why Visibility Assertions Matter

Suppose a user clicks:

```text
Submit
```

The test should verify:

```text
Submit
 ↓
Success message appears
```

Not just:

```text
Submit clicked
```

Example:

```js
await page.getByRole('button', {
    name: 'Submit'
}).click();

await expect(
    page.getByText('Success')
).toBeVisible();
```

---

# 10.3 `toBeVisible()` vs `toBeHidden()`

| Assertion | Meaning |
|---|---|
| `toBeVisible()` | Element is expected to be visible |
| `toBeHidden()` | Element is expected to be hidden |

Example:

```js
await expect(
    page.getByText('Loading...')
).toBeHidden();
```

---

# 10.4 JavaScript Dialogs

## Definition

**A JavaScript dialog is a browser-level dialog generated by JavaScript using functions such as `alert()`, `confirm()` and `prompt()`.**

These are different from HTML/CSS modal dialogs created as normal page elements.

---

# 10.5 Alert

JavaScript:

```js
alert('Hello');
```

Typical browser behavior:

```text
┌──────────────────────┐
│ Hello                │
│                      │
│               [ OK ] │
└──────────────────────┘
```

The user can generally accept it.

---

# 10.6 Confirm

JavaScript:

```js
confirm('Are you sure?');
```

Typical behavior:

```text
[ OK ] [ Cancel ]
```

The test can accept or dismiss it.

---

# 10.7 Prompt

JavaScript:

```js
prompt('Enter your name');
```

A prompt allows the user to provide a value.

Example:

```text
Enter your name:
[ Garvit        ]

[ OK ] [ Cancel ]
```

---

# 10.8 Playwright Dialog Event

Playwright exposes JavaScript dialogs through the `dialog` event.

Example:

```js
page.on('dialog', async dialog => {

    console.log(dialog.message());

    await dialog.accept();
});
```

---

# 10.9 Why Is the Event Important?

A JavaScript dialog is not a normal HTML element.

Therefore, don't try:

```js
page.getByText('OK').click();
```

for a native JavaScript alert.

Instead, handle the browser dialog:

```js
page.on('dialog', async dialog => {
    await dialog.accept();
});
```

---

# 10.10 `dialog.accept()`

## Definition

`dialog.accept()` accepts the dialog.

```js
await dialog.accept();
```

For a prompt, you can provide input:

```js
await dialog.accept('Garvit');
```

---

# 10.11 `dialog.dismiss()`

## Definition

`dialog.dismiss()` dismisses the dialog.

```js
await dialog.dismiss();
```

For a confirm dialog, this is generally equivalent to selecting Cancel.

---

# 10.12 `dialog.message()`

Returns the message displayed by the dialog.

```js
console.log(dialog.message());
```

Useful for assertions:

```js
page.on('dialog', async dialog => {

    expect(dialog.message())
        .toContain('Are you sure?');

    await dialog.accept();
});
```

---

# 10.13 `dialog.type()`

Returns the dialog type.

```js
console.log(dialog.type());
```

Possible types include:

```text
alert
confirm
prompt
beforeunload
```

---

# 10.14 `dialog.defaultValue()`

For prompt dialogs, this can provide the dialog's default value when applicable.

```js
console.log(dialog.defaultValue());
```

---

# 10.15 Complete Dialog Example

```js
import { test, expect } from '@playwright/test';

test('Handle alert', async ({ page }) => {

    await page.goto('https://example.com');

    page.on('dialog', async dialog => {

        console.log('Type:',
            dialog.type());

        console.log('Message:',
            dialog.message());

        await dialog.accept();
    });

    await page.getByRole('button', {
        name: 'Show Alert'
    }).click();

});
```

---

# 10.16 Important Dialog Rule

Register the handler **before** the action that triggers the dialog.

Correct:

```js
page.on('dialog', async dialog => {
    await dialog.accept();
});

await page.getByRole('button', {
    name: 'Show Alert'
}).click();
```

Why?

Because the action may immediately trigger the dialog. Your handler should already be ready.

---

# 10.17 Iframe / Frame

## Definition

**An iframe (inline frame) is an HTML element that embeds another HTML document inside the current webpage.**

Example:

```text
MAIN PAGE
│
├── Header
├── Product content
├── Footer
│
└── iframe
      │
      ├── Input
      ├── Button
      └── Other content
```

---

# 10.18 Why Frames Need Special Handling

The content inside the iframe belongs to another document.

So this:

```js
page.getByLabel('Card Number')
```

may not find a field that actually exists inside a frame.

You first need to target the frame.

---

# 10.19 `frameLocator()`

Playwright provides:

```js
page.frameLocator('#payment-frame')
```

Then locate inside it:

```js
const frame =
    page.frameLocator('#payment-frame');

await frame.getByLabel('Card Number')
    .fill('4111111111111111');
```

---

# 10.20 Frame Mental Model

```text
Page
 ↓
Frame
 ↓
Element
 ↓
Action
```

---

# 10.21 Nested Frames

Sometimes a frame can contain another frame:

```text
Main Page
   ↓
Frame A
   ↓
Frame B
   ↓
Button
```

The locator approach can be chained to reach the required nested content.

---

# 10.22 Frame Mistakes

### Mistake 1

Trying to use a main-page locator for an iframe element.

### Mistake 2

Assuming every popup is an iframe.

Remember:

```text
JavaScript Alert ≠ iframe
HTML Modal ≠ iframe
New Tab ≠ iframe
```

These are different concepts.

---

# ⭐ Section 10 Interview Answer

> "A JavaScript dialog is a browser-level popup generated by JavaScript such as alert, confirm or prompt. In Playwright I handle it using the `dialog` event and methods such as `accept()` or `dismiss()`. An iframe is an embedded HTML document, and Playwright provides `frameLocator()` to interact with elements inside it."

---

# 1️⃣1️⃣ SECTION 11 — API TESTING + WEB/API HYBRID

## 🎯 Why This Section Is Important

This section moves your knowledge from:

```text
Browser-only automation
```

to:

```text
Browser + Backend automation
```

This is an important real-world testing skill.

---

# 11.1 What Is an API?

## Definition

**An API (Application Programming Interface) is a defined way for software components to communicate with each other.**

For web applications, an API often allows the frontend to communicate with backend services over HTTP.

Example:

```text
Browser
   ↓
HTTP Request
   ↓
Backend API
   ↓
Database / Business Logic
   ↓
HTTP Response
   ↓
Browser
```

---

# 11.2 What Is API Testing?

## Proper Definition

**API testing is the process of validating API endpoints by sending requests and verifying the returned response, including status, headers, body and expected business behavior.**

Unlike UI testing, the browser interface does not need to perform every operation.

---

# 11.3 Why API Testing Is Useful in UI Automation

Suppose you need an order before testing Order History.

UI setup:

```text
Login
 ↓
Search
 ↓
Product
 ↓
Cart
 ↓
Checkout
 ↓
Place Order
 ↓
Order History
```

This may be slow.

API setup:

```text
API Login
 ↓
API Create Order
 ↓
Get Order ID
 ↓
Open UI
 ↓
Order History
 ↓
Verify Order
```

The second approach can remove unnecessary UI setup.

---

# 11.4 API + UI Does Not Mean "Never Use UI"

Use UI when you need to validate:

```text
Button behavior
Form behavior
Visual state
Navigation
User interaction
UI messages
```

Use API when it is more efficient to:

```text
Create data
Prepare state
Authenticate
Clean data
Validate backend behavior
```

---

# 11.5 HTTP Request

An HTTP request normally contains:

```text
Method
URL
Headers
Query Parameters
Body
```

Example:

```text
POST /api/orders

Headers:
Authorization: Bearer <token>

Body:
{
  "productId": 101
}
```

---

# 11.6 HTTP Methods

| Method | Common Meaning |
|---|---|
| GET | Retrieve data |
| POST | Create a resource / submit data |
| PUT | Replace/update a resource |
| PATCH | Partially update a resource |
| DELETE | Delete a resource |

---

# 11.7 API Response

A response commonly contains:

```text
Status Code
Headers
Body
```

Example:

```json
{
    "orderId": "12345",
    "status": "Created"
}
```

---

# 11.8 Status Codes

Important categories:

| Status | Meaning |
|---:|---|
| 2xx | Successful request |
| 3xx | Redirection |
| 4xx | Client-side/request problem |
| 5xx | Server-side problem |

Examples:

```text
200 → OK
201 → Created
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
500 → Internal Server Error
```

---

# 11.9 API Request in Playwright

Playwright provides the APIRequestContext/request fixture for sending API calls.

Example:

```js
test('Get products', async ({ request }) => {

    const response =
        await request.get('/api/products');

    console.log(
        response.status()
    );

});
```

---

# 11.10 POST Example

```js
const response =
    await request.post('/api/orders', {
        data: {
            productId: 101,
            quantity: 1
        }
    });
```

Then inspect:

```js
console.log(response.status());

const body =
    await response.json();

console.log(body);
```

---

# 11.11 API Assertions

Don't only print the response.

Verify it.

```js
expect(response.ok()).toBeTruthy();
```

Or:

```js
expect(response.status()).toBe(201);
```

Then validate the response body:

```js
const body = await response.json();

expect(body.orderId).toBeTruthy();
```

---

# 11.12 What Is an Authentication Token?

## Definition

**An authentication token is a value that a client can use to represent an authenticated identity or authorization state when communicating with a service.**

Typical flow:

```text
Login API
   ↓
Credentials
   ↓
Authentication successful
   ↓
Token
   ↓
Subsequent requests
```

---

# 11.13 Token-Based Flow

```text
POST /login
      ↓
Response
      ↓
{
   "token": "abc123"
}
      ↓
Use token
      ↓
Authorization header
      ↓
Protected API
```

A common header form is:

```text
Authorization: Bearer <token>
```

The exact authentication mechanism depends on the application.

---

# 11.14 Parsing API Response

Suppose:

```json
{
    "token": "abc123",
    "user": "testuser"
}
```

In Playwright:

```js
const response =
    await request.post('/api/login', {
        data: {
            username: 'testuser',
            password: 'password'
        }
    });

const body =
    await response.json();

const token =
    body.token;
```

Now:

```text
body
 ↓
token
```

can be used for the next step.

---

# 11.15 Local Storage and Authentication

Some applications store authentication-related data in browser Local Storage.

Conceptual flow:

```text
API Login
   ↓
Get Token
   ↓
Open Browser
   ↓
Set required browser state
   ↓
Application reads state
   ↓
Authenticated UI
```

### Important

Never assume every application stores authentication in Local Storage.

Authentication may use:

```text
Cookies
Local Storage
Session Storage
In-memory state
Other mechanisms
```

Always inspect the application.

---

# 11.16 What Is Web + API Hybrid Testing?

## Proper Definition

**Web + API hybrid testing is an automation approach where API operations and browser/UI operations are combined in the same test or test workflow, using each layer where it provides the most useful and efficient validation.**

Example:

```text
API
 ↓
Create order
 ↓
Get order ID
 ↓
UI
 ↓
Open Order History
 ↓
Search order ID
 ↓
Verify order
```

---

# 11.17 Real-World Example

Business requirement:

> Verify that an order created by the system appears correctly in the user's Order History.

Efficient automation:

```text
1. API login
2. API create order
3. Capture order ID
4. Open web application
5. Navigate to Order History
6. Search order ID
7. Assert order exists
```

This is more focused than reproducing every setup step through the UI.

---

# 11.18 API Utility

## Definition

**An API utility is a reusable module, class or set of functions that centralizes common API operations so multiple tests can use them without duplicating implementation code.**

Example:

```text
project/
│
├── tests/
│   ├── order.spec.js
│   └── user.spec.js
│
└── utils/
    └── APIUtils.js
```

---

# 11.19 Why Separate API Logic?

Without utility:

```text
order.spec.js
  └── 100 lines API code

user.spec.js
  └── 100 lines API code

cart.spec.js
  └── 100 lines API code
```

With utility:

```text
APIUtils.js
     ↑
     │
 ┌───┼────┐
 ↓   ↓    ↓
Order User Cart
Tests Tests Tests
```

Benefits:

- Reuse
- Maintainability
- Readability
- Less duplication
- Centralized API changes

---

# 11.20 Keep Test Logic Separate

### Bad design

```js
test('Order test', async ({ request, page }) => {

    // 100 lines of API setup

    // 100 lines of UI actions

    // 50 lines of data processing
});
```

### Better design

```text
Test
 ↓
API Utility
 ↓
Prepared data
 ↓
UI actions
 ↓
Assertions
```

The test should clearly communicate the business scenario.

---

# ⭐ Section 11 Interview Answer

> "I use API calls when they are a more efficient way to prepare test data or authentication. Then I use Playwright UI automation to validate the user-facing behavior. This Web + API approach reduces unnecessary UI steps and helps make tests faster, focused and maintainable."

---

# 1️⃣2️⃣ SECTION 12 — SESSION STORAGE & NETWORK INTERCEPTION

---

# 12.1 What Is Session Storage?

## Proper Definition

**Session Storage is browser-side key-value storage associated with a specific web origin and browsing context. It is generally used for temporary data that belongs to a page/tab session.**

Conceptually:

```text
Browser
│
├── Local Storage
│
└── Session Storage
```

---

# 12.2 Local Storage vs Session Storage

| Feature | Local Storage | Session Storage |
|---|---|---|
| Storage | Key-value browser storage | Key-value browser storage |
| Scope | Origin | Origin + browsing context |
| Typical persistence | Survives page reload and generally browser restart until cleared | Usually tied to the tab/page session |
| Common purpose | Persistent client-side data | Temporary session-specific data |

---

# 12.3 Why Is Session State Important in Testing?

Suppose every test starts with:

```text
Open login page
 ↓
Enter username
 ↓
Enter password
 ↓
Login
```

If 100 tests repeat this unnecessarily, execution becomes slower and more dependent on the login UI.

Instead:

```text
Authenticate once / prepare state
        ↓
Save required state
        ↓
Reuse state where appropriate
        ↓
Run actual test
```

---

# 12.4 Important Concept: Browser State

Browser state can include:

```text
Cookies
Local Storage
Session-related application state
Authentication information
```

A Browser Context is the boundary in which much of this state is isolated.

---

# 12.5 Browser Context Mental Model

```text
Browser
│
├── Context A
│    ├── Page
│    └── Page
│
└── Context B
     └── Page
```

Context A and Context B can have different authentication/storage state.

---

# 12.6 Session Storage Injection

If an application specifically requires session storage for authentication or state, you may need to prepare it before the application uses it.

The exact implementation depends on how the application stores and reads the value.

General idea:

```text
Existing Session
       ↓
Read required value
       ↓
Save value
       ↓
New Browser Context
       ↓
Prepare required storage
       ↓
Open application
```

### Important

Do not blindly copy storage values between applications or origins. Browser storage is origin-specific and application-specific.

---

# 12.7 Debugging API Steps in Visual Studio Code

When writing API + UI automation, you may have code like:

```js
const response =
    await request.post('/api/login');

const body =
    await response.json();

const token =
    body.token;
```

If something fails, use the IDE debugger.

---

# 12.8 What Is a Breakpoint?

## Definition

**A breakpoint is a debugging marker that tells the debugger to pause program execution at a particular line so you can inspect the current state.**

Example:

```js
const response =
    await request.post('/api/login');

// breakpoint here

const body =
    await response.json();
```

At the breakpoint, inspect:

```text
response
status
headers
body
variables
```

---

# 12.9 Step-by-Step Debugging

```text
Set breakpoint
      ↓
Run test in debug mode
      ↓
Execution pauses
      ↓
Inspect variables
      ↓
Step over
      ↓
Step into if required
      ↓
Continue
```

---

# 12.10 Why Debug API Calls?

Suppose:

```js
const token = body.token;
```

returns:

```text
undefined
```

Instead of guessing, inspect:

```text
response.status()
response.url()
response.headers()
response body
```

Maybe the API actually returned:

```json
{
    "access_token": "abc"
}
```

instead of:

```json
{
    "token": "abc"
}
```

Debugging reveals the real response structure.

---

# 12.11 Trace Viewer for Network Activity

Trace Viewer can help connect browser actions with network activity.

Example:

```text
Click Login
      ↓
POST /login
      ↓
200 OK
      ↓
Dashboard
```

Or:

```text
Click Login
      ↓
POST /login
      ↓
401 Unauthorized
      ↓
Login remains on screen
```

This makes root-cause analysis easier.

---

# 12.12 What Is Network Traffic?

Network traffic is communication between the browser and backend services.

Typical web application flow:

```text
Browser
   ↓
HTTP Request
   ↓
Server
   ↓
HTTP Response
   ↓
Browser
```

---

# 12.13 What Is Network Interception?

## Proper Definition

**Network interception is the process of catching matching network requests in Playwright so the test can observe or control how those requests and their responses are handled.**

Possible operations include:

```text
Observe
Continue
Modify
Abort
Mock
Fetch real response
Modify real response
```

---

# 12.14 `page.on('request')`

## Definition

`page.on('request')` registers a listener that receives request events from the page.

Example:

```js
page.on('request', request => {

    console.log(
        request.method()
    );

    console.log(
        request.url()
    );

});
```

Use this primarily when you want to **observe requests**.

---

# 12.15 `page.on('response')`

## Definition

`page.on('response')` registers a listener for responses received by the page.

```js
page.on('response', response => {

    console.log(
        response.status()
    );

    console.log(
        response.url()
    );

});
```

Use it to observe response activity.

---

# 12.16 Request Information

A request can provide information such as:

```js
request.url();
request.method();
request.headers();
request.postData();
request.resourceType();
```

Example:

```js
page.on('request', request => {

    console.log('URL:',
        request.url());

    console.log('Method:',
        request.method());

});
```

---

# 12.17 Response Information

A response can provide:

```js
response.url();
response.status();
response.statusText();
response.headers();
```

Depending on the response, you can also inspect its body.

---

# 12.18 `waitForRequest()`

## Definition

`waitForRequest()` waits for a network request matching the supplied condition.

Correct event/action pattern:

```js
const requestPromise =
    page.waitForRequest('**/api/login');

await page.getByRole('button', {
    name: 'Login'
}).click();

const request =
    await requestPromise;
```

---

# 12.19 Why Start Waiting Before Clicking?

Because the click may trigger the request immediately.

Correct:

```text
WAIT READY
   ↓
CLICK
   ↓
REQUEST HAPPENS
```

Risky approach:

```text
CLICK
   ↓
Start waiting
```

The event may already have happened.

---

# 12.20 `waitForResponse()`

## Definition

`waitForResponse()` waits for a network response that matches the supplied condition.

Example:

```js
const responsePromise =
    page.waitForResponse('**/api/login');

await page.getByRole('button', {
    name: 'Login'
}).click();

const response =
    await responsePromise;

expect(response.status())
    .toBe(200);
```

---

# 12.21 `page.route()`

## Proper Definition

**`page.route()` allows Playwright to intercept requests matching a URL pattern or other matching condition and gives your test code control over how those requests proceed.**

Example:

```js
await page.route('**/api/products',
    async route => {

        await route.continue();
    }
);
```

---

# 12.22 `route.request()`

Inside a route handler:

```js
await page.route('**/api/products',
    async route => {

        const request =
            route.request();

        console.log(request.url());
        console.log(request.method());

        await route.continue();
    }
);
```

It gives access to the intercepted request.

---

# 12.23 `route.continue()`

## Definition

**`route.continue()` tells Playwright to continue the intercepted request toward its normal destination.**

Flow:

```text
Browser
   ↓
Request
   ↓
Playwright route
   ↓
continue()
   ↓
Server
```

---

# 12.24 Modify Request Before Continue

For supported request properties, you can alter the request before allowing it to continue.

Example:

```js
await page.route('**/api/products',
    async route => {

        const headers = {
            ...route.request().headers(),
            'x-test': 'playwright'
        };

        await route.continue({
            headers
        });
    }
);
```

Use this carefully because the server may depend on exact request structure.

---

# 12.25 `route.abort()`

## Definition

**`route.abort()` stops the intercepted request instead of allowing it to complete normally.**

Example:

```js
await page.route('**/*.png',
    async route => {

        await route.abort();
    }
);
```

---

# 12.26 Why Abort Requests?

Useful for testing:

```text
Resource blocking
Network failure scenarios
Unavailable dependencies
Slow/unwanted resources
Frontend error handling
```

Example:

```text
API request
   ↓
abort()
   ↓
Frontend receives failure/no response
   ↓
Verify error handling
```

---

# 12.27 `route.fulfill()`

## Definition

**`route.fulfill()` supplies a response directly from Playwright for the intercepted request.**

This is commonly used for API mocking.

Example:

```js
await page.route('**/api/products',
    async route => {

        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                products: []
            })
        });

    }
);
```

---

# 12.28 What Is Mocking?

## Definition

**Mocking means replacing a real dependency with controlled test behavior or test data.**

Real API:

```json
{
    "products": [
        {
            "name": "Laptop"
        }
    ]
}
```

Mock:

```json
{
    "products": []
}
```

Now the UI can be tested for:

```text
"No products found"
```

without changing the backend.

---

# 12.29 Mocking Error Responses

Example:

```js
await page.route('**/api/products',
    async route => {

        await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({
                error: 'Server error'
            })
        });

    }
);
```

Now you can test:

```text
API fails
 ↓
UI displays error
```

---

# 12.30 Mock Unauthorized Response

```js
await page.route('**/api/user',
    async route => {

        await route.fulfill({
            status: 401,
            contentType: 'application/json',
            body: JSON.stringify({
                error: 'Unauthorized'
            })
        });

    }
);
```

Useful for testing:

- Expired session
- Unauthorized user
- Authentication failure
- Access control behavior

---

# 12.31 `route.fetch()`

## Proper Definition

**`route.fetch()` sends the intercepted request to the real server and returns the real response so that the response can be inspected or modified before it is sent to the browser.**

Flow:

```text
Browser
   ↓
Request
   ↓
Playwright
   ↓
route.fetch()
   ↓
Real Server
   ↓
Real Response
   ↓
Modify if needed
   ↓
route.fulfill()
   ↓
Browser
```

---

# 12.32 Modify a Real Response

Example:

```js
await page.route('**/api/products',
    async route => {

        const response =
            await route.fetch();

        const data =
            await response.json();

        data.products.push({
            name: 'Test Product',
            price: 999
        });

        await route.fulfill({
            response,
            json: data
        });

    }
);
```

This is useful when you want:

```text
Real API data
      +
Controlled modification
```

instead of completely replacing the API.

---

# 12.33 Four Important Route Methods

| Method | Meaning | Easy Memory |
|---|---|---|
| `route.continue()` | Let request proceed | ➡️ Continue |
| `route.abort()` | Stop request | 🛑 Abort |
| `route.fulfill()` | Give custom response | 🎭 Mock |
| `route.fetch()` | Get real response | 🌐 Fetch |

---

# 12.34 Network Mental Model

```text
                 BROWSER
                    │
                    ↓
                 REQUEST
                    │
                    ↓
              page.route()
                    │
        ┌───────────┼────────────┐
        ↓           ↓            ↓
   continue()   abort()     fulfill()
        ↓           ↓            ↓
   Real Server      ❌       Custom Response
        │
        ↓
     RESPONSE
```

Advanced:

```text
Request
  ↓
route.fetch()
  ↓
Real Server
  ↓
Real Response
  ↓
Modify
  ↓
route.fulfill()
  ↓
Browser
```

---

# 12.35 Request Monitoring vs Interception

| Feature | Monitoring | Interception |
|---|---|---|
| Main purpose | Observe | Control |
| Request listener | `page.on('request')` | `page.route()` |
| Response listener | `page.on('response')` | `page.route()` + fetch/fulfill |
| Change traffic | Usually no | Yes |
| Abort | No | Yes |
| Mock | No | Yes |

---

# 12.36 Section 12 Interview Answer

> "Playwright provides event listeners such as `page.on('request')` and `page.on('response')` for monitoring network activity. For controlling requests, I can use `page.route()`. Inside the route handler, `continue()` lets the request proceed, `abort()` blocks it, `fulfill()` provides a custom response, and `fetch()` gets the real server response so it can be inspected or modified."

---

# 1️⃣3️⃣ SECTION 13 — FIXTURES & CUSTOM FIXTURES

## 🎯 Why This Section Is Important

This section starts moving your code toward **framework design**.

Instead of writing repeated setup in every test:

```text
Login
Create data
Configure API
Prepare environment
```

you create reusable fixtures.

---

# 13.1 What Is a Fixture?

## Proper Definition

**A Playwright fixture is a reusable test dependency that provides a test with the resources, data or setup it needs and can perform initialization before the test and cleanup after the test.**

Simple:

```text
Fixture
   ↓
Setup
   ↓
Test
   ↓
Teardown
```

---

# 13.2 Why Fixtures?

Suppose 30 tests require login.

Without fixture:

```text
Test 1 → Login
Test 2 → Login
Test 3 → Login
...
Test 30 → Login
```

Problems:

- Duplicate code
- Difficult maintenance
- Longer test files
- Repeated setup
- Changes need to be made in many places

With fixture:

```text
              Login Fixture
              /    |    \
             ↓     ↓     ↓
          Test 1 Test 2 Test 3
```

---

# 13.3 Benefits of Fixtures

Fixtures improve:

### Reusability

Same setup can be shared by many tests.

### Readability

The test focuses on business behavior.

### Maintainability

Change setup in one place.

### Isolation

Fixtures can prepare clean test state.

### Lifecycle management

Fixtures can support setup and cleanup.

---

# 13.4 Built-in Fixtures

Playwright Test provides built-in fixtures such as:

```js
page
context
browser
request
browserName
```

Example:

```js
test('Example', async ({ page }) => {

    await page.goto('https://example.com');

});
```

Here:

```text
{ page }
```

comes from Playwright's fixture system.

---

# 13.5 `page` Fixture

The `page` fixture provides a Page object for the test.

```js
test('Login', async ({ page }) => {

    await page.goto('/login');

});
```

---

# 13.6 `context` Fixture

The `context` fixture provides the Browser Context used by the test.

```js
test('Context example', async ({ context }) => {

    const pages =
        context.pages();

});
```

---

# 13.7 `request` Fixture

The `request` fixture provides API request capabilities.

```js
test('API test', async ({ request }) => {

    const response =
        await request.get('/api/products');

});
```

---

# 13.8 What Is a Custom Fixture?

## Definition

**A custom fixture is a user-defined fixture created to provide application-specific resources, setup, data or reusable behavior to tests.**

Examples:

```text
login fixture
API fixture
test data fixture
authenticated page fixture
user fixture
order fixture
```

---

# 13.9 UI Login Fixture

Suppose every test needs an authenticated user.

Normal approach:

```js
await page.goto('/login');

await page.getByLabel('Username')
    .fill('testuser');

await page.getByLabel('Password')
    .fill('password');

await page.getByRole('button', {
    name: 'Login'
}).click();
```

If this appears in many tests, it is repetitive.

Better:

```text
Login Fixture
      ↓
Authenticated Test
```

The fixture performs login setup.

---

# 13.10 API Fixture

Suppose tests need an order created before they start.

Instead of:

```text
Test 1 → API create order
Test 2 → API create order
Test 3 → API create order
```

use:

```text
Order/API Fixture
       ↓
Prepare order
       ↓
Test
```

---

# 13.11 Data Fixture

A data fixture can provide test data.

Example concept:

```text
Data Fixture
    ↓
User / Product / Order data
    ↓
Test
```

The test doesn't need to contain all data-generation logic.

---

# 13.12 Setup

## Definition

**Setup is the preparation performed before the actual test logic starts.**

Examples:

```text
Login
Create user
Create product
Create order
Prepare API state
```

---

# 13.13 Teardown

## Definition

**Teardown is the cleanup performed after the test or fixture is finished.**

Examples:

```text
Delete test order
Delete test user
Reset data
Clean temporary resources
```

---

# 13.14 Setup + Test + Teardown

```text
             FIXTURE
                │
                ↓
             SETUP
                │
                ↓
              TEST
                │
                ↓
            TEARDOWN
```

---

# 13.15 Why Teardown Matters

Suppose:

```text
Test 1 creates Order 1001
```

If it doesn't clean the data:

```text
Test 2 starts
   ↓
Old Order 1001 exists
   ↓
Test may behave differently
```

This creates test dependency.

Good automation tries to keep tests independent.

---

# 13.16 Data + UI + API Fixture Architecture

```text
                 TEST
                  │
       ┌──────────┼──────────┐
       ↓          ↓          ↓
      DATA        UI         API
    Fixture     Fixture    Fixture
       ↓          ↓          ↓
   Test Data    Login     Backend Data
       │          │          │
       └──────────┼──────────┘
                  ↓
              Test Logic
                  ↓
              Teardown
```

---

# 13.17 Fixture vs Function

This is a common interview question.

### Normal Function

```js
async function login(page) {
    // login
}
```

A function is simply reusable code.

### Fixture

A fixture is integrated into Playwright Test's dependency and lifecycle system.

Conceptually:

```text
Function
   ↓
Reusable code

Fixture
   ↓
Reusable test dependency
   +
Lifecycle / setup
   +
Test integration
```

---

# 13.18 When Should You Create a Fixture?

Create a fixture when:

- Many tests need the same setup.
- The setup has a clear lifecycle.
- You want to provide reusable data/resources.
- You need consistent authentication setup.
- You need setup + cleanup.
- You want tests to focus on business behavior.

Do not create a fixture for every tiny helper function.

---

# 13.19 Good Fixture Design

A good fixture should have:

```text
Clear responsibility
        +
Reusable purpose
        +
Minimal duplication
        +
Predictable setup
        +
Reliable cleanup
```

Avoid a giant fixture that does everything:

```text
Login
Create user
Create order
Open dashboard
Create product
Delete product
```

when tests only need one or two of those responsibilities.

---

# ⭐ Section 13 Interview Answer

> "Fixtures are reusable test dependencies provided through Playwright's test system. They help centralize setup, data preparation and cleanup. Custom fixtures allow us to create application-specific setup such as UI login, API data preparation or test data, so individual tests remain clean and focused."

---

# 🔥 SECTION 8–13 MASTER CHEAT SHEET

| Requirement | Playwright Concept |
|---|---|
| Pause test | `page.pause()` |
| Debug interactively | Playwright Inspector |
| Generate test code | Codegen |
| Analyze execution | Trace Viewer |
| View test results | HTML Report |
| Visible assertion | `toBeVisible()` |
| Hidden assertion | `toBeHidden()` |
| Handle native dialog | `page.on('dialog')` |
| Accept dialog | `dialog.accept()` |
| Dismiss dialog | `dialog.dismiss()` |
| Dialog message | `dialog.message()` |
| Dialog type | `dialog.type()` |
| Prompt default value | `dialog.defaultValue()` |
| Enter prompt value | `dialog.accept('value')` |
| Work inside iframe | `frameLocator()` |
| API GET | `request.get()` |
| API POST | `request.post()` |
| API response status | `response.status()` |
| API response body | `response.json()` |
| Observe request | `page.on('request')` |
| Observe response | `page.on('response')` |
| Wait for request | `page.waitForRequest()` |
| Wait for response | `page.waitForResponse()` |
| Intercept request | `page.route()` |
| Get intercepted request | `route.request()` |
| Continue request | `route.continue()` |
| Stop request | `route.abort()` |
| Mock response | `route.fulfill()` |
| Get real response | `route.fetch()` |
| Reusable setup | Fixture |
| Application-specific setup | Custom Fixture |
| Cleanup | Teardown |

---

# 🧠 IMPORTANT COMPARISONS

## 1. Inspector vs Trace Viewer

| Inspector | Trace Viewer |
|---|---|
| Interactive debugging | Post-run investigation |
| Pause current execution | Analyze recorded execution |
| Useful during development | Very useful after failure |
| `page.pause()` | Trace file/report |
| Step through current flow | Inspect historical execution |

### Easy Memory

```text
Inspector → Debug NOW
Trace → Investigate WHAT HAPPENED
```

---

# 2. Codegen vs Manual Coding

| Codegen | Manual Coding |
|---|---|
| Generates starting code | You design code yourself |
| Fast | More control |
| Good for learning locators | Better for final architecture |
| May generate unnecessary/fragile code | You choose maintainable patterns |

### Rule

```text
Codegen = Assistant
Not = Replacement for understanding
```

---

# 3. Alert vs HTML Modal

| JavaScript Alert | HTML Modal |
|---|---|
| Browser-level dialog | Normal webpage element |
| `dialog` event | Locator |
| `dialog.accept()` | `click()` |
| Not a normal DOM element | Part of page DOM |

---

# 4. New Tab vs Iframe

| New Tab | Iframe |
|---|---|
| New `Page` | Embedded document |
| Same/different context | Inside current page |
| Handle with page/context events | Handle with `frameLocator()` |
| Example: `context.waitForEvent('page')` | Example: `page.frameLocator()` |

---

# 5. Local Storage vs Session Storage

```text
Local Storage
→ Generally persists until cleared

Session Storage
→ Associated with page/tab browsing session
```

Both are browser-side storage mechanisms, but their lifetime and scope differ.

---

# 6. API Test vs UI Test

| API Test | UI Test |
|---|---|
| Tests backend endpoint behavior | Tests user-facing browser behavior |
| No need to click through UI | Uses browser interaction |
| Usually faster | Usually more involved |
| Good for data setup | Good for UI validation |

---

# 7. API Setup vs UI Setup

### UI Setup

```text
Open login
 ↓
Fill credentials
 ↓
Click login
```

### API Setup

```text
API login
 ↓
Get token/state
 ↓
Prepare browser state
```

Use the approach that best fits the test objective.

---

# 8. `page.on()` vs `waitFor...()`

| Method | Purpose |
|---|---|
| `page.on('request')` | Continuously observe request events |
| `page.on('response')` | Continuously observe response events |
| `waitForRequest()` | Wait for a particular request |
| `waitForResponse()` | Wait for a particular response |

---

# 9. `continue()` vs `abort()` vs `fulfill()` vs `fetch()`

```text
continue()
   ↓
Let real request proceed

abort()
   ↓
Stop request

fulfill()
   ↓
Provide custom response

fetch()
   ↓
Call real server and get response
```

---

# 10. Fixture vs Helper Function

```text
Helper Function
→ reusable operation

Fixture
→ reusable test dependency + lifecycle integration
```

---

# 🎯 PRACTICAL PROJECT — COMBINE SECTIONS 8–13

After finishing these sections, build one project that combines the concepts.

## Suggested Flow

```text
1. API Login
       ↓
2. Prepare authentication
       ↓
3. Create test order through API
       ↓
4. Open UI
       ↓
5. Verify order in Order History
       ↓
6. Intercept a product API
       ↓
7. Mock an empty response
       ↓
8. Verify empty-state UI
       ↓
9. Trigger an alert
       ↓
10. Handle alert
       ↓
11. Interact with iframe
       ↓
12. Use custom login fixture
       ↓
13. Use API/data fixture
       ↓
14. Run test
       ↓
15. Inspect HTML report
       ↓
16. Open Trace Viewer if failed
       ↓
17. Debug and fix
```

---

# 🧪 PRACTICE EXERCISES

## Section 8

### Exercise 1
Create a test with an intentionally wrong locator.

```text
Run
 ↓
Fail
 ↓
Use Inspector
 ↓
Fix locator
```

### Exercise 2
Run a failing test and inspect it through Trace Viewer.

### Exercise 3
Use Codegen to record a login flow and then rewrite the generated code using better locators.

---

# Section 9

### Exercise 1

Take a booking requirement and write:

```text
Scenario
Steps
Expected Result
Assertions
```

before writing code.

### Exercise 2

Complete the booking assignment without looking at the solution.

### Exercise 3

Complete the refund eligibility assignment and explain the business rule in your own words.

---

# Section 10

### Exercise 1 — Alert

Handle:

```js
alert('Hello');
```

### Exercise 2 — Confirm

Accept and dismiss a confirm dialog.

### Exercise 3 — Prompt

Enter a value into a prompt:

```js
await dialog.accept('Garvit');
```

### Exercise 4 — iframe

Find an iframe and interact with a textbox inside it.

---

# Section 11

### Exercise 1

Send a GET request and validate:

```text
Status
Body
Required field
```

### Exercise 2

Send a POST request and capture the created ID.

### Exercise 3

Create data using API and verify it through UI.

### Exercise 4

Move repeated API code into:

```text
utils/APIUtils.js
```

---

# Section 12

### Exercise 1

Log every request:

```js
page.on('request', ...)
```

### Exercise 2

Log every response:

```js
page.on('response', ...)
```

### Exercise 3

Wait for a login response:

```js
page.waitForResponse(...)
```

### Exercise 4

Block images:

```js
page.route('**/*.png', ...)
```

### Exercise 5

Mock an API response.

### Exercise 6

Return a 500 error from a mocked API and verify frontend error handling.

### Exercise 7

Use `route.fetch()` and modify real response data.

---

# Section 13

### Exercise 1

Create a reusable login fixture.

### Exercise 2

Create an API fixture that creates test data.

### Exercise 3

Create a data fixture.

### Exercise 4

Add teardown that removes test data.

---

# ❌ COMMON FRESHER MISTAKES

## Mistake 1 — Using Codegen blindly

### Problem

Copying every generated line without understanding it.

### Better

Use Codegen as a starting point and review the locators and structure.

---

## Mistake 2 — Using random waits for debugging

Bad:

```js
await page.waitForTimeout(5000);
```

when the actual issue is unknown.

Better:

```text
Pause
Inspect
Trace
Find root cause
```

---

## Mistake 3 — Treating JavaScript alerts as HTML

Bad idea:

```js
page.getByText('OK').click();
```

for a native JavaScript dialog.

Use:

```js
page.on('dialog', async dialog => {
    await dialog.accept();
});
```

---

## Mistake 4 — Forgetting iframe boundaries

If an element is inside an iframe, locate through the frame.

```js
const frame =
    page.frameLocator('#my-frame');
```

---

## Mistake 5 — Using UI for every setup operation

Not every setup step needs browser interaction.

Consider API setup when appropriate.

---

## Mistake 6 — Not asserting API responses

Bad:

```js
const response =
    await request.get('/api/products');

console.log(response.status());
```

Better:

```js
expect(response.ok()).toBeTruthy();
```

Then validate the response body too.

---

## Mistake 7 — Starting `waitForResponse()` after the action

Risky:

```js
await page.getByRole('button', {
    name: 'Login'
}).click();

const response =
    await page.waitForResponse('**/api/login');
```

Better:

```js
const responsePromise =
    page.waitForResponse('**/api/login');

await page.getByRole('button', {
    name: 'Login'
}).click();

const response =
    await responsePromise;
```

---

## Mistake 8 — Making one huge fixture

Don't put unrelated setup into one giant fixture.

Keep responsibilities clear.

---

## Mistake 9 — No teardown

If a test creates data, think about whether it should clean that data after the test.

---

# 🎤 INTERVIEW QUESTIONS — SECTIONS 8–13

## Q1. What is Playwright Inspector?

> Playwright Inspector is an interactive debugging tool that lets us pause and inspect Playwright test execution and browser state.

---

## Q2. What is `page.pause()`?

> `page.pause()` pauses Playwright execution at that point so we can inspect and debug the current test interactively.

---

## Q3. What is Codegen?

> Codegen records browser interactions and generates Playwright code. It is useful for quickly creating a starting point and discovering locators, but the generated code should be reviewed for maintainability.

---

## Q4. What is Trace Viewer?

> Trace Viewer is used to investigate recorded Playwright test execution. It helps us inspect actions, timing, screenshots, network activity and other execution information to understand failures.

---

## Q5. How do you handle JavaScript alerts?

```js
page.on('dialog', async dialog => {
    await dialog.accept();
});
```

---

## Q6. How do you handle a prompt?

```js
page.on('dialog', async dialog => {
    await dialog.accept('Garvit');
});
```

---

## Q7. What is an iframe?

> An iframe is an HTML element that embeds another HTML document inside the current webpage. In Playwright, we can use `frameLocator()` to locate and interact with elements inside it.

---

## Q8. What is API testing?

> API testing validates backend endpoints by sending requests and checking response status, headers, body and expected behavior without requiring every operation to be performed through the UI.

---

## Q9. Why combine API and UI testing?

> API calls can efficiently prepare data or authentication, while UI automation validates user-facing behavior. Combining them can reduce unnecessary UI steps and make tests more focused.

---

## Q10. What is an authentication token?

> It is a value used to represent authenticated or authorized state when communicating with a service.

---

## Q11. What is network interception?

> Network interception means catching matching requests so Playwright can observe or control how those requests proceed and how responses are supplied.

---

## Q12. Difference between `continue()` and `abort()`?

> `continue()` allows the intercepted request to proceed, while `abort()` stops the request.

---

## Q13. Difference between `fulfill()` and `fetch()`?

> `fulfill()` supplies a response directly from Playwright, while `fetch()` sends the request to the real server and returns the real response so it can be inspected or modified.

---

## Q14. Difference between request monitoring and interception?

> Request monitoring observes network activity using events such as `page.on('request')`. Interception uses routing such as `page.route()` to control the request.

---

## Q15. What is a fixture?

> A fixture is a reusable test dependency that provides setup, resources or data to a test and can support cleanup as part of the test lifecycle.

---

## Q16. What is a custom fixture?

> A custom fixture is a user-defined fixture created for application-specific reusable setup, data or resources, such as login or API data preparation.

---

## Q17. Why use teardown?

> Teardown cleans up resources or test data after execution and helps prevent tests from affecting one another.

---

# 🏆 FINAL READINESS CHECKLIST

## Section 8 — Debugging

- [ ] I know what debugging means.
- [ ] I know Playwright Inspector.
- [ ] I can use `page.pause()`.
- [ ] I understand Codegen.
- [ ] I can review generated locators.
- [ ] I understand Trace Viewer.
- [ ] I understand HTML reports.
- [ ] I can investigate a failed test.

## Section 9 — Practical Testing

- [ ] I can understand a requirement.
- [ ] I can identify a business flow.
- [ ] I can create test scenarios.
- [ ] I can identify test data.
- [ ] I can choose locators.
- [ ] I can add assertions.
- [ ] I can solve an assignment independently.

## Section 10 — Dialogs & Frames

- [ ] I understand `toBeVisible()`.
- [ ] I understand `toBeHidden()`.
- [ ] I know alert.
- [ ] I know confirm.
- [ ] I know prompt.
- [ ] I know `dialog.accept()`.
- [ ] I know `dialog.dismiss()`.
- [ ] I know `dialog.message()`.
- [ ] I know `dialog.type()`.
- [ ] I know `dialog.defaultValue()`.
- [ ] I understand iframe.
- [ ] I can use `frameLocator()`.

## Section 11 — API + Web

- [ ] I understand API testing.
- [ ] I know HTTP methods.
- [ ] I understand request and response.
- [ ] I know status codes.
- [ ] I can send GET/POST requests.
- [ ] I can parse JSON.
- [ ] I can validate API responses.
- [ ] I understand authentication tokens.
- [ ] I understand browser storage.
- [ ] I understand Web + API hybrid testing.
- [ ] I understand API utilities.
- [ ] I can separate API logic from test logic.

## Section 12 — Storage + Network

- [ ] I understand Session Storage.
- [ ] I understand Local Storage.
- [ ] I understand browser context state.
- [ ] I can debug API code.
- [ ] I can use breakpoints.
- [ ] I understand Trace Viewer network information.
- [ ] I understand `page.on('request')`.
- [ ] I understand `page.on('response')`.
- [ ] I understand `waitForRequest()`.
- [ ] I understand `waitForResponse()`.
- [ ] I understand `page.route()`.
- [ ] I understand `route.request()`.
- [ ] I understand `route.continue()`.
- [ ] I understand `route.abort()`.
- [ ] I understand `route.fulfill()`.
- [ ] I understand `route.fetch()`.
- [ ] I understand mocking.

## Section 13 — Fixtures

- [ ] I understand fixtures.
- [ ] I understand built-in fixtures.
- [ ] I understand custom fixtures.
- [ ] I understand UI login fixtures.
- [ ] I understand API fixtures.
- [ ] I understand data fixtures.
- [ ] I understand setup.
- [ ] I understand teardown.
- [ ] I know why fixtures improve maintainability.
- [ ] I can explain fixture vs helper function.

---

# ⭐ TOP PRIORITY CONCEPTS

If you are short on time, practice these first:

```text
⭐⭐⭐⭐⭐ Debugging with Inspector
⭐⭐⭐⭐⭐ Trace Viewer
⭐⭐⭐⭐⭐ Dialog handling
⭐⭐⭐⭐⭐ iframe / frameLocator()
⭐⭐⭐⭐⭐ API requests + responses
⭐⭐⭐⭐⭐ API + UI hybrid testing
⭐⭐⭐⭐⭐ Authentication token/state
⭐⭐⭐⭐⭐ page.route()
⭐⭐⭐⭐⭐ route.continue()
⭐⭐⭐⭐⭐ route.abort()
⭐⭐⭐⭐⭐ route.fulfill()
⭐⭐⭐⭐⭐ route.fetch()
⭐⭐⭐⭐⭐ waitForRequest()
⭐⭐⭐⭐⭐ waitForResponse()
⭐⭐⭐⭐⭐ Fixtures
⭐⭐⭐⭐⭐ Custom Fixtures
⭐⭐⭐⭐⭐ Setup + Teardown
```

---

# 🧠 FINAL MENTAL MODEL

```text
                    PLAYWRIGHT
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
          UI            API         DEBUG
          │             │             │
      Locators      Requests       Inspector
      Actions       Responses      Trace
      Assertions    Tokens         Reports
          │             │             │
          └─────────────┼─────────────┘
                        ↓
                  HYBRID TESTING
                        │
              ┌─────────┴─────────┐
              ↓                   ↓
             UI                  API
              │                   │
              └─────────┬─────────┘
                        ↓
                 NETWORK CONTROL
                        │
             route / mock / abort
                        ↓
                  TEST FRAMEWORK
                        │
                     Fixtures
                        │
                Setup + Teardown
                        ↓
              🔥 MAINTAINABLE TESTS
```

---

# 🚀 THE SKILL YOU SHOULD HAVE AFTER 8–13

You should now be able to think like this:

```text
Business Requirement
        ↓
Create Test Scenario
        ↓
Choose UI / API / Hybrid Approach
        ↓
Prepare Test Data
        ↓
Automate
        ↓
Handle Dialogs / Frames
        ↓
Monitor or Intercept Network
        ↓
Use Fixtures for Reusable Setup
        ↓
Run Test
        ↓
Failure?
   ├── Inspector
   ├── Trace Viewer
   ├── Logs
   └── API / Network Analysis
        ↓
Fix Root Cause
        ↓
Refactor
        ↓
🔥 Reliable Automation
```

---

# 🏁 GOLDEN RULES FOR A FRESHER

### Rule 1
> **Don't just memorize Playwright methods. Understand what problem each method solves.**

### Rule 2
> **Don't use UI for everything. Use API where it makes test setup faster and more focused.**

### Rule 3
> **Don't debug by adding random waits. Investigate the actual failure.**

### Rule 4
> **Don't blindly copy Codegen output. Review the generated locators and code.**

### Rule 5
> **Don't create duplicate setup in every test. Use fixtures when the setup is genuinely reusable.**

### Rule 6
> **Don't forget assertions. An action without validation does not fully prove that the expected behavior occurred.**

### Rule 7
> **Keep API utilities, test data and reusable setup separate from business test logic.**

### Rule 8
> **Always be able to explain your code in simple words. If you cannot explain it, you probably don't understand it yet.**

---

# 🎯 FINAL TARGET

After completing Sections 8–13, your progression should be:

```text
Sections 1–7
Basic Playwright + UI Automation
          ↓
Section 8
I can DEBUG my tests.
          ↓
Section 9
I can SOLVE automation requirements.
          ↓
Section 10
I can handle DIALOGS and FRAMES.
          ↓
Section 11
I can TEST APIs and combine API + UI.
          ↓
Section 12
I can UNDERSTAND and CONTROL NETWORK TRAFFIC.
          ↓
Section 13
I can BUILD REUSABLE FIXTURES.
          ↓
🔥 I am moving from Playwright learner
   toward a real automation engineer.
```

---

# 📌 Revision Method

For every topic, revise in this order:

```text
1. Definition
       ↓
2. Why is it needed?
       ↓
3. When should I use it?
       ↓
4. Basic syntax
       ↓
5. Real example
       ↓
6. Common mistake
       ↓
7. Interview explanation
       ↓
8. Practice without notes
```

If you can complete all eight steps, the concept is no longer just something you watched — **you actually understand it.**
