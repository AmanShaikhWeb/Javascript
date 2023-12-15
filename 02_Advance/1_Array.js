// Array

const myArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
const name = ["Aman", "Rishu", "Amann", "Shruti"]

const myArr2 = new Array(1,2,3,4,5,6,7,8,9)
console.log(myArr2[0]);


// Array Methods

myArr.push(22)
myArr.pop() //removes last value

myArr.unshift(1)
myArr.shift() // removes first value
console.log(myArr);

console.log(myArr.includes(7)); //returns true or false
console.log(myArr.indexOf(6));

const newArr = myArr.join() // converts array to strings
console.log(newArr);

console.log(myArr);

//slice splice

console.log("A ", myArr);
const newArray = myArr.slice(1, 3)
console.log(newArray);
console.log("B ", myArr);

const newArray2 = myArr.splice(1,3)
console.log("C", myArr);

console.log(newArray2);