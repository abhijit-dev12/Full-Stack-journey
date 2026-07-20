// if statements

let age = 20;

if(age>20) {
    console.log("You are skibidi. ");
}

console.log("------------");

// if else statement

let marks = 35;

if(marks>= 40){
    console.log("Pass");
} else {
    console.log("fail");
}

console.log("-------------");

//else if

let score = 67;

if(score>=67){
    console.log("Grade A");
} else if(score>=57){
    console.log("Grade B");
} else if(score>=47){
    console.log("Grade C");
} else {
    console.log("Grade E");
}


console.log("---------------");

//nested if

let hasLicense = true;
let hasHelmet = false;

if(hasLicense) {
    if (hasLicense) {
    console.log("You can Ride the Bike");
} else {
    console.log("Wear a Helmet");
} 
} else {
    console.log("Gey Your license");
}

console.log("---------------");


//ternary Operator

let temprature = 32;

let result = temprature > 30
? "It's Hot"
: "Weather is good"

console.log(result);