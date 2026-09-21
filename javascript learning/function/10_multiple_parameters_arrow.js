// Q10. Create an arrow function named max that accepts two numbers
// and returns the larger number.
// Call it with 15 and 10 and print the result.

let max = (a,b)=>{
    if(a>b){
        return a ;
    } else {
        return b ;
    }
};

console.log(max(15,10))