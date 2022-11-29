Feature: Search Items

    Scenario: Search Computer
        Given User visit amazone site
        When User click search bar
        And User input computer
        And User click icon search
        Then User can see results for computer
        And User can see department Computers & Tablets

    Scenario: Select Result For Brand Dell Only
        When User checkbox brand for Dell
        Then User can see results Dell Latitude 3180