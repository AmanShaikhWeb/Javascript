// function myName() {
//     console.log("A");
//     console.log("M");
//     console.log("A");
//     console.log("N");
// }

//myName()

//function sumOfNumbers(num1,num2){
 //   console.log(num1 + num2);
//}

//sumOfNumbers(3,4)

function sumOfNumbers(num1,num2){
   // let result = num1 + num2
   // return result
   return num1 + num2
}

const result = sumOfNumbers(3,4)
console.log("result:", result);

function Welcome(username = "js"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in !!`
}

console.log(Welcome("Aman"));

