Feature: Login page

    Scenario: admin successful login
        Given the admin is on the login page
        When the admin enters valid data (email and password)
        # And clicks on submit option
        Then redirect him to admin home page

    # Scenario: user successful login
    #     Given the user is on the login page
    #     When the user enters valid data (email and password)
    #     And clicks on submit option
    #     Then redirect him to user home page

    # Scenario: incorrect email or password
    #     Given the user is on the login page
    #     When the user enters incorrect email or password
    #     And clicks on submit option
    #     Then the user should see an error message indicating that the login failed
    #     And the user should remain on the login page

    # Scenario: invalid data input
    #     Given the user is on the login page
    #     When the user enters invalid data
    #     And clicks on submit option
    #     Then the user should see an error message indicating that the login failed
    #     And the user should remain on the login page

    # Scenario: go to registerion page
    #     Given the user is on the login page
    #     When click on registerion page option
    #     Then send the user to registerion page

    # Scenario: return to Start Page
    #     Given user is in the login page
    #     When the user clicks on the return option
    #     Then redirect him to Start Page

    # Scenario: Invalid input
    #     Given the user is in the Login page
    #     When the user enters any invalid input
    #     Then display message to warn user
    #     And the user should remain on the login page