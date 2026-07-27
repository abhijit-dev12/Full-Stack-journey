# Mini Project 1
BMI Calculator
function calculateBMI(weight, height) {

    let bmi = weight / (height * height);

    return bmi.toFixed(2);

}

console.log(calculateBMI(70, 1.75));

Expected Output:

22.86
# Mini Project 2
EMI Calculator
function calculateEMI(loanAmount, months) {

    return loanAmount / months;

}

console.log(calculateEMI(200000, 24));

Expected Output:

8333.33
# Mini Project 3
Student Percentage
function percentage(totalMarks, obtainedMarks) {

    return (obtainedMarks / totalMarks) * 100;

}

console.log(percentage(500, 420));

Output:

84
# Mini Project 4
Greeting Generator
function greet(name, city) {

    console.log(`Hello ${name}, welcome from ${city}!`);

}

greet("Abhijit", "Bengaluru");

Output:

Hello Abhijit, welcome from Bengaluru!