# 🚀 JavaScript Strings — Cheat Sheet

> **Quick Revision Notes | Beginner → Interview Ready**

------------------------------------------------------------------------

## 📌 1. What is a String?

A **String** is a sequence of characters used to store text.

```js
let name = "Garvit";
let message = 'Hello World';
```

Strings can contain letters, numbers, spaces, and special characters.

```js
"JavaScript"
"12345"
"Hello World"
"Hello!"
```

------------------------------------------------------------------------

## 🧱 2. Creating Strings

### Single Quotes

```js
let str = 'Hello';
```

### Double Quotes

```js
let str = "Hello";
```

### Template Literals

```js
let str = `Hello`;
```

### Using `String()`

Converts a value into a string.

```js
let num = 123;

let str = String(num);

console.log(str);
console.log(typeof str);

// 123
// string
```

------------------------------------------------------------------------

## 🔢 3. String Indexing

String indexes start from **0**.

```text
 Character   H   e   l   l   o
 Index       0   1   2   3   4
```

```js
let str = "Hello";

console.log(str[0]); // H
console.log(str[1]); // e
console.log(str[4]); // o
```

### Last Character

```js
console.log(str[str.length - 1]);
```

> ⭐ **Index always starts from `0`.**

------------------------------------------------------------------------

## 📏 4. `length`

Returns the number of characters.

```js
let str = "Garvit";

console.log(str.length);

// 6
```

> `length` is a **property**, not a method.

```text
❌ str.length()
✅ str.length
```

------------------------------------------------------------------------

## 🔤 5. Character Methods

### `charAt()`

Returns the character at an index.

```js
let str = "Hello";

console.log(str.charAt(1));

// e
```

### `charCodeAt()`

Returns the Unicode value of the character.

```js
let str = "ABC";

console.log(str.charCodeAt(0));

// 65
```

### `at()`

Returns the character at an index.

```js
let str = "Hello";

console.log(str.at(1));
// e
```

Supports negative indexes:

```js
console.log(str.at(-1));
// o
```

### 🧠 Quick Difference

```text
charAt(index)     → character
charCodeAt(index) → character code
at(index)         → character + negative index support
```

------------------------------------------------------------------------

## 🔠 6. Case Conversion

### `toUpperCase()`

```js
let str = "javascript";

console.log(str.toUpperCase());

// JAVASCRIPT
```

### `toLowerCase()`

```js
let str = "JAVASCRIPT";

console.log(str.toLowerCase());

// javascript
```

> These methods return a **new string**; they do not modify the original string.

------------------------------------------------------------------------

## 🧹 7. Whitespace Methods

### `trim()`

Removes whitespace from both ends.

```js
let str = "  Hello  ";

console.log(str.trim());

// Hello
```

### `trimStart()`

Removes whitespace from the beginning.

```js
let str = "   Hello";

console.log(str.trimStart());

// Hello
```

### `trimEnd()`

Removes whitespace from the end.

```js
let str = "Hello   ";

console.log(str.trimEnd());

// Hello
```

### 🧠 Easy Memory

```text
trim()       → START + END
trimStart()  → START
trimEnd()    → END
```

------------------------------------------------------------------------

## 🔎 8. Search Methods

### `includes()`

Checks whether text exists.

```js
let str = "JavaScript is easy";

console.log(str.includes("easy"));

// true
```

Returns:

```text
true / false
```

### `startsWith()`

Checks the beginning.

```js
let str = "JavaScript";

console.log(str.startsWith("Java"));

// true
```

### `endsWith()`

Checks the ending.

```js
let str = "JavaScript";

console.log(str.endsWith("Script"));

// true
```

### `indexOf()`

Returns the index of the **first occurrence**.

```js
let str = "hello hello";

console.log(str.indexOf("hello"));

// 0
```

Not found:

```js
console.log(str.indexOf("xyz"));

// -1
```

### `lastIndexOf()`

Returns the index of the **last occurrence**.

```js
let str = "hello hello";

console.log(str.lastIndexOf("hello"));

// 6
```

### 🧠 Search Memory

```text
includes()     → EXISTS?
startsWith()   → START?
endsWith()     → END?
indexOf()      → FIRST index
lastIndexOf()  → LAST index
```

> ⚠️ String searching is generally **case-sensitive**.

------------------------------------------------------------------------

## ✂️ 9. `slice()`

Extracts part of a string.

```js
let str = "JavaScript";

console.log(str.slice(4));

// Script
```

Start + end:

```js
console.log(str.slice(0, 4));

// Java
```

> `end` index is **not included**.

Negative indexes:

```js
console.log(str.slice(-6));

// Script
```

Syntax:

```js
str.slice(start, end);
```

------------------------------------------------------------------------

## ✂️ 10. `substring()`

Extracts part of a string.

```js
let str = "JavaScript";

console.log(str.substring(0, 4));

// Java
```

> `end` index is not included.

### `slice()` vs `substring()`

| Feature | `slice()` | `substring()` |
|---|---|---|
| Extract part | ✅ | ✅ |
| End excluded | ✅ | ✅ |
| Negative index | ✅ | ❌ |
| Can omit end | ✅ | ✅ |

------------------------------------------------------------------------

## ⚠️ 11. `substr()` — Deprecated / Historical

```js
let str = "JavaScript";

console.log(str.substr(4, 6));

// Script
```

Syntax:

```js
str.substr(start, length);
```

> ⚠️ Avoid `substr()` in new code. Know it for legacy code and interviews.

------------------------------------------------------------------------

## 🔄 12. `replace()`

Replaces the **first matching occurrence**.

```js
let str = "Java Java";

console.log(str.replace("Java", "JavaScript"));

// JavaScript Java
```

### Case Sensitive

```js
let str = "I like Java";

console.log(str.replace("java", "JavaScript"));

// I like Java
```

Because:

```text
Java ≠ java
```

### Regex

```js
let str = "hello HELLO";

console.log(str.replace(/hello/i, "Hi"));

// Hi HELLO
```

------------------------------------------------------------------------

## 🔄 13. `replaceAll()`

Replaces **all matching occurrences**.

```js
let str = "Java Java Java";

console.log(str.replaceAll("Java", "JavaScript"));

// JavaScript JavaScript JavaScript
```

### 🧠 Memory

```text
replace()     → FIRST match
replaceAll()  → ALL matches
```

------------------------------------------------------------------------

## 🔀 14. `split()`

Converts:

```text
String → Array
```

### Split by Space

```js
let str = "JavaScript is easy";

console.log(str.split(" "));
```

Output:

```js
["JavaScript", "is", "easy"]
```

### Split Every Character

```js
let str = "Hello";

console.log(str.split(""));
```

Output:

```js
["H", "e", "l", "l", "o"]
```

### Split by Comma

```js
let str = "HTML,CSS,JavaScript";

console.log(str.split(","));
```

Output:

```js
["HTML", "CSS", "JavaScript"]
```

> ⭐ `split()` is one of the most useful String + Array combinations.

------------------------------------------------------------------------

## 🔗 15. `concat()`

Combines strings.

```js
let str1 = "Hello";
let str2 = "World";

console.log(str1.concat(" ", str2));

// Hello World
```

Alternative:

```js
let result = str1 + " " + str2;
```

Modern template literal:

```js
let result = `${str1} ${str2}`;
```

------------------------------------------------------------------------

## 🔁 16. `repeat()`

Repeats a string.

```js
let str = "Hi ";

console.log(str.repeat(3));

// Hi Hi Hi
```

Syntax:

```js
str.repeat(count);
```

------------------------------------------------------------------------

## 📐 17. `padStart()`

Adds characters to the beginning until the target length is reached.

```js
let str = "5";

console.log(str.padStart(3, "0"));

// 005
```

Syntax:

```js
str.padStart(targetLength, padString);
```

------------------------------------------------------------------------

## 📐 18. `padEnd()`

Adds characters to the end until the target length is reached.

```js
let str = "5";

console.log(str.padEnd(3, "0"));

// 500
```

Syntax:

```js
str.padEnd(targetLength, padString);
```

### 🧠 Easy Memory

```text
padStart() → Add at START
padEnd()   → Add at END
```

------------------------------------------------------------------------

## 🧩 19. Template Literals

Template literals use backticks.

```js
let name = "Garvit";
let age = 21;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output:

```text
My name is Garvit and I am 21 years old.
```

### Expression Inside `${}`

```js
let a = 10;
let b = 20;

console.log(`Total = ${a + b}`);

// Total = 30
```

> ⭐ Template literals are useful for dynamic strings.

------------------------------------------------------------------------

## 🔐 20. Escape Characters

Escape characters use `\`.

### Double Quote

```js
let str = "He said \"Hello\"";

console.log(str);

// He said "Hello"
```

### Single Quote

```js
let str = 'It\'s JavaScript';
```

### New Line

```js
console.log("Hello\nWorld");
```

Output:

```text
Hello
World
```

### Tab

```js
console.log("Hello\tWorld");
```

### Common Escape Characters

| Escape | Meaning |
|---|---|
| `\"` | Double quote |
| `\'` | Single quote |
| `\\` | Backslash |
| `\n` | New line |
| `\t` | Tab |

------------------------------------------------------------------------

## 🔒 21. String Immutability

Strings are **immutable**.

You cannot directly change a character.

```js
let str = "Hello";

str[0] = "Y";

console.log(str);

// Hello
```

The original string remains unchanged.

To create a changed string:

```js
let str = "Hello";

str = str.replace("H", "Y");

console.log(str);

// Yello
```

### 🧠 Remember

```text
String → Immutable
```

String methods generally return a **new string**.

------------------------------------------------------------------------

## 🆚 22. String Comparison

Strings are compared character by character and are **case-sensitive**.

```js
console.log("JavaScript" === "JavaScript");
// true

console.log("JavaScript" === "javascript");
// false
```

### `===` vs `==`

Prefer `===`.

```js
"5" === 5;
// false

"5" == 5;
// true
```

> ⭐ `===` checks value **and type** without type coercion.

------------------------------------------------------------------------

## 🔢 23. String + Number

`+` with a string can perform concatenation.

```js
let age = 21;

console.log("Age: " + age);

// Age: 21
```

Be careful:

```js
console.log("10" + 5);
// "105"
```

Because one operand is a string.

------------------------------------------------------------------------

## 🔄 24. Useful String + Array Combinations

### String → Array

```js
let str = "hello";

let arr = str.split("");

console.log(arr);

// ["h", "e", "l", "l", "o"]
```

### Array → String

```js
let arr = ["h", "e", "l", "l", "o"];

let str = arr.join("");

console.log(str);

// hello
```

### Reverse a String

```js
let str = "hello";

let result = str.split("").reverse().join("");

console.log(result);

// olleh
```

### String → Array → Sort → String

```js
let str = "listen";

let result = str.split("").sort().join("");

console.log(result);

// eilnst
```

Useful for **anagram problems**.

------------------------------------------------------------------------

## 🧮 25. Common String Coding Patterns

### Count Characters

```js
let str = "hello";
let count = 0;

for (let i = 0; i < str.length; i++) {
    count++;
}

console.log(count);

// 5
```

### Count Vowels

```js
let str = "javascript";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
    ) {
        count++;
    }
}

console.log(count);
```

### Remove Spaces

```js
let str = "hello world javascript";

console.log(str.replaceAll(" ", ""));

// helloworldjavascript
```

### Count Words

```js
let str = "JavaScript is easy";

let words = str.split(" ").length;

console.log(words);

// 3
```

### Reverse String

```js
let str = "hello";

let result = str.split("").reverse().join("");

console.log(result);

// olleh
```

### Palindrome

```js
let str = "madam";

let reverse = str.split("").reverse().join("");

console.log(str === reverse);

// true
```

### Character Frequency

```js
let str = "hello";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "l") {
        count++;
    }
}

console.log(count);

// 2
```

### Anagram

```js
let str1 = "listen";
let str2 = "silent";

let a = str1.split("").sort().join("");
let b = str2.split("").sort().join("");

console.log(a === b);

// true
```

------------------------------------------------------------------------

# 📊 26. String Method Master Map

| Method / Property | Main Purpose | Returns |
|---|---|---|
| `length` | Count characters | Number |
| `charAt()` | Get character | String |
| `charCodeAt()` | Get character code | Number |
| `at()` | Get character | String |
| `toUpperCase()` | Uppercase | New String |
| `toLowerCase()` | Lowercase | New String |
| `trim()` | Remove both-side whitespace | New String |
| `trimStart()` | Remove start whitespace | New String |
| `trimEnd()` | Remove end whitespace | New String |
| `includes()` | Check text exists | Boolean |
| `startsWith()` | Check beginning | Boolean |
| `endsWith()` | Check ending | Boolean |
| `indexOf()` | First matching index | Number |
| `lastIndexOf()` | Last matching index | Number |
| `slice()` | Extract part | New String |
| `substring()` | Extract part | New String |
| `substr()` | Extract by start + length | New String |
| `replace()` | Replace first match | New String |
| `replaceAll()` | Replace all matches | New String |
| `split()` | String → Array | Array |
| `concat()` | Combine strings | New String |
| `repeat()` | Repeat string | New String |
| `padStart()` | Pad beginning | New String |
| `padEnd()` | Pad ending | New String |
| `String()` | Convert to string | String |

------------------------------------------------------------------------

# 🆚 27. Important Method Differences

## `slice()` vs `substring()` vs `substr()`

```text
slice(start, end)
substring(start, end)
substr(start, length)
```

| Feature | `slice()` | `substring()` | `substr()` |
|---|---|---|---|
| End excluded | ✅ | ✅ | N/A |
| Negative index | ✅ | ❌ | Partially |
| Second argument | End index | End index | Length |
| Status | Recommended | Common | Deprecated |

------------------------------------------------------------------------

## `replace()` vs `replaceAll()`

```text
replace()     → first match
replaceAll()  → all matches
```

------------------------------------------------------------------------

## `charAt()` vs `at()`

```text
charAt() → traditional character access
at()     → supports negative indexes
```

------------------------------------------------------------------------

## `trim()` vs `trimStart()` vs `trimEnd()`

```text
trim()       → both sides
trimStart()  → beginning
trimEnd()    → ending
```

------------------------------------------------------------------------

## `indexOf()` vs `includes()`

```text
indexOf()  → returns index / -1
includes() → returns true / false
```

Example:

```js
let str = "hello";

str.indexOf("e");  // 1
str.includes("e"); // true
```

------------------------------------------------------------------------

# 🔗 28. String + Array Conversion

```text
String → Array
        ↓
     split()

Array → String
        ↓
      join()
```

Example:

```js
let str = "hello";

let arr = str.split("");

let result = arr.reverse().join("");

console.log(result);

// olleh
```

### 🧠 Easy Memory

```text
split() → String → Array

join()  → Array → String
```

------------------------------------------------------------------------

# 🎯 29. Most Important String Methods

### ⭐⭐⭐ Must Know

```text
length
indexing
includes()
indexOf()
slice()
split()
replace()
replaceAll()
toUpperCase()
toLowerCase()
trim()
```

### ⭐⭐ Important

```text
startsWith()
endsWith()
lastIndexOf()
substring()
charAt()
at()
concat()
repeat()
padStart()
padEnd()
```

### ⭐ Interview / Legacy

```text
charCodeAt()
substr()
immutability
template literals
escape characters
String comparison
String + Array combinations
```

------------------------------------------------------------------------

# 🎤 30. Interview Quick Revision

### Q: What is a String?

A: A sequence of characters used to represent text.

### Q: Does String indexing start from 0?

A: Yes.

### Q: How do you get the last character?

```js
str[str.length - 1];
```

Or:

```js
str.at(-1);
```

### Q: Is `length` a method?

A: No. It is a property.

```js
str.length;
```

### Q: Are Strings mutable?

A: No. Strings are immutable.

### Q: `slice()` vs `substring()`?

```text
slice()      → supports negative indexes
substring()  → negative values treated as 0
```

### Q: `replace()` vs `replaceAll()`?

```text
replace()     → first match
replaceAll()  → all matches
```

### Q: `indexOf()` when value is not found?

```text
-1
```

### Q: What does `includes()` return?

```text
true / false
```

### Q: What does `split()` do?

```text
String → Array
```

### Q: What does `join()` do?

```text
Array → String
```

### Q: Which method supports negative indexes?

```js
at()
slice()
```

### Q: How do you reverse a String?

```js
str.split("").reverse().join("");
```

### Q: How do you check a palindrome?

```js
let reverse = str.split("").reverse().join("");

str === reverse;
```

### Q: Why does this not work?

```js
str[0] = "Y";
```

A: Because Strings are immutable.

### Q: Why is this false?

```js
"JavaScript" === "javascript";
```

A: String comparison is case-sensitive.

------------------------------------------------------------------------

# ⚡ 31. Quick Revision

```text
STRING BASICS
─────────────
"Hello"
'Hello'
`Hello`

Index → starts at 0
length → number of characters


CHARACTER
─────────
charAt()      → character
charCodeAt()  → character code
at()          → character + negative index


CASE
────
toUpperCase() → UPPERCASE
toLowerCase() → lowercase


WHITESPACE
──────────
trim()       → START + END
trimStart()  → START
trimEnd()    → END


SEARCH
──────
includes()     → EXISTS?
startsWith()   → START?
endsWith()     → END?
indexOf()      → FIRST index
lastIndexOf()  → LAST index


EXTRACT
───────
slice()       → extract
substring()   → extract
substr()      → legacy / deprecated


REPLACE
───────
replace()     → FIRST match
replaceAll()  → ALL matches


CONVERT
───────
split() → String → Array
join()  → Array → String


COMBINE
───────
concat() → combine strings
+        → concatenate
`${}`    → template literals


REPEAT / PAD
────────────
repeat()   → repeat
padStart() → pad START
padEnd()   → pad END


IMPORTANT
─────────
String → Immutable
Comparison → Case-sensitive
```

------------------------------------------------------------------------

# 🏁 FINAL STRING MAP

```text
                       JAVASCRIPT STRING
                              │
          ┌───────────────────┼───────────────────┐
          ↓                   ↓                   ↓
       BASICS              SEARCH             MODIFY
          │                   │                   │
      length             includes()         replace()
      indexing           startsWith()       replaceAll()
      charAt()            endsWith()         toUpperCase()
      charCodeAt()        indexOf()          toLowerCase()
      at()                lastIndexOf()      trim()
          │                                      │
          └──────────────────────────────────────┘

          ┌───────────────────┼───────────────────┐
          ↓                   ↓                   ↓
       EXTRACT             CONVERT             COMBINE
          │                   │                   │
      slice()              split()             concat()
      substring()          String()            +
      substr()             join()              `${}`
          │
          ↓
     REPEAT / PAD
          │
      repeat()
      padStart()
      padEnd()

          ↓
   LOGIC BUILDING
          │
   reverse string
   palindrome
   count vowels
   count characters
   count words
   character frequency
   anagram
   remove spaces
```

> 🚀 **Master String methods + String/Array combinations + coding patterns = strong JavaScript String fundamentals.**
