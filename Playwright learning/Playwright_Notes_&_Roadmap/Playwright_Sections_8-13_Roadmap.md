# 🎭 Playwright Sections 8–13
## 🌟 Master Learning Notes — Fresher Friendly | Definitions • Concepts • Syntax • Examples • Interview Prep

> **Purpose:** Sections 8–13 take you from basic UI automation into **debugging, browser dialogs, frames, API testing, Web + API hybrid automation, session storage, network interception, and reusable fixtures**.

---

# 🗺️ Sections 8–13 Learning Journey

```text
SECTION 8
Inspector + Codegen + Trace Viewer
        ↓
SECTION 9
Assignments / Practical Checkpoint
        ↓
SECTION 10
Dialogs + Alerts + Frames
        ↓
SECTION 11
API Testing + Web/API Hybrid
        ↓
SECTION 12
Session Storage + Network Interception
        ↓
SECTION 13
Fixtures + Custom Fixtures
        ↓
🔥 Real-World Playwright Automation Foundation
```

---

# 📚 Quick Overview

| Section | Main Topic | Main Skill |
|---|---|---|
| 8 | Inspector, Trace Viewer & Codegen | Debug and understand test execution |
| 9 | Assignment Checkpoint | Apply concepts independently |
| 10 | Dialogs, Alerts & Frames | Handle browser dialogs and iframes |
| 11 | API Testing + Web/API | Combine API and UI automation |
| 12 | Session Storage + Network | Manage authentication state and intercept traffic |
| 13 | Fixtures | Build reusable test setup and framework components |

---

# 8️⃣ SECTION 8 — Playwright Inspector, Trace Viewer & Codegen

## 🎯 Section Objective

The purpose of this section is to learn how to **debug Playwright tests, inspect elements/actions, generate automation code, and investigate failures using traces and reports**.

### Topics

| Lecture | Topic |
|---:|---|
| 48 | What is Playwright Inspector? How to debug the Playwright script |
| 49 | Codegen tool to record & playback with generated automation script |
| 50 | Detailed view of Test Traces, HTML reports, logs & screenshots for test results |

---

## 8.1 What Is Playwright Inspector?

### Definition

**Playwright Inspector is a debugging tool that allows you to pause a Playwright test and inspect the current browser state, locators and test actions step-by-step.**

It is useful when:

- A locator is not working
- A click is failing
- The page is not in the expected state
- You want to inspect elements
- You want to execute actions step-by-step

### Example

```js
await page.pause();
```

When execution reaches this statement, Playwright pauses and opens the debugging interface.

### Mental Model

```text
Test Starts
    ↓
Playwright Action
    ↓
page.pause()
    ↓
Inspector
    ↓
Inspect / Debug
    ↓
Resume
```

---

## 8.2 Why Is Debugging Important?

A test can fail for many reasons:

```text
Wrong locator
     ↓
Element not visible
     ↓
Element not ready
     ↓
Wrong test data
     ↓
Unexpected API response
     ↓
Application issue
```

Debugging helps identify the **actual root cause** instead of blindly changing code.

---

## 8.3 Codegen

### Definition

**Playwright Codegen is a tool that records browser interactions and generates Playwright automation code based on those interactions.**

Typical flow:

```text
Open Codegen
    ↓
Open Website
    ↓
Click / Fill / Select
    ↓
Codegen Records Actions
    ↓
Playwright Code Generated
```

### Important

Codegen is a **starting point**, not a replacement for understanding Playwright.

For example, Codegen may generate a locator that works but isn't the most maintainable choice.

Review the generated code and prefer reliable locators such as:

```js
getByRole()
getByLabel()
getByText()
getByPlaceholder()
getByTestId()
```

---

## 8.4 Trace Viewer

### Definition

**Trace Viewer is a Playwright debugging tool that lets you inspect recorded test execution, including actions, screenshots, network activity and other execution details.**

It is especially useful after a test fails.

Mental model:

```text
Test Execution
      ↓
Trace Recorded
      ↓
Trace Viewer
      ↓
Inspect Failed Step
      ↓
Understand Root Cause
```

### What Can You Investigate?

Depending on what was recorded, you can inspect:

- Test actions
- Timing
- Screenshots
- DOM-related information
- Network activity
- Console/log information
- Failed steps
- Before/after execution state

---

## 8.5 HTML Report

### Definition

A **Playwright HTML report is a visual report of test execution that helps you understand which tests passed, failed, skipped and why.**

Typical result:

```text
Tests
│
├── Login Test       ✓
├── Product Test     ✓
├── Checkout Test    ✗
└── Order Test       ✓
```

Use the report to investigate failed tests.

---

## ⭐ Section 8 Must Know

You should be able to explain:

> "If my Playwright test fails, I can use Playwright Inspector for interactive debugging and Trace Viewer/HTML reports for detailed execution analysis."

---

# 9️⃣ SECTION 9 — Assignment Checkpoint

## 🎯 Section Objective

This section is designed to check whether you can **apply previously learned Playwright concepts to complete real automation scenarios without simply following a tutorial**.

### Topics

| Topic | Purpose |
|---|---|
| Practice App Demo for Assignments | Understand the application and required flow |
| Assignment 1: Full Booking Flow with Event Creation | Automate a complete business scenario |
| Assignment 2: Refund Eligibility Check | Automate a business-rule validation scenario |

---

## 9.1 How to Approach an Assignment

Don't immediately start writing code.

Follow:

```text
Read Requirement
      ↓
Understand Business Flow
      ↓
Identify Test Data
      ↓
Identify UI Elements
      ↓
Choose Locators
      ↓
Write Test Steps
      ↓
Add Assertions
      ↓
Run Test
      ↓
Debug Failure
      ↓
Refactor
```

---

## 9.2 Questions to Ask Before Coding

- What is the starting point?
- What data is required?
- Which page should open first?
- Which elements need interaction?
- Are there dynamic elements?
- Is there a dropdown?
- Is there an iframe?
- Is there a new tab?
- What is the expected result?
- What should I assert?

---

## 9.3 What Is a Business Flow?

### Definition

A **business flow is a sequence of actions representing how a real user or business process completes a particular task in the application.**

Example:

```text
Search Flight
    ↓
Select Flight
    ↓
Enter Passenger Details
    ↓
Confirm Booking
    ↓
Verify Booking
```

Automation should represent this business flow clearly.

---

## ⭐ Section 9 Outcome

After this section you should be able to move from:

```text
"I know Playwright syntax."
```

to:

```text
"I can understand a requirement and create the automation myself."
```

---

# 🔟 SECTION 10 — Handling Web Dialogs, Frames & Event Listeners

## 🎯 Section Objective

Learn how to handle **visibility assertions, JavaScript browser dialogs and iframes**.

### Topics

| Lecture | Topic |
|---:|---|
| 52 | Validate if element is hidden/displayed with Expect assertions |
| 53 | Automate JavaScript Alert popups with Playwright |
| 54 | Handle & Automate frames with Playwright |

---

# 10.1 Visibility Assertions

### Definition

A **visibility assertion** checks whether an element is currently visible or hidden according to Playwright's visibility rules.

### Visible

```js
await expect(locator).toBeVisible();
```

Meaning:

> I expect this element to be visible.

### Hidden

```js
await expect(locator).toBeHidden();
```

Meaning:

> I expect this element to be hidden.

### Example

```js
await expect(
    page.getByText('Welcome')
).toBeVisible();
```

---

# 10.2 Why Assertions Matter

Suppose you click Login.

You should not only click it.

You should verify:

```text
Click Login
    ↓
Dashboard appears
    ↓
Verify Dashboard
```

Example:

```js
await page.getByRole('button', {
    name: 'Login'
}).click();

await expect(
    page.getByText('Dashboard')
).toBeVisible();
```

---

# 10.3 What Is a JavaScript Dialog?

### Definition

A **JavaScript dialog is a browser-generated popup created by JavaScript**, commonly using:

```js
alert()
confirm()
prompt()
```

These are different from normal HTML modal dialogs created inside the webpage.

---

# 10.4 Alert

Example JavaScript:

```js
alert('Welcome');
```

The browser displays a dialog containing a message and an OK button.

---

# 10.5 Confirm

Example:

```js
confirm('Are you sure?');
```

Usually gives:

```text
OK
Cancel
```

You can:

```text
Accept
or
Dismiss
```

---

# 10.6 Prompt

Example:

```js
prompt('Enter your name');
```

A prompt allows the user to enter text.

---

# 10.7 Handling Dialogs in Playwright

Playwright provides the `dialog` event.

```js
page.on('dialog', async dialog => {

    console.log(dialog.message());

    await dialog.accept();

});
```

### Flow

```text
User Action
     ↓
JavaScript Dialog
     ↓
dialog Event
     ↓
Accept / Dismiss
```

---

# 10.8 `dialog.accept()`

### Definition

Accepts the dialog, equivalent to choosing the positive/OK action.

```js
await dialog.accept();
```

For a prompt:

```js
await dialog.accept('Garvit');
```

---

# 10.9 `dialog.dismiss()`

### Definition

Dismisses the dialog, generally equivalent to choosing Cancel.

```js
await dialog.dismiss();
```

---

# 10.10 `dialog.message()`

Returns the message displayed in the dialog.

```js
console.log(dialog.message());
```

---

# 10.11 `dialog.type()`

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

# 10.12 `dialog.defaultValue()`

Returns the default value of a prompt dialog when applicable.

```js
console.log(dialog.defaultValue());
```

---

# 10.13 Complete Alert Example

```js
page.on('dialog', async dialog => {

    console.log('Dialog message:',
        dialog.message());

    console.log('Dialog type:',
        dialog.type());

    await dialog.accept();
});

await page.getByRole('button', {
    name: 'Show Alert'
}).click();
```

### ⭐ Important

Register the dialog listener **before** performing the action that opens the dialog.

---

# 10.14 What Is an Iframe?

### Proper Definition

An **iframe (inline frame) is an HTML element that embeds another HTML document inside the current webpage.**

Think:

```text
Main Page
│
├── Header
├── Main Content
│
└── iframe
      │
      └── Separate HTML document
```

The content inside an iframe belongs to a separate document context.

---

# 10.15 Why Can't We Treat an Iframe Like Normal Page Content?

Suppose:

```text
Main Page
   ↓
iframe
   ↓
Login form
```

The input inside the iframe belongs to the iframe's document.

Therefore, you need to target the frame before interacting with its content.

---

# 10.16 `frameLocator()`

Playwright provides:

```js
page.frameLocator('#payment-frame')
```

Then locate an element inside:

```js
const frame =
    page.frameLocator('#payment-frame');

await frame.getByLabel('Card Number')
    .fill('4111111111111111');
```

### Mental Model

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

# 10.17 Section 10 Must Know

You should understand:

```text
Visibility Assertions
       +
Alert
       +
Confirm
       +
Prompt
       +
Dialog Event
       +
Iframe
       +
frameLocator()
```

---

# 1️⃣1️⃣ SECTION 11 — API Testing with Playwright + Web/API Tests

## 🎯 Section Objective

This is a major step toward real-world automation.

You learn how to combine:

```text
API Automation
      +
Web UI Automation
```

### Topics

| Lecture | Topic |
|---:|---|
| 55 | Importance of API integration calls for Web tests |
| 56 | Playwright request method to make API calls and grab response |
| 57 | Parsing API response & passing token to browser local storage |
| 58 | Place order API to create order and bypass UI flow with mix of Web/API |
| 59 | End-to-end validation with mix of API & Web concepts |
| 60 | Important prerequisite before next videos |
| 61 | Refactor API calls from utils folder and isolate from Web test logic |
| 62 | Part 2 — Refactor API calls from utils folder and isolate from Web test logic |
| 63 | Code download for APIUtils file |
| 64 | Code download for WebAPIPart file |

---

# 11.1 What Is API Testing?

### Definition

**API testing is the process of directly validating an application's API endpoints by sending requests and verifying their responses without depending on the browser UI for every operation.**

Typical flow:

```text
Test
 ↓
API Request
 ↓
Server
 ↓
API Response
 ↓
Validation
```

---

# 11.2 Why Use API Calls in Web Tests?

Imagine a test requires creating an order.

UI approach:

```text
Login
 ↓
Search Product
 ↓
Add Product
 ↓
Checkout
 ↓
Place Order
```

This may take considerable time.

API + UI approach:

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

The test spends UI time only where UI behavior actually needs validation.

---

# 11.3 Advantages of API + UI Testing

Using APIs for suitable setup operations can provide:

- Faster tests
- Less UI dependency
- Easier test-data creation
- Easier authentication setup
- Better separation of responsibilities
- More focused UI tests

---

# 11.4 Playwright API Request

Playwright provides API request capabilities that allow tests to communicate with backend endpoints directly.

Conceptually:

```text
Test
 ↓
HTTP Request
 ↓
Backend API
 ↓
Response
```

Common methods:

```text
GET
POST
PUT
PATCH
DELETE
```

---

# 11.5 HTTP Methods

| Method | Common Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create data / perform an operation |
| PUT | Replace an existing resource |
| PATCH | Partially update a resource |
| DELETE | Remove a resource |

---

# 11.6 API Response

When an API responds, you normally inspect:

```text
Status Code
Headers
Response Body
```

Example:

```json
{
    "id": 101,
    "name": "Laptop"
}
```

You can parse the response and use values such as:

```text
id
token
name
orderId
```

---

# 11.7 Authentication Token

### Definition

An **authentication token is a value used by an application/API to represent an authenticated session or authorization state.**

Typical flow:

```text
API Login
   ↓
Token
   ↓
Browser Storage / Auth State
   ↓
Open Application
   ↓
Authenticated User
```

This can avoid repeatedly performing the complete login UI flow when authentication setup is not what the test is trying to validate.

---

# 11.8 Browser Local Storage

### Definition

**Local Storage is browser-side key-value storage associated with a web origin that can persist across page reloads and browser sessions until it is cleared.**

Applications may store client-side data there, including application-specific authentication information.

Example conceptual data:

```text
localStorage
│
├── token
├── user
└── preferences
```

### Important

Don't assume every application stores authentication tokens in Local Storage. Modern applications may use cookies, session storage, memory, or other mechanisms.

---

# 11.9 API Login → Browser Authentication

The concept from this section is:

```text
API Login
    ↓
Get Token
    ↓
Put Required Auth State
    ↓
Open Browser
    ↓
Application Recognizes Session
```

This is a **hybrid automation technique**.

---

# 11.10 Create Order Through API

Suppose the business flow is:

```text
Login
 ↓
Product
 ↓
Cart
 ↓
Checkout
 ↓
Order
```

You can create the order through an API where appropriate:

```text
API
 ↓
Create Order
 ↓
Order ID
 ↓
UI
 ↓
Order History
 ↓
Verify Order
```

This is a powerful real-world pattern.

---

# 11.11 What Is Web + API Hybrid Testing?

### Definition

**Web + API hybrid testing means using API calls and browser/UI actions together in one test flow, assigning each operation to the layer where it is most efficient and meaningful to validate.**

Example:

```text
API → Create test data
API → Authenticate
       ↓
UI → Open application
UI → Navigate
UI → Verify displayed result
```

---

# 11.12 API Utility

### Definition

An **API utility is a reusable module/class/function that contains common API operations so that multiple tests can use the same API logic without duplicating code.**

Example structure:

```text
project/
│
├── tests/
│   └── order.spec.js
│
└── utils/
    └── APIUtils.js
```

Test:

```text
order.spec.js
      ↓
APIUtils
      ↓
Backend API
```

---

# 11.13 Why Refactor API Calls?

Without utility:

```text
Test 1 → API code
Test 2 → API code
Test 3 → API code
Test 4 → API code
```

This creates duplication.

With utility:

```text
          APIUtils
        /    |    \
       ↓     ↓     ↓
    Test 1 Test 2 Test 3
```

Benefits:

- Reusability
- Maintainability
- Cleaner tests
- Less duplicate code
- Centralized API logic

---

# ⭐ Section 11 Outcome

You should be able to explain:

> "I can use API calls to create data or authenticate, and then use Playwright UI automation to validate the browser behavior. This Web + API approach can reduce unnecessary UI steps and make tests faster and more maintainable."

---

# 1️⃣2️⃣ SECTION 12 — Session Storage & Network Interception

## 🎯 Section Objective

This section covers two advanced Playwright areas:

```text
Session / Authentication State
             +
Network Requests / Responses
```

### Topics

| Lecture | Topic |
|---:|---|
| 65 | Save session storage using Playwright and inject into new Browser Context |
| 66 | Debug API steps in script using Visual Studio debugging |
| 67 | Trace Viewer to understand API logging requests/responses |
| 68 | Intercept Network response calls with Playwright route method |
| 69 | Understand route method and parameters in network interception |
| 70 | Code download |
| 71 | Intercept Network request calls with Playwright |
| 72 | Code download |
| 73 | Abort Network calls with Playwright |

---

# 12.1 What Is Session Storage?

### Proper Definition

**Session Storage is browser-side key-value storage associated with a specific origin and browsing context. It is generally intended for data that belongs to the current page/tab session.**

Mental model:

```text
Browser
│
├── Local Storage
│
└── Session Storage
```

Session Storage is different from Local Storage in its lifetime/scope behavior.

---

# 12.2 Local Storage vs Session Storage

| Feature | Local Storage | Session Storage |
|---|---|---|
| Storage type | Browser-side key/value storage | Browser-side key/value storage |
| Scope | Origin | Origin + browsing context |
| Typical lifetime | Persists until cleared | Typically tied to page/tab session |
| Common use | Persistent client-side data | Temporary page-session data |

---

# 12.3 Why Is Session State Useful in Automation?

Authentication can be expensive:

```text
Open Login
 ↓
Enter Credentials
 ↓
Submit
 ↓
Server Authentication
 ↓
Session Created
```

For many tests, repeating this UI flow is unnecessary.

Instead, you can prepare authentication/session state and use it when appropriate.

```text
Create Session
      ↓
Save State
      ↓
New Context
      ↓
Restore Required State
      ↓
Open Application
```

---

# 12.4 Browser Context and Authentication

Remember:

```text
Browser
   ↓
Browser Context
   ↓
Pages
```

A context can contain browser state such as:

- Cookies
- Local storage
- Session-related application state

Playwright also provides authentication-state mechanisms that are commonly preferred for reusable login state.

---

# 12.5 Debugging API Steps

When API setup fails, use the IDE debugger.

You can:

- Add breakpoints
- Inspect variables
- Inspect request payloads
- Inspect response data
- Step through code
- Identify where the failure occurs

Mental model:

```text
API Code
   ↓
Breakpoint
   ↓
Pause
   ↓
Inspect
   ↓
Step
   ↓
Find Problem
```

---

# 12.6 Trace Viewer + Network

Trace Viewer can help connect:

```text
UI Action
   ↓
Network Request
   ↓
Server Response
   ↓
UI Result
```

For example:

```text
Click Login
    ↓
POST /login
    ↓
200 OK
    ↓
Dashboard
```

If the dashboard doesn't appear, trace information can help determine what happened.

---

# 12.7 What Is Network Interception?

### Proper Definition

**Network interception is the process of capturing network traffic generated by the web application so that Playwright can observe, modify, continue, block, or replace requests and responses.**

Normal flow:

```text
Browser
   ↓
Request
   ↓
Server
   ↓
Response
   ↓
Browser
```

With interception:

```text
Browser
   ↓
Request
   ↓
Playwright
   ↓
Server / Mock
   ↓
Response
   ↓
Playwright
   ↓
Browser
```

---

# 12.8 `page.on('request')`

### Definition

`page.on('request')` registers a listener that runs whenever the page makes a network request.

```js
page.on('request', request => {

    console.log(request.method());
    console.log(request.url());

});
```

This is mainly used for **observing requests**.

---

# 12.9 `page.on('response')`

### Definition

`page.on('response')` registers a listener that runs whenever the page receives a network response.

```js
page.on('response', response => {

    console.log(response.status());
    console.log(response.url());

});
```

This is mainly used for **observing responses**.

---

# 12.10 `waitForRequest()`

### Definition

`waitForRequest()` waits for a specific network request to occur.

```js
const requestPromise =
    page.waitForRequest('**/api/login');

await page.getByRole('button', {
    name: 'Login'
}).click();

const request =
    await requestPromise;
```

Then inspect:

```js
request.url();
request.method();
request.headers();
request.postData();
```

---

# 12.11 `waitForResponse()`

### Definition

`waitForResponse()` waits for a specific network response to be received.

```js
const responsePromise =
    page.waitForResponse('**/api/login');

await page.getByRole('button', {
    name: 'Login'
}).click();

const response =
    await responsePromise;
```

Then:

```js
console.log(response.status());
```

---

# 12.12 Why Wait Before the Action?

Correct:

```js
const responsePromise =
    page.waitForResponse('**/api/products');

await page.getByRole('button', {
    name: 'Load Products'
}).click();

const response =
    await responsePromise;
```

The listener is ready before the action triggers the request.

### Golden Rule

```text
LISTEN / WAIT
      ↓
PERFORM ACTION
      ↓
CAPTURE RESULT
```

---

# 12.13 `page.route()`

### Proper Definition

`page.route()` allows Playwright to intercept matching network requests and control what happens to them.

Basic syntax:

```js
await page.route('**/api/products',
    async route => {

        // control request

    }
);
```

---

# 12.14 `route.request()`

Returns the `Request` object associated with the intercepted route.

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

---

# 12.15 `route.continue()`

### Definition

Allows the intercepted request to proceed normally toward its destination.

```js
await route.continue();
```

Flow:

```text
Request
  ↓
Playwright
  ↓
continue()
  ↓
Real Server
```

You can also use it to modify supported request properties before continuing.

---

# 12.16 Modify Request Headers

```js
await page.route('**/api/products',
    async route => {

        const headers = {
            ...route.request().headers(),
            'x-test-header': 'playwright'
        };

        await route.continue({
            headers
        });
    }
);
```

---

# 12.17 Modify Request Body

```js
await page.route('**/api/login',
    async route => {

        await route.continue({
            postData: JSON.stringify({
                username: 'testuser',
                password: 'test123'
            })
        });
    }
);
```

---

# 12.18 `route.abort()`

### Definition

Stops an intercepted request so that it does not complete normally.

```js
await route.abort();
```

Example:

```js
await page.route('**/*.png',
    async route => {

        await route.abort();
    }
);
```

---

# 12.19 Why Abort a Request?

Possible uses:

- Block images
- Block unnecessary resources
- Block analytics
- Simulate failed requests
- Test failure behavior

Example:

```js
await page.route('**/analytics/**',
    route => route.abort()
);
```

---

# 12.20 `route.fulfill()`

### Definition

`route.fulfill()` provides a response directly from Playwright instead of obtaining the normal response from the server.

This is commonly used for **mocking API responses**.

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

Flow:

```text
Browser
   ↓
Request
   ↓
Playwright
   ↓
Mock Response
   ↓
Browser
```

---

# 12.21 What Is Mocking?

### Definition

**Mocking is replacing a real dependency with controlled test data or behavior.**

Example:

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

Now you can test the UI's empty-state behavior.

---

# 12.22 Mock Server Error

```js
await page.route('**/api/products',
    async route => {

        await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({
                error: 'Internal Server Error'
            })
        });

    }
);
```

Now the frontend receives a simulated server failure.

---

# 12.23 Mock Unauthorized Response

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

```text
Session expiry
Invalid authentication
Unauthorized access
```

---

# 12.24 `route.fetch()`

### Definition

`route.fetch()` sends the intercepted request to the real server and returns the real response so you can inspect or modify it before fulfilling it back to the browser.

Flow:

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

# 12.25 Modify a Real Response

```js
await page.route('**/api/products',
    async route => {

        const response =
            await route.fetch();

        const data =
            await response.json();

        data.products.push({
            name: 'Mock Product',
            price: 999
        });

        await route.fulfill({
            response,
            json: data
        });

    }
);
```

This is different from completely replacing the API.

You're using:

```text
Real Response
      ↓
Modify
      ↓
Return Modified Response
```

---

# 12.26 `continue()` vs `abort()` vs `fulfill()` vs `fetch()`

| Method | Proper Definition | Main Purpose |
|---|---|---|
| `route.continue()` | Allows request to proceed | Real request |
| `route.abort()` | Stops request | Block/fail request |
| `route.fulfill()` | Supplies a response directly | Mock response |
| `route.fetch()` | Gets real server response | Inspect/modify real response |

### 🧠 Easy Memory

```text
CONTINUE → Go to server
ABORT    → Stop
FULFILL  → Give custom response
FETCH    → Get real response
```

---

# 12.27 Request vs Response Interception

### Request

```text
Browser → Server
```

You can inspect/modify:

```text
URL
Method
Headers
Body
```

### Response

```text
Server → Browser
```

You can inspect:

```text
Status
Headers
Body
```

---

# 12.28 Section 12 Complete Network Mental Model

```text
                    WEB APPLICATION
                          │
                          ↓
                   Network Request
                          │
                          ↓
                    page.route()
                          │
          ┌───────────────┼───────────────┐
          ↓               ↓               ↓
      continue          abort          fulfill
          ↓               ↓               ↓
     Real Server          ❌          Fake Response
          │
          ↓
     Real Response
          │
          ↓
       Browser
```

Advanced:

```text
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

# 1️⃣3️⃣ SECTION 13 — Playwright Fixtures & Custom Fixtures

## 🎯 Section Objective

This section introduces **reusable test setup and framework design** using Playwright fixtures.

### Topics

| Lecture | Topic |
|---:|---|
| 74 | What are Playwright Fixtures — use cases & implementation |
| 75 | Build UI Login Fixture & API call Fixture for a Test |
| 76 | Demo of 3 Custom Fixtures — Data Driven, UI & API with Setup/Teardown |

---

# 13.1 What Is a Fixture?

### Proper Definition

**A Playwright fixture is a reusable mechanism that provides a test with the resources, setup, data or environment it needs, and can also perform cleanup after the test.**

Basic flow:

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

# 13.2 Why Do We Need Fixtures?

Suppose 20 tests need login.

Without a fixture:

```text
Test 1 → Login code
Test 2 → Login code
Test 3 → Login code
...
Test 20 → Login code
```

This creates duplicate code.

With a fixture:

```text
             Login Fixture
              /    |    \
             ↓     ↓     ↓
          Test 1 Test 2 Test 3
```

The login setup is defined once and reused.

---

# 13.3 Benefits of Fixtures

Fixtures provide:

- Reusable setup
- Less duplicate code
- Better test readability
- Centralized configuration
- Easier maintenance
- Better separation of setup and test logic
- Reusable API/UI preparation
- Cleanup support

---

# 13.4 Built-in Fixtures

Playwright provides built-in fixtures such as:

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

API-related example:

```js
test('API Test', async ({ request }) => {

    // API operation

});
```

---

# 13.5 What Is a Custom Fixture?

### Definition

A **custom fixture is a user-defined reusable fixture created to provide application-specific setup, data, resources or behavior to tests.**

Examples:

```text
login fixture
API fixture
test-data fixture
authenticated page fixture
```

---

# 13.6 UI Login Fixture

Suppose many tests require an authenticated user.

Instead of repeating:

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

create reusable login setup.

Concept:

```text
Login Fixture
      ↓
Authenticated Page
      ↓
Actual Test
```

The test can then focus on business functionality instead of repeating login steps.

---

# 13.7 API Fixture

You can create a fixture that prepares data using an API.

Example concept:

```text
API Fixture
     ↓
Create Test Data
     ↓
Test
```

For example:

```text
Create user
Create product
Create order
```

before the actual UI test begins.

---

# 13.8 Data-Driven Fixture

### Definition

A data-driven fixture provides test-specific or reusable data to a test so that the test logic can remain separate from data preparation.

Concept:

```text
Fixture
   ↓
Test Data
   ↓
Test
```

This helps avoid mixing large data-generation blocks with actual test steps.

---

# 13.9 Setup and Teardown

### Setup

Setup is the preparation performed before a test.

Examples:

```text
Login
Create test data
Create API client
Open required resource
```

### Teardown

Teardown is cleanup performed after a test.

Examples:

```text
Delete test data
Reset state
Clean resources
```

Full flow:

```text
SETUP
  ↓
TEST
  ↓
TEARDOWN
```

---

# 13.10 Why Teardown Matters

Imagine your test creates:

```text
User
Order
Product
```

If you don't clean them up:

```text
Test 1 → creates data
Test 2 → sees old data
Test 3 → sees old data
```

This can create test dependency and unstable results.

Good automation aims for independent tests.

---

# 13.11 Three Fixture Categories

The course demonstrates concepts around:

```text
1. Data Fixture
2. UI Fixture
3. API Fixture
```

Mental model:

```text
                 CUSTOM FIXTURES
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
        DATA           UI           API
          │            │            │
          ↓            ↓            ↓
       Prepare       Login /      Backend
        Data         Browser       Data
          │            │            │
          └────────────┼────────────┘
                       ↓
                     TEST
                       ↓
                    CLEANUP
```

---

# 13.12 Fixture vs Normal Function

A normal function:

```js
async function login(page) {
    // login code
}
```

is simply a reusable function.

A fixture integrates reusable setup/data/resource behavior into Playwright's test lifecycle and dependency system.

So:

```text
Function
   ↓
Reusable code

Fixture
   ↓
Reusable test dependency
   +
Setup / lifecycle
   +
Test integration
```

---

# ⭐ Section 13 Must Know

You should be able to explain:

> "Fixtures provide reusable test dependencies and setup. Custom fixtures allow us to create application-specific setup such as UI login, API data preparation or test data, while setup and teardown help keep tests clean and independent."

---

# 🔥 Sections 8–13 Important Methods

| Topic | Important API / Concept |
|---|---|
| Debugging | `page.pause()` |
| Inspector | Playwright Inspector |
| Code generation | Codegen |
| Debugging failures | Trace Viewer |
| Test results | HTML Report |
| Visibility | `toBeVisible()` |
| Hidden state | `toBeHidden()` |
| Dialog handling | `page.on('dialog')` |
| Accept dialog | `dialog.accept()` |
| Dismiss dialog | `dialog.dismiss()` |
| Dialog message | `dialog.message()` |
| Dialog type | `dialog.type()` |
| Prompt default value | `dialog.defaultValue()` |
| Frames | `frameLocator()` |
| API requests | Playwright request API |
| API response | Status / headers / body |
| Network request listener | `page.on('request')` |
| Network response listener | `page.on('response')` |
| Wait for request | `waitForRequest()` |
| Wait for response | `waitForResponse()` |
| Intercept network | `page.route()` |
| Get intercepted request | `route.request()` |
| Continue request | `route.continue()` |
| Abort request | `route.abort()` |
| Mock response | `route.fulfill()` |
| Fetch real response | `route.fetch()` |
| Remove route | `page.unroute()` |
| Browser state | Context / storage |
| Reusable setup | Fixtures |
| Custom setup | Custom fixtures |
| Cleanup | Teardown |

---

# 🧠 Important Comparisons

## `page.on()` vs `waitFor...()`

| Feature | `page.on()` | `waitFor...()` |
|---|---|---|
| Purpose | Continuously listen | Wait for a specific event |
| Request | `page.on('request')` | `page.waitForRequest()` |
| Response | `page.on('response')` | `page.waitForResponse()` |
| Typical use | Monitoring | Assertion/verification around an action |

---

## `route.continue()` vs `route.fulfill()`

```text
continue()
   ↓
Real Server
```

```text
fulfill()
   ↓
Custom Response
```

**Continue = real backend**

**Fulfill = controlled/mock response**

---

## `route.abort()` vs `route.fulfill()`

```text
abort()
   ↓
❌ Request stopped
```

```text
fulfill()
   ↓
✅ Response provided
```

---

## `route.fetch()` vs `route.fulfill()`

```text
route.fetch()
   ↓
Real server response
```

```text
route.fulfill()
   ↓
Playwright-provided response
```

Combined:

```text
fetch()
 ↓
Real response
 ↓
Modify
 ↓
fulfill()
```

---

# 🎯 Sections 8–13 Practice Plan

| Section | Practice |
|---|---|
| 8 | Debug a failing test using Inspector and Trace Viewer |
| 9 | Complete both assignments without copying |
| 10 | Automate alert, confirm, prompt and iframe scenarios |
| 11 | Create data through API and validate it through UI |
| 12 | Monitor, intercept, mock, modify and abort network calls |
| 13 | Create UI login + API + data custom fixtures |

---

# 🏆 Fresher Readiness Checklist

## Section 8

- [ ] I understand Playwright Inspector.
- [ ] I know `page.pause()`.
- [ ] I understand Codegen.
- [ ] I know why Codegen output should be reviewed.
- [ ] I understand Trace Viewer.
- [ ] I understand HTML reports.
- [ ] I can debug a failed test.

## Section 9

- [ ] I can understand a business requirement.
- [ ] I can convert it into test steps.
- [ ] I can identify locators.
- [ ] I can write assertions.
- [ ] I can solve an assignment independently.
- [ ] I can debug my own solution.

## Section 10

- [ ] I understand visibility assertions.
- [ ] I can handle alerts.
- [ ] I can handle confirm dialogs.
- [ ] I can handle prompts.
- [ ] I understand `dialog`.
- [ ] I understand iframes.
- [ ] I can use `frameLocator()`.

## Section 11

- [ ] I understand API testing.
- [ ] I understand GET/POST/PUT/PATCH/DELETE.
- [ ] I can make API calls.
- [ ] I can inspect API responses.
- [ ] I understand authentication tokens.
- [ ] I understand browser storage in auth flows.
- [ ] I understand Web + API hybrid testing.
- [ ] I can prepare test data through API.
- [ ] I understand API utility separation.

## Section 12

- [ ] I understand session storage.
- [ ] I understand authentication state.
- [ ] I can debug API steps.
- [ ] I can inspect network activity.
- [ ] I understand request interception.
- [ ] I understand response interception.
- [ ] I know `page.route()`.
- [ ] I know `route.continue()`.
- [ ] I know `route.abort()`.
- [ ] I know `route.fulfill()`.
- [ ] I know `route.fetch()`.
- [ ] I know `waitForRequest()`.
- [ ] I know `waitForResponse()`.

## Section 13

- [ ] I understand fixtures.
- [ ] I understand built-in fixtures.
- [ ] I understand custom fixtures.
- [ ] I can create login setup.
- [ ] I can create API setup.
- [ ] I understand data fixtures.
- [ ] I understand setup.
- [ ] I understand teardown.
- [ ] I understand why reusable fixtures improve framework design.

---

# ⭐ Priority Topics

If you're preparing for a fresher job/interview, give extra practice to:

```text
⭐⭐⭐⭐⭐ Inspector + Debugging
⭐⭐⭐⭐⭐ Trace Viewer
⭐⭐⭐⭐⭐ Alerts / Dialogs
⭐⭐⭐⭐⭐ Frames / iframe
⭐⭐⭐⭐⭐ API Testing
⭐⭐⭐⭐⭐ Web + API Hybrid Testing
⭐⭐⭐⭐⭐ Authentication / Storage
⭐⭐⭐⭐⭐ page.route()
⭐⭐⭐⭐⭐ route.continue()
⭐⭐⭐⭐⭐ route.abort()
⭐⭐⭐⭐⭐ route.fulfill()
⭐⭐⭐⭐⭐ route.fetch()
⭐⭐⭐⭐⭐ waitForRequest()
⭐⭐⭐⭐⭐ waitForResponse()
⭐⭐⭐⭐⭐ Fixtures
⭐⭐⭐⭐⭐ Custom Fixtures
```

---

# 🚀 Overall Skill Progression

```text
SECTION 1–3
Understand Playwright
        ↓
SECTION 4–5
Automate UI + Components
        ↓
SECTION 6
Build E2E Flows
        ↓
SECTION 7
Use Smart Locators + Filtering
        ↓
SECTION 8
Debug Tests
        ↓
SECTION 9
Solve Real Assignments
        ↓
SECTION 10
Handle Dialogs + Frames
        ↓
SECTION 11
Use APIs with Web Tests
        ↓
SECTION 12
Control Session + Network
        ↓
SECTION 13
Build Reusable Fixtures
        ↓
🔥 REAL-WORLD AUTOMATION FOUNDATION
```

---

# 🎤 Final Fresher Interview Questions

### 1. What is Playwright Inspector?

> Playwright Inspector is a debugging tool that allows us to pause and inspect Playwright test execution interactively.

### 2. What is Codegen?

> Codegen records browser interactions and generates Playwright automation code. It is useful for quickly discovering actions and locators, but the generated code should be reviewed and improved.

### 3. What is Trace Viewer?

> Trace Viewer is used to investigate Playwright test execution and failures by providing detailed information about actions, screenshots, timing, network activity and other recorded test information.

### 4. How do you handle an alert?

```js
page.on('dialog', async dialog => {
    await dialog.accept();
});
```

### 5. How do you handle an iframe?

```js
const frame =
    page.frameLocator('#my-frame');

await frame.getByLabel('Username')
    .fill('testuser');
```

### 6. Why use API calls in UI tests?

> API calls can be used for efficient test-data preparation or authentication, allowing the UI test to focus on behavior that actually needs browser validation.

### 7. What is network interception?

> Network interception is the process of capturing and controlling network requests so that Playwright can inspect, modify, continue, abort or replace network traffic.

### 8. How do you intercept a request?

```js
await page.route('**/api/products',
    async route => {

        await route.continue();
    }
);
```

### 9. How do you mock an API response?

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

### 10. What is a fixture?

> A fixture is a reusable Playwright test dependency that provides setup, resources or data to a test and can perform cleanup as part of the test lifecycle.

---

# 🧩 Final Mental Model

```text
                         PLAYWRIGHT
                             │
          ┌──────────────────┼──────────────────┐
          ↓                  ↓                  ↓
         UI                 API              DEBUG
          │                  │                  │
       Locators          API Calls          Inspector
       Actions           Responses          Trace
       Assertions        Tokens             Reports
          │                  │                  │
          └──────────────────┼──────────────────┘
                             ↓
                      HYBRID AUTOMATION
                             │
                   ┌─────────┴─────────┐
                   ↓                   ↓
                  UI                 API
                   │                   │
                   └─────────┬─────────┘
                             ↓
                       TEST FRAMEWORK
                             │
                         Fixtures
                             │
                    Setup + Teardown
                             ↓
                  🔥 REUSABLE AUTOMATION
```

## 🏁 Final Goal

After Sections 8–13, don't aim to say:

> "I watched 29 more Playwright lectures."

Aim to say:

> **"I can debug my tests, handle complex browser components, use APIs to prepare and validate data, control network traffic, manage authentication state, and create reusable fixtures for my automation framework."**

That is the real skill these sections are building.
