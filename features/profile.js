const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const ProfileP = require("../JS-Files/profileP");
const DB = require("../JS-Files/ourDataBase");
var profie = new ProfileP();
DB.init();




Given("the user in Profile page", function () {});

When("select {string} option", function (string) {});

Then("send the user to my account page", function () {});

// new scenario

Then("the system will display all notification for the user", function () {});


Then("the system will display all Reservation for all event", function () {});

// new scenario


Then("redirect him to user home page", function () {});

// new scenario


Then("send the user to Starting page", function () {});

// new scenario


When("the user enters invalid integer in Profile Page {int}", function (int) {
});

Then("display a message {string}", function (string) {});

Then("return him to profile page", function () {});

// new scenario


When(
  "the user enters invalid integer in Profile Page {string}",
  function (string) {}
);


