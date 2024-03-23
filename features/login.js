const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const LoginP = require("../JS-Files/loginP");
const { cpSync } = require("fs");
let login = new LoginP();

Given("the user is on the login page", function () {
  login.openPage();
});

When("the user enters valid data {string} and {int}", function (string, int) {
  login.setEmail(string);
  login.setPassword(int);
});
When(
  "the user enters valid data {string} and {string}",
  function (string, string2) {
    login.setEmail(string);
    login.setPassword(string2);
  }
);

When(
  "the user enters incorrect {string} or {string}",
  function (string, string2) {
    login.setEmail(string);
    login.setPassword(string2);
  }
);  

Then("redirect him to user or admin home page", function () {
  login.clicks("Enter Your Email And Password");
});

Then("display an message {string}", function (string) {
  console.log("unfinished");
});

Then("refresh login page", function () {
  login.goToLoginPage();
});

When("the user enters invalid data", function () {
  console.log("unfinished");
});

Then("back to starting page", function () {  console.log('on progress');});

Then("send the user to registerion page", function () {
  login.clicks("Go To Registerion Page");
});
When("user select {string} options in login page", function (string) {  console.log('on progress');});
When("the user enters invalid integer in login Page {int}", function (int) {  console.log('on progress');});
Then("return him to login page", function () {  console.log('on progress');});
When(
  "the user enters invalid integer in login Page {string}",
  function (string) {  console.log('on progress');}
);

When("the user enters any invalid integer", function () {
  console.log("incalid input");
});
When('the user enters incorrect {string} and\\/or {string}', function (string, string2) {
  console.log('on progress');
});
 
Then("display message {string}", function (string) {
  console.log(string);
});
