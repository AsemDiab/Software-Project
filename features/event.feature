Feature: Event Creation and Management

    Scenario: create new event
        Given the user navicates to event page
        And want to add new event
        When the user fill all data to add event
        And clicks on "add event" option
        Then the event is added successfully

    Scenario: create existed event
        Given the user navicates to event page
        And want to add event that already exists
        When the user fill up all data to add the event
        And clicks on "add event" option
        Then display message "the event already exists"
        And reture user to Event management page

    Scenario: create new event with invalid data
        Given the user navicates to event page
        When the user fill up all data with invalid input to add the event
        And clicks on "add event" option
        Then the event will not be added
        And display message "invalid data input to add"

    Scenario: delete existed event
        Given the user navicates to event page
        And want to delete an event
        When the user choose a row number to delete
        And clicks on "delete" option
        Then the event is deleted successfully

    Scenario: delete unexisted event
        Given the user navicates to event page
        And want to delete an event
        When the user choose a row number to delete
        And clicks on "delete" option
        Then display message "delete unexisted event"

    Scenario: modify existed event 
        Given the user navicates to event page
        And want to modify an event
        When the user choose the row to update it
        And the user updates what he needs to update
        And clicks on "update event" option
        Then the event is modifided successfully 

    Scenario: modify unexisted event 
        Given the user navicates to event page
        And want to modify an event
        When the user choose the row dosent exist to update it
        Then display message "update unexisted event"

    Scenario: modify existed event with invalid data
        Given the user navicates to event page
        And want to modify an event
        When the user choose the row to update it
        And the user updates what he needs to update with invalid input
        And clicks on "update event" option
        Then the event dose not modify 
        And display message "invalid data input"

    Scenario: invalid input
        Given the user loged into venue page
        And the user was an admin
        When the user enters invalid data
        Then operation failed
        And display massege "invalid input"

    Scenario: return to Start Page
        Given user is in the Event Management page
        When the user clicks on the "return" option
        Then redirect him to user main page
        