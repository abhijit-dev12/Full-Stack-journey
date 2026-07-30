let basicSalary = 20000;
let bonus = 5000;

function calculateSalary(basicSalary, bonus) {
    let totalSalary = basicSalary + bonus;
    return totalSalary;
}

let totalSalay = calculateSalary(basicSalary,bonus);

console.log("Basic Salary: ",basicSalary);
console.log("Bonus: ",bonus);
console.log("Total Salary: ",totalSalary);