const assert = require('assert')
const { Before, Given, When, Then } = require('cucumber')
const Calculator = require('../../calculator')


let calculator
var sum

Given('the calculator', function () {
      calculator = new Calculator()
    });

    When('{int} and {int} is added', function (int, int2) {
    sum = calculator.add(int,int2)
    });

Then('should the result be {int}', function (expected) {
        assert.equal(sum, expected)
    });