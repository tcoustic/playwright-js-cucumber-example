Feature: Login

  Scenario: Login with valid credentials
    Given I am on the login page
    When I enter standard_user in the username field
    When I enter secret_sauce in the password field
    And I click the login button
    Then I should be on the main page
    And I should see the shopping cart icon
