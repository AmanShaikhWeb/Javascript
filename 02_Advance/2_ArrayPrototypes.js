const marvel = ["Iron-man", "Captain-America", "Spider-Man", "Thor", "Hulk"]
const DC = ["Superman", "Batman", "Flash", "Shazam", "Black-Adam"]

//console.log(marvel);
//console.log(DC);

//marvel.push(DC) // returns sub-array
//console.log(marvel);
//console.log(marvel[5][1]);

const collab = marvel.concat(DC)
console.log(collab);

const allHeroes = [...marvel, ...DC] // ... is spread operator works same as concat
console.log(allHeroes);

const numbersArray = [1,2,3, [1,2,[3], [1], 2, [3,6,9],0]] 
const combine = numbersArray.flat(Infinity) // make a new array combine all numbers
console.log(combine);

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman")); //converts to array
console.log(Array.from({name:"Aman"})); // returns empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;

console.log(Array.of(score1,score2,score3,score4,score5));