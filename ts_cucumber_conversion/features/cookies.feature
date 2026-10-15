@cookie
Feature: Authentication Storage State / Cookies

  Scenario: Valid login and saving storage state
    Given the user navigates to the login page
    When the user logs in with email "garvitchugh66@gmail.com" and password "Test@1234"
    Then the user should see toast message "Login Successfully"
    And the authentication state should be saved to "auth.json"
