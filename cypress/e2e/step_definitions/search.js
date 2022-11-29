import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import pageSearch from "../pages/page_search"

Given("User visit amazone site", () => {
    pageSearch.visitAmazonSite();
});

When("User click search bar", () => {
    pageSearch.clickSearchBar();
});

When("User input {}", (string) => {
    pageSearch.inputSearchBar(string);
});

When("User click icon search", () => {
    pageSearch.clickSearchSubmit();
});

Then("User can see results for computer", () => {
    pageSearch.resultsSearch();
});

Then("User can see department Computers & Tablets", () => {
    pageSearch.resultsDepartmentSearch();
});

When("User checkbox brand for Dell", () => {
    pageSearch.clickBrandsDell();
});

Then("User can see results Dell Latitude 3180", () => {
    pageSearch.resultTitleContainsDell();
});