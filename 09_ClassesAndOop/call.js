function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const aman = new createUser("AMan", "aman@sk.com", 14887152)
console.log(aman);