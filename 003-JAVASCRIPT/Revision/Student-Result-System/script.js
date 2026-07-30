let name = "Abhijit";

let marks = [90, 88, 67, 95, 69];

let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;

let grade;
if(average>=90){
    console.log("Grade A+ ");
} else if(average>=80){
    console.log("Grade A");
} else if(average>=70){
    console.log("Grade B");
} else{
    console.log("Fail");
}

console.log("Name ", +name);
console.log("Total: ", +total);
console.log("Average: ",+average);
console.log("Grade: "+grade);