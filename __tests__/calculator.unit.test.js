
const Calculator = require("./../calculator")

var calculator
beforeEach(() => {
    calculator = new Calculator()    
})

describe("Add",() => {
    test("Add test", () => {
        expect(calculator.add(2,3)).toEqual(5)
    })
})

describe("substract",() => {
    test("Substract test", () => {
        expect(calculator.sub(4,3)).toEqual(1)
    })
})

describe("multiply",() => {
    test("Multiply test", () => {
        expect(calculator.multiply(4,3)).toEqual(12)
    })
})
