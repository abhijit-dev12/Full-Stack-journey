// JavaScript Day 5 - Loops

console.log("----- FOR LOOP -----");

for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

console.log("---------------------");

console.log("----- WHILE LOOP -----");

let count = 1;

while (count <= 5) {
    console.log("Count:", count);
    count++;
}

console.log("---------------------");

console.log("----- DO WHILE LOOP -----");

let number = 1;

do {
    console.log("Number:", number);
    number++;
} while (number <= 5);

console.log("---------------------");

console.log("----- BREAK -----");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}

console.log("---------------------");

console.log("----- CONTINUE -----");

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);
}

console.log("---------------------");

console.log("----- NESTED LOOP -----");

for (let row = 1; row <= 3; row++) {

    for (let col = 1; col <= 3; col++) {
        console.log("Row:", row, "Column:", col);
    }

}