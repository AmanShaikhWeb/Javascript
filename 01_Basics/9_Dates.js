//dates

const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate) // it is object

let myNewDate = new Date (2023,11,15);
let myADate = new Date (2023,11,15,12,22)
let myBDate = new Date ("11-15-2023")
console.log(myBDate.toLocaleString());

let dateTimestamp = Date.now()
console.log(dateTimestamp);
console.log(myBDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})
