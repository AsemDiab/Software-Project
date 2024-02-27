const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const StartP = require("../JS-Files/startP");
var Start = new StartP();

Given("the user is in the startng page", function () {});

When("the user enters option", function () {
  Start.setOption(1);
  // userChoice = option;
});

Then("transfere him to the registeration page with option", function () {
  console.log(assert.equal(1, 1, "pizza is dump"));
  Start.run();
});

// Given("the user is in the startng page", function () {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });

// When("the user enters {int}", function (int) {
//   // When('the user enters {float}', function (float) {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });

// Then("transfere him to the login page with option {int}", function (int) {
//   // Then('transfere him to the login page with option {float}', function (float) {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });

// Given("the user is in the startng page", function () {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });

// When("the user enters {int}", function (int) {
//   // When('the user enters {float}', function (float) {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });

// Then("exit the program with option {int}", function (int) {
//   // Then('exit the program with option {float}', function (float) {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });

// Given("the user is in the startng page", function () {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });

// When("the user enters any invalid integer input", function () {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });

// Then("display message {string}", function (string) {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });

// Then("reture to the staring page", function () {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });
