const mynum = [1,2,3,4,5,6,7,8,9,10]

//const newNumber = mynum.map((num)=> num + 10 ) // map returns the added value 

const newNumber = mynum.map((num)=> { return num + 10} ) // same above method can be done with using {} just need to add return keyword

console.log(newNumber);

const myNumber = newNumber
                .map((num) => num * 10)  // multiple map and filter can be used to get new values or make changes in new values this will return value in map
                .map((num) => num + 1)
                .filter((num) => num >= 150)
                console.log(myNumber);


