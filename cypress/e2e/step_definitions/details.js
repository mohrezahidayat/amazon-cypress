import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import pageDetails from "../pages/page_details"

Given("Results has displayed", () => {
    pageDetails.resultSearchDisplayed();
});

When("User click title", () => {
    pageDetails.clickDetails();
});

Then("User redirected to details Dell Latitude 3180", () => {
    pageDetails.viewDetails();
});