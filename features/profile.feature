Feature: Profile page

    Scenario: open my account page
        Given the user in Profile page
        When he clicks on "my account" button
        Then send the user to my account page

    Scenario: open notification 
        Given the user in Profile page
        When he clicks on "notification" button
        Then the system will display all notification for the user  

    # Scenario: Booking Confirmation
    #     Given the user in Profile page
    #     When click on "Booking Confirmation" button
    #     Then the system will display all booking Confirmation for user    

    # Scenario: Open Billing Ditails
    #     Given the user in Profile page
    #     When he click on "Billing Ditails" button
    #     Then the system will display all Billing ditails of budget
        
    Scenario: open Reservation page
        Given the user in Profile page
        When he clicks on "Reservation" button
        Then the system will display all Reservation for all event

    Scenario: return
        Given the user in Profile page
        When he clicks on "return" button
        Then redirect him to user home page

    Scenario: User Logout
        Given the user in Profile page
        When he clicks on "Logout" button
        Then send the user to Starting page 

    Scenario: Invalid input
        Given the user in Profile page
        When the user enters any invalid integer input
        Then display message "invalid input"
        And warn him

        