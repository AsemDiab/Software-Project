const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const  venuePage=require('../JS-Files/venue')
let page =new venuePage();

Given('the user logged into venue page', function () {
    // Write code here that turns the phrase above into concrete actions
});


When('the user click on {string} button', function (string) {
    // Write code here that turns the phrase above into concrete actions
    page.clickButton(string)
});


Then('the system display all venue', function () {
    // Write code here that turns the phrase above into concrete actions
    page.viewVenue()
    assert.equal(page.searchByAtteibute().trim(),'101        | Venue A    | City X     | 100        | 100$       | chairs,bathroom                                    |  101        |\n' +
        '102        | Venue B    | City Y     | 100        | 100$       |                                                    |  102        |')

});



Given('user search for venue attribute', function () {
    // Write code here that turns the phrase above into concrete actions
    let tempMap=page.searchByAtteibute();
});


When('the system display all venues', function () {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(page.searchByAtteibute("101"),'101        | Venue A    | City X     | 100        | 100$       | chairs,bathroom |  101        |\n')
});




When('choose vailable venue to book', function () {
    // Write code here that turns the phrase above into concrete actions
    page.bookVenue("asemhesham@gmail.com","101","3:00","4:00","20/04/2003","20/04/2003")

});


Then('the venue booked', function () {
    // Write code here that turns the phrase above into concrete actions
});


Then('display masseg {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
});










When('choose unvailable venue to book', function () {
    // Write code here that turns the phrase above into concrete actions
});


Then('display a masseged to warn him', function () {
    // Write code here that turns the phrase above into concrete actions
});


Then('cancel operation', function () {
    // Write code here that turns the phrase above into concrete actions
});





Given('the user was an admin', function () {
    // Write code here that turns the phrase above into concrete actions
});


When('the user clicked on add button', function () {
    // Write code here that turns the phrase above into concrete actions
});


When('admin fill all venue attribute \\(capacity,price,amenity)', function () {
    // Write code here that turns the phrase above into concrete actions
});


Then('the venue added to venue list', function () {
    // Write code here that turns the phrase above into concrete actions
});












Then('the venue dont added to venue list', function () {
    // Write code here that turns the phrase above into concrete actions
});


Then('display a massege {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
});







When('the user clicked on delete button', function () {
    // Write code here that turns the phrase above into concrete actions
});


When('select venue to delete', function () {
    // Write code here that turns the phrase above into concrete actions
});

Then('the venue was deleted and remove from venue list', function () {
    // Write code here that turns the phrase above into concrete actions
});





When('enter invalid data', function () {
    // Write code here that turns the phrase above into concrete actions
});

Then('operation failed', function () {
    // Write code here that turns the phrase above into concrete actions
});

Then('display massege {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
});
