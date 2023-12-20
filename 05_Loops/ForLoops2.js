//for of 

// ["", "", ""]
// [{} {} {} {}]

const array = [1,2,3,4,5,6,7,8,9,10]

for (const num of array) {
    console.log(num);
}

// for 

const greeting  = "Welcome Welcome"
for (const greet of greeting) {
    console.log(`Each character is ${greet}`);   
}

// maps
 
const map = new Map()  // map is iterable
map.set('MH', "Maharashtra")
map.set('DL', "Delhi")
map.set('UP', "Uttar-Pradesh")
map.set('GJ', "Gujarat")
map.set('JK', "Jammu And Kashmir")

console.log(map);

for (const [key, value] of map) {
    console.log(key,value);
}

const newObject = { // object is not iterable thus it will throw error
    game1: "GTA",
    game2: "BGMI"
}

for (const [key, value] of newObject) {
    console.log(key, value);
}