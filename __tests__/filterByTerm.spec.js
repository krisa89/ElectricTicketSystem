
const { add } = require('./../file1')  
const { substract } = require('./../file1')  

describe("Filter Function",() => {
    test("It should be the test name", () => {
        expect(add(2,3)).toEqual(5)
    })
})

describe("substract",() => {
    test("Substract test", () => {
        expect(substract(4,3)).toEqual(1)
    })
})
