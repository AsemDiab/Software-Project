const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const StartP = require("../JS-Files/startP");
// const { start } = require("repl");
let start = new StartP();

Given("the user is in the startng page", function () {
  start.openPage();
});
When("the user enters option {int}", function (int) {
  console.log("the option is: "+int);
  start.setOption(String(int));
  start.run();
});

Then("transfere him to the registerion page with option", function () {
  start.goToReg();
  assert.equal(start.go_to_reg,1);
});

When("the user enters {int}", function (int) {
  console.log("the option is: "+int);
  start.setOption(String(int));
  start.run();
});

Then("transfere him to the login page with option {int}", function (int) {
  start.goToLogin();
  // assert.equal(Start.go_to_login,1);
  assert.equal(start.nextPage , 3);

});


Then("exit the program with option {int}", function (int) {
  start.goToExit();
  assert.equal(start._exit,1);
});

When('the user enters invalid integer {int}', function (int) {
  start.setOption(int);
  start.run();
});
When('the user enters invalid integer {string}', function (string) {
  start.setOption(string);
  start.run();
});

Then("display message to warn him", function () {
  assert.equal(start.is_open,1);
  console.log("invalid input");
});

Then("reture to the staring page", function () {
  start.run();
  start.reopenPage();
  assert.equal(start.is_open,true);
  assert.equal(start.nextPage , 0);

});