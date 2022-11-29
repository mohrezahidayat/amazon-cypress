import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import pageCart from "../pages/page_cart"

When("User select qty 10", () => {
    pageCart.selectQty10();
});

When("User click Add To Cart button", () => {
    pageCart.clickAddToCart();
});

Then("Items successfully added to cart", () => {
    pageCart.itemsAddedToCart();
});

Given("Items successfully added to cart", () => {
    pageCart.itemsAddedToCart();
});

When("User click Go To Cart", () => {
    pageCart.clickGoToCart();
});

When("User click Delete button", () => {
    pageCart.clickDeleteItems();
});

Then("Items successfully deleted from cart", () => {
    pageCart.itemsDeletedFromCart();
})