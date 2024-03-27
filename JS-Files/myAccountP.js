const readlineSync = require("readline-sync");
const DB = require("../JS-Files/ourDataBase");
const Page = require("../JS-Files/Page.js");
const Server = require("../main");
const SharedMemory = require("../JS-Files/SharedData");
class MyAccount extends Page {
  creatAccount = false;
  loginAccount = false;
  returnFlage = false;

  instructions = [
    "user info",
    "Create business account",
    "login business account",
    "return",
  ];
  init() {
    this.creatAccount = false;
    this.loginAccount = false;
    this.returnFlage = false;
  }

  userProfileInfo() {
    console.log("display user account info");
    console.log(SharedMemory.email);
    console.log(DB.userMap.get(SharedMemory.email));

    DB.userMap.get(Server.UserEmail);
  }

  creatBusinessAccount() {
    this.creatAccount = true;
    this.nextPage = 9;
  }
  isNamePageExist(name) {
    if (name == "facebook") {
      return true;
    }
    return false;
  }
  loginBusinessAccount(pageName) {
    this.loginAccount = true;
    if (this.isNamePageExist(pageName)) {
      console.log("user enter: " + pageName);
      console.log("page was found , welcome to your business");
    } else if (pageName != null && pageName != undefined && pageName != "") {
      console.log("user enter: " + pageName);
      console.log("sorry ,we could not found your page");
      SharedMemory.bussinessID = SharedMemory.email;
      this.nextPage = 10;
    } else {
      console.log("invalid name input");
    }
  }
  returnBack() {
    this.returnFlage = true;
  }

  printMenu() {
    console.log(`
        select the button by enter the number: 
            0: user info
            1: Create business account
            2: login business account
            3: return
        `);
  }

  run(theAction) {
    switch (theAction.trim()) {
      case "user info":
        this.userProfileInfo();
        console.log("in user info case");
        readlineSync.question();
        break;
      case "Create business account":
        this.creatBusinessAccount();
        console.log("in create business account case");
        break;
      case "login business account":
        console.log("in login business account case");
        break;
      case "return":
        this.returnBack();
        console.log("in return case");
        break;
      default:
        console.log("invalid input");
    }
  }
  readOption() {
    this.nextPage = 0;
    let option = readlineSync.question("enter option number");
    if (option < 4) this.run(this.instructions[option]);
    return this.nextPage;
  }
}

module.exports = MyAccount;
