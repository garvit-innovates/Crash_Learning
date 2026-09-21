// Q37. Create a string "madam" and check whether it is a palindrome.

let str = "madam";

// let sstr = str.split("");
// let pstr = sstr.reverse().join("");

let pstr = str.split("").reverse().join("");

if(str==pstr){
    console.log("its palindrome")
} else{
    console.log("its notpalindrome")
}

console.log(pstr)