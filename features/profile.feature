Feature: Profile page

    Scenario: open my account page
        Given the user in Profile page
        When select "my account" option
        Then send the user to my account page

    Scenario: open notification 
        Given the user in Profile page
        When select "notification " option
        Then the system will display all notification for the user  

    # Scenario: Booking Confirmation
    #     Given the user in Profile page
    #     When click on "Booking Confirmation" button
    #     Then the system will display all booking Confirmation for user    

    # Scenario: Open Billing Ditails
    #     Given the user in Profile page
    #     When he click on "Billing Ditails" button
    #     Then the system will display all Billing ditails of budget
        
    Scenario: show Reservation 
        Given the user in Profile page
        When select "Reservation " option
        Then the system will display all Reservation for all event

    Scenario: return
        Given the user in Profile page
        When select "return " option
        Then redirect him to user home page

    Scenario: User Logout
        Given the user in Profile page
        When select "Logout " option
        Then send the user to Starting page 

    Scenario Outline: Invalid input
        Given the user in Profile page
        When the user enters invalid integer in Profile Page <input>
        Then display a message "invalid input enterd, plase inter again" 
        And return him to profile page
        Examples:
            | input |
            | 13    |
            | 'f'   |
            | -13   |

        