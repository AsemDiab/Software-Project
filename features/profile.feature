Feature: Profile page

    Scenario: open my account page
        Given the user in Profile page
        When he click on "my account" button
        Then send the user to my account page

    Scenario: open notification 
        Given the user in Profile page
        When he click on "notification" button
        Then the system will display all notification for the user  

    Scenario: Booking Confirmation
        Given the user in Profile page
        When click on "Confirmation" button
        Then the system will display all booking Confirmation for user    

    Scenario: Open Billing Ditails
        Given the user in Profile page
        When he click on "Billing Ditails" button
        Then the system will display all Billing ditails of budget
        
    Scenario: open Reservation page
        Given the user in Profile page
        When he click on "Reservation" button
        Then the system will display all Reservation for all event

    Scenario: back step
        Given user is in the profile page
        When the user click on exit button
        Then redirect him to user home page

    Scenario: User Logout
        Given the user logged into system
        When clicked on Logout button
        Then send the user to login page 