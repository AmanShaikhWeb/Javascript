// class

class User{
    constructor(username, email, password){
        this.username = username
        this.password = password
        this.email = email
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUser(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User("Aman", 2233, "aman@sk.com")