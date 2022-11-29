Feature: Cart

    Scenario: Add To Cart Selected Items
        When User select qty 10
        And User click Add To Cart button
        Then Items successfully added to cart

    Scenario: Delete Selected Items From Cart
        When User click Go To Cart
        And User click Delete button
        Then Items successfully deleted from cart
        