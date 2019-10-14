class Register{
    constructor(){
        this.users = []
    }
    
    Users(){
        return this.users
    }

    AddUser(userName, password, emailAddress){
        if(!this.users.some(u => u.userName == userName)){
            this.users.push({userName, password, emailAddress})
        }
    }

    RemoveUser(userName){
        this.users = this.users.filter(u => u.userName !== userName)
    }
}

module.exports = Register