Feature: Register page

    Scenario: valid registerion
        Given the user is in the registerion page
        When the user fills all attribute ( name , email ,password,..ect)
        And click on submit button
        Then redirect him to login page

    Scenario: invalid registerion
        Given the user is in the registerion page
        When the user enter at least one of fields is invalid
        And click on submit button
        Then the registerion is failed 
        And display massege "invalid data input"

    Scenario: email already taken
        Given the user is in the registerion page
        When the user enter an email that already taken
        And click on submit button
        Then the registerion is failed 
        And display massege "this email already taken"

    Scenario: Return to start Page 
        Given user is in the registerion page
        When the user click on exit button
        Then redirect him to login page

    Scenario Outline: weak passward
        Given user is in the registerion page
            When the user click submit
                And enter an email that already taken
            Then the registerion is failed 
                And display massege to warn him       

    Scenario: exit 
        Given user is in the registerion page
        When the user click on exit button
        Then redirect him to login page