Feature: AddToCart

    Scenario Outline: As a user, I can singIn, add items to cart and Checkout
        Given User is on the createAccount page
        When User logins the shopping website
        Then User adds items to the shoppingCart
        And User should see the <selectedItem> in checkOut page
        Then User should see the <itemPrice> in price section
        And User should see the <itemQuantity> in quantity section

        Examples:
            | selectedItem          | itemPrice | itemQuantity |
            | Printed Chiffon Dress | $16.40    | 1            |



