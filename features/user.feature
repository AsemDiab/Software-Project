Feature: User page

    Scenario: going to event management
        Given the User logged into User page 
        When User click on venue button 
        Then send User to "Event Management" page

    Scenario: going to calender page
        Given the User logged into User page 
        When User click on calendar button
        Then send User to Calendar and Scheduling page

    Scenario: open notification
    Scenario: open messages
    Scenario: book place 
    Scenario: open profile
    Scenario: open Budgeting plannig page

    Scenario: invalid input
        Given the user loged into venue page
        And the user was an User
        When enter invalid data
        Then operation failed
        And display massege "invalid input"

    Scenario: exit 
        Given user is in the registerion page
        When the user click on exit button
        Then redirect him to login page
    