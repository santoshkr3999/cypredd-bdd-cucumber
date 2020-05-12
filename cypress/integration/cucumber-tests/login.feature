Feature: Login to application

   As a valid user
   I want to log in to application

   # @focus
   Scenario: Valid login with parametrization
      Given I open login page
      And I wait for 2 seconds
      When I fill username with "username"
      And I fill password with "password"
      And I click on submit login
      Then I should see homepage

   # @focus
   Scenario: Valid login without parametrization
      Given I open login page
      When I submit login
      Then I should see homepage