# JavaScript Day 5 - Loops

## for Loop

Used when you know how many times you want to repeat.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

## while Loop

Runs while the condition is true.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

## do...while Loop

Runs at least once before checking the condition.

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

Skips the current iteration.

```javascript
continue;
```

---

## Nested Loop

A loop inside another loop.

```javascript
for (...) {

    for (...) {

    }

}
```