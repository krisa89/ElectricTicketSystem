const { defineFeature, loadFeature } = require('jest-cucumber')
const feature = loadFeature('__tests__/features/calculator.feature')
const Calculator = require('../../../calculator')

defineFeature(feature, test => {
  let calculator
  var sum
  test('Add two number', ({ given, when, then }) => {
    given('the calculator', () => {
      calculator = new Calculator()
    });

    when(/^(.*) and (.*) is added$/, (arg0, arg1) => {      
      sum = calculator.add(parseInt(arg0),parseInt(arg1))
    });

    then(/^should the result be (.*)$/, (arg2) => {
      expect(sum).toEqual(parseInt(arg2))
    });
  });

  test('Add two number again', ({ given, when, then }) => {
    given('the calculator', () => {
      calculator = new Calculator()
    });

    when(/^(.*) and (.*) is added$/, (arg0, arg1) => {
      sum = calculator.add(parseInt(arg0),parseInt(arg1))
    });

    then(/^should the result be (.*)$/, (arg2) => {
      expect(sum).toEqual(parseInt(arg2))
    });
  });
})