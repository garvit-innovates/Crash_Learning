@login
Feature: Login Functionality

  Background:
    Given the user navigates to the login page

  @smoke @valid_login
  Scenario: Successful login with valid credentials
    When the user logs in with email "garvitchugh66@gmail.com" and password "Test@1234"
    Then the user should see toast message "Login Successfully"
    And the user should be redirected to the dashboard

  @regression @invalid_login
  Scenario Outline: Unsuccessful login with invalid credentials (<testName>)
    When the user logs in with email "<email>" and password "<password>"
    Then the user should see toast message "Incorrect email or password."

    Examples:
      | testName         | email                   | password         |
      | Invalid Email    | invalid@example.com     | Test@1234        |
      | Invalid Password | garvitchugh66@gmail.com | WrongPassword123 |
      | Invalid login    | garvit@gmail.com        | WrongPassword123 |
