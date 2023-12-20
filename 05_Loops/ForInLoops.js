const languages = {
    js : "Javascript",
    py: "Python",
    basic: "css and html",
    node: "Node-Js"
}

for (const key in languages) {
    console.log(`${key} shortcut is for ${languages[key]}`);
    }

//

const programming = ["JS","HTML","CSS","Node-JS","SQL","REACT","MONGO-DB"] // prints length of array
for (const key in programming) {
   console.log(key);
}

//

const map = new Map()  // map is not-iterable
map.set('MH', "Maharashtra")
map.set('DL', "Delhi")
map.set('UP', "Uttar-Pradesh")
map.set('GJ', "Gujarat")
map.set('JK', "Jammu And Kashmir")

for (const key in map) {
    console.log(key); // stopped the output
}