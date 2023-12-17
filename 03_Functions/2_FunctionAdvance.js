function calculatedCart(...num1){ //... spread operator is used to get all values other wise it will return only 1st value
    return num1
}
console.log(calculatedCart(100,200,300,400));

function multiplCart( val1, val2, ...num2){ //here 1st and 2nd value is stored in val1 and val2 other 2 value gets stored in array
    return num2
}
console.log(multiplCart(100,200,300,400));

//
const userDetails = {
    user: "Aman",
    age: 21,    
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.user} and user age is ${anyObject.age}`);
}

//handleObject(userDetails)

handleObject({
    user: "EME",
    age: 18
})

//

const newArray = [100,200,300,400,500,600,700,800]
function secondValue(getArray){
    return getArray[3]
}

//console.log(secondValue(newArray));

console.log(secondValue([100,200,900,800]));