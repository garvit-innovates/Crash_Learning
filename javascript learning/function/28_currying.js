// Q28. Create a curried function named add that accepts two numbers
// like add(10)(20) and returns their sum.
// Print the result.

function add(a) {
    // console.log(b)
    return function (b) {
        //  console.log(a)
        return a + b;
    };
}

console.log(add(10)(20));