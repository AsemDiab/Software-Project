const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const StartP = require("../JS-Files/startP");
var Start = new StartP();

Given("the user is in the startng page", function () {
  Start.openPage();
});

<<<<<<< HEAD
// When("the user enters option {int}", function (int) {
//   console.log("the option is: "+int);
//   Start.setOption(String(int));
//   Start.run();
// });

// Then("transfere him to the registerion page with option", function () {
//   assert.equal(Start.go_to_reg,1);
// });

// When("the user enters {int}", function (int) {
//   console.log("the option is: "+int);
//   Start.setOption(String(int));
//   Start.run();
// });

// Then("transfere him to the login page with option {int}", function (int) {
//   assert.equal(Start.go_to_login,1);
// });

// When("the user enters {int}", function (int) {
//   console.log("the option is: "+int);
//   Start.setOption(String(int));
//   Start.run();
// });

// Then("exit the program with option {int}", function (int) {
//   assert.equal(Start._exit,1); 
// });

When("the user enters any invalid integer input", function (int) {
  console.log("the option is: "+int);
  Start.setOption(String(int));
  Start.run();
});

Then("display message to warn him", function (int) {
  assert.notEqual(Start._exit,1);
  // console.log("invalid input");
});

Then("reture to the staring page", function () {
=======
When("the user enters option {int}", function (op) {
  console.log("the option is: ");
  Start.setOption('1');
>>>>>>> b93827cce3ea73300b8e86106c48a19a19cd4bea
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
