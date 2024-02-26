Feature: Register page

    Scenario: valid registerion
        Given the user is in the registerion page
        When the user fills all attribute ( name , email ,password,..ect) with valid inputs
        And clicks on continuo option
        Then redirect him to login page

    Scenario: invalid input registerion
        Given the user is in the registerion page
        When the user enter one or more invalid inputs
        And clicks on continuo optin
        Then the registerion failes
        And display massege "invalid data input"

    Scenario: email already taken
        Given the user is in the registerion page
        When the user enter an email that is already taken
        And clicks on continuo option
        Then the registerion failes
        And display massege "this email is already taken"

    Scenario: return to Start Page
        Given user is in the registerion page
        When the user clicks on the return option
        Then redirect him to Start Page

    Scenario: weak password
        Given user is in the registerion page
        When user enters a valid email
        And user enters a weak password
        Then the registerion failes
        And display massege to warn him

    Scenario: invalid input
        Given the user is in the Register page
        When the user enters any invalid integer input
        Then display message "invalid input"
        And reture to the Register page
