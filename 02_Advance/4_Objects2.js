//const metaUser = new Object()
const metaUser = {}

metaUser.id = "Ab123"
metaUser.name = "MarkZ"
metaUser.year = 2002
metaUser.isLoggedIn = "True"

console.log(metaUser);

const newUser = {
    email: "aman12@gmail.com",
    userName: {
        Name:{
            Fullname:{
                firstName: "Aman",
                lastName: "Shaikh"
            }
        }
    }
}

//console.log(newUser.userName);
//console.log(newUser.userName.Name.Fullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
const obj4 = {7: "a", 8: "b"}
const obj5 = {9: "a", 10: "b"}

//const newObj = {obj1,obj2,obj3,obj4,obj5}
//const newObj = Object.assign({}, obj1,obj2,obj3,obj4,obj5 ) // used to combine objects

const newObj = {...obj1, ...obj2, ...obj3, ...obj4, ...obj5} // this is the latest to combine objects
console.log(newObj);

const users = [
    {
        names : "Aman",
        surname : "Shaikh",
        age : 21,
    },
    {

    },
    {

    }
]

users[1].surname
console.log(users);

console.log(Object.keys(metaUser));
console.log(Object.values(metaUser));
console.log(Object.entries(metaUser));

console.log(metaUser.hasOwnProperty('isLoggedIn'));

// De-structure

const websites = {
    web1: "Gooogle",
    web2: "linkedin",
    web3: "meta",
    web4: "instagram",
    web5: "github",
}

const {web5} = websites
console.log(web5);


