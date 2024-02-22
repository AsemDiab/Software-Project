Feature: Calendar and Scheduling

    Scenario: Calendar View   
        Given user logged into the calendar and scheduling page
        And user was admin 
        When admin access the "calendar view" button
        Then display all events and important dates

    Scenario: Calender edit valid
        Given user logged into the calendar and scheduling page
        And user was admin 
        When admin access the edit button
        Then display all events and important dates
        And the admin enter new calendar info 
        And calendar was modifided 
        And set calendar on calendar view
    
    Scenario: Calender edit unvalid
        Given user logged into the calendar and scheduling page
        And user was admin 
        When admin access the edit button
        Then display all events and important dates
        And the admin inter new calendar info 
        And display a massege to warn user 
        And cancel operation


