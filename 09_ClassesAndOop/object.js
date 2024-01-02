function multiplyby10(num){
    return num * 10
}

multiplyby10.power = 2

console.log(multiplyby10(1200));
console.log(multiplyby10.power);
console.log(multiplyby10.prototype);

//

function createUser(userName, Score){
    this.userName = userName
    this.Score = Score
}

createUser.prototype.increment = function(){
    this.Score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.Score}`);
}

const User1Score = new createUser("AMan", 100)
const User2Score = new createUser("eme", 98)

User1Score.printMe()