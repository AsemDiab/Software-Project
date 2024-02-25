Feature: User home page

    Scenario: going to event management page
        Given the User logged into User page 
        When User click on "Event Management" button 
        Then send User to Event Management page

    # Scenario: going to calender page
    #     Given the User logged into User page 
    #     When User click on calendar button
    #     Then send User to Calendar and Scheduling page

    Scenario: open profile page
        Given the User logged into User page 
        When User click on "Profile page" button 
        Then send User to Profile page

    # Scenario: invalid input
    #     Given the user loged into venue page
    #     And the user was an User
    #     When enter invalid data
    #     Then operation failed
    #     And display massege "invalid input"

    Scenario: exit 
        Given user is in the registerion page
        When the user click on exit button
        Then redirect him to login page
