// Q15. Create a function named calculate that accepts two numbers
// and a callback function named operation.
// Use operation to perform the calculation.
// Create an add function and pass it as the callback.
// Call calculate(10, 20, add) and print the result.


function calculate(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

console.log(calculate(10, 20, add));