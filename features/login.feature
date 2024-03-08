Feature: Login page

    Scenario Outline: user or admin successful login
        Given the user is on the login page
        When the user enters valid data <email> and <password>
        And clicks on submit option
        Then redirect him to user or admin home page

        Examples:
            | email                    | password      |
            | 'sayed@hotmail.com'      | 123456        |
            | 'asemhesham55@gmail.com' | 'Saitama@123' |

    Scenario Outline: incorrect email or password
        Given the user is on the login page
        When the user enters incorrect <email> and/or <password>
        And clicks on submit option
        Then display an message "Wronge Email or Password Data Input"
        And refresh login page
        Examples:
            | email                    | password      | message                   |
            | 'asemhesham55gmail.com'  | 'Saitama@123' | 'this email is invalid'   |
            | 'asemhesham55@gmailcom'  | 'Saitama@123' | 'this email is invalid'   |
            | 'asemhesham55gmailcom'   | 'Saitama@123' | 'this email is invalid'   |
            | 'asemhesham55@gmail.com' | 'Saitama@123' | 'invalid username'        |
            | 'asemhesham55gmail.com'  | 'Saitama@123' | 'this email is invalid'   |
            | 'asemhesham55@gmailcom'  | 'Saitama@123' | 'this email is invalid'   |
            | 'asemhesham55gmailcom'   | 'Saitama@123' | 'this email is invalid'   |
            | 'asemhesham55@gmail.com' | 'ben@123'     | 'the password is invalid' |
            | 'asemhesham55gmail.com'  | 'Be@0'        | 'this email is invalid'   |
            | 'asemhesham55@gmailcom'  | 'saitama@123' | 'this email is invalid'   |
            | 'asemhesham55gmailcom'   | 'saitama123'  | 'this email is invalid'   |
            | ''                       | 'Ben@10'      | 'this email is invalid'   |
            | 'asemhesham55@gmail.com' | 'Ben@10'      | 'invalid username'        |
            | ''                       | 'Ben@10'      | 'this email is invalid'   |
            | 'asemhesham55@gmail.com' | ''            | "the password is invalid" |
            | ''                       | ''            | 'this email is invalid'   |
            | 'asemhesham55@gmail.com' | ''            | 'invalid username'        |
            | ''                       | ''            | 'this email is invalid'   |


    Scenario: invalid data input
        Given the user is on the login page
        When the user enters invalid data
        And clicks on submit option
        Then display an message "Invalid Data Input"
        And refresh login page

    Scenario: register a new account
        Given the user is on the login page
        When click on registerion page option
        Then send the user to registerion page

    Scenario: Invalid input
        Given the user is on the login page
        When the user enters any invalid integer
        Then display message "Invalid Option"
        And refresh login page