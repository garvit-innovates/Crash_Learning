// Q14. Create a function named greet that prints "Hello Garvit".
// Create another function named execute that accepts a callback.
// Pass greet to execute and run it.

function greet(){
    console.log("hello garvit")
}

function execute(fnc){
    fnc()
}

execute(greet);