const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const RegP = require("../JS-Files/regP");
var registerion = new RegP();


Given("the user is in the registerion page", function () {
  registerion.openPage();
});

When("the user fills all attribute \\( name , email ,password,..ect) with valid inputs",function () {
  registerion.readTheData();
});

When("clicks on submit option", function () {
  registerion.submitManu();
});

Then("redirect him to login page", function () {
  registerion.goToLoginPage();
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
When("the user enter one or more invalid inputs", function () {
  registerion.readTheData();
});

When("clicks on submit option", function () {
  registerion.validity();
  // registerion.submitManu();
});

Then("the system should display a message to warn him", function () {
  console.log("invalid data input. plaese try to fill data");
});

Then("user should remain on the registerion page", function () {
  registerion.openPage();
});

// Given("the user is in the registerion page", function () {
  
// });

// When("the user enter an email that is already taken", function () {
  
// });

// When("clicks on submit option", function () {
  
// });

// Then("the system should display a message to warn him", function () {
  
// });

// Then("user should remain on the registerion page", function () {
  
// });

// Given("user is in the registerion page", function () {
  
// });

// When("user enters a valid email", function () {
  
// });

// When("user enters a weak password", function () {
  
// });

// Then("the system should display a message to warn him", function () {
  
// });

// Then("user should remain on the registerion page", function () {
  
// });

// Given("the user is on the registerion page", function () {
  
// });

// When("clicks on login page button", function () {
  
// });

// Then("send the user to login page", function () {
  
// });

// Given("user is in the registerion page", function () {
  
// });

// When("the user clicks on the return option", function () {
  
// });

// Then("redirect him to Start Page", function () {
  
// });

// Given("the user is in the Register page", function () {
  
// });

// When("the user enters any invalid input", function () {
  
// });

// Then("the system should display a message to warn him", function () {
  
// });

// Then("reture to the Register page", function () {
  
// });
