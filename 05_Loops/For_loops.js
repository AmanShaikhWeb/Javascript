// loops

for( let i = 0; i <=10; i++){
    const element = i;
    if (element == 7) {
        console.log("Thala For A Reason");
    }
    console.log(element);
}

for (let i = 1; i <= 10; i++){
   console.log(`outer loop value ${i}`);
    for (let j = 1;  j<= 10; j++){
        console.log(`inner loop value ${j}`);
        console.log(`inner loop value ${j} outer loop value ${i}`);
        console.log(i + '*' + j + '=' + i*j);
}
}

let myArray = ["IronMan", "Captain-America", "Hulk", "Spider-Man","Thor"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

for (let index = 1; index <= 20; index++) {
    if(index == 7){
        console.log("Thala For A Reason");
        break
        }
    console.log(`the total number is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if(index == 7){
        console.log("Thala For A Reason");
        continue
        }
    console.log(`the total number is ${index}`);
    
}