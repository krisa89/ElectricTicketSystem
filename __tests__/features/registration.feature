Feature: Registration

  Registration is for register a user into a system

  Scenario: Register an user
    Background: 
    Given the following user exist:
     | UserName  | EmailAddress | Password |
     | Frank     | frank@gmail.com  | 123456  |
    
    And "John" with "xy@gmail.com" and with "password"
    When registration is called
    Then John is registered