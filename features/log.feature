Feature: Login

    Scenario: Admin successful login
        Given the admin is on the login page
            When the admin enters valid credentials (username and password)
                And clicks on the login button
            Then send the admin to home page
                And should see a welcome message or personalized content
                
    Scenario: service-provider successful login
        Given the service-provider is on the login page
            When the service-provider enters valid credentials (username and password)
                And clicks on the login button
            Then send the service-provider to home page
                And should see a welcome message or personalized content

    Scenario: user successful login
        Given the user is on the login page
            When the user enters valid credentials (username and password)
                And clicks on the login button
            Then send the user to home page
                And should see a welcome message or personalized content
                
    Scenario: failed login
        Given the user is on the login page
            When the user enters invalid credentials (incorrect username or password)
                And clicks on the login button
            Then the user should see an error message indicating that the login failed
                And the user should remain on the login page

    Scenario: Reset password
        Given the user is on the login page
        When click on "Reset password" button
        Then send the user to Reset password page
        And sent an email 

    Scenario: exit 
        Given user is in the login page
        When the user click on exit button
        Then end the system             