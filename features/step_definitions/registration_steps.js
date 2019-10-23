const { defineFeature, loadFeature } = require('jest-cucumber')
const feature = loadFeature('features/registration.feature')
const Register = require('../../register')
const db = require('../../database_interface')

defineFeature(feature, test => {
  jest.mock('../../database_interface')
  let register = new Register(db)
  let user
  test('Register an user', ({ given, when, then }) => {
    given(/^(.*) with (.*) and with (.*)$/, (userName, emailAddress, password) => {
      user = {userName: userName, emailAddress: emailAddress, password: password}
    });

    when('registration is called', () => {
      register.AddUser(user)
    });

    then(/^(.*) is registered$/, (userName) => {
    });
  });
})