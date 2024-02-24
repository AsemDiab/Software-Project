Feature: reset Password

    Scenario: User submits a valid email
        Given the user in the "Reset Password" page
        When the user enter a valid email
        And click on submit button
        Then send code to the user's email

    Scenario: User submits a invalid email
        Given the user in the "Reset Password" page
        When the user enter a invalid email
        And click on submit button
        Then display error message "invalid email address"

    Scenario: Enter verification code
        Given the user in the "Reset Password" page
        And received a password reset email
        When the user enter the right verification code
        And clicks on the "reset password" link
        Then the system make the user write the new Password 

    Scenario: Enter wrong verification code
        Given the user in the "Reset Password" page
        And received a password reset email
        When the user enter the wrong verification code
        And clicks on the "reset password" link
        Then display message "wrong verification code"

    Scenario: Enter new password 
        Given the user in the "Reset Password" page
        When the user enter new password
        And clicks on the "reset password" button
        Then save the new password 
        And redirect him to login page

    Scenario: Enter weak new password 
        Given the user in the "Reset Password" page
        When the user enter weak password
        And clicks on the "reset password" button
        Then display message "password is too weak please enter another password"


    Scenario: exit 
        Given user is in the "Reset Password" page
        When the user click on exit button
        Then redirect him to login page
