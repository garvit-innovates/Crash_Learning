# 🚀 JavaScript Arrays --- Cheat Sheet

> **Quick Revision Notes \| Beginner → Interview Ready**

------------------------------------------------------------------------

## 📌 1. What is an Array?

An **Array** stores multiple values in a single variable.

``` js
let fruits = ["Apple", "Banana", "Mango"];
```

### Indexing

  Element     Apple   Banana   Mango
  --------- ------- -------- -------
  Index           0        1       2

``` js
fruits[0]; // "Apple"
fruits[2]; // "Mango"
fruits[fruits.length - 1]; // Last element
```

> ⭐ **Array index always starts from `0`.**

------------------------------------------------------------------------

# 🧱 2. Creating an Array

``` js
let numbers = [10, 20, 30, 40];

let empty = [];

let data = ["Garvit", 25, true, null];
```

------------------------------------------------------------------------

# 📏 3. `length`

Returns the number of elements.

``` js
let nums = [10, 20, 30, 40];

console.log(nums.length); // 4
```

**Last index:**

``` js
nums.length - 1;
```

------------------------------------------------------------------------

# ➕➖ 4. Add & Remove Elements

  Method        Action              Changes Original?
  ------------- ------------------- -------------------
  `push()`      Add at END          ✅ Yes
  `pop()`       Remove from END     ✅ Yes
  `unshift()`   Add at START        ✅ Yes
  `shift()`     Remove from START   ✅ Yes

### `push()`

``` js
let nums = [1, 2, 3];

nums.push(4);
// [1, 2, 3, 4]
```

### `pop()`

``` js
nums.pop();
// removes 4
```

### `unshift()`

``` js
nums.unshift(0);
// [0, 1, 2, 3]
```

### `shift()`

``` js
nums.shift();
// removes 0
```

### 🧠 Easy Memory

``` text
push()    → Add END
pop()     → Remove END

unshift() → Add START
shift()   → Remove START
```

------------------------------------------------------------------------

# 🔎 5. Search Methods

## `indexOf()`

Returns the index of a value.

``` js
let fruits = ["Apple", "Banana", "Mango"];

fruits.indexOf("Banana");  // 1
fruits.indexOf("Orange");  // -1
```

> If the value doesn't exist → `-1`

------------------------------------------------------------------------

## `includes()`

Checks whether a value exists.

``` js
fruits.includes("Mango");  // true
fruits.includes("Orange"); // false
```

> Returns `true` or `false`.

------------------------------------------------------------------------

## `find()`

Returns the **first matching value**.

``` js
let nums = [10, 20, 35, 40];

let result = nums.find(num => num > 30);

console.log(result); // 35
```

If nothing matches → `undefined`.

------------------------------------------------------------------------

## `findIndex()`

Returns the **index of the first matching value**.

``` js
let result = nums.findIndex(num => num > 30);

console.log(result); // 2
```

If nothing matches → `-1`.

------------------------------------------------------------------------

# ✂️ 6. `slice()` vs `splice()`

## `slice()`

Extracts/copies part of an array.

``` js
array.slice(start, end);
```

> `end` is **not included**.

``` js
let nums = [10, 20, 30, 40, 50];

let result = nums.slice(1, 4);

console.log(result);
// [20, 30, 40]
```

### Important

`slice()` **does NOT modify** the original array.

------------------------------------------------------------------------

## `splice()`

Used to **add, remove, or replace** elements.

``` js
array.splice(start, deleteCount, item1, item2, ...);
```

### Remove

``` js
let nums = [1, 2, 3, 4, 5];

nums.splice(2, 2);

// [1, 2, 5]
```

### Add

``` js
nums.splice(2, 0, 10);
```

### Replace

``` js
nums.splice(2, 1, 100);
```

> ⚠️ `splice()` **modifies the original array**.

### 🧠 Easy Memory

``` text
slice()  → Extract / Copy → Original unchanged
splice() → Add / Remove / Replace → Original changed
```

------------------------------------------------------------------------

# 🔄 7. `forEach()`

Runs a function for every element.

``` js
let nums = [10, 20, 30];

nums.forEach(num => {
    console.log(num);
});
```

### Remember

``` text
forEach() → Perform an action
```

❌ Does not create a new array.

------------------------------------------------------------------------

# 🔁 8. `map()`

Transforms every element and returns a **new array**.

``` js
let nums = [1, 2, 3];

let doubled = nums.map(num => num * 2);

console.log(doubled);
// [2, 4, 6]
```

### Remember

``` text
map() → Transform → New Array
```

------------------------------------------------------------------------

# 🎯 9. `filter()`

Selects elements that satisfy a condition.

``` js
let nums = [1, 2, 3, 4, 5, 6];

let even = nums.filter(num => num % 2 === 0);

console.log(even);
// [2, 4, 6]
```

### Remember

``` text
filter() → Select required elements
```

------------------------------------------------------------------------

# 🔍 10. `find()` vs `filter()`

  Method       Returns
  ------------ ------------------------
  `find()`     First matching element
  `filter()`   All matching elements

``` js
nums.find(num => num > 3);
// 4
```

``` js
nums.filter(num => num > 3);
// [4, 5, 6]
```

------------------------------------------------------------------------

# ❓ 11. `some()`

Checks whether **at least one** element matches.

``` js
let nums = [10, 20, 60, 30];

nums.some(num => num > 50);
// true
```

### Remember

``` text
some() → ANY?
```

------------------------------------------------------------------------

# ✅ 12. `every()`

Checks whether **all** elements match.

``` js
let nums = [20, 30, 40];

nums.every(num => num > 10);
// true
```

### Remember

``` text
every() → ALL?
```

------------------------------------------------------------------------

# 🧮 13. `reduce()`

Reduces an array to **one final value**.

Common uses:

-   Sum
-   Total
-   Average
-   Product
-   Counting

### Sum

``` js
let nums = [10, 20, 30];

let sum = nums.reduce((total, num) => {
    return total + num;
}, 0);

console.log(sum);
// 60
```

### Parameters

``` text
total → accumulator
num   → current element
0     → initial value
```

### Flow

``` text
0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
```

### Remember

``` text
reduce() → Many Values → One Value
```

------------------------------------------------------------------------

# 🔃 14. `sort()`

Sorts an array.

### Strings

``` js
let fruits = ["Mango", "Apple", "Banana"];

fruits.sort();
```

### Numbers ⚠️

For numbers, use a comparator:

``` js
let nums = [10, 2, 30, 5];

nums.sort((a, b) => a - b);
// [2, 5, 10, 30]
```

### Descending

``` js
nums.sort((a, b) => b - a);
```

> ⚠️ `sort()` modifies the original array.

------------------------------------------------------------------------

# 🔄 15. `reverse()`

Reverses the array.

``` js
let nums = [1, 2, 3];

nums.reverse();

console.log(nums);
// [3, 2, 1]
```

> ⚠️ `reverse()` modifies the original array.

------------------------------------------------------------------------

# 🔗 16. `join()`

Converts an array into a string.

``` js
let languages = ["JavaScript", "Java", "Python"];

let result = languages.join(" - ");

console.log(result);
// JavaScript - Java - Python
```

### Remember

``` text
join() → Array → String
```

------------------------------------------------------------------------

# 🔗 17. `concat()`

Combines arrays and returns a new array.

``` js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = arr1.concat(arr2);

console.log(result);
// [1, 2, 3, 4, 5, 6]
```

------------------------------------------------------------------------

# 📦 18. Spread Operator `...`

Used to copy or combine arrays.

### Copy

``` js
let nums = [1, 2, 3];

let copy = [...nums];
```

### Combine

``` js
let arr1 = [1, 2];
let arr2 = [3, 4];

let result = [...arr1, ...arr2];

// [1, 2, 3, 4]
```

------------------------------------------------------------------------

# 🎁 19. Array Destructuring

Extract values into variables.

``` js
let fruits = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruits;

console.log(first);  // Apple
console.log(second); // Banana
console.log(third);  // Mango
```

### Skip a value

``` js
let [first, , third] = fruits;
```

------------------------------------------------------------------------

# 🪆 20. Multidimensional Array

An array containing other arrays.

``` js
let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

Access:

``` js
nums[0][0]; // 1
nums[1][2]; // 6
nums[2][1]; // 8
```

> First `[]` → outer index\
> Second `[]` → inner index

------------------------------------------------------------------------

# 📐 21. `flat()`

Converts nested arrays into a flatter array.

``` js
let nums = [1, 2, [3, 4], [5, 6]];

console.log(nums.flat());

// [1, 2, 3, 4, 5, 6]
```

For deeper nesting:

``` js
let nums = [1, [2, [3, 4]]];

nums.flat(2);
// [1, 2, 3, 4]
```

------------------------------------------------------------------------

# 🧪 22. `Array.isArray()`

Checks whether a value is an array.

``` js
let nums = [1, 2, 3];
let name = "Garvit";

Array.isArray(nums);  // true
Array.isArray(name);  // false
```

### Syntax

``` js
Array.isArray(value);
```

------------------------------------------------------------------------

# 🔤 23. `Array.from()`

Creates an array from an iterable or array-like value.

``` js
let str = "JavaScript";

let chars = Array.from(str);

console.log(chars);

// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
```

------------------------------------------------------------------------

# 🆚 24. Array Comparison

This is important:

``` js
let a = [1, 2, 3];
let b = [1, 2, 3];

console.log(a === b);
// false
```

Why?

> Arrays are reference values. Two separately created arrays are
> different objects.

For simple same-order value comparison:

``` js
let result = a.length === b.length &&
             a.every((value, index) => value === b[index]);

console.log(result);
// true
```

------------------------------------------------------------------------

# 🧠 25. Method Master Map

  Method          Main Purpose           New Array?   Modifies Original?
  --------------- -------------------- ------------ --------------------
  `push()`        Add at end                     ❌                   ✅
  `pop()`         Remove end                     ❌                   ✅
  `unshift()`     Add at start                   ❌                   ✅
  `shift()`       Remove start                   ❌                   ✅
  `splice()`      Add/remove/replace             ❌                   ✅
  `slice()`       Extract/copy                   ✅                   ❌
  `map()`         Transform                      ✅                   ❌
  `filter()`      Select                         ✅                   ❌
  `find()`        First value                    ❌                   ❌
  `findIndex()`   First index                    ❌                   ❌
  `forEach()`     Perform action                 ❌                 ❌\*
  `some()`        ANY match?                     ❌                   ❌
  `every()`       ALL match?                     ❌                   ❌
  `reduce()`      One final value                ❌                   ❌
  `concat()`      Combine                        ✅                   ❌
  `reverse()`     Reverse                        ❌                   ✅
  `sort()`        Sort                           ❌                   ✅
  `join()`        Array → String                 ❌                   ❌
  `flat()`        Flatten                        ✅                   ❌

\* `forEach()` itself doesn't modify the array, but the callback can
modify elements or other state.

------------------------------------------------------------------------

# ⚡ 26. Quick Memory Map

``` text
ADD / REMOVE
────────────
push()       → END + ADD
pop()        → END - REMOVE
unshift()    → START + ADD
shift()      → START - REMOVE
splice()     → ADD / REMOVE / REPLACE


SEARCH
──────
indexOf()    → INDEX
includes()   → EXISTS?
find()       → FIRST VALUE
findIndex()  → FIRST INDEX


LOOP / TRANSFORM
────────────────
forEach()    → DO SOMETHING
map()        → TRANSFORM
filter()     → SELECT


CHECK
─────
some()       → ANY?
every()      → ALL?


CALCULATE
─────────
reduce()     → MANY → ONE


COPY / COMBINE
──────────────
slice()      → EXTRACT / COPY
concat()     → COMBINE
...          → COPY / COMBINE


REARRANGE
─────────
sort()       → SORT
reverse()    → REVERSE


CONVERT
───────
join()       → ARRAY → STRING
Array.from() → VALUE → ARRAY
flat()       → NESTED → FLAT
```

------------------------------------------------------------------------

# 🎯 27. Most Important Methods to Master

### ⭐⭐⭐ Priority 1

``` text
map()
filter()
reduce()
find()
findIndex()
forEach()
some()
every()
```

### ⭐⭐ Priority 2

``` text
slice()
splice()
sort()
spread (...)
```

### ⭐ Priority 3

``` text
push()
pop()
shift()
unshift()
includes()
indexOf()
join()
concat()
flat()
destructuring
```

------------------------------------------------------------------------

# 💻 28. Common Coding Patterns

### Get even numbers

``` js
let even = nums.filter(num => num % 2 === 0);
```

### Double numbers

``` js
let doubled = nums.map(num => num * 2);
```

### Sum

``` js
let sum = nums.reduce((total, num) => total + num, 0);
```

### Find first value \> 50

``` js
let result = nums.find(num => num > 50);
```

### Find index

``` js
let index = nums.findIndex(num => num > 50);
```

### Check if any value \> 50

``` js
let result = nums.some(num => num > 50);
```

### Check if all values are positive

``` js
let result = nums.every(num => num > 0);
```

### Numeric ascending

``` js
nums.sort((a, b) => a - b);
```

### Numeric descending

``` js
nums.sort((a, b) => b - a);
```

### Remove duplicates

``` js
let unique = [...new Set(nums)];
```

------------------------------------------------------------------------

# 🎤 29. Interview Quick Revision

**Q: What is an array?**\
A: A collection of multiple values stored in a single variable.

**Q: What is the first index of an array?**\
A: `0`

**Q: How do you get the last element?**

``` js
array[array.length - 1]
```

**Q: `map()` vs `forEach()`?**

``` text
map()     → returns a new array
forEach() → performs an action, returns undefined
```

**Q: `map()` vs `filter()`?**

``` text
map()    → transform elements
filter() → select elements
```

**Q: `find()` vs `filter()`?**

``` text
find()   → first matching value
filter() → all matching values
```

**Q: `some()` vs `every()`?**

``` text
some()  → at least one
every() → all
```

**Q: `slice()` vs `splice()`?**

``` text
slice()  → doesn't modify original
splice() → modifies original
```

**Q: What does `reduce()` do?**

``` text
Many values → One final value
```

**Q: What does `indexOf()` return if not found?**

``` text
-1
```

**Q: What does `find()` return if not found?**

``` text
undefined
```

**Q: Does `sort()` modify the original array?**

``` text
Yes
```

**Q: Does `reverse()` modify the original array?**

``` text
Yes
```

------------------------------------------------------------------------

# 🏁 FINAL REVISION

``` text
                    JAVASCRIPT ARRAY
                           │
       ┌───────────────────┼───────────────────┐
       ↓                   ↓                   ↓
     SEARCH             TRANSFORM            CHECK
       │                   │                   │
 indexOf()              map()               some()
 includes()             filter()            every()
 find()
 findIndex()
       │
       └─────────────────────────────────────────

       ADD/REMOVE              CALCULATE
       │                       │
 push()                       reduce()
 pop()
 shift()
 unshift()
 splice()

       COPY/COMBINE             REARRANGE
       │                        │
 slice()                        sort()
 concat()                       reverse()
 spread (...)

       CONVERT                  NESTED
       │                        │
 join()                         flat()
 Array.from()                   multidimensional
```

> 🚀 **Master these methods + practice problems = strong JavaScript
> Array fundamentals.**

------------------------------------------------------------------------

## 📚 Practice Files

``` text
01_indexing.js
02_push-pop.js
03_length.js
04_includes.js
05_indexOf.js
06_slice.js
07_splice.js
08_reverse.js
09_sorting.js
10_join.js
11_forEach.js
12_map.js
13_filter.js
14_find.js
15_findIndex.js
16_some.js
17_every.js
18_reduce.js
19_concat.js
20_spread.js
21_destructuring.js
22_multidimensional.js
23_flat.js
24_isArray.js
25_from.js
26_arrayCopy.js
27_arrayCompare.js
28_arrayChallenge.js
```
