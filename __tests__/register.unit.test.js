const Register = require("../register")

var register
beforeEach(() => {
    register = new Register()
})

describe("Register one user",() => {
    test("register user",() => {
        register.AddUser("User","password","email@addre.ss")
    })
})

describe("Register one user, and get one",() => {
    test("Get one user",() => {
        register.AddUser("User","password","email@addre.ss")
        expect(register.Users().length).toEqual(1)
    })
})

describe("Register one user, and get the back it",() => {
    test("Check one user",() => {
        var user = [{userName : 'User', password: 'password', emailAddress: 'email@addre.ss'}]
        register.AddUser("User","password","email@addre.ss")
        expect(register.Users()).toEqual(user)
       
    })
})

describe("One user is already registered, remove one, expect the users are empty",() => {
    test("Remove one user",() => {
        var user = [{userName : 'User', password: 'password', emailAddress: 'email@addre.ss'}]
        register.AddUser("User","password","email@addre.ss")
        register.RemoveUser("User", "password")
        expect(register.Users().length).toEqual(0)
    })
})

