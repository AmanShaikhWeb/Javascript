const totalNum = [1,2,3,4,5,6,7,8,9,10]

//using function
const addedNum = totalNum.reduce(function(acc,currval) {   // this method needs two parameter accumuate and current value 
    console.log(`${acc} + ${currval}`);
    return acc + currval
},0)  // here initial number is needed for starting the initial phase of reduce method
console.log(addedNum);

// using arrow function
const myTotal = totalNum.reduce((one,two) => one + two, 0) // here 0 is inital value
console.log(myTotal);

//

const shoppingCart = [
    {
        itemName : "Web-Dev",
        price : 1999
    },
    {
        itemName : "Android Dev",
        price : 5999
    },
    {
        itemName : "IOS-Dev",
        price : 8999
    },
    {
        itemName : "Full-Stack",
        price : 7999
    },
    {
        itemName : "Java",
        price : 3999
    },
    {
        itemName : "Python",
        price : 2999
    }
]

const totalPrice = shoppingCart.reduce((acc,item) => acc + item.price,0 )
console.log(totalPrice);