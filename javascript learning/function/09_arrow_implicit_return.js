// Q9. Create an arrow function named isEven that accepts a number
// and implicitly returns true if the number is even, otherwise false.
// Call it with 10 and print the result.

let isEven = (a)=>{
    if(a%2==0){
        return true
    } else {
        return false
    }
    
}

console.log(isEven(10))