Feature: Event Creation and Management

    Scenario: add new event
        Given the user navicates to event page
        And want to add new event
        When the user fill all data to add event
        And clicks on "add event" option
        Then the event is added successfully

    Scenario: add existed place
        Given the user navicates to event page
        And want to add event that already exists
        When the user fill up all data to add the event
        And clicks on "add event" option
        Then the event will not be added
        And display message "the event already exists"

    Scenario: modify event 
        Given the user navicates to event page
        And want to modify an event
        When the user selects a row of data 
        And the system display all attributes for that row 
        And the user updates what he needs to update
        And clicks on "update event" option
        Then the event is modifided successfully
    
    Scenario: delete event
        Given the user navicates to event page
        And want to delete an event
        When the user select row to delete
        And clicks on "delete event" option
        Then the event is deleted successfully

    Scenario: invalid input
        Given the user loged into venue page
        And the user was an admin
        When the user enters invalid data
        Then operation failed
        And display massege "invalid input"

    Scenario: exit 
        Given user is in the registerion page
        When the user clicks on exit button
        Then redirect him to login page    