Feature: My Account 

    Scenario: Show user profile info
        Given the user in my account page
        When select "user info" options
        Then display all user information 

    Scenario: Create business account 
        Given the user in my account page
        When select "Create business account" options
        Then send him to Create business account page

    Scenario: login to businss account
        Given the user in my account page
        When select "login business account" options
        Then send him to business account page
    
    Scenario: return
        Given the user in my account page
        When select "return" options
        Then bake to user home page

    Scenario Outline: Invalid input
        Given the user in my account page
        When the user enters invalid integer in MyAccount Page <input>
        Then display this message "invalid input enterd, plase inter again" 
        And return him to My Account page
        Examples:
            | input |
            | 15    |
            | 's'   |
            | -15   |
