// nullish coalescing operator (??) : null undefined

let value1;
value1 = 5??10
value1 = null??10
value1 = undefined ?? 15
value1 = null ?? 10 ?? 20

console.log(value1);

// Terniary operator
// condition ? true : false

const bookPrice = 100
bookPrice <= 50 ? console.log("less than 50") : console.log("More than 50");