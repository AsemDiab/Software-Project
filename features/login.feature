Feature: Login page

    Scenario: admin successful login
        Given the admin is on the login page
        When the admin enters valid data (email and password)
        And clicks on the login button
        Then redirect him to admin home page
        And a welcome message will be displayed

    Scenario: user successful login
        Given the user is on the login page
        When the user enters valid data (email and password)
        And clicks on the login button
        Then redirect him to user home page
        And a welcome message will be displayed

    Scenario: incorrect email or password
        Given the user is on the login page
        When the user enters incorrect email or password
        And clicks on the login button
        Then the user should see an error message indicating that the login failed
        And the user should remain on the login page

    Scenario: invalid data input
        Given the user is on the login page
        When the user enters invalid data
        And clicks on the login button
        Then the user should see an error message indicating that the login failed
        And the user should remain on the login page

    Scenario: forget password
        Given the user is on the login page
        When click on "forget password" button
        Then send the user to "Reset password" page
        And send an email

    Scenario: go to registerion page
        Given the user is on the login page
        When click on "registerion page" button
        Then send the user to "registerion" page

    Scenario: exit
        Given user is in the login page
        When the user click on "exit" button
        Then end the system

    Scenario: Invalid input
        Given the user is in the Login page
        When the user enters any invalid integer input
        Then display message "invalid input"
        And reture to the Login page