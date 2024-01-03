// class

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.password = password
//         this.email = email
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUser(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const newUser = new User("Aman", "aman@sk.com", 126161)

// console.log(newUser.encryptPassword());
// console.log(newUser.changeUser());

//behind the scene

function User(username, email, password){
    this.username = username
        this.password = password
        this.email = email
}


User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUser = function(){
    return `${this.username.toUpperCase()}`
}


const newUser = new User("Aman", "aman@sk.com", 126161)

console.log(newUser.encryptPassword());
console.log(newUser.changeUser());

