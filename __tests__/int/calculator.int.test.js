const Calculator = require("./../../calculator")

describe("First Integration test",() => {
    test("Add test", () => {
        const calculator = new Calculator()
        expect(calculator.add(2,3)).toEqual(5)
    })
})