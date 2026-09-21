// Q11. Create a function named testScope with a local variable message = "Hello".
// Print message inside the function.
// Try to understand why message cannot be accessed outside the function.

function testScope() {
    let message = "Hello";
    console.log(message);
}

testScope();

// console.log(message); // Error: message is not accessible outside