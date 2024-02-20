Feature: Regisiter 

    Scenario: valid registerion
        Given user is in the registerion page
            When the user click submit
                And all of  fields are valid
            Then the registerion is succeessful 
                And send email
                And login him

    Scenario: invalid registerion
        Given user is in the registerion page
            When the user click submit
                And at least one of fields is invalid
            Then the registerion is failed 
                And  warn him
