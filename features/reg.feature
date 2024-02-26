Feature: Register page

    Scenario: valid registerion
        Given the user is in the registerion page
        When the user fills all attribute ( name , email ,password,..ect) with valid inputs
        And clicks on submit option
        Then redirect him to login page

    Scenario: invalid input registerion
        Given the user is in the registerion page
        When the user enter one or more invalid inputs
        And clicks on submit option
        Then the registerion failes
        And display massege "invalid data input"

    Scenario: email already taken
        Given the user is in the registerion page
        When the user enter an email that is already taken
        And clicks on submit option
        Then the registerion failes
        And display massege "this email is already taken"

    Scenario: weak password
        Given user is in the registerion page
        When user enters a valid email
        And user enters a weak password
        Then the registerion failes
        And display massege to warn him

    Scenario: go to login page
        Given the user is on the registerion page
        When clicks on "login page" button
        Then send the user to login page

    Scenario: return to Start Page
        Given user is in the registerion page
        When the user clicks on the "return" option
        Then redirect him to Start Page

    Scenario: invalid input
        Given the user is in the Register page
        When the user enters any invalid input
        Then display message "invalid input"
        And reture to the Register page
