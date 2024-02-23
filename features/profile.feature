Feature: Profile page

    Scenario: Open Billing Ditails
        Given the user in Profile page
        When he click on "Billing Ditails" button
        Then the system display all ditails of budget
        
    Scenario: open Reservation page
        Given the user in Profile page
        When he click on "Reservation" button
        Then the system display all Reservation for all event

    Scenario: Booking Confirmation

    Scenario: Open Account detail
        Given the user in Profile page
        When he click on "Account" button 
        Then open my Account page

    Scenario: exit 
        Given user is in the "Reset Password" page
        When the user click on exit button
        Then redirect him to login page

    Scenario: User Logout
        Given the user logged into system
        When clicked on Logout button
        Then send the user to login page 