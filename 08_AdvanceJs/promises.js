const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async Task Is Completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Completed");
})

// second task

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Second Async Task");
        resolve()
    },2000)
    
}).then(function(){
    console.log("Second Async Resolved");
})

//

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Aman", password: 1234567})
    },3000)
})

promiseThree.then(function(user){
    console.log(user);
})