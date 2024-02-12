Feature: User verify the Login page
  @dev
  Scenario: Successfully log into webgains app with valid credentials
      Given the user launch the webgains application
      When the user provide valid email Id and password
      And the user click on the login button
      Then the user should land on the webgains dashboard page
      And the user should see all the required information
