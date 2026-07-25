Functions (Notes)
What is a Function?

A function is a block of code that performs a specific task. Instead of writing the same code again and again, we create a function once and call it whenever we need it.

Syntax
```javascript
function functionName() {
    // Code to execute
}
```
Example
```javascript
function greet() {
    console.log("Hello");
}

greet();
```
Output
Hello
Creating a Function vs Calling a Function

When we create a function, nothing happens.

```javascript
function greet() {
    console.log("Hello");
}
```

The function only runs when we call it.

```javascript
greet();
```
Parameters and Arguments
Parameter

A parameter is a variable that receives data inside the function.

```javascript
function greet(name) {
    console.log("Hello " + name);
}
```

Here,

name

is the parameter.

Argument

An argument is the actual value passed to the function.

```javascript
greet("Abhijit");
```

Here,

"Abhijit"

is the argument.

Inside the function,

name = "Abhijit"
Return vs Console.log()
console.log()

console.log() only prints a value.

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

Output

30

The value is printed, but nothing is returned.

return

return sends a value back to the place where the function was called.

```javascript
function add(a, b) {
    return a + b;
}

let answer = add(10, 20);

console.log(answer);
```

Output

30
Difference Between return and console.log()

Using console.log()

```javascript
function add(a, b) {
    console.log(a + b);
}
```
Prints the value.
Cannot store the result in a variable.

Using return

```javascript
function add(a, b) {
    return a + b;
}
```
Returns the value.
Can be stored in a variable.
Can be used in calculations.
Can be passed to another function.
Function Calling Another Function

Functions can call other functions.

Example

```javascript
function multiply(a, b) {
    return a * b;
}

function square(num) {
    return multiply(num, num);
}

console.log(square(4));
```
Step-by-Step Execution
square(4) is called.
num = 4
multiply(4, 4) is called.
a = 4
b = 4
return 4 * 4
multiply() returns 16.
square() returns 16.
console.log(16) prints the result.

Output

16
Nested Function Calls

Example

```javascript
function add(a, b) {
    return a + b;
}

function multiply(x) {
    return x * 2;
}

let answer = multiply(add(3, 4));

console.log(answer);
```
Step-by-Step Execution
JavaScript first executes add(3,4).
3 + 4 = 7
Now the code becomes:
```javascript
multiply(7);
```
Inside multiply
```javascript
7 * 2 = 14
```
The code becomes
```javascript
console.log(14);
```

Output

14
ATM Project - Understanding Functions
Initial Balance
```javascript
let balance = 1000;
```
Check Balance Function
```javascript
function checkBalance() {
    console.log(balance);
}

checkBalance();
```

Output

1000
Deposit Function
```javascript
let balance = 1000;

function deposit(amount) {
    balance = balance + amount;
}

deposit(500);

checkBalance();
```
Execution

Initial

balance = 1000

After

deposit(500)

Inside the function

amount = 500
balance = 1000 + 500

Now

balance = 1500

Output

1500
Returning the Updated Balance
```javascript
let balance = 1000;

function deposit(amount) {
    balance = balance + amount;
    return balance;
}

let currentBalance = deposit(500);

console.log(currentBalance);
console.log(balance);
```
Execution

Initial

balance = 1000

After

deposit(500)
balance = 1500

The function returns

1500

So

currentBalance = 1500

Output

1500
1500
Multiple Function Calls
```javascript
let balance = 1000;

function deposit(amount) {
    balance = balance + amount;
    return balance;
}

console.log(deposit(200));
console.log(deposit(300));
```
Execution

Initial

balance = 1000

First call

deposit(200)
balance = 1200

Output

1200

Second call

deposit(300)
balance = 1500

Output

1500

Final Output

1200
1500
Key Takeaways
A function is a reusable block of code.
Creating a function does not execute it.
A function executes only when it is called.
Parameters receive values from arguments.
console.log() prints values.
return sends values back to the caller.
Functions can call other functions.
Variables outside a function can be modified inside a function if they are in scope.
Always trace the program step by step instead of guessing.