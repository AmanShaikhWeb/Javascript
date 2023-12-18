// if statement

const isUserLoggedIn = true
const temperature = 50

if (temperature >= 51) {
    console.log("Less Than 50");
} else {
    console.log("Temperature is greater than 50");
}
console.log("Successfully Executed");

//

const userScore = 200;

if (userScore > 100) {
    let power = "FLY";
    console.log(`user power is ${power}`);
}

//console.log(`user power is ${power}`); //Block scope

//Else if statement

const balance = 1000;

//if (balance > 500) console.log("test"),console.log("TestAgain"); this is executable but not a good practice

if (balance < 500){
    console.log("Balance is less than 500");
} else if (balance < 750){
    console.log("Balance is less than 750");
} else if (balance < 800){
    console.log("Balance is less than 800");
}else if (balance < 900){
    console.log("Balance is less than 900");
} else {
    console.log("Balance is less than 1200");
}
 //

const userLoggedIn = true
const debitCard = true
const loggedInfromEmail = false
const loggedInfromGithub = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Succesfully Entered");
}

if (loggedInfromEmail || loggedInfromGithub || guestUser) {
    console.log("Logged In Successfully");
}