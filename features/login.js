const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const LoginP = require("../JS-Files/loginP");
var login = new LoginP();

Given("the user is on the login page", function () {
  // Write code here that turns the phrase above into concrete actions
});

When("the user enters valid data {string} and {int}", function (string, int) {
  // When('the user enters valid data {string} and {float}', function (string, float) {
  // Write code here that turns the phrase above into concrete actions
});

When(
  "the user enters valid data {string} and {string}",
  function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
  }
);

When(
  "the user enters invalid data {string} and {string}",
  function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
  }
);

Then("display an message {string}", function (string) {
  // Write code here that turns the phrase above into concrete actions
});

Then("refresh login page", function () {
  // Write code here that turns the phrase above into concrete actions
});

When("the user enters invalid data", function () {
  // Write code here that turns the phrase above into concrete actions
});

When("click on registerion page option", function () {
  // Write code here that turns the phrase above into concrete actions
});

Then("send the user to registerion page", function () {
  // Write code here that turns the phrase above into concrete actions
});

When("the user enters any invalid integer", function () {
  // Write code here that turns the phrase above into concrete actions
});

Then("display message {string}", function (string) {
  // Write code here that turns the phrase above into concrete actions
});
