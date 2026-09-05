// Q11. Create an object named user with name: "Garvit".
// Create a greet() method that uses `this.name` to print "Hello Garvit".

let user = {
    name: "Garvit",
    age: 21,

    greet() {
        console.log(`hello ${this.name}`);
    }
};

user.greet();