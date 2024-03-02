Feature: Event Creation and Management

    Scenario Outline: Add new event 
        Given the user navicates to event page
        When the user enter option 1
        And fill all attributes data (id,name,date,venue-ID)
        Then display message "event added successfully"
        And reture user to Event management page

    Scenario: add existed event
        Given the user navicates to event page
        When the user enter option 1
        And fill all attributes data (id,name,date,venue-ID)
        Then display message "error: event already exist"
        And reture user to Event management page

    Scenario: add new event with invalid input 
        Given the user navicates to event page
        When the user enter option 1
        And fill all attributes data (id,name,date,venue-ID)
        Then display message "error: invalid input"
        And reture user to Event management page

    
    Scenario: delete event 
        Given the user navicates to event page
        When the user enter option 2
        And select a row with its id to delete
        Then display message "event deleted successfully"
        And reture user to Event management page

    Scenario: delete unexisted event 
        Given the user navicates to event page
        When the user enter option 2
        And select a row with its id to delete
        Then display massege "error: that ID does not exist"
        And reture user to Event management page

    Scenario: modify event 
        Given the user navicates to event page
        When the user enter option 3
        And select a row with its id to update it
        And refill the data he need to update ( ID, Name, date, venue-ID)
        Then display message "event updated successfully"
        And reture user to Event management page

    Scenario: modify unexisted event 
        Given the user navicates to event page
        When the user enter option 3 
        And select a row with its id to update it
        And refill the data he need to update ( ID, Name, date, venue-ID)
        Then display message "error: updated unexisted event"
        And reture user to Event management page

    Scenario: modify event with invalid input
        Given the user navicates to event page
        When the user enter option 3
        And select a row with its id to update it
        And refill the data he need to update ( ID, Name, date, venue-ID)
        Then display message "error: update event with invalid input"
        And reture user to Event management page

    Scenario Outline: Invalid input
        Given the user navicates to event page
        When user enters invalid integer <input>
        Then display message "error: invalid input"
        And reture user to Event management page
        Examples:
            | input |
            | 8     |
            | 'c'   |
            | -8    |

    Scenario: return to user Page
        Given the user navicates to event page
        When the user enter option 4
        Then redirect him to user main page
        