// Q17. Create an object named user with a name property.
// Add a greet method that uses `this.name` to print:
// "Hello Garvit".
// Call the greet method.

let user = {
    name: "Garvit",

    greet: function () {
        console.log(`Hello ${this.name}`);
    }
};

user.greet();
