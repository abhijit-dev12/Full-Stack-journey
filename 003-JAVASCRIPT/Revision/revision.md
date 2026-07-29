# JavaScript Day 8 - Revision Notes

---

# 1. Variables

Variables are used to store data.

## let

A variable declared with `let` can be changed later.

```javascript
let age = 22;

age = 23;
```

---

## const

A variable declared with `const` cannot be reassigned.

```javascript
const country = "India";
```

❌ This will cause an error:

```javascript
country = "USA";
```

---

## Why avoid var?

`var` is function-scoped, can be redeclared, and is hoisted, which can lead to unexpected bugs.

Modern JavaScript uses `let` and `const`.

---

# 2. Data Types

JavaScript has 7 primitive data types.

## String

Stores text.

```javascript
let name = "Abhijit";
```

---

## Number

Stores numbers.

```javascript
let age = 22;
```

---

## Boolean

Stores `true` or `false`.

```javascript
let isStudent = true;
```

---

## Undefined

A variable declared but not assigned a value.

```javascript
let city;
```

---

## Null

Represents an intentionally empty value.

```javascript
let bike = null;
```

---

## BigInt

Stores very large integers.

```javascript
let population = 98765432123456789n;
```

---

## Symbol

Creates a unique identifier.

```javascript
let id = Symbol("user");
```

---

## typeof

Returns the data type of a value.

```javascript
let age = 22;

console.log(typeof age);
```

Output

```
number
```

---

## Why does `typeof null` return "object"?

This is a historical bug in JavaScript that has been kept for backward compatibility.

```javascript
console.log(typeof null);
```

Output

```
object
```

---

# 3. Operators

Operators perform operations on values.

---

## Arithmetic Operators

| Operator | Meaning |
|----------|---------|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus (Remainder) |
| ** | Exponent |

Example

```javascript
10 + 5;
10 % 3;
```

---

## Assignment Operators

```javascript
=
+=
-=
*=
/=
```

Example

```javascript
let x = 10;

x += 5;
```

---

## Comparison Operators

```javascript
>
<
>=
<=
==
===
!=
!==
```

### Difference between == and ===

`==` compares only values.

```javascript
5 == "5";
```

Output

```
true
```

`===` compares both value and data type.

```javascript
5 === "5";
```

Output

```
false
```

---

## Logical Operators

### AND (&&)

Returns true only if both conditions are true.

```javascript
age >= 18 && hasLicense
```

---

### OR (||)

Returns true if at least one condition is true.

---

### NOT (!)

Reverses a Boolean value.

```javascript
!true
```

Output

```
false
```

---

# 4. Conditional Statements

Used to make decisions.

---

## if

Executes code only if the condition is true.

```javascript
if (age >= 18) {
    console.log("Adult");
}
```

---

## if...else

Chooses between two blocks of code.

```javascript
if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

---

## else if

Checks multiple conditions.

```javascript
if (marks >= 90) {

}
else if (marks >= 80) {

}
else {

}
```

---

## Ternary Operator

A shorter way to write an `if...else`.

Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
```

---

# 5. Loops

Loops repeat a block of code.

---

## for Loop

Used when the number of iterations is known.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

## while Loop

Used when the number of iterations is unknown.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

## do...while Loop

Executes at least once before checking the condition.

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

---

## break

Stops the loop immediately.

```javascript
break;
```

---

## continue

Skips the current iteration and moves to the next one.

```javascript
continue;
```

---

# 6. Functions

A function is a reusable block of code.

---

## Function Declaration

```javascript
function greet() {
    console.log("Hello");
}
```

Call the function

```javascript
greet();
```

---

## Parameters

Variables listed in the function definition.

```javascript
function greet(name) {

}
```

`name` is a parameter.

---

## Arguments

Values passed when calling the function.

```javascript
greet("Abhijit");
```

`"Abhijit"` is an argument.

---

## return

Returns a value from a function.

```javascript
function add(a, b) {
    return a + b;
}
```

---

## console.log() vs return

### console.log()

Displays output in the console.

### return

Returns a value back to the function caller.

---

## Arrow Function

Short syntax for writing functions.

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

# 7. Arrays

An array stores multiple values in a single variable.

```javascript
let bikes = ["KTM", "BMW", "Ducati"];
```

---

## Access Elements

```javascript
bikes[0];
```

---

## Update Elements

```javascript
bikes[1] = "Honda";
```

---

## Array Length

```javascript
bikes.length;
```

---

## push()

Adds an element to the end.

```javascript
bikes.push("Yamaha");
```

---

## pop()

Removes the last element.

```javascript
bikes.pop();
```

---

## shift()

Removes the first element.

```javascript
bikes.shift();
```

---

## unshift()

Adds an element to the beginning.

```javascript
bikes.unshift("Suzuki");
```

---

## includes()

Checks if an element exists.

```javascript
bikes.includes("BMW");
```

---

## indexOf()

Returns the index of an element.

```javascript
bikes.indexOf("Honda");
```

---

## Loop Through an Array

```javascript
for (let i = 0; i < bikes.length; i++) {
    console.log(bikes[i]);
}
```