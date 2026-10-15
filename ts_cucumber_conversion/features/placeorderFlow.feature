@checkout @regression @authenticated
Feature: End-to-End Order Placement Flow

  Scenario: Place an order successfully with products from Excel test data
    Given the user is on the dashboard page
    And the products container is visible
    When the user adds products to the cart from "test_data/checkoutData.xlsx"
    And the user navigates to the cart page
    Then the user should see the correct number of products in the cart
    And the user verifies all added products in the cart
    When the user proceeds to checkout
    Then the checkout page should be loaded with personal and shipping information
    When the user fills payment and shipping details using "test_data/checkoutFormData.json"
    And the user places the order
    Then the order confirmation message should be displayed
