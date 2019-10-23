class DataBase{
    constructor(){
        this.users = []
    }
    AddUser(userName,emailAddress,password){
    }

    RemoveUser(userName){

    }

    GetUser(userName){
        return {userName,email: "email",password: "password"}
    }
}

module.exports = DataBase