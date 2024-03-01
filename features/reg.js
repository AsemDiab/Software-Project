const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const RegP = require("../JS-Files/regP");
var registerion = new RegP();


Given("the user is in the registerion page", function () {
  registerion.openPage();
});



When('the user fills all attribute \\( name , email ,password,..ect) with valid inputs', function () {
  registerion.setName('asem')
  registerion.setEmail('semhesham@gmail.com')
  registerion.setPassword('Asem@2003')
});


When("clicks on submit option", function () {
  registerion.clicks('submit')
});

Then("redirect him to login page", function () {
  registerion.goToLoginPage();
});

// When("the user enter one or more invalid inputs", function () {
//   registerion.fillData('asem','asemhesham@gmail.com','Asem@2003');
//
// });
When('the user enter at least invalid inputs {string} {string} {string}', function (string, string2, string3) {
  // registerion.fillData(string,string2,string3);
  registerion.setEmail(string)
  registerion.setName(string2)
  registerion.setPassword(string3)
});



Then("the system should display a message to warn him", function () {
  assert.equal(true,registerion.warmUser,'the user is sad due to you don\'t warn him',registerion.cache)
});

Then("user should remain on the registerion page", function () {
  registerion.openPage();
});


When("the user enter an email that is already taken", function () {
  registerion.fillData('asem','asemhesham@gmail.com','Asem@2003');

});


Given("user is in the registerion page", function (){
  registerion.openPage()
});
When("user enters a valid email", function () {

registerion.setEmail('ahmad@gmail.com')
  registerion.setName('ahmad yassen')
});

When("user enters a weak password", function () {
  registerion.setPassword('123456789')
});


Given("the user is on the registerion page", function () {
  registerion.openPage();
});

When("clicks on login page button", function () {
      registerion.clicks('go to login page')
});

Then("send the user to login page", function () {
  assert.equal(registerion.goToLogin,1,"you aren't in login page")
});



When("the user clicks on the return option", function () {

});

Then("redirect him to Start Page", function () {

});

Given("the user is in the Register page", function () {

});

When("the user enters any invalid input", function () {

});

// Then("the system should display a message to warn him", function () {
//
// });

Then("reture to the Register page", function () {

});
