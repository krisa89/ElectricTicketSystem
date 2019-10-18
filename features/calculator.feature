Feature: Calculator

  Calculator is great as a verification exercise to get the Cucumber-js infrastructure up and running

  Scenario: Add two number
    Given the calculator
    When 1 and 3 is added 
    Then should the result be 4

  Scenario: Add two number
    Given the calculator
    When 3 and 3 is added 
    Then should the result be 6