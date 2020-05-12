Feature: Send feedback

   As a customer
   I want to send feedback via form


   Scenario: Submit feedback form
      Given I open feedback page
      When I fill feedback form
      And I click on submit button
      Then I see the feedback submitted
      