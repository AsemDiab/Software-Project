const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Profile=require('../JS-Files/profileP')
let profiePage;

Given('the user in Profile page', function () {
        // Write code here that turns the phrase above into concrete actions
     profiePage= new Profile();
    });

   
    When('he clicks on {string} button', function (string) {
        // Write code here that turns the phrase above into concrete actions
        profiePage.run(string)
    });

   
    Then('send the user to my account page', function () {
        // Write code here that turns the phrase above into concrete actions
        assert.equal(profiePage.isMyAccountOpened,true,'my account did not open')
    });


    // Given('the user in Profile page', function () {
    //     // Write code here that turns the phrase above into concrete actions
    //     return 'pending';
    // });

   
    // When('he click on {string} button', function (string) {
    //     // Write code here that turns the phrase above into concrete actions
    //     return 'pending';
    // });

   
    Then('the system will display all notification for the user', function () {
        // Write code here that turns the phrase above into concrete actions
        assert.equal(profiePage.isNotificstion,true,'notification did not open')

    });


    // Given('the user in Profile page', function () {
    //     // Write code here that turns the phrase above into concrete actions
    //     return 'pending';
    // });

   
    // When('he clicks on {string} button', function (string) {
    //     // Write code here that turns the phrase above into concrete actions
    //     return 'pending';
    // });

   
    Then('the system will display all Reservation for all event', function () {
        // Write code here that turns the phrase above into concrete actions
        assert.equal(profiePage.isRevelitionDisplaied,true,'Reservation  did not open')

    });




   
    // When('the user click on return option', function () {
    //     // Write code here that turns the phrase above into concrete actions
    // });

   
    Then('redirect him to user home page', function () {
        // Write code here that turns the phrase above into concrete actions
        assert.equal(profiePage.isReturnToUserHome,true,'notification did not open')
    });


    // Given('the user is in the Profile page', function () {
    //     // Write code here that turns the phrase above into concrete actions
    //     return 'pending';
    // });

   
    // When('clicked on Logout option', function () {
    //     // Write code here that turns the phrase above into concrete actions
    // });

   
    Then('send the user to Starting page', function () {
        // Write code here that turns the phrase above into concrete actions
        assert.equal(profiePage.isLogout,true,'startPage did not open')

    });


   

   
    When('the user enters any invalid integer input', function () {
        // Write code here that turns the phrase above into concrete actions
        profiePage.run('hhhhh')
    });


   
    Then('warn him', function () {
        // Write code here that turns the phrase above into concrete actions
        assert.equal(profiePage.isuserWarned,true,'user home didn\'t open')
    });
