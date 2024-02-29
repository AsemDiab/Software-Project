Feature: User home page

    Scenario: going to event management page
        Given the User navicates into User page 
        When the user enters option 1
        Then transfere him to the Event Management page

    Scenario: open profile page
        Given the User navicates into User page 
        When the user enters option 2
        Then send User to Profile page

    Scenario: return to Start Page
        Given user is in the registerion page
        When the user enters option 3
        Then redirect him to Start Page

    Scenario Outline: Invalid input
        Given the user is in the User page
        When the user enters invalid integer <input>
        Then display message to warn him
        And reture to the user page
        Examples:
            | input |
            | 10    |
            | 'a'   |
            | -10   |


