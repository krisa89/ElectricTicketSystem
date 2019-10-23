const { defineFeature, loadFeature } = require('jest-cucumber')
const feature = loadFeature('__tests__/features/registration.feature')
const Register = require('../../../register')
const db = require('../../../database_interface')

defineFeature(feature, test => {
  jest.mock('../../../database_interface')
  
  test('Register an user', ({ given, and, when, then }) => {
    given('the following user exist:', (table) => {

    });

    and(/^(.*)$/, (arg0) => {

    });

    when('registration is called', () => {

    });

    then('John is registered', () => {

    });
  });
})