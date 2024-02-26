Feature: Calendar and Scheduling

    Scenario: displaying upcoming events and important dates.
        Given user logged into the calendar and scheduling page
        When click the "calendar view" button
        Then display all events and important dates

    Scenario: Scheduling Tools
        Given I am logged into the system,
        When I need to coordinate tasks, deadlines, and appointments related to event planning,
        Then I should have access to scheduling tools.
        And I should be able to create new tasks, assign them to team members, and set due dates.
        And I should be able to view tasks in a list or calendar format.

    Scenario: Reminders and Notifications
        Given I am logged into the system,
        When there are upcoming events, deadlines, or tasks,
        Then I should receive reminders and notifications.
        And I should be notified about upcoming events, deadlines, and tasks via email or in-app notifications.
        And I should be able to customize the timing and frequency of reminders.
        


