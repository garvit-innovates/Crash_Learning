// Q16. Create a function named outer that returns another function.
// The returned function should print "Hello Garvit".
// Store the returned function in a variable and call it.

function outer() {
    return function () {
        console.log("Hello Garvit");
    };
}

let result = outer();

result();