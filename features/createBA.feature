Feature: Create Business Account

    Scenario: valid page name 
        Given the user is on the Create Business Account page
        When the user enters valid name page
        And clicks on create Business Account page option
        Then display a message "New Business Page Is Created Successfully"
        And redirect him to myAccount page
    
    Scenario: page name already taken
        Given the user is on the Create Business Account page
        When the user enters valid name page that already exist
        And clicks on create Business Account page option
        Then display a message "this name already use , please try another name"
        And redirect him to myAccount page

    Scenario: invalid data input
        Given the user is on the Create Business Account page
        When the user enters invalid name page like null
        And clicks on create Business Account page option
        Then display a message "invalid name page , please try agine with valid name"
        And redirect him to myAccount page        

    Scenario Outline: Invalid input
        Given the user is on the Create Business Account page
        When the user enters invalid integer in create Business Account Page <input>
        Then display a message "invalid input enterd, plase inter again" 
        And return him to create Business Account page
        Examples:
            | input |
            | 13    |
            | 'f'   |
            | -13   |        