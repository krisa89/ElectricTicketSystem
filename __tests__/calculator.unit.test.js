
const Calculator = require("./../calculator")

describe("Add",() => {
    test("Add test", () => {
        const calculator = new Calculator()
        expect(calculator.add(2,3)).toEqual(5)
    })
})

describe("substract",() => {
    test("Substract test", () => {
        const calculator = new Calculator()
        expect(calculator.sub(4,3)).toEqual(1)
    })
})

describe("multiply",() => {
    test("Multiply test", () => {
        const calculator = new Calculator()
        expect(calculator.multiply(4,3)).toEqual(12)
    })
})
