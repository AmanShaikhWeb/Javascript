class User{
    constructor(username){
        this.username = username
    }

    logIn(){
        console.log(`username is ${this.username}`);
    }
}

class Admin extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addFunction(){
        console.log(`A new Function Is Added To Panel By ${this.username}`);
    }
}

const staff = new Admin("Eme", "eme@discord.com", 12345)

staff.addFunction()