Feature: Registration

  Registration is for register a user into a system

  Scenario: Register an user
    Given "John" with "xy@gmail.com" and with "password"
    When registration is called
    Then John is registered