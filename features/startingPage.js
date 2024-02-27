const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const StartP = require("../JS-Files/startP");
var Start = new StartP();

Given("the user is in the startng page", function () {
  Start.openPage();
});

When("the user enters option {int}", function (op) {
  console.log("the option is: ");
  Start.setOption('1');
  Start.run();
});

Then("transfere him to the registerion page with option", function () {
  assert.equal(Start.go_to_reg,1);
});


When("the user enters {int}", function (int) {
  console.log("the option is: "+int);
  Start.setOption(int);
  Start.run();
});

Then("transfere him to the login page with option {int}", function (int) {
  assert.equal(Start.go_to_login,1);
});

// When("the user enters {int}", function (int) {
//   console.log("the option is: "+int);
//   Start.setOption(int);
//   Start.run();
// });

Then("exit the program with option {int}", function (int) {
  assert.equal(Start._exit,1);
});

When('the user enters invalid integer {int}', function (int) {
  // When('the user enters invalid integer {float}', function (float) {
  // Write code here that turns the phrase above into concrete actions
  console.log("the option is: "+int);
  Start.setOption(int);
  Start.run();
  // return 'pending';
});


Then("display message to warn him", function () {
  assert.equal(Start.is_open,1)
  console.log("invalid input");
});

Then("reture to the staring page", function () {
  Start.run();

});
//
