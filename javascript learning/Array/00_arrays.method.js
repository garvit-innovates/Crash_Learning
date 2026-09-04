/*
========================================================
              JAVASCRIPT ARRAYS — CHEAT SHEET
========================================================

ARRAY
-----
Array = collection of multiple values stored in a single variable.

Example:
let fruits = ["Apple", "Banana", "Mango"];

Index starts from 0:
fruits[0] → Apple
fruits[1] → Banana
fruits[2] → Mango

Last element:
fruits[fruits.length - 1]


========================================================
1. CREATE ARRAY
========================================================

let numbers = [10, 20, 30, 40];

let empty = [];

Array can contain different data types:
let data = ["Garvit", 25, true, null];


========================================================
2. ACCESS / UPDATE ELEMENTS
========================================================

let fruits = ["Apple", "Banana", "Mango"];

Access:
fruits[0]                 // Apple

Update:
fruits[1] = "Orange";


========================================================
3. length
========================================================

Returns the number of elements.

let nums = [10, 20, 30, 40];

nums.length;              // 4

Last index:
nums.length - 1;


========================================================
4. push()
========================================================

Adds element at the END.

let nums = [1, 2, 3];

nums.push(4);

Result:
[1, 2, 3, 4]

Multiple values:
nums.push(5, 6);


========================================================
5. pop()
========================================================

Removes the LAST element.

let nums = [1, 2, 3];

nums.pop();

Result:
[1, 2]

Returns the removed element.


========================================================
6. unshift()
========================================================

Adds element at the BEGINNING.

let nums = [2, 3];

nums.unshift(1);

Result:
[1, 2, 3]


========================================================
7. shift()
========================================================

Removes the FIRST element.

let nums = [1, 2, 3];

nums.shift();

Result:
[2, 3]

Returns the removed element.


========================================================
                 QUICK MEMORY
========================================================

push()       → add END
pop()        → remove END

unshift()    → add START
shift()      → remove START


========================================================
8. indexOf()
========================================================

Returns the index of a value.

let fruits = ["Apple", "Banana", "Mango"];

fruits.indexOf("Banana");     // 1

If value is not found:
fruits.indexOf("Orange");     // -1


========================================================
9. includes()
========================================================

Checks whether a value exists.

let fruits = ["Apple", "Banana", "Mango"];

fruits.includes("Mango");     // true
fruits.includes("Orange");    // false

Returns:
true / false

IMPORTANT:
String comparison is case-sensitive.


========================================================
10. slice()
========================================================

Extracts part of an array.

Does NOT modify the original array.

Syntax:
array.slice(start, end)

IMPORTANT:
end index is NOT included.

let nums = [10, 20, 30, 40, 50];

nums.slice(1, 4);

Result:
[20, 30, 40]


========================================================
11. splice()
========================================================

Used to ADD, REMOVE or REPLACE elements.

MODIFIES the original array.

Syntax:
array.splice(start, deleteCount, item1, item2, ...)


REMOVE:

let nums = [1, 2, 3, 4, 5];

nums.splice(2, 2);

Result:
[1, 2, 5]


ADD:

nums.splice(2, 0, 10);

0 means remove nothing.


REPLACE:

nums.splice(2, 1, 100);

Remove 1 element and add 100.


========================================================
SLICE vs SPLICE
========================================================

slice()  → extract/copy
           Does NOT modify original

splice() → add/remove/replace
           MODIFIES original


========================================================
12. join()
========================================================

Converts array → string.

let languages = ["JavaScript", "Java", "Python"];

languages.join(" - ");

Result:
"JavaScript - Java - Python"


========================================================
13. reverse()
========================================================

Reverses an array.

MODIFIES original array.

let nums = [1, 2, 3];

nums.reverse();

Result:
[3, 2, 1]


========================================================
14. sort()
========================================================

Sorts an array.

Strings:

let fruits = ["Mango", "Apple", "Banana"];

fruits.sort();


IMPORTANT FOR NUMBERS:

Default sort treats values like strings.

Correct numeric ascending:
nums.sort((a, b) => a - b);

Correct numeric descending:
nums.sort((a, b) => b - a);


========================================================
15. forEach()
========================================================

Runs a function for EVERY element.

Does NOT create a new array.

let nums = [10, 20, 30];

nums.forEach((num) => {
    console.log(num);
});


Syntax:

array.forEach((element) => {
    // code
});


USE:
When you simply want to perform an action
for each element.


========================================================
16. map()
========================================================

Creates a NEW array by transforming every element.

let nums = [1, 2, 3];

let doubled = nums.map((num) => {
    return num * 2;
});

Result:
[2, 4, 6]


USE:
When you want to TRANSFORM every element.


Example:
[1, 2, 3]
   ↓ map
[2, 4, 6]


========================================================
17. filter()
========================================================

Creates a NEW array containing elements
that satisfy a condition.

let nums = [1, 2, 3, 4, 5, 6];

let even = nums.filter((num) => {
    return num % 2 === 0;
});

Result:
[2, 4, 6]


USE:
When you want to SELECT specific elements.


========================================================
18. find()
========================================================

Returns the FIRST element that satisfies
the condition.

let nums = [10, 20, 35, 40];

let result = nums.find((num) => {
    return num > 30;
});

Result:
35


USE:
When you need the FIRST matching VALUE.


If nothing matches:
undefined


========================================================
19. findIndex()
========================================================

Returns the INDEX of the first matching element.

let nums = [10, 20, 35, 40];

let result = nums.findIndex((num) => {
    return num > 30;
});

Result:
2


If nothing matches:
-1


========================================================
20. some()
========================================================

Checks whether AT LEAST ONE element
satisfies the condition.

let nums = [10, 20, 60, 30];

nums.some((num) => {
    return num > 50;
});

Result:
true


Think:
some() → ANY?


========================================================
21. every()
========================================================

Checks whether ALL elements satisfy
the condition.

let nums = [20, 30, 40];

nums.every((num) => {
    return num > 10;
});

Result:
true


Think:
every() → ALL?


========================================================
22. reduce()
========================================================

Reduces an array to ONE final value.

Commonly used for:
- Sum
- Total
- Average
- Product
- Counting


Syntax:

array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);


Example:

let nums = [10, 20, 30];

let sum = nums.reduce((total, num) => {
    return total + num;
}, 0);

Result:
60


IMPORTANT:

total       → accumulator
num         → current element
0           → initial value


Flow:

0 + 10 = 10
10 + 20 = 30
30 + 30 = 60


========================================================
23. concat()
========================================================

Combines arrays.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = arr1.concat(arr2);

Result:
[1, 2, 3, 4, 5, 6]

Creates a NEW array.


========================================================
24. SPREAD OPERATOR (...)
========================================================

Used to:
- Copy arrays
- Combine arrays
- Expand array elements


COPY:

let nums = [1, 2, 3];

let copy = [...nums];


COMBINE:

let arr1 = [1, 2];
let arr2 = [3, 4];

let result = [...arr1, ...arr2];

Result:
[1, 2, 3, 4]


========================================================
25. ARRAY DESTRUCTURING
========================================================

Extracts array values into variables.

let fruits = ["Apple", "Banana", "Mango"];

let [a, b, c] = fruits;

a → Apple
b → Banana
c → Mango


Skip an element:

let [a, , c] = fruits;


========================================================
26. MULTIDIMENSIONAL ARRAY
========================================================

Array inside another array.

let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

Access:

nums[0][0] → 1
nums[1][2] → 6
nums[2][1] → 8


Remember:
First [] → outer array index
Second [] → inner array index


========================================================
27. flat()
========================================================

Converts nested arrays into a single-level array.

let nums = [1, 2, [3, 4], [5, 6]];

nums.flat();

Result:
[1, 2, 3, 4, 5, 6]


For deeper nesting:

let nums = [1, [2, [3, 4]]];

nums.flat(2);

Result:
[1, 2, 3, 4]


========================================================
28. Array.isArray()
========================================================

Checks whether a value is an array.

let nums = [1, 2, 3];
let name = "Garvit";

Array.isArray(nums);    // true
Array.isArray(name);    // false


Syntax:

Array.isArray(value)


IMPORTANT:
isArray() belongs to Array.


========================================================
29. Array.from()
========================================================

Creates an array from an iterable or array-like value.

let str = "JavaScript";

let chars = Array.from(str);

Result:
["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]


========================================================
30. ARRAY COMPARISON
========================================================

IMPORTANT:

Two arrays with the same values are NOT equal
using === if they are different array objects.

let a = [1, 2, 3];
let b = [1, 2, 3];

a === b;       // false


Why?
Arrays are reference types.


To compare values:

let result = a.length === b.length &&
             a.every((value, index) => value === b[index]);


========================================================
31. IMPORTANT ARRAY METHOD GROUPS
========================================================

ADD / REMOVE:
push()
pop()
unshift()
shift()
splice()

SEARCH:
indexOf()
includes()
find()
findIndex()

TRANSFORM:
map()

SELECT:
filter()

CHECK:
some()
every()

CALCULATE:
reduce()

COPY / COMBINE:
slice()
concat()
spread (...)

REARRANGE:
reverse()
sort()

CONVERT:
join()
Array.from()

NESTED:
flat()


========================================================
32. MOST IMPORTANT METHODS TO MASTER
========================================================

⭐⭐⭐ VERY IMPORTANT

map()
filter()
reduce()
find()
findIndex()
forEach()
some()
every()
splice()
slice()
sort()
spread (...)


========================================================
33. QUICK INTERVIEW REVISION
========================================================

Q: Does push() modify the original array?
A: Yes.

Q: Does pop() modify the original array?
A: Yes.

Q: Does slice() modify the original array?
A: No.

Q: Does splice() modify the original array?
A: Yes.

Q: Does map() return a new array?
A: Yes.

Q: Does filter() return a new array?
A: Yes.

Q: Does forEach() return a new array?
A: No.

Q: What does find() return?
A: First matching element.

Q: What does findIndex() return?
A: Index of first matching element.

Q: What does some() check?
A: At least one element satisfies the condition.

Q: What does every() check?
A: All elements satisfy the condition.

Q: What does reduce() return?
A: A single accumulated value.

Q: What does indexOf() return if value is not found?
A: -1.

Q: What does find() return if nothing matches?
A: undefined.

Q: Does sort() modify the original array?
A: Yes.

Q: Does reverse() modify the original array?
A: Yes.

Q: What is the first index of an array?
A: 0.

Q: How do you get the last element?
A: array[array.length - 1]


========================================================
34. MOST IMPORTANT DIFFERENCES
========================================================

forEach()
→ Loop through elements
→ No new array

map()
→ Transform elements
→ New array

filter()
→ Select elements
→ New array

find()
→ First matching VALUE

findIndex()
→ First matching INDEX

some()
→ ANY match?

every()
→ ALL match?

reduce()
→ MANY values → ONE value


========================================================
35. COMMON ARRAY PATTERNS
========================================================

// Double every number
nums.map(num => num * 2);


// Get even numbers
nums.filter(num => num % 2 === 0);


// Get numbers greater than 50
nums.filter(num => num > 50);


// Find first number greater than 50
nums.find(num => num > 50);


// Find index
nums.findIndex(num => num > 50);


// Check if any number is greater than 50
nums.some(num => num > 50);


// Check if all numbers are positive
nums.every(num => num > 0);


// Calculate sum
nums.reduce((total, num) => total + num, 0);


// Numeric ascending sort
nums.sort((a, b) => a - b);


// Numeric descending sort
nums.sort((a, b) => b - a);


// Remove duplicates
let unique = [...new Set(nums)];


========================================================
                    END
========================================================
*/