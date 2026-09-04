// Q35. Create a string "javascript" and count how many vowels it contains using a loop.

let str = "javascript" ;

var vowel = 0;

for(let i=0; i<str.length; i++){

    if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u" ){
        vowel++
    };
};
console.log(vowel);