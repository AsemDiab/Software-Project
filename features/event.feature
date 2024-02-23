Feature: Event Creation and Management

    Scenario: add new event
        Given the Organizer logged into event page
        And want to add new event
        When the Organizer fill all data to add event
        And click on "add event" button
        Then the event is added successfully

    Scenario: add exist place
        Given the Organizer logged into event page
        And want to add event already exist
        When the Organizer fill all data to add event
        And click on "add event" button
        Then the event will not add
        And display masseg "the event already exist"

    Scenario: modify event 
        Given the Organizer logged into event page
        And want to modify an event
        When the Organizer select a row of data 
        And the system display all attribute for thet row 
        And the Organizer update what he need to update
        And click on "update event" button
        Then the event is modifided successfully
    
    Scenario: delete event
        Given the Organizer logged into event page
        And want to delete an event
        When the Organizer select row to delete
        And click on "delete event" button
        Then the event is deleted successfully

    Scenario: invalid input
        Given the Organizer loged into venue page
        And the Organizer was an admin
        When enter invalid data
        Then operation failed
        And display massege "invalid input"

    Scenario: exit 
        Given user is in the registerion page
        When the user click on exit button
        Then redirect him to login page    