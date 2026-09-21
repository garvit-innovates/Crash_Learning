// Q21. Create a function named counter that has a local variable count = 0.
// Return an inner function that increments count by 1 and prints it.
// Call the returned function three times and observe the output.


function counter(){
    let count = 0;

    return function increment(){
        count++; 
        console.log(count);
    }
    
}


let increment = counter();

increment();
increment();
increment();