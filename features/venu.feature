Feature: place manegment

    Scenario: booking a valid place
        Given the user loged into venue page
        When the user search for venue attribute
        Then the system display all venues 
        And user can see all venue (available/unvalable)
        And choose available venue to book

    Scenario: booking a invalid place
        Given the user loged into venue page
        When the user search for venue attribute
        Then the system display all venues 
        And user can see all venue (available/unvalable)
        And choose unvailable venue to book
        And display a masseged to warn him 

    Scenario: add new place
        Given the user loged into venue page
        And the user was an admin
        When the user clicked on add button
        Then admin fill all venue attribute (capacity,price,amenity)
        And the venue added to venue list

    Scenario: add exist place
        Given the user loged into venue page
        And the user was an admin
        When the user clicked on add button
        Then admin fill all venue attribute (capacity,price,amenity)
        And the venue dont added to venue list
        And display a massege to warn the admin

    Scenario: deleting exist place
        Given the user loged into venue page
        And the user was an admin
        When the user clicked on delete button
        Then admin select venue to delete
        And the venue was deleted and remove from venue list

    Scenario: invalid input
        Given the user loged into venue page
        And the user was an admin
        When the user clicked on delete button
        Then admin select venue to delete
        And the venue well not delete
        And display massege to warn the admin


    Scenario: the new place valable
    Scenario: the new place unvalable
