// Q40. Create two strings "listen" and "silent" and check whether they are anagrams.

let str1 = "listen";
let str2 = "silent";

let a = str1.split("").sort().join("");
let b = str2.split("").sort().join("");

console.log(a === b);

