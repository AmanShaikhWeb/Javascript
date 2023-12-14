// Stack Memory (primitive) , Heap Memory (non-primitive)
//stack

let myName = "Aman Shaikh"
let anotherName = myName
anotherName = "Amaan"

console.log(myName);
console.log(anotherName);

//heap

let userOne = {
    email : "aman00@gmail.com",
    password : "00000000"
}

let userTwo = userOne

userTwo.email = "aman@google.com"

console.log(userOne.email);
console.log(userTwo.email);