Feature: Organizer page

    Scenario: going to event management
        Given the Organizer logged into Organizer page 
        When Organizer click on venue button 
        Then send Organizer to "Event Management" page

    Scenario: going to calender page
        Given the Organizer logged into Organizer page 
        When Organizer click on calendar button
        Then send Organizer to Calendar and Scheduling page

    Scenario: invalid input
        Given the user loged into venue page
        And the user was an Organizer
        When enter invalid data
        Then operation failed
        And display massege "invalid input"

    Scenario: 