const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const EventManagementPage = require("../JS-Files/EventManagementPage.js");
const { event } = require("../JS-Files/ourDataBase.js");
let eventManagmentPage = new EventManagementPage();

Given("the user navicates to event page", function () {
  eventManagmentPage.openPage();
  eventManagmentPage.printMenu();
});

When("the user enter option {int}", function (int) {
    console.log("this option is:" + int);
    eventManagmentPage.setOption(int);
    eventManagmentPage.run();
});

When("fill all attributes data \\(id,name,date,venue-ID)", function () {
    eventManagmentPage.fillDataToAdd();
});

Then("display message {string}", function (string) {
    console.log(string);
});

Then("reture user to Event management page", function () {});

When("select a row with its id to delete", function () {
    console.log('select row to delet')
    eventManagmentPage.selectToDelete();
});

When("select a row with its id to update it and refill the data", function () {
    eventManagmentPage.selectToUpdate();
});

Then("redirect him to user main page", function () {
    eventManagmentPage.goToUserPage();
});
