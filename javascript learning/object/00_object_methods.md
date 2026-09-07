# 🚀 JavaScript Objects — Cheat Sheet

> **Quick Revision Notes | Beginner → Advanced → Interview Ready**

---

## 1️⃣ What is an Object?

An object stores data in **key-value pairs**.

```js
let user = {
    name: "Garvit",
    age: 21,
    city: "Delhi"
};
```

**Easy Memory:** Object = related data stored as `key: value`.

---

## 2️⃣ Creating Objects

### Object Literal
```js
let user = {
    name: "Garvit",
    age: 21
};
```

### Empty Object
```js
let user = {};
```

### `new Object()`
```js
let user = new Object();
user.name = "Garvit";
```

✅ Prefer object literals for normal use.

---

## 3️⃣ Properties & Values

```js
let user = {
    name: "Garvit",
    age: 21,
    isTester: true,
    skills: ["JavaScript", "Playwright"],
    address: {
        city: "Delhi"
    }
};
```

- `name` → property/key
- `"Garvit"` → value

---

## 4️⃣ Accessing Properties

### Dot Notation
```js
console.log(user.name);
```

### Bracket Notation
```js
console.log(user["name"]);
```

### Dynamic Property
```js
let key = "name";
console.log(user[key]);
```

⚠️ `user.key` looks for a property literally named `"key"`.

🧠 Dot → fixed property | Bracket → dynamic property

---

## 5️⃣ Adding Properties

```js
user.age = 21;
user.city = "Delhi";
user["role"] = "Tester";
```

---

## 6️⃣ Updating Properties

```js
user.age = 22;
user["city"] = "Mumbai";
```

**Same syntax:** existing property → update; missing property → add.

---

## 7️⃣ Deleting Properties

```js
delete user.city;
```

---

## 8️⃣ Checking Properties

### `in`
```js
"age" in user;
```

### `hasOwnProperty()`
```js
user.hasOwnProperty("age");
```

### `Object.hasOwn()`
```js
Object.hasOwn(user, "age");
```

🧠 `Object.hasOwn()` checks whether the property belongs directly to the object.

---

## 9️⃣ Object Methods

A function stored in an object is a **method**.

```js
let user = {
    name: "Garvit",

    greet() {
        console.log("Hello Garvit");
    }
};

user.greet();
```

---

## 🔟 `this` Keyword

In a normal object method, `this` refers to the object used to call the method.

```js
let user = {
    name: "Garvit",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

user.greet();
```

⚠️ Arrow functions do not have their own `this`.

---

## 1️⃣1️⃣ `Object.keys()`

Returns an array of own enumerable property names.

```js
Object.keys(user);
```

Example:
```js
let user = { name: "Garvit", age: 21 };
console.log(Object.keys(user));
// ["name", "age"]
```

🧠 Object → Array of Keys

---

## 1️⃣2️⃣ `Object.values()`

Returns an array of own enumerable property values.

```js
Object.values(user);
```

```js
// ["Garvit", 21]
```

🧠 Object → Array of Values

---

## 1️⃣3️⃣ `Object.entries()`

Returns `[key, value]` pairs.

```js
Object.entries(user);
```

```js
// [["name", "Garvit"], ["age", 21]]
```

Useful:
```js
for (let [key, value] of Object.entries(user)) {
    console.log(key, value);
}
```

🧠 Object → Array of key-value pairs

---

## 1️⃣4️⃣ `for...in`

Loops through enumerable property keys.

```js
for (let key in user) {
    console.log(key);
    console.log(user[key]);
}
```

🧠 `key` → property name  
🧠 `user[key]` → property value

---

## 1️⃣5️⃣ `Object.assign()`

Copies properties from source objects into a target object.

```js
let user = { name: "Garvit" };
let details = { age: 21 };

let result = Object.assign({}, user, details);

console.log(result);
// { name: "Garvit", age: 21 }
```

Merge into existing object:
```js
Object.assign(user, details);
```

⚠️ `Object.assign()` creates a **shallow copy** when used with `{}` as target.

---

## 1️⃣6️⃣ Spread Operator `...`

### Copy
```js
let copy = { ...user };
```

### Merge
```js
let result = { ...user, ...details };
```

⚠️ Spread creates a **shallow copy**.

🧠 Spread → expand/copy properties

---

## 1️⃣7️⃣ Object Destructuring

```js
let user = {
    name: "Garvit",
    age: 21
};

let { name, age } = user;
```

### Rename
```js
let { name: userName, age: userAge } = user;
```

### Default Value
```js
let { city = "Delhi" } = user;
```

---

## 1️⃣8️⃣ Nested Objects

```js
let user = {
    name: "Garvit",
    address: {
        city: "Delhi",
        pincode: 110001
    }
};

console.log(user.address.city);
```

---

## 1️⃣9️⃣ Optional Chaining `?.`

Safely accesses nested properties.

```js
console.log(user.address?.city);
```

If `address` is missing, result can be `undefined` instead of throwing.

### Optional Method Call
```js
user.greet?.();
```

🧠 `?.` → safely continue when value exists.

---

## 2️⃣0️⃣ Nullish Coalescing `??`

Fallback only for `null` or `undefined`.

```js
let age = null;

console.log(age ?? 21);
// 21
```

Difference:
```js
let value = 0;

console.log(value || 18); // 18
console.log(value ?? 18); // 0
```

🧠 `??` checks only `null` and `undefined`.

---

## 2️⃣1️⃣ `Object.fromEntries()`

Converts key-value pairs into an object.

```js
let data = [
    ["name", "Garvit"],
    ["age", 21]
];

let user = Object.fromEntries(data);
```

🧠 Entries → Object

---

## 2️⃣2️⃣ `Object.freeze()`

Prevents adding, deleting, or updating properties.

```js
let user = {
    name: "Garvit",
    age: 21
};

Object.freeze(user);

user.age = 22;
user.city = "Delhi";
delete user.name;
```

Check:
```js
Object.isFrozen(user);
```

---

## 2️⃣3️⃣ `Object.seal()`

Prevents adding and deleting properties, but allows updating existing properties.

```js
let user = {
    name: "Garvit",
    age: 21
};

Object.seal(user);

user.age = 22;       // allowed
user.city = "Delhi"; // blocked
delete user.name;    // blocked
```

Check:
```js
Object.isSealed(user);
```

| Feature | `freeze()` | `seal()` |
|---|---:|---:|
| Add | ❌ | ❌ |
| Delete | ❌ | ❌ |
| Update | ❌ | ✅ |

---

## 2️⃣4️⃣ Object Comparison

Objects are compared by **reference**.

```js
let user1 = { name: "Garvit" };
let user2 = { name: "Garvit" };

console.log(user1 === user2);
// false
```

Same reference:
```js
let user1 = { name: "Garvit" };
let user2 = user1;

console.log(user1 === user2);
// true
```

🧠 Objects are reference types.

---

## 2️⃣5️⃣ Shallow Copy

Top-level properties are copied, but nested objects may still share references.

```js
let user = {
    name: "Garvit",
    age: 21
};

let copy = { ...user };

copy.name = "Rahul";

console.log(user.name); // Garvit
console.log(copy.name); // Rahul
```

Another method:
```js
let copy = Object.assign({}, user);
```

---

## 2️⃣6️⃣ Nested Shallow Copy Problem

```js
let user = {
    name: "Garvit",
    address: {
        city: "Delhi"
    }
};

let copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city);
// Mumbai
```

The nested `address` reference is shared.

---

## 2️⃣7️⃣ Deep Copy

### `structuredClone()`
```js
let copy = structuredClone(user);

copy.address.city = "Mumbai";
```

The nested object is independently copied.

### JSON Technique
```js
let copy = JSON.parse(JSON.stringify(user));
```

⚠️ JSON cloning has limitations and is not a universal deep-copy solution.

---

## 2️⃣8️⃣ JSON Methods

### `JSON.stringify()`
Object → JSON String

```js
let user = {
    name: "Garvit",
    age: 21
};

let jsonString = JSON.stringify(user);

console.log(jsonString);
```

### `JSON.parse()`
JSON String → Object

```js
let newUser = JSON.parse(jsonString);
```

🧠
```text
Object → stringify() → JSON String
JSON String → parse() → Object
```

---

## 2️⃣9️⃣ `Object.create()`

Creates an object with a specified prototype.

```js
let person = {
    greet() {
        console.log("Hello");
    }
};

let user = Object.create(person);

user.name = "Garvit";
user.greet();
```

Useful for prototype-based inheritance.

---

## 3️⃣0️⃣ Property Descriptors

Important descriptors:

| Descriptor | Meaning |
|---|---|
| `value` | Property value |
| `writable` | Can value be changed? |
| `enumerable` | Appears during enumeration? |
| `configurable` | Can property be deleted/reconfigured? |

Get descriptor:
```js
Object.getOwnPropertyDescriptor(user, "name");
```

---

## 3️⃣1️⃣ `Object.defineProperty()`

Defines a property with descriptor settings.

```js
let user = {};

Object.defineProperty(user, "name", {
    value: "Garvit",
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(user.name);
```

---

## 3️⃣2️⃣ `Object.getOwnPropertyNames()`

Returns own property names, including non-enumerable string properties.

```js
Object.getOwnPropertyNames(user);
```

---

## 3️⃣3️⃣ Symbols as Object Keys

```js
let id = Symbol("id");

let user = {
    name: "Garvit",
    [id]: 101
};

console.log(user[id]);
```

Symbols are unique:
```js
let a = Symbol("id");
let b = Symbol("id");

console.log(a === b); // false
```

Get Symbol properties:
```js
Object.getOwnPropertySymbols(user);
```

---

## 3️⃣4️⃣ Computed Property Names

Property names can be dynamic.

```js
let key = "name";

let user = {
    [key]: "Garvit"
};

console.log(user.name);
```

---

## 3️⃣5️⃣ Property Shorthand

```js
let name = "Garvit";
let age = 21;

let user = {
    name,
    age
};
```

Equivalent to:
```js
let user = {
    name: name,
    age: age
};
```

---

## 3️⃣6️⃣ Method Shorthand

```js
let user = {
    greet() {
        console.log("Hello");
    }
};
```

---

## 3️⃣7️⃣ Object Rest Operator

Collects remaining properties.

```js
let user = {
    name: "Garvit",
    age: 21,
    city: "Delhi"
};

let { name, ...details } = user;

console.log(name);
console.log(details);
```

🧠 Spread → expand/copy  
🧠 Rest → collect remaining

---

## 3️⃣8️⃣ Nested Destructuring

```js
let user = {
    name: "Garvit",
    address: {
        city: "Delhi"
    }
};

let {
    address: { city }
} = user;

console.log(city);
```

---

## 3️⃣9️⃣ Object Destructuring in Functions

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

---

## 4️⃣0️⃣ Objects + Arrays

Object containing an array:

```js
let user = {
    name: "Garvit",
    skills: ["JavaScript", "Playwright"]
};

console.log(user.skills[0]);
```

Array containing objects:

```js
let users = [
    { name: "Garvit", age: 21 },
    { name: "Rahul", age: 22 }
];

console.log(users[0].name);
```

---

## 4️⃣1️⃣ Useful Object Methods — Quick Table

| Method | Purpose |
|---|---|
| `Object.keys()` | Get keys |
| `Object.values()` | Get values |
| `Object.entries()` | Get key-value pairs |
| `Object.assign()` | Copy/merge |
| `Object.fromEntries()` | Entries → object |
| `Object.hasOwn()` | Check own property |
| `Object.create()` | Create with prototype |
| `Object.freeze()` | Prevent changes |
| `Object.seal()` | Prevent add/delete |
| `Object.isFrozen()` | Check frozen state |
| `Object.isSealed()` | Check sealed state |
| `Object.defineProperty()` | Define property |
| `Object.getOwnPropertyDescriptor()` | Get descriptor |
| `Object.getOwnPropertyNames()` | Get own string property names |
| `Object.getOwnPropertySymbols()` | Get own Symbol properties |

---

## 4️⃣2️⃣ Instance vs Static Methods

### Instance
```js
user.hasOwnProperty("name");
```

### Static
```js
Object.keys(user);
Object.values(user);
Object.entries(user);
Object.hasOwn(user, "name");
```

🧠 Instance → `object.method()`  
🧠 Static → `Object.method(object)`

---

## 4️⃣3️⃣ `const` with Objects

`const` prevents reassignment, not property mutation.

```js
const user = {
    name: "Garvit"
};

user.name = "Rahul"; // allowed
```

But:
```js
user = {}; // Error
```

Use `Object.freeze()` when you need to prevent property changes.

---

## 4️⃣4️⃣ Practical Testing Examples

### Test Data
```js
let testUser = {
    username: "garvit",
    password: "12345",
    role: "Tester"
};
```

### API Response
```js
let response = {
    status: 200,
    message: "Success",
    data: {
        userId: 101
    }
};

console.log(response.status);
console.log(response.data.userId);
```

### Property Check
```js
console.log(Object.hasOwn(response, "status"));
```

### Loop Test Data
```js
for (let key in testUser) {
    console.log(key, testUser[key]);
}
```

---

# 🧠 Interview Quick Revision

| Question | Quick Answer |
|---|---|
| What is an object? | Collection of key-value pairs |
| Access property? | `.` or `[]` |
| Dynamic access? | `object[key]` |
| Add property? | `object.key = value` |
| Delete property? | `delete object.key` |
| Get keys? | `Object.keys()` |
| Get values? | `Object.values()` |
| Get pairs? | `Object.entries()` |
| Check own property? | `Object.hasOwn()` |
| Loop keys? | `for...in` |
| Merge objects? | Spread / `Object.assign()` |
| Extract properties? | Destructuring |
| Safe nested access? | `?.` |
| Null/undefined fallback? | `??` |
| Object → JSON? | `JSON.stringify()` |
| JSON → Object? | `JSON.parse()` |
| Freeze? | No add/delete/update |
| Seal? | No add/delete; update allowed |
| Why `{}` === `{}` false? | Different references |
| Shallow copy? | Nested references can remain shared |
| Deep copy? | `structuredClone()` |

---

# 🚀 FINAL QUICK REVISION

```text
OBJECT
│
├── Create       → {}
├── Access       → . / []
├── Add          → object.key = value
├── Update       → object.key = newValue
├── Delete       → delete object.key
│
├── Check
│   ├── in
│   ├── hasOwnProperty()
│   └── Object.hasOwn()
│
├── Methods
│   ├── Object.keys()
│   ├── Object.values()
│   ├── Object.entries()
│   └── this
│
├── Loop          → for...in
│
├── Copy / Merge
│   ├── {...obj}
│   └── Object.assign()
│
├── Destructuring
│   ├── { name, age }
│   └── ...rest
│
├── Nested
│   ├── object.address.city
│   ├── ?.
│   └── ??
│
├── Conversion
│   ├── JSON.stringify()
│   └── JSON.parse()
│
├── Advanced
│   ├── Object.fromEntries()
│   ├── Object.create()
│   ├── Object.freeze()
│   ├── Object.seal()
│   ├── Symbols
│   └── Property Descriptors
│
└── Copy
    ├── Shallow → {...obj}
    └── Deep    → structuredClone()
```

## ⭐ Most Important to Memorize

```text
Object.keys()         → Keys
Object.values()       → Values
Object.entries()      → Key + Value
Object.hasOwn()       → Own Property Check

{...obj}              → Shallow Copy / Merge
Object.assign()       → Copy / Merge
Object.fromEntries()  → Entries → Object

{ name, age }         → Destructuring
?.                    → Safe Access
??                    → Null/Undefined Fallback

freeze()              → No changes
seal()                → Update allowed, add/delete blocked

JSON.stringify()      → Object → String
JSON.parse()          → String → Object

for...in              → Keys
object[key]           → Dynamic Value

===                    → Reference Comparison
structuredClone()     → Deep Copy
```

## 📁 Practice Files

```text
01_creation.js
02_properties.js
03_dot_notation.js
04_bracket_notation.js
05_add_property.js
06_update_property.js
07_delete_property.js
08_check_property.js
09_hasownproperty.js
10_object_methods.js
11_this_keyword.js
12_object_keys.js
13_object_values.js
14_object_entries.js
15_object_assign.js
16_spread_operator.js
17_destructuring.js
18_nested_objects.js
19_optional_chaining.js
20_for_in.js
21_object_hasown.js
22_object_freeze.js
23_object_seal.js
24_object_assign.js
25_object_fromentries.js
26_object_comparison.js
27_shallow_copy.js
28_json_methods.js
29_practical_object.js
```

> 🔥 **Core Object Formula:** Create → Access → Add → Update → Delete → Check → Loop → Copy → Destructure → Handle Nested Data → JSON → Advanced Objects
