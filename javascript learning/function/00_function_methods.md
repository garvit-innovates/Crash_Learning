# 🚀 JavaScript Functions — Cheat Sheet

> **Quick Revision Notes | Beginner → Advanced → Interview Ready**

---

## 1️⃣ What is a Function?

A function is a reusable block of code that performs a specific task.

```js
function greet() {
    console.log("Hello");
}

greet();
```

🧠 **Easy Memory:**

> Function = Define once → Call whenever needed.

---

## 2️⃣ Function Declaration

```js
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

### Syntax

```js
function functionName(parameters) {
    // code
}
```

---

## 3️⃣ Calling a Function

```js
function greet() {
    console.log("Hello");
}

greet();
```

The function runs only when it is called.

---

## 4️⃣ Parameters vs Arguments

### Parameters

Variables written during function definition.

```js
function greet(name) {
    console.log(name);
}
```

`name` → parameter

### Arguments

Actual values passed during the function call.

```js
greet("Garvit");
```

`"Garvit"` → argument

🧠

> Parameter → definition  
> Argument → function call

---

## 5️⃣ Multiple Parameters

```js
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

---

## 6️⃣ `return`

`return` sends a value back from the function.

```js
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

### `return` vs `console.log()`

```js
function add(a, b) {
    console.log(a + b);
}
```

prints the value.

```js
function add(a, b) {
    return a + b;
}
```

returns the value so it can be stored or reused.

🧠

> `console.log()` → display  
> `return` → send value back

---

## 7️⃣ Function Without `return`

```js
function greet() {
    console.log("Hello");
}

let result = greet();

console.log(result);
```

Output:

```text
Hello
undefined
```

If a function does not explicitly return a value, it returns `undefined`.

---

## 8️⃣ Default Parameters

Used when an argument is not provided.

```js
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();
greet("Garvit");
```

Output:

```text
Hello Guest
Hello Garvit
```

---

## 9️⃣ Rest Parameters `...`

Collects multiple arguments into an array.

```js
function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30);
```

Output:

```js
[10, 20, 30]
```

### Practical Example

```js
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30));
```

🧠

> Rest parameter → many arguments → array

---

## 🔟 Function Expression

A function can be stored inside a variable.

```js
let greet = function() {
    console.log("Hello");
};

greet();
```

Difference:

```js
function greet() {}
```

vs

```js
let greet = function() {};
```

---

## 1️⃣1️⃣ Anonymous Function

A function without a name.

```js
let greet = function() {
    console.log("Hello");
};
```

The function itself has no name.

Anonymous functions are commonly used as callbacks.

---

## 1️⃣2️⃣ Arrow Functions

Shorter function syntax.

```js
let add = (a, b) => {
    return a + b;
};
```

### Short Form

```js
let add = (a, b) => a + b;
```

### One Parameter

```js
let square = n => n * n;
```

### No Parameters

```js
let greet = () => {
    console.log("Hello");
};
```

🧠

> Arrow function = shorter function syntax + different `this` behavior.

---

## 1️⃣3️⃣ Arrow Function and `return`

### Explicit Return

```js
let add = (a, b) => {
    return a + b;
};
```

### Implicit Return

```js
let add = (a, b) => a + b;
```

⚠️ With `{}`, use `return` if you want to return a value.

---

## 1️⃣4️⃣ Function Scope

Variables declared inside a function are normally accessible only inside that function.

```js
function test() {
    let message = "Hello";
    console.log(message);
}

test();

// console.log(message); // Error
```

🧠

> Function scope → variable belongs to the function.

---

## 1️⃣5️⃣ Global Scope

A variable declared outside functions can generally be accessed inside functions.

```js
let name = "Garvit";

function greet() {
    console.log(name);
}

greet();
```

---

## 1️⃣6️⃣ Block Scope

`let` and `const` are block-scoped.

```js
if (true) {
    let age = 21;
    const city = "Delhi";
}

// age and city are not accessible here
```

---

## 1️⃣7️⃣ Lexical Scope

A function can access variables from its outer scope.

```js
let name = "Garvit";

function outer() {
    function inner() {
        console.log(name);
    }

    inner();
}

outer();
```

---

## 1️⃣8️⃣ Callback Function

A function passed as an argument to another function.

```js
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function done() {
    console.log("Done");
}

greet("Garvit", done);
```

🧠

> Callback = function passed to another function.

---

## 1️⃣9️⃣ Higher-Order Function

A function that:

- accepts a function as an argument, OR
- returns a function.

```js
function calculate(a, b, operation) {
    return operation(a, b);
}

let result = calculate(10, 20, (a, b) => a + b);

console.log(result);
```

---

## 2️⃣0️⃣ Function Returning a Function

```js
function outer() {
    return function() {
        console.log("Hello");
    };
}

let inner = outer();

inner();
```

This pattern is important for understanding closures.

---

## 2️⃣1️⃣ Closure

A closure happens when an inner function remembers variables from its outer function even after the outer function has finished.

```js
function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
```

🧠

> Closure = function + remembered outer variables.

---

## 2️⃣2️⃣ IIFE

IIFE = **Immediately Invoked Function Expression**.

It runs immediately after creation.

```js
(function() {
    console.log("Hello");
})();
```

Arrow version:

```js
(() => {
    console.log("Hello");
})();
```

---

## 2️⃣3️⃣ Recursive Function

A function that calls itself.

```js
function countDown(n) {
    if (n === 0) {
        return;
    }

    console.log(n);
    countDown(n - 1);
}

countDown(5);
```

🧠 Every recursion needs a **base condition** to stop.

---

## 2️⃣4️⃣ Function Hoisting

Function declarations are hoisted.

```js
greet();

function greet() {
    console.log("Hello");
}
```

This works.

⚠️ Function expressions and arrow functions assigned to `let`/`const` cannot be called before initialization.

```js
greet(); // Error

let greet = function() {
    console.log("Hello");
};
```

---

## 2️⃣5️⃣ `arguments` Object

Traditional functions have an `arguments` object.

```js
function show() {
    console.log(arguments);
}

show(10, 20, 30);
```

⚠️ Arrow functions do not have their own `arguments`.

For modern code, prefer rest parameters:

```js
function show(...args) {
    console.log(args);
}
```

---

## 2️⃣6️⃣ `this` in Functions

For a normal function, `this` depends on **how the function is called**.

```js
function show() {
    console.log(this);
}
```

Do not assume `this` always means the object.

### Object Method

```js
let user = {
    name: "Garvit",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Here `this` refers to `user`.

---

## 2️⃣7️⃣ Arrow Function `this`

Arrow functions do not create their own `this`.

They use `this` from the surrounding lexical scope.

```js
let user = {
    name: "Garvit",

    greet: () => {
        console.log(this.name);
    }
};
```

⚠️ Avoid arrow functions when you need an object's method to use that object's `this`.

---

## 2️⃣8️⃣ `call()`

Calls a function with a specified `this` value and arguments passed individually.

```js
function greet(city) {
    console.log(`Hello ${this.name} from ${city}`);
}

let user = {
    name: "Garvit"
};

greet.call(user, "Delhi");
```

---

## 2️⃣9️⃣ `apply()`

Similar to `call()`, but arguments are passed as an array-like value.

```js
function greet(city, role) {
    console.log(this.name, city, role);
}

let user = {
    name: "Garvit"
};

greet.apply(user, ["Delhi", "Tester"]);
```

### `call()` vs `apply()`

| Method | Arguments |
|---|---|
| `call()` | Individually |
| `apply()` | Array-like |

---

## 3️⃣0️⃣ `bind()`

Creates a new function with a fixed `this` value.

```js
function greet() {
    console.log(`Hello ${this.name}`);
}

let user = {
    name: "Garvit"
};

let newGreet = greet.bind(user);

newGreet();
```

🧠

> `call()` → call now  
> `apply()` → call now with array-like arguments  
> `bind()` → create new function for later

---

## 3️⃣1️⃣ First-Class Functions

JavaScript treats functions like values.

Functions can be:

- stored in variables
- passed as arguments
- returned from functions
- stored in objects
- stored in arrays

Example:

```js
let greet = function() {
    console.log("Hello");
};

let fn = greet;

fn();
```

---

## 3️⃣2️⃣ Function as Object Property

```js
let user = {
    name: "Garvit",

    greet: function() {
        console.log("Hello");
    }
};

user.greet();
```

Modern shorthand:

```js
let user = {
    greet() {
        console.log("Hello");
    }
};
```

---

## 3️⃣3️⃣ Functions in Arrays

```js
let actions = [
    () => console.log("Login"),
    () => console.log("Logout")
];

actions[0]();
actions[1]();
```

---

## 3️⃣4️⃣ Pure Function

A pure function:

- gives the same output for the same input
- does not cause unwanted side effects

```js
function add(a, b) {
    return a + b;
}
```

```js
add(10, 20); // always 30
```

---

## 3️⃣5️⃣ Side Effect

A function has a side effect when it changes something outside itself.

```js
let count = 0;

function increment() {
    count++;
}
```

`count` is changed outside the function's local scope.

---

## 3️⃣6️⃣ Function Composition

Using the output of one function as the input of another.

```js
function double(n) {
    return n * 2;
}

function addOne(n) {
    return n + 1;
}

console.log(addOne(double(5)));
```

Output:

```text
11
```

---

## 3️⃣7️⃣ Currying

Converts a function with multiple arguments into a sequence of single-argument functions.

```js
function add(a) {
    return function(b) {
        return a + b;
    };
}

console.log(add(10)(20));
```

Arrow version:

```js
let add = a => b => a + b;
```

---

## 3️⃣8️⃣ Function Constructor

Functions can technically be created with `Function`.

```js
let add = new Function("a", "b", "return a + b");

console.log(add(10, 20));
```

⚠️ Rarely recommended in normal development.

---

## 3️⃣9️⃣ `Function.name`

Returns the function's name.

```js
function greet() {}

console.log(greet.name);
```

Output:

```text
greet
```

---

## 4️⃣0️⃣ `Function.length`

Returns the number of parameters before the first parameter with a default value/rest parameter.

```js
function add(a, b, c) {}

console.log(add.length);
```

Output:

```text
3
```

Example:

```js
function test(a, b = 10, c) {}

console.log(test.length);
```

Output:

```text
1
```

---

## 4️⃣1️⃣ Function `toString()`

Returns the source representation of the function.

```js
function greet() {
    console.log("Hello");
}

console.log(greet.toString());
```

Mostly useful for inspection/debugging rather than normal application logic.

---

## 4️⃣2️⃣ Default + Rest Parameters

```js
function greet(name = "Guest", ...skills) {
    console.log(name);
    console.log(skills);
}

greet("Garvit", "JavaScript", "Playwright");
```

---

## 4️⃣3️⃣ Destructuring Parameters

### Object

```js
function showUser({ name, age }) {
    console.log(name);
    console.log(age);
}

showUser({
    name: "Garvit",
    age: 21
});
```

### Array

```js
function show([first, second]) {
    console.log(first, second);
}

show([10, 20]);
```

---

## 4️⃣4️⃣ Returning Multiple Values

JavaScript functions return one value, but that value can be an object or array.

### Object

```js
function getUser() {
    return {
        name: "Garvit",
        age: 21
    };
}

let user = getUser();
```

### Array

```js
function getValues() {
    return [10, 20];
}

let [a, b] = getValues();
```

---

## 4️⃣5️⃣ Function Type Checking

```js
typeof function() {};
```

Output:

```text
"function"
```

Example:

```js
let greet = () => {};

console.log(typeof greet);
// "function"
```

---

## 4️⃣6️⃣ `new` with Functions

Regular functions can be used as constructors when called with `new`.

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}

let user = new User("Garvit", 21);

console.log(user);
```

Modern class syntax is generally preferred for constructor-based object modeling.

---

## 4️⃣7️⃣ Function Prototype

Normal functions have a `prototype` property that is used when the function acts as a constructor.

```js
function User(name) {
    this.name = name;
}

User.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
};

let user = new User("Garvit");

user.greet();
```

---

## 4️⃣8️⃣ Callback Examples

### `setTimeout()`

```js
setTimeout(() => {
    console.log("Done");
}, 1000);
```

### Array Methods

```js
let numbers = [1, 2, 3];

let result = numbers.map(num => num * 2);
```

The arrow function is a callback.

---

## 4️⃣9️⃣ Functions in Testing

Functions are heavily used in test automation.

### Reusable Login Function

```js
async function login(page, username, password) {
    await page.fill("#username", username);
    await page.fill("#password", password);
    await page.click("#login");
}
```

### Reusable Test Data Helper

```js
function createUser(name, age) {
    return {
        name,
        age
    };
}

let user = createUser("Garvit", 21);
```

### Assertion Helper

```js
function checkStatus(status) {
    return status === 200;
}

console.log(checkStatus(200));
```

🧠 Functions reduce duplicate code and make tests easier to maintain.

---

# 5️⃣0️⃣ Important Function Differences

## Declaration vs Expression

| Feature | Declaration | Expression |
|---|---|---|
| Syntax | `function greet(){}` | `let greet = function(){}` |
| Hoisted | ✅ | ❌ before initialization |
| Name | Usually named | Can be anonymous |

---

## Normal Function vs Arrow Function

| Feature | Normal Function | Arrow Function |
|---|---|---|
| Syntax | Longer | Shorter |
| Own `this` | ✅ | ❌ |
| Own `arguments` | ✅ | ❌ |
| Can be constructor with `new` | ✅ | ❌ |
| Common callbacks | ✅ | ✅ |

---

## `call()` vs `apply()` vs `bind()`

| Method | Executes now? | Arguments |
|---|---|---|
| `call()` | ✅ | Individual |
| `apply()` | ✅ | Array-like |
| `bind()` | ❌ | Individual; returns new function |

---

# 🧠 Function Quick Memory

```text
Function
│
├── Declaration
│   └── function name() {}
│
├── Expression
│   └── const fn = function() {}
│
├── Arrow
│   └── const fn = () => {}
│
├── Parameters / Arguments
│
├── return
│
├── Default Parameters
│
├── Rest Parameters
│   └── ...args
│
├── Callback
│
├── Higher-Order Function
│
├── Closure
│
├── IIFE
│
├── Recursion
│
├── Scope
│   ├── Global
│   ├── Function
│   └── Block
│
├── this
│
├── call()
├── apply()
└── bind()

Advanced
├── Currying
├── Composition
├── Prototype
└── Constructor Functions
```

---

# 🎯 Interview Quick Revision

### 1. What is a function?

> A reusable block of code designed to perform a specific task.

### 2. Parameter vs argument?

> Parameter is defined in the function; argument is the actual value passed during the call.

### 3. What does `return` do?

> Sends a value back from the function and ends that function's execution.

### 4. What happens if a function has no return?

> It returns `undefined`.

### 5. What is a callback?

> A function passed as an argument to another function.

### 6. What is a higher-order function?

> A function that accepts a function or returns a function.

### 7. What is a closure?

> A function that remembers variables from its outer lexical scope.

### 8. What is an IIFE?

> A function expression that executes immediately after it is created.

### 9. What is recursion?

> A function calling itself until a base condition is reached.

### 10. What is an arrow function?

> A shorter function syntax that does not have its own `this` or `arguments`.

### 11. `call()` vs `apply()`?

> Both invoke a function with a chosen `this`; `call()` takes individual arguments while `apply()` takes an array-like argument list.

### 12. What does `bind()` do?

> Creates a new function with a fixed `this` value.

### 13. What is a pure function?

> A function that produces the same output for the same input without unwanted side effects.

### 14. What is function hoisting?

> Function declarations can be called before their declaration in the code.

### 15. What are first-class functions?

> Functions can be stored, passed, and returned like other values.

---

# 🚀 FINAL REVISION

```text
CREATE
→ function declaration
→ function expression
→ arrow function

INPUT
→ parameters
→ arguments
→ default parameters
→ rest parameters

OUTPUT
→ return
→ object / array return

FUNCTION TYPES
→ normal
→ anonymous
→ arrow
→ callback
→ higher-order
→ recursive
→ IIFE

SCOPE
→ global
→ function
→ block
→ lexical

ADVANCED
→ closure
→ this
→ call()
→ apply()
→ bind()
→ currying
→ composition
→ prototype

IMPORTANT
→ function declaration is hoisted
→ arrow functions have lexical this
→ arrow functions have no own arguments
→ functions are first-class values

TESTING
→ reusable helpers
→ login functions
→ data generators
→ assertion helpers
→ callbacks / async functions
```

# ⭐ Most Important to Memorize

```text
function greet() {}              → Function Declaration
const greet = function() {}      → Function Expression
const greet = () => {}           → Arrow Function

parameter                        → Function input name
argument                         → Actual input value

return value                     → Send value back

(...args)                        → Rest Parameters

callback                         → Function passed to another function

higher-order function            → Accepts/returns a function

closure                          → Remembers outer variables

IIFE                             → Immediately executes

recursion                        → Function calls itself

this                             → Depends on call context for normal functions
arrow this                       → Lexical this

call()                           → Invoke with this + individual args
apply()                          → Invoke with this + array-like args
bind()                           → Return new function with fixed this

Object.keys                      → Not a function topic; object utility
typeof fn                        → "function"

pure function                    → Same input → same output, no unwanted side effects
```

> 🔥 **Core Function Formula:** Define → Parameters → Call → Arguments → Process → Return → Reuse
