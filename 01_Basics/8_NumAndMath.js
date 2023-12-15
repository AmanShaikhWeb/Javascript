const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const newNumber = 112.8717

console.log(newNumber.toPrecision(4));

const numbers = 10000000
console.log(numbers.toLocaleString('en-IN'));

//--------------Maths-------------

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // return higher value before decimal eg 5
console.log(Math.floor(4.6));// return lower value before decimal eg 4
console.log(Math.min(2 , 6, 12, 3, 8, 50));
console.log(Math.max(2 , 6, 12, 3, 8, 50));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)



