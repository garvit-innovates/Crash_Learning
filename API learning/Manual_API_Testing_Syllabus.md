# 🚀 API Testing — Manual QA Syllabus

> **Goal:** Learn API testing from fundamentals to job-ready manual API testing using Postman.  
> **Focus:** Manual Testing only — no Database Testing, Performance Testing, CI/CD, or API Automation.

---

## 📚 1. API Fundamentals

- What is an API?
- Why APIs are used
- API vs UI Testing
- Client–Server Model
- Request & Response
- Types of APIs — REST, SOAP, GraphQL (basic awareness)
- API Endpoint

---

## 🌐 2. HTTP & REST Basics

### HTTP / HTTPS
- HTTP vs HTTPS
- HTTP Request
- HTTP Response
- REST API basics
- REST principles

### HTTP Methods
- `GET` — Retrieve data
- `POST` — Create data
- `PUT` — Full update
- `PATCH` — Partial update
- `DELETE` — Delete data
- `HEAD` — Basic awareness
- `OPTIONS` — Basic awareness

### PUT vs PATCH
- Full resource update vs partial update
- When each method is used

---

## 📊 3. HTTP Status Codes

### 2xx — Success
- `200 OK`
- `201 Created`
- `202 Accepted`
- `204 No Content`

### 3xx — Redirection
- `301 Moved Permanently`
- `302 Found`
- `304 Not Modified`

### 4xx — Client Errors
- `400 Bad Request`
- `401 Unauthorized`
- `403 Forbidden`
- `404 Not Found`
- `405 Method Not Allowed`
- `409 Conflict`
- `415 Unsupported Media Type`
- `422 Unprocessable Content`
- `429 Too Many Requests`

### 5xx — Server Errors
- `500 Internal Server Error`
- `502 Bad Gateway`
- `503 Service Unavailable`
- `504 Gateway Timeout`

### Status Code Testing
- Positive scenarios
- Negative scenarios
- Expected vs actual status code

---

## 🔗 4. API Request Structure

Understand every part of an API request:

- URL
- Base URL
- Endpoint
- Path
- Path Parameters
- Query Parameters
- Headers
- Request Body
- HTTP Method

### Path vs Query Parameters

**Path Parameter**
```text
/users/101
```

**Query Parameter**
```text
/users?page=2&limit=10
```

---

## 📦 5. API Response Structure

- Status Code
- Response Headers
- Response Body
- Response Time
- Response Size
- Expected vs Actual Response

### Response Validation
- Correct status
- Correct fields
- Correct values
- Correct data types
- Required fields
- Missing fields
- Null values
- Nested values
- Arrays

---

## 🧩 6. JSON

### JSON Basics
- Object
- Key
- Value
- String
- Number
- Boolean
- Null
- Array
- Nested Object

Example:

```json
{
  "id": 101,
  "name": "Garvit",
  "active": true,
  "skills": ["JavaScript", "Playwright"],
  "address": {
    "city": "Delhi"
  }
}
```

### JSON Validation
- Field validation
- Value validation
- Data type validation
- Nested object validation
- Array validation
- Required/optional fields

---

## 🛠️ 7. Postman Fundamentals

### Postman Interface
- Request tab
- Params
- Authorization
- Headers
- Body
- Response panel

### Postman Features
- Collections
- Folders
- History
- Environments
- Variables
- Collection Runner

### Variables
- Environment variables
- Collection variables
- Global variables
- Local variables
- Dynamic variables

Example:

```text
{{baseUrl}}
{{token}}
{{userId}}
```

---

## 🔄 8. CRUD API Testing

Practice the complete flow:

```text
CREATE → READ → UPDATE → DELETE
```

### Create
- `POST`

### Read
- `GET`

### Update
- `PUT`
- `PATCH`

### Delete
- `DELETE`

### CRUD Validation
- Request
- Status code
- Response body
- Response values
- Resource existence

---

## 🔐 9. Authentication & Authorization

### Authentication
> **Who are you?**

Learn the concepts of:

- Basic Authentication
- API Key
- Bearer Token
- JWT
- OAuth 2.0

### Authorization
> **What are you allowed to do?**

Test:

- Authorized user
- Unauthorized user
- Insufficient permissions
- Access to restricted resources

### Authentication Negative Testing
- Missing token
- Invalid token
- Expired token
- Invalid credentials

---

## ❌ 10. Negative API Testing

Test what happens when incorrect data is sent.

- Missing required fields
- Empty fields
- Null values
- Wrong data types
- Invalid values
- Invalid IDs
- Invalid endpoint
- Invalid HTTP method
- Missing headers
- Invalid headers
- Invalid authentication
- Invalid authorization
- Duplicate data
- Unsupported Content-Type

---

## 🎯 11. Boundary & Input Validation

Test:

- Minimum value
- Maximum value
- Minimum − 1
- Maximum + 1
- Empty input
- Very large input
- Special characters
- Spaces
- Invalid formats
- Long strings

---

## 🔎 12. Query, Filter, Search & Pagination

### Query Parameters
- Single parameter
- Multiple parameters
- Missing parameter
- Invalid parameter

### Filtering
- Valid filter
- Invalid filter
- Multiple filters

### Sorting
- Ascending
- Descending
- Invalid sort field

### Search
- Exact match
- Partial match
- No match
- Case sensitivity

### Pagination
- First page
- Middle page
- Last page
- Empty page
- Invalid page
- Large page size

---

## 🔗 13. Request Chaining

Use data from one API response in another request.

Example:

```text
Login
  ↓
Get Token
  ↓
Create User
  ↓
Get User ID
  ↓
Update User
  ↓
Delete User
```

Learn:

- Extract token
- Extract ID
- Store values in variables
- Reuse variables in next request

---

## 🧪 14. API Test Case Design

Learn to write:

- Positive test cases
- Negative test cases
- Boundary test cases
- Authentication test cases
- Authorization test cases
- Validation test cases
- CRUD test cases

### Test Case Format

| Test Case | Action | Expected Result |
|---|---|---|
| TC01 | Send valid GET | 200 + correct response |
| TC02 | Send invalid ID | 404 |
| TC03 | Remove token | 401 |
| TC04 | Send invalid body | 400 |

---

## 🐞 15. Common API Bugs

Look for:

- Wrong status code
- Wrong response message
- Missing fields
- Incorrect values
- Incorrect data types
- Incorrect error handling
- Duplicate records
- Invalid authentication accepted
- Unauthorized access allowed
- Incorrect filtering
- Incorrect sorting
- Pagination issues
- DELETE not actually deleting data
- PUT/PATCH updating wrong fields
- Sensitive information exposed

---

## 📋 16. API Documentation

Learn how to read:

- Swagger / OpenAPI documentation
- Endpoint details
- HTTP method
- Parameters
- Headers
- Request body
- Response body
- Authentication requirements
- Expected status codes
- Response schema

### QA Responsibility

Compare:

```text
API Documentation
        ↓
Actual API Behavior
```

Report mismatches as defects when appropriate.

---

## 🛡️ 17. Basic API Security Testing

Manual QA awareness:

- Authentication testing
- Authorization testing
- Sensitive data exposure
- Token validation
- Rate limiting awareness
- Basic injection awareness
- Access control testing

---

## 🔁 18. API Testing Types

Understand the purpose of:

- Functional Testing
- Positive Testing
- Negative Testing
- Validation Testing
- Integration Testing
- Smoke Testing
- Sanity Testing
- Regression Testing
- Retesting
- End-to-End API Testing

---

## 📝 19. API Defect Reporting

A good API bug should contain:

- Bug Title
- Environment
- Endpoint
- HTTP Method
- Request URL
- Request Headers
- Request Body
- Steps to Reproduce
- Expected Result
- Actual Result
- Status Code
- Response
- Severity
- Priority
- Evidence

### Example

> **API returns 200 instead of 401 when Authorization token is missing.**

---

# ⭐ Final Manual API Testing Checklist

Use this as your revision checklist:

- [ ] API Fundamentals
- [ ] Client–Server Model
- [ ] REST Basics
- [ ] HTTP / HTTPS
- [ ] HTTP Methods
- [ ] HTTP Status Codes
- [ ] URL & Endpoints
- [ ] Path Parameters
- [ ] Query Parameters
- [ ] Headers
- [ ] Request Body
- [ ] Response Structure
- [ ] JSON
- [ ] JSON Validation
- [ ] Postman Basics
- [ ] Collections
- [ ] Environments
- [ ] Variables
- [ ] CRUD Testing
- [ ] Response Validation
- [ ] Authentication
- [ ] Authorization
- [ ] Basic Auth
- [ ] API Key
- [ ] Bearer Token
- [ ] JWT
- [ ] OAuth 2.0 Basics
- [ ] Negative Testing
- [ ] Boundary Testing
- [ ] Input Validation
- [ ] Filtering
- [ ] Sorting
- [ ] Search
- [ ] Pagination
- [ ] Request Chaining
- [ ] API Test Case Design
- [ ] Common API Bugs
- [ ] Swagger / OpenAPI
- [ ] Basic Security Testing
- [ ] Smoke / Sanity / Regression / Retesting
- [ ] API Defect Reporting

---

## 🏆 Target

By completing this syllabus, you should be able to:

> **Understand an API → Read its documentation → Create requests in Postman → Send requests → Validate status, headers and JSON → Perform positive & negative testing → Test authentication/authorization → Chain requests → Find API defects → Report them professionally.**

### 🚫 Out of Scope for This Manual API Syllabus

To keep this roadmap focused, these are intentionally excluded:

- Database Testing
- SQL
- Performance Testing
- Load/Stress Testing
- API Automation
- CI/CD
- Newman
- Advanced Security/Penetration Testing
