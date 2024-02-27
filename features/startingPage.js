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
=======
When("the user enters option {int}", function (int) {
>>>>>>> 75932337f41a20a41575b0647468edf22586245d
  console.log("the option is: "+int);
  Start.setOption(String(int));
  Start.run();
});

<<<<<<< HEAD
Then("display message to warn him", function (int) {
  assert.notEqual(Start._exit,1);
  // console.log("invalid input");
});

Then("reture to the staring page", function () {
  Start.run();
});

=======
>>>>>>> 75932337f41a20a41575b0647468edf22586245d
Then("transfere him to the registerion page with option", function () {
  assert.equal(Start.go_to_reg,1);
});

When("the user enters {int}", function (int) {
  console.log("the option is: "+int);
<<<<<<< HEAD
  Start.setOption(string(int));
=======
  Start.setOption(String(int));
>>>>>>> 75932337f41a20a41575b0647468edf22586245d
  Start.run();
});

Then("transfere him to the login page with option {int}", function (int) {
  assert.equal(Start.go_to_login,1);
});


Then("exit the program with option {int}", function (int) {
  assert.equal(Start._exit,1);
});

When('the user enters invalid integer {int}', function (int) {
  Start.setOption(int);
  Start.run();
});
When('the user enters invalid integer {string}', function (string) {
  Start.setOption(string);
  Start.run();});


Then("display message to warn him", function () {
  assert.equal(Start.is_open,1)
  console.log("invalid input");
});

Then("reture to the staring page", function () {
  Start.run();
<<<<<<< HEAD
});
=======
  Start.reopenPage()
  assert.equal(Start.is_open,true)
});

>>>>>>> 75932337f41a20a41575b0647468edf22586245d
