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

//

const promisefour = new Promise(function(resolve,reject){
    setTimeout(() => {
        //let error = true
        let error = false
        if (!error) {
            resolve({username: "AmanSh", password: 778899})
        }else{
            reject("Error: Something Went Wrong")
        }
    }, 4000);
})

promisefour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("This promise is either resolved or rejected"))

//

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        //let error = true
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "js122"})
        }else{
            reject("Error: javascript Went Wrong")
        }
    }, 5000);
})

async function consumePromise(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise()