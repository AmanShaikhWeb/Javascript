const user = {
    userName: "Aman",
    userId: 7711,
    userAge: 21,
    userLogin: true,

    getuserDetails: function(){
        console.log("Details Matched Successfully");
        console.log(`Username ${this.userName}`);
        console.log(this); // returns whole object
    }
}

console.log(user.userName);
console.log(user.getuserDetails());
console.log(this); // returns empty {} in global scope