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

//

function userState(username, loginCount, isuserloggednin){
    this.username = username;
    this.loginCount = loginCount;
    this.isuserloggednin = isuserloggednin;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this  // it will work same without this line
}

const userone = new userState("AMan", 8, false); // new keyword is used to prevent overwriting and good practice
console.log(userone);

const usertwo = new userState("eme", 7, true);
console.log(usertwo);