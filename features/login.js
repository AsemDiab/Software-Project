const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const LoginP = require("../JS-Files/loginP");
var login = new LoginP();

Given("the user is on the login page", function () {
  login.openPage();
});

When("the user enters valid data {string} and {int}", function (string, int) {
  login.setEmail("sayed@gmail.com");
  login.setPassword("1234");
});

When(
  "the user enters valid data {string} and {string}",
  function (string, string2) {
    login.setEmail("sayed@gmail.com");
    login.setPassword("1234");
  }
);

//i'am not sure of this one
Then("redirect him to user or admin home page", function () {
  login.clicks("submit");
  // assert.equal(login.nextPage, 3);
});

When(
  "the user enters incorrect {string} and\\/or {string}",
  function (string, string2) {}
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
