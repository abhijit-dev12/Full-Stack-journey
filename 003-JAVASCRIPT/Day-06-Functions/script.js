// What is Function
// Example 
//instead of writing this
console.log("welcome");
console.log("welcome");
console.log("welcome");

//write this

function welcome() {
    console.log("welcome");
}

welcome();
welcome();
welcome();


// Function Day - 6 JS

console.log("--------Function------Declaration--------------");

function greet() {
    console.log("Welcome to JS Day 6");
}

greet();

console.log("----------");

console.log("--------Function-----With-----parameters-------");

function greetUser(name){
    console.log("Hello, "+ name + "!");
}

greetUser("Abhijit");
greetUser("yosh");

console.log("----------");

console.log("----function with Two Paramenters----");

function add(a,b) {
    console("Sum: ", a + b);
}

add(20, 10);
add(300, 50);

console.log("----------");

console.log("---Return Function----");

function multiply(x, y) {
    return x * y;
}

let result = multiply(5, 4);

console.log("Multiplication:", result);

console.log("------------------------");

console.log("----- Function Expression -----");

const square = function(number) {
    return number * number;
};

console.log(square(6));

console.log("------------------------");

console.log("----- Arrow Function -----");

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(20, 5));