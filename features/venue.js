const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const venuePage = require("../JS-Files/venue");
let venue = new venuePage();

Given("the user logged into venue page", function () {
  venue.openPage();
  console.log("open page");
});

When("the user click on {string} button", function (string) {
  venue.printMenu();
  console.log("user choose " + string + " option");
  venue.clickButton(string);
});

Then("the system display all venue", function () {
  venue.viewVenue();
});

Then("return user to venue page", function () {
  venue.openPage();
});

When("the user chooses an attribute to search", function () {});

When("and book a valid place", function () {
  page.bookVenue(
    "asemhesham@gmail.com",
    "101",
    "3:00",
    "4:00",
    "20/04/2003",
    "20/04/2003"
  );
});

Then("display masseg {string}", function (string) {
  console.log(string);
});

When("and book an invalid place", function () {

});

When(
  "admin fill all venue attribute \\(capacity,price,amenity)",
  function () {}
);

When("admin fill all venue attribute with existed place", function () {});

When("admin fill all venue attribute with invalid input", function () {});

When("select venue to delete", function () {});

When("select venue does not exist to delete", function () {});

Then("back the user to user home page", function () {});

When("the user enters invalid integer in venue Page {int}", function (int) {
  console.log("the option is:" + int);
  venue.setOPtion(String(int));
  venue.clickButton();
});

When(
  "the user enters invalid integer in venue Page {string}",
  function (string) {
    console.log("the option is:" + string);
    venue.setOPtion(string);
    venue.clickButton();
  }
);
