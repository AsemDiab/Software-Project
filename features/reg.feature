Feature: Register 

    Scenario: valid registerion
        Given user is in the registerion page
            When the user click submit
                And all of  fields are valid
            Then the registeration is succeessful 
                And send email
                And send him to login page

    Scenario: invalid registerion
        Given user is in the registerion page
            When the user click submit
                And at least one of fields is invalid
            Then the registerion is failed 
                And display massege to warn him

    Scenario: email already taken
        Given user is in the registerion page
            When the user click submit
                And enter an email that already taken
            Then the registerion is failed 
                And display massege to warn him

    Scenario: Return to start Page 
        Given user is in the registerion page
        When the user click on exit button
        Then redirect him to login page

    Scenario Outline: weak passward
        Given user is in the registerion page
            When the user click submit
                And enter an weak <password>
            Then the registerion is failed 
                And display massege to warn him   
    Examples:
        | email | passward | message |
        | asemhesham55@gmail.com  | asem123  | 'weak passward'|    

