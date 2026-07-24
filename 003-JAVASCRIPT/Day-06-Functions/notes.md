# JavaScript Day 6 - Functions

## Function Declaration

```javascript
function greet() {
    console.log("Hello");
}
```

Call it:

```javascript
greet();
```

---

## Parameters

Parameters receive values.

```javascript
function greet(name) {
    console.log(name);
}
```

---

## Arguments

Arguments are the values passed to a function.

```javascript
greet("Abhijit");
```

---

## Return

Returns a value.

```javascript
function add(a, b) {
    return a + b;
}
```

---

## Function Expression

```javascript
const square = function(num) {
    return num * num;
};
```

---

## Arrow Function

```javascript
const add = (a, b) => {
    return a + b;
};
```