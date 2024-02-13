Feature: User verify the Active Report

    Background: Successfully log into webgains app
        Given the user launch the webgains application
        When the user provide valid email Id and password
        And the user click on the login button
        Then the user should land on the webgains dashboard page
        And the user should see all the required information


        Scenario: Verify user able to view Active Report with specific date range
            Given the user on the webgains dashboard page
            And the user select the Reports navigation menu
            And the user click on the Active Report sub-navigation menu
            And the user should be redirected to the Active Report page
            When the user set the expected date range to view the active report
            And the user click on main filter apply button
            Then the user should see the active report for the specified date range
            And the user should see the price and commission as expected
        