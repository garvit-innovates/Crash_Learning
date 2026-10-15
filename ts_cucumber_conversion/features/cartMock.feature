@cartmock @authenticated
Feature: Cart Mocking

  Scenario: Verify empty cart using API mocking
    Given the user is on the dashboard page
    And the user verifies "Automation Practice" header is visible
    When the user adds product "ADIDAS ORIGINAL" to the cart
    And the user mocks all cart APIs to return empty cart
    And the user opens the cart
    Then the empty cart message "No Products in Your Cart !" should be displayed
