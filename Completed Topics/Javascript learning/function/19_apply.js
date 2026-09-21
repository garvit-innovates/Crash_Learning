// Q19. Create a function named sum that uses `this.name`
// and accepts two numbers.
// Create an object with name = "Garvit".
// Use `apply()` to call the function with the object and [10, 20].


let user = {
    name: "Garvit"
};

function sum(a, b) {
    console.log(this.name);
    console.log(a + b);
}

sum.apply(user, [10, 20]);