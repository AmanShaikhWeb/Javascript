 //this keyword
 
 const user = {
    username: "Aman",
    userId: 18,
    welcomeMessage : function(){
       // console.log(`${this.username},welcome to the website`);
       // console.log(this);
    }
}

user.welcomeMessage()
user.username = "Eme"
user.welcomeMessage()
//console.log(this);

function employee(){
    let emp = "Aman"
    console.log(this.emp); // this wont work in funciton only in object
}
employee()

const newUser = function(){
    let emp = "Aman"
    console.log(this.emp); // this wont work in funciton only in object
}

//Arrow function

const addition = (num1,num2) => { // types of ways to write arrow function
    return num1 + num2
}

const addTwo = (num1, num2) => num1 + num2  // in this one no need to use return keyword as function can be done in single line // imp
const addNumbers = (num1, num2) => (num1 + num2) // curve braces can be used

const withObject = (num1, num2) => ({userA : "Aman"}) // objecs need to be wrapped in curly braces 

console.log(addition(3,4));
console.log(addTwo(3,4));
console.log(addNumbers(3,4));
console.log(withObject(3,4));