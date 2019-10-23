
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

describe("Calculate investment",() => {
    test("Calculate investment",() => {
        expect(calculator.investment({totalMoney: 1000, years: 1, interestRate: 0.3, monthlyInvestment: 20})).toEqual(1612)
    })
})

describe("Calculate investment for two years",() => {
    test("Calculate investment for two years",() => {
        expect(calculator.investment({totalMoney: 1000, years: 2, interestRate: 0.3, monthlyInvestment: 20})).toBeCloseTo(2407.6,4)        
    })
})

describe("Calculate investment for three years",() => {
    test("Calculate investment for three years",() => {
        expect(calculator.investment({totalMoney: 1000, years: 3, interestRate: 0.3, monthlyInvestment: 20})).toBeCloseTo(3441.88,4)        
    })
})
