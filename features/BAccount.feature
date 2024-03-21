Feature: Business Account

    Scenario: user successful login to Business Account
        Given the user is on the Login Business Account page
        When the user enters valid data email and password
        And clicks on "submit" option
        Then redirect him to Busines page    

    Scenario: user unsuccessful login to Business Account
        Given the user is on the Login Business Account page
        When the user enters valid data email and password
        And clicks on "submit" option
        Then redirect him to Busines page    