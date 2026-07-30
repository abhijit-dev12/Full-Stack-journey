let balance = 20000;
let withdraw = 5000;

if (withdraw <= balance) {
    balance = balance - withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance: " + balance);
} else {
    console.log("Insufficient Balance");
    console.log("Your Balance: " + balance);
    console.log("Requested Amount: " + withdraw);
}