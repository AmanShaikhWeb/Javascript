const userEmail = []
if (userEmail) {
    console.log("logged in successfully");
} else{
    console.log("Invalid");
}

//False Value
// 0,-0,false,bigint 0n,undefined,null,nan,"",'',

//True Values
// "0"," ","false",[],{},function(){}

if(userEmail.length == 0){
    console.log("Array is Empty");
}

//

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}
