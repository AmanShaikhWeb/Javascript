const name = "Aman";
const age = 21;
const place = "Mumbai"

console.log(name + age + place + ".");

console.log(`my name is ${name}, my age is ${age}, I live in ${place}`);

const inGameName = new String('Amanshk')

console.log(inGameName[0]);
console.log(inGameName.__proto__);

console.log(inGameName.length)
console.log(inGameName.toUpperCase());
console.log(inGameName.charAt(2));
console.log(inGameName.indexOf("m"));

const newString = inGameName.substring(0,2);
console.log(newString)

const anotherString = inGameName.slice(0,2);
console.log(anotherString)

const stringOne = "    Aman      "
console.log(stringOne)

console.log(stringOne.trim());

const url = "https://aman.com/aman%30shaikh"

console.log(url.replace("%30", "-"));
console.log(url.includes("amn")); // return true of false
