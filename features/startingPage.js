const {Given, When, Then} = require('@cucumber/cucumber');

let userChoice;

Given("the user is in the startng page", function () {
  console.log("Enter in integer");
  console.log("1- register");
  console.log("2- login");
  console.log("3- exit");
  // return "pending";
});

When("the user enters {int}", function (option) {
  userChoice = 1;
  // return "pending";
});

Then("transfere him to the registerion page with option {int}", function (option) {
  switch (userChoice) {
    case 1:
      console.log("User chose option 1. Performing actions for option 1...");
      // Add code for option 1
      break;
    case 2:
      console.log("User chose option 2. Performing actions for option 2...");
      // Add code for option 2
      break;
    case 3:
      console.log("User chose option 3. Performing actions for option 3...");
      // Add code for option 3
      break;
    default:
      console.log("Invalid option. Please choose 1, 2, or 3.");
      // Handle invalid option
  }
  // return "pending";
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
