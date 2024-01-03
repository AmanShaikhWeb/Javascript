//let myFriend1 = "Aman                "
//let myFriend2 = "Rishu              "

//console.log(myFriend1.trueLength);

let marvelHeroes = ["IronMan", "CaptainAmerica", "SpiderMan"]

let heroPowers = {
    IronMan: "Money",
    CaptainAmerica: "Shield",
    SpiderMan: "Sling",

    getIronManPowers: function(){
        console.log(`power of ironman is ${this.IronMan}`);
    }
}

Object.prototype.Aman = function(){
    console.log(`Aman is present in all objects`);
}

Array.prototype.heyAman = function(){
    console.log(`Aman Says Helo`);
}

//heroPowers.Aman()
marvelHeroes.Aman()

marvelHeroes.heyAman()
//heroPowers.heyAman()

// ----inheritance---

const newUser = {
    name: "Aman",
    email: "Aman@google.com"
}

const employee = {
    isEmployeePresent: true
}

const staff = {
    isStaffAvailable: false
}

Object.setPrototypeOf(newUser, staff)

//

let anotherUser = "Aman       Shaikh   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUser.trueLength()
"Aman  ".trueLength()
"Shaikh     ".trueLength()