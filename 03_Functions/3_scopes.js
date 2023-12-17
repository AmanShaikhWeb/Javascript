let a = 10                  // global scope
 
if(true){  // block scopes
    let a = 10
    const b = 20
    var c = 30 
   // console.log("this is inner a:", a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const userName = "Aman"

    function two(){
        const website = "Github"
      //  console.log(userName);
    }
    two()
   // console.log(website);
}

one()

if(true){
    const userId = "AMan"
    if (userId === "AMan") {
        const website = "Youtube"
     //   console.log(userId + website);
    }
    //console.log(website); // this wont get executed as this is outside scope
}
//console.log(userId) same for this

function addOne(num){
    return num + 1
}

console.log(addOne(5));

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));

