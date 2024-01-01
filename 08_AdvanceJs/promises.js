const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async Task Is Completed');
        resolve()
    }, 5000)
})

promiseOne.then(function(){
    console.log("Promise Completed");
})
