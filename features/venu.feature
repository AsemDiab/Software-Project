Feature: place manegment

    Scenario: view all venue
        Given the user logged into venue page 
        When the user click on "view venue" button
        Then the system display all venue

    Scenario: booking a valid place
        Given the user loged into venue page
        And user search for venue attribute
        When the system display all venues 
        And choose vailable venue to book
        Then the venue booked 
        And display masseg "the venue is booked successfully" 

    Scenario: booking a invalid place
        Given the user loged into venue page
        And user search for venue attribute
        When the system display all venues 
        And choose unvailable venue to book
        Then display a masseged to warn him 
        And cancel operation

    Scenario: add new place
        Given the user loged into venue page
        And the user was an admin
        When the user clicked on add button
        And admin fill all venue attribute (capacity,price,amenity)
        Then the venue added to venue list

    Scenario: add exist place
        Given the user loged into venue page
        And the user was an admin
        When the user clicked on add button
        And admin fill all venue attribute (capacity,price,amenity)
        Then the venue dont added to venue list
        And display a massege "The venue already exist" 

    Scenario: deleting place
        Given the user loged into venue page
        And the user was an admin
        When the user clicked on delete button
        And select venue to delete
        Then the venue was deleted and remove from venue list

    Scenario: invalid input
        Given the user loged into venue page
        And the user was an admin
        When enter invalid data
        Then operation failed
        And display massege "invalid input"
 
 #didn't finish it yet