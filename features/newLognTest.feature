Feature: User Login
# Registered User should be able to login to access account details
Scenario: Login with valid credentials
Given User navigates to Login page
When User enters valid email address "amotooricap9@gmail.com" And Enters valid password "12345"
And Clicks on Login button
Then User should login successfully

Scenario: Login with invalid credentials
Given User navigates to Login page
When User enters invalid email address "amotooricap343434343@gmail.com" And Enters invalid password "1234567890"
And Clicks on Login button
Then User should get a proper warning message

Scenario: Login with valid email address and invalid password
Given User navigates to Login page
When User enters valid email address "amotooricap9@gmail.com" And Enters invalid password "1234567890"
And Clicks on Login button
Then User should get a proper warning message

Scenario: Login wiht invalid email address and valid password Given User navigates to Login page
When User enters invalid email address "amotooricap343434343@gmail.com" And Enters valid password "12345"
And Clicks on Login button
Then User should get a proper warning message

Scenario: Login without providing any credentials
Given User navigates to Login page
When User dont enter any credentials
And Clicks on Login button
Then User should get a proper warning message