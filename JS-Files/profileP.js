const readlineSync = require("readline-sync");
const DB = require("../JS-Files/ourDataBase");
const Page = require("../JS-Files/Page.js");

class ProfilePage extends Page {
  isManuDisplaied = false;
  isRevelitionDisplaied = false;
  isMyAccountOpened = false;
  isNotificstion = false;
  isLogout = false;
  isReturnToUserHome = false;
  isuserWarned = false;

  constructor() {
    super();
  }
  init() {
    this.isManuDisplaied = false;
    this.isRevelitionDisplaied = false;
    this.isMyAccountOpened = false;
    this.isNotificstion = false;
    this.isReturnToUserHome = false;
  }

  logout() {
    this.isLogout = true;
  }
  displayRevelation() {
    this.isRevelitionDisplaied = true;
  }
  myAccount() {
    this.isMyAccountOpened = true;
  }
  displayNotification() {
    this.isNotificstion = true;
  }

  returnBack() {
    this.isReturnToUserHome = true;
  }
  printMenu() {
    console.log(`
        select the button by enter the number: 
            0: Revelation
            1: my account
            2: notifycation
            3: logout
            4: return
        `);
  }
  run(theButton) {
    switch (theButton.trim()) {
      case "Reservation":
        this.displayRevelation();
        console.log('in Reservation case');
        break;
      case "my account":
        this.myAccount();
        console.log('in my account case');
        break;
      case "notification":
        this.displayNotification();
        console.log('in notification case');
        break;
      case "Logout":
        this.logout();
        console.log('in Logout case');
        break;
      case "return":
        this.returnBack();
        console.log('in return case');
        break;
      default:
        this.invalidOption();
        console.log('in invalid input case');
    }
  }
  invalidOption() {
    this.isuserWarned = true;
  }
}

module.exports = ProfilePage;
