Feature: User home page

    Scenario: going to event management page
        Given the User navicates into User page 
        When User clicks on "Event Management" option 
        Then send User to Event Management page

    Scenario: open profile page
        Given the User navicates into User page 
        When User clicks on "Profile page" option 
        Then send User to Profile page
        
    Scenario: Invalid input
        Given the user is in the User page
        When the user enters any invalid integer input
        Then display message "invalid input"
        And reture to the User page

    Scenario: return to Start Page
        Given user is in the registerion page
        When the user clicks on the "return" option
        Then redirect him to Start Page
