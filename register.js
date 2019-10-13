class Register{
    constructor(){
        this.users = []
    }
    
    Users(){
        return this.users
    }

    AddUser(userName, password, emailAddress){
        this.users.push({userName, password, emailAddress})
    }

    RemoveUser(userName, password){
        this.users.pop()
    }
}

module.exports = Register