// singleton
//Object.create

//object literals

const mysym = Symbol("Key1")

const user = {
    name: "Aman",
    "full name": "Aman Shaikh",
    Age : 21,
    [mysym] : "mykey1", // if bracket isnot used then the type of would be string
    Email : "Aman10@gmail.com",
    City : "Mumbai",
    isLoggedIn : false,
    loginDays : ["Mon", "Tue", "Wed", "Fri"],
}

console.log(user.name);
console.log(user.Email);
console.log(user["full name"]);
console.log(typeof user[mysym]); //-

user.Email = "aman10@google.com"
//Object.freeze(user) // freeze is use for blocking the changes
user.Email = "aman12.com"
console.log(user);

user.greeting = function(){
    console.log("Hello This Is JS");
}

user.greetingTwo = function(){
    console.log(`Hello This Is JS, my Name is ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());