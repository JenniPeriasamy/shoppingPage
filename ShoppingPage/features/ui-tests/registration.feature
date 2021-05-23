Feature: Customer Registration

    Scenario Outline: As a user, I can land in a home page of the given shopping website

        Given User is on the createAccount page
        When User clicks on the link Signin
        Then User enters data in the registrationform
        And User selects state from the dropdown and register
        Then User should see the expected text <fullname>

        Examples:
            | fullname    |
            | James Brown |

