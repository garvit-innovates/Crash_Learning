# 📘 API Testing — Study Notes (Day 11 to Day 14)
### *A Fresher's Guide to API Testing Fundamentals & Postman*

---

## 🗂️ Table of Contents
1. [Day 11: API Testing Fundamentals (Theory)](#day-11-api-testing-fundamentals-theory)
2. [Day 12: Postman Basics](#day-12-postman-basics)
3. [Day 13: Manual API Testing — Validating Responses](#day-13-manual-api-testing--validating-responses)
4. [Day 14: Postman — Collections, Variables & Practical Workflow](#day-14-postman--collections-variables--practical-workflow)
5. [Quick Revision Cheat Sheet](#-quick-revision-cheat-sheet)

---

## Day 11: API Testing Fundamentals (Theory)

### 🔹 1. What is an API?

> **API (Application Programming Interface)** is a set of rules/protocols that allows two software applications to communicate with each other — one asks for data/action (**client**), and the other provides it (**server**).

**Real-life analogy:** Think of a restaurant.
- **You (client)** → order food from a menu
- **Waiter (API)** → carries your request to the kitchen and brings back the food
- **Kitchen (server)** → prepares the actual response (data)

You never talk to the kitchen directly — the API is the messenger in between.

### 🔹 2. Client-Server Model

| Component | Role |
|---|---|
| **Client** | Sends the request (e.g., browser, mobile app, Postman) |
| **Server** | Receives the request, processes it, and sends back a response |
| **API** | The contract/interface that defines *how* client and server talk |

**Flow:**
```
Client  --------- Request --------->  Server
Client  <-------- Response ---------  Server
```

### 🔹 3. REST Principles

**REST (Representational State Transfer)** is an architectural style for designing APIs. A REST API is called **RESTful** if it follows these principles:

| Principle | Meaning |
|---|---|
| **Statelessness** | Every request from client to server must contain all info needed; server doesn't store client session state between requests |
| **Client-Server separation** | Client and server evolve independently; UI logic is separate from data storage logic |
| **Uniform Interface** | Consistent way to interact with resources (URLs, standard HTTP methods) |
| **Resource-based** | Everything is treated as a "resource" (e.g., a user, an order) identified by a URL (URI) |
| **Cacheable** | Responses should define themselves as cacheable or not, to improve performance |

**Example resource URL:** `https://api.example.com/users/101` → refers to the user with ID 101.

### 🔹 4. HTTP Methods (CRUD Operations)

| Method | Purpose | CRUD Equivalent | Example |
|---|---|---|---|
| **GET** | Retrieve data | Read | `GET /users/101` → fetch user 101 |
| **POST** | Create new data | Create | `POST /users` → create a new user |
| **PUT** | Update/replace entire resource | Update (full) | `PUT /users/101` → replace all details of user 101 |
| **PATCH** | Partially update a resource | Update (partial) | `PATCH /users/101` → update only the email field |
| **DELETE** | Remove a resource | Delete | `DELETE /users/101` → delete user 101 |

> 💡 **Tip:** PUT vs PATCH is a common interview question — **PUT replaces the whole object**, **PATCH updates only specific fields**.

### 🔹 5. HTTP Status Codes

Status codes tell you the **result** of your request. They are grouped into 5 categories:

| Range | Category | Meaning | Common Examples |
|---|---|---|---|
| **1xx** | Informational | Request received, still processing | `100 Continue` |
| **2xx** | Success | Request was successful | `200 OK`, `201 Created`, `204 No Content` |
| **3xx** | Redirection | Further action needed to complete request | `301 Moved Permanently`, `304 Not Modified` |
| **4xx** | Client Error | Something wrong with the request (client's fault) | `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found` |
| **5xx** | Server Error | Something wrong on the server (server's fault) | `500 Internal Server Error`, `503 Service Unavailable` |

**Most commonly tested codes:**

| Code | Name | When it Occurs |
|---|---|---|
| `200` | OK | Successful GET/PUT/PATCH request |
| `201` | Created | Successful POST that creates a new resource |
| `204` | No Content | Successful DELETE, no body returned |
| `400` | Bad Request | Invalid data / malformed syntax sent by client |
| `401` | Unauthorized | Missing or invalid authentication |
| `403` | Forbidden | Authenticated, but not allowed to access this resource |
| `404` | Not Found | Resource doesn't exist |
| `500` | Internal Server Error | Unexpected error on server side |

### 🔹 6. Request Structure

Every HTTP request has 4 main parts:

| Part | Description | Example |
|---|---|---|
| **URL** | The endpoint/address being called | `https://api.example.com/users` |
| **Headers** | Metadata about the request | `Content-Type: application/json`, `Authorization: Bearer xyz` |
| **Params** | Extra data passed via URL (Query/Path params) | `?page=2&limit=10` |
| **Body** | The actual data being sent (mainly for POST/PUT/PATCH) | `{ "name": "Rahul", "age": 25 }` |

### 🔹 7. Response Structure

| Part | Description | Example |
|---|---|---|
| **Status** | HTTP status code + message | `200 OK` |
| **Headers** | Metadata about the response | `Content-Type: application/json` |
| **Body** | The actual data returned by server | `{ "id": 101, "name": "Rahul" }` |

### 🔹 8. Reading JSON

**JSON (JavaScript Object Notation)** is the most common data format used in APIs — lightweight, human-readable, key-value based.

**Example JSON response:**
```json
{
  "id": 101,
  "name": "Rahul Sharma",
  "isActive": true,
  "address": {
    "city": "Aligarh",
    "pincode": 202001
  },
  "skills": ["Manual Testing", "API Testing", "Postman"]
}
```

**Key concepts:**
| Term | Meaning | Example from above |
|---|---|---|
| **Key-Value pair** | Data stored as `"key": value` | `"name": "Rahul Sharma"` |
| **Object** | Data wrapped in `{ }`, can be nested | `"address": { ... }` |
| **Array** | List of values in `[ ]` | `"skills": [...]` |
| **Nested Object** | An object inside another object | `address` inside the main object |

### 📝 Day 11 Assignments — How to Approach

1. **Label a JSON response:** Go line by line, mark each item as a *key-value pair*, *object*, *nested object*, or *array*.
2. **Match 8 status codes to meanings:** Memorize the table above — group them by 2xx (success), 4xx (client error), 5xx (server error) to make matching easy.

---

## Day 12: Postman Basics

### 🔹 1. What is Postman?

**Postman** is a GUI-based API testing tool that lets you send requests (GET, POST, PUT, DELETE, etc.) to an API and inspect the response — without writing any code.

### 🔹 2. Postman Interface — Key Areas

| Component | Description |
|---|---|
| **Collections** | A folder that groups related API requests together (e.g., all "User" APIs in one collection) |
| **Environments** | A set of variables (like base URL, tokens) that can be switched (Dev/QA/Prod) |
| **History** | A log of every request you've sent previously, so you can revisit or reuse them |

### 🔹 3. Sending a GET Request

**Steps:**
1. Open Postman → click **New Request**
2. Select method: `GET`
3. Enter the endpoint URL, e.g. `https://reqres.in/api/users/2`
4. Click **Send**
5. View response in the bottom panel

### 🔹 4. Creating & Organizing a Collection

- Click **New → Collection** → give it a name (e.g., "User Management APIs")
- Save each request into this collection using **Save As**
- You can create **folders inside a collection** to group requests logically (e.g., `Users`, `Orders`, `Auth`)

> 💡 Good practice: Name requests clearly — `GET - Get User by ID`, `POST - Create User`, etc.

### 🔹 5. Query Params vs Path Params

| Type | Definition | Example | Where it appears |
|---|---|---|---|
| **Path Param** | Part of the URL path itself, identifies a specific resource | `/users/101` → `101` is the path param | Embedded directly in URL structure |
| **Query Param** | Extra key-value filters added after `?` | `/users?role=admin&page=2` | Appended after `?`, joined by `&` |

**Analogy:** Path param = "which drawer" (specific item), Query param = "filter/sort options" (how to search).

### 🔹 6. Sending a POST Request with JSON Body

**Steps:**
1. Select method: `POST`
2. Enter endpoint, e.g. `https://reqres.in/api/users`
3. Go to **Body tab → raw → JSON**
4. Enter JSON payload:
```json
{
  "name": "Priya",
  "job": "QA Engineer"
}
```
5. Click **Send**

### 🔹 7. Reading the Response Panel

| Field | What it Tells You |
|---|---|
| **Status** | HTTP status code (e.g., `200 OK`, `404 Not Found`) |
| **Time** | How long the server took to respond (in ms) |
| **Size** | Size of the response payload (in KB/B) |
| **Body** | The actual data returned — usually in JSON, viewable as Pretty/Raw/Preview |

### 📝 Day 12 Assignment — How to Approach

- Pick a **public test API** (e.g., `https://reqres.in` or `https://jsonplaceholder.typicode.com`)
- Send **GET, POST, PUT, DELETE** requests one by one
- For each: **take a screenshot** of the request + response, and **note down**:
  - Status code received
  - Whether it matched your expectation

---

## Day 13: Manual API Testing — Validating Responses

### 🔹 1. Validating Status Codes

You must check **both** positive and negative scenarios:

| Scenario Type | Example | Expected Status |
|---|---|---|
| **Positive** | Valid GET request for existing user | `200 OK` |
| **Positive** | Valid POST creating a new resource | `201 Created` |
| **Negative** | GET request for a user ID that doesn't exist | `404 Not Found` |
| **Negative** | POST with missing required field | `400 Bad Request` |
| **Negative** | Request without auth token | `401 Unauthorized` |

### 🔹 2. Validating Response Body Values Manually

Beyond just the status code, check that the **actual data** in the response body is correct:

- Does the returned `id` match what you requested?
- Are field data types correct (e.g., `age` is a number, not a string)?
- Are mandatory fields present and not `null`/empty?
- Does the response match what you sent (for POST/PUT)?

**Example:**
Request → `POST /users` with `{ "name": "Aman", "job": "Tester" }`
Expected in response → `name: "Aman"`, `job: "Tester"`, plus a new `id` and `createdAt` field.

### 🔹 3. Headers: Content-Type, Authorization

| Header | Purpose | Example Value |
|---|---|---|
| **Content-Type** | Tells the server what format the body data is in | `application/json` |
| **Authorization** | Carries credentials/tokens to authenticate the request | `Bearer <token>` or `Basic <encoded-credentials>` |

### 🔹 4. Basic Auth vs Bearer Token vs API Key (Concept)

| Auth Type | How it Works | Example Header |
|---|---|---|
| **Basic Auth** | Username & password encoded in Base64, sent in header | `Authorization: Basic dXNlcjpwYXNz` |
| **Bearer Token** | A token (usually JWT/OAuth) sent after successful login, proves identity | `Authorization: Bearer eyJhbGciOi...` |
| **API Key** | A unique key assigned to the client/app, often sent as header or query param | `x-api-key: abc123xyz` or `?api_key=abc123xyz` |

> 💡 **Bearer Token** is most common in modern APIs — it's usually obtained after a login/authentication call and reused in subsequent requests.

### 🔹 5. Negative Testing

Negative testing means intentionally sending **incorrect/invalid input** to check the API handles errors gracefully instead of crashing.

| Negative Test Type | Example |
|---|---|
| **Missing fields** | Sending `POST /users` with no `name` field |
| **Wrong data types** | Sending `"age": "twenty-five"` instead of `25` |
| **Invalid auth** | Sending an expired or fake token |
| **Invalid values** | Sending a negative number for `quantity`, or an invalid email format |

### 🔹 6. Common API Bugs to Watch For

- ❌ Wrong status code returned (e.g., `200 OK` even when data is invalid)
- ❌ Incorrect/misleading error messages
- ❌ Sensitive data exposed in response (e.g., passwords in plain text)
- ❌ Inconsistent data types between requests
- ❌ Missing validation (accepting empty/null required fields)
- ❌ Duplicate records created on repeated POST calls
- ❌ Pagination/filtering not working as expected

### 📝 Day 13 Assignment — How to Approach

1. **Write 8–10 manual test cases** in this format:

| # | Action | Data | Expected Result |
|---|---|---|---|
| 1 | Send GET for valid user ID | `/users/2` | `200 OK`, correct user data returned |
| 2 | Send GET for invalid user ID | `/users/9999` | `404 Not Found` |
| 3 | Send POST with valid body | `{name, job}` | `201 Created`, response has new `id` |
| 4 | Send POST with missing `name` | `{job: "QA"}` | `400 Bad Request` |
| ... | *(continue for headers, auth, negative cases)* | | |

2. **Execute in Postman** and record **Actual Result** next to Expected — mark ✅ Pass or ❌ Fail.

---

## Day 14: Postman — Collections, Variables & Practical Workflow

### 🔹 1. Environments and Variables

**Environment** = A named set of variables (e.g., "QA Environment", "Prod Environment") that you can switch between.

**Variable** = A placeholder that stores a reusable value, written as `{{variable_name}}`.

**Common variables to set up:**

| Variable | Example Value | Used For |
|---|---|---|
| `base_url` | `https://api.example.com` | Avoid repeating the domain in every request |
| `token` | `eyJhbGciOi...` | Reused across requests needing auth |
| `user_id` | `101` | Dynamic values passed between requests |

**Example usage in a request URL:**
```
{{base_url}}/users/{{user_id}}
```
Instead of hardcoding:
```
https://api.example.com/users/101
```

> 💡 **Why it matters:** If the base URL changes (e.g., moving from staging to production), you update it in **one place** (the environment), not in every single request.

### 🔹 2. Chaining Requests (Using One Response in the Next Request)

**Chaining** = Taking data from one API response and using it as input for the next API call.

**Example flow:**
1. `POST /login` → response returns `token`
2. Save `token` into an environment variable using a **test script**:
```javascript
// In the "Tests" tab of the login request
let response = pm.response.json();
pm.environment.set("token", response.token);
```
3. Use `{{token}}` in the Authorization header of the **next** request (e.g., `GET /profile`)

This mimics a **real-world QA workflow** — login once, reuse the token across many API calls.

### 🔹 3. Organizing a Full Collection per Feature/Module

Structure your Postman Collection like a **folder tree**, grouped by feature:

```
📁 E-Commerce API Collection
 ┣ 📁 Auth
 ┃ ┣ POST - Login
 ┃ ┗ POST - Register
 ┣ 📁 Users
 ┃ ┣ GET - Get All Users
 ┃ ┣ GET - Get User by ID
 ┃ ┣ PUT - Update User
 ┃ ┗ DELETE - Delete User
 ┗ 📁 Orders
   ┣ POST - Create Order
   ┗ GET - Get Order Status
```

This makes it easy for any team member to navigate and understand the API coverage.

### 🔹 4. Exporting/Sharing a Collection

- Right-click Collection → **Export** → saves as a `.json` file
- This file can be **shared with teammates** or **imported** into another Postman instance
- Also useful for version control (can be committed to Git) or handing off to developers

### 🔹 5. Where Manual API Testing Fits in the QA Workflow

```
Requirement/User Story
        ↓
Understand API Contract (Swagger/Postman docs)
        ↓
Write Manual Test Cases (positive + negative)
        ↓
Execute in Postman (validate status code, body, headers)
        ↓
Log Bugs (if actual ≠ expected)
        ↓
Retest after fix
        ↓
(Later) Automate repetitive/regression cases
```

> 💡 Manual API testing is usually done **early** (as soon as an endpoint is ready) — before full UI is built — because it validates the backend logic independently.

### 📝 Day 14 Assignment — How to Approach

**Goal:** Build one complete Postman Collection covering full **CRUD** (Create → Read → Update → Delete) for a sample resource.

**Suggested steps:**
1. Create an **Environment** with `base_url` variable (e.g., using `https://reqres.in`)
2. Build these 4 requests inside one Collection folder:
   - `POST {{base_url}}/users` → Create
   - `GET {{base_url}}/users/{{user_id}}` → Read
   - `PUT {{base_url}}/users/{{user_id}}` → Update
   - `DELETE {{base_url}}/users/{{user_id}}` → Delete
3. Use `{{user_id}}` as a variable — capture it from the Create response using a test script, so no ID is hardcoded
4. Verify each step's status code and response body

---

## 📋 Quick Revision Cheat Sheet

### HTTP Methods
`GET` = Read | `POST` = Create | `PUT` = Full Update | `PATCH` = Partial Update | `DELETE` = Remove

### Status Code Groups
`2xx` Success | `3xx` Redirect | `4xx` Client Error | `5xx` Server Error

### Auth Types
`Basic Auth` (username/password) → `Bearer Token` (login-based token) → `API Key` (assigned key)

### Postman Must-Knows
`{{variable}}` for reusability | **Environments** for switching configs | **Tests tab** for chaining requests | **Collections** for organizing by feature

### Testing Mindset
Always test: ✅ Positive case (valid input) + ❌ Negative case (invalid/missing/wrong input) + 🔒 Auth case (valid/invalid/missing token)

---

*Prepared as structured revision notes for Days 11–14: API Testing Fundamentals & Postman.*
