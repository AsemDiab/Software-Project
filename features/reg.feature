Feature: Register page

   Scenario: valid registerion
       Given the user is in the registerion page
       When the user fills all attribute ( name , email ,password,..ect) with valid inputs
       And clicks on submit option
       Then redirect him to login page

   Scenario Outline: invalid input registerion
       Given the user is in the registerion page
       When the user enter at least invalid inputs <email> <username> <password>
       And clicks on submit option
       Then the system should display a message to warn him
       And user should remain on the registerion page
       Examples:

           | email                    | username | password      |
           | 'asemhesham55gmail.com'  | 'asem'   | 'Saitama@123' |
           | 'asemhesham55@gmailcom'  | 'asem'   | 'Saitama@123' |
           | 'asemhesham55gmailcom'   | 'asem'   | 'Saitama@123' |
           | 'asemhesham55@gmail.com' | 'as'     | 'Saitama@123' |
           | 'asemhesham55gmail.com'  | 'as'     | 'Saitama@123' |
           | 'asemhesham55@gmailcom'  | 'as'     | 'Saitama@123' |
           | 'asemhesham55gmailcom'   | 'as'     | 'Saitama@123' |
           | 'asemhesham55@gmail.com' | 'asem'   | 'ben@123'     |
           | 'asemhesham55gmail.com'  | 'asem'   | 'Be@0'        |
           | 'asemhesham55@gmailcom'  | 'asem'   | 'saitama@123' |
           | 'asemhesham55gmailcom'   | 'asem'   | 'saitama123'  |
           | ''                       | 'asem'   | 'Ben@10'      |
           | 'asemhesham55gmail.com'  | ''       | 'Ben@10'      |
           | ''                       | ''       | 'Ben@10'      |
           | 'asemhesham55gmailcom'   | 'asem'   | ''            |
           | ''                       | 'asem'   | ''            |
           | 'asemhesham55gmail.com'  | ''       | ''            |
           | ''                       | ''       | ''            |
          


    Scenario: email already taken
        Given the user is in the registerion page
        When the user enter an email that is already taken
        And clicks on submit option
        Then the system should display a message to warn him
        And user should remain on the registerion page

    Scenario: weak password
        Given user is in the registerion page
        When user enters a valid email
        And user enters a weak password
        Then the system should display a message to warn him
        And user should remain on the registerion page

    Scenario: go to login page
        Given the user is on the registerion page
        When clicks on login page button
        Then send the user to login page

    Scenario: return to Start Page
        Given user is in the registerion page
        When the user clicks on the return option
        Then redirect him to Start Page

#     Scenario Outline: invalid input
#         Given the user is in the Register page
#         When the user enters any invalid input
#         Then the system should display a message to warn him
#         And reture to the Register page
#
#         Examples:
#             | arr   |
#             | 'idk' |