const readlineSync = require("readline-sync");
const DB = require("../JS-Files/ourDataBase");
const Page = require("../JS-Files/Page");
DB.init();

class LoginP extends Page {
  state = "admin";
  // option = -1;
  password = "password";
  email = "name@example.com";

  is_open = false;

  goToUser = 0;
  goToLogin = 1;
  goToAdmin = 0;

  userObject = "";

  cache = {
    email: "",
    password: "",
  };

  nextPage = 0;
  systemMsg = "";

  constructor() {
    super();
    // this.enterEmailAndPassword();
  }
  enterEmailAndPassword() {
    this.cache.email = readlineSync.question("Enter Your Email:");
    console.log(typeof this.email);
    this.cache.password = readlineSync.question("Enter Your Password:");
    console.log(typeof this.email);
    this.userObject = DB.userMap.get(this.email);
    console.log(typeof this.userObject);
    this.setEmail(this.cache.email);
    this.setPassword(this.cache.password);
    this.run();
  }

  readOption() {
    return this.nextPage;
  }

  openPage() {
    this.is_open = true;
  }

  goToUserPage() {
    this.goToUser = 1;
    this.goToLogin = 0;
    this.goToAdmin = 0;
    this.nextPage = 4;
  }
  goToAdminPage() {
    this.goToUser = 0;
    this.goToLogin = 0;
    this.goToAdmin = 1;
  }
  goToLoginPage() {
    this.goToUser = 0;
    this.goToLogin = 1;
    this.goToAdmin = 0;
  }
  welcomeMessage() {
    console.log("Login Seccussfully");
  }
  getState() {
    return DB.userMap.get("asemhesham@gmail.com").type;
    // userObject["asemhesham@gmail.com"].type;
  }
  setPassword(password) {
    this.password = password;
  }
  getPassword() {
    return this.getPassword;
  }
  setEmail(email) {
    this.email = email;
  }
  getEmail() {
    return this.email;
  }

  setOption(_option) {
    this.option = readlineSync.question("Enter Your Option: ");
  }
  getOption() {
    cl;
    return this.option;
  }
  // emailDoesntExist(email) {
  //   return DB.userMap.get(email) == undefined;
  // }

  run() {
    let tempState = this.getState();
    console.log(this.tempState);
    let user = DB.userMap.get(this.email.trim().toLowerCase());
    if (tempState == "admin") {
      if (this.password == user.password) {
        console.log("Admin Successfully Login");
        this.goToAdminPage();
      } else {
        console.log("Flailed To Login");
        this.goToLoginPage();
      }
    } else {
      if (this.email == "user@hotmail.com" && this.password == "123") {
        console.log("User Successfullu Login");
        goToUserPage();
      } else {
        console.log("Flailed To Login");
        goToLoginPage();
      }
    }
  }
}

module.exports = LoginP;
