//Immediately Invoked Function Expressions IIFE

(function  Aman(){
    console.log("Logged In successfully !!");
}());  // to immediately invoked the function it is necessary to use curly braces before and after function
//And semicolon is necessary for 2 /IIFE

( (name) => {
    console.log(`${name}Logged In successfully !!`);
})("Aman");