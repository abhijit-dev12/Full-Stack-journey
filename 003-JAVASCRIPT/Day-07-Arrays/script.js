// js day 7 - Array

console.log("----Creating Arrays----");

let bikes = ["Ducati", "KTM", "BMW", "Honda"];

console.log(bikes);

console.log("------------------------");

console.log("First Bike: ", bikes[0]);
console.log("Second Bike: ", bikes[1]);

console.log("-------------------------");

console.log("----Update Array-----");

bikes[2] = "Yamaha";

console.log(bikes);

console.log("------------------");

console.log("Array Length: ", bikes.length);

console.log("---------0-----");

console.log("---- push()-----");

bikes.push("Royal Enfield")

console.log(bikes);

console.log("-----------");

console.log("--------------------pop()-----------------");

bikes.pop();
console.log(bikes);

console.log("----------");

console.log("---------------shift()--------------");

bikes.shift();

console.log(bikes);

console.log("--------------unshift()-------------");

bikes.unshift("Suzuki");

console.log(bikes);

console.log("-----------------");

console.log("-------------includes()-------------");

console.log(bikes.includes("KTM"));

console.log("----------------");

console.log("---------indexOf()---------");

console.log(bikes.indexOf("Honda"));

console.log("---------------");

console.log("-------for Loop-------");

for(let i = 0; i < bikes.length; i ++) {
    console.log(bikes[i]);
}