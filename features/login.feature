Feature: Login action

    As a user
    I want to login into aplication

    Scenario: Login with valid credentials
        Given I visit a login page
        When I fill the login form with valid credentials
        Then I should see the home page

    Scenario: Try to login with invalid credentials
        Given I visit a login page
        When I fill the login form with '<username>' and '<password>'
        Then I see the login error

        Examples:
            | username | password |
            | invalidname1 | invalidpassword1 |
            | invalidname2 | invalidpassword2 |
            | invalidname3 | invalidpassword3 |