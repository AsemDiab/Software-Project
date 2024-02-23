Feature: Register 

    Scenario: valid registerion
        Given user is in the registerion page
            When the user click submit
                And all of  fields are valid
            Then the registeration is succeessful 
                And send email
                And login him

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

    Scenario: weak passward
        Given user is in the registerion page
            When the user click submit
                And enter an email that already taken
            Then the registerion is failed 
                And display massege to warn him       

    Scenario: exit 
        Given user is in the registerion page
        When the user click on exit button
        Then redirect him to login page