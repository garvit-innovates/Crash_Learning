// Q38. Create a string "hello" and count how many times the character "l" appears.

let str = "hello";

var l=0;

for(let i=0; i<str.length; i++) {
    if(str[i]=="l"){
        l++
    };
};
console.log(l)