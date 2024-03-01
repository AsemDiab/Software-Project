const readlineSync = require("readline-sync");
const DB = require("../JS-Files/ourDataBase");
DB.init();

class LoginP {
  state = "admin";
  // option = -1;
  password = "password";
  email = "name@example.com";

  is_open = false;

  goToUser = 0;
  goToLogin = 1;
  goToAdmin = 0;

  userObject = '';

  cache={
    email:'',
    password:''
  }

  constructor() {
    // this.enterEmailAndPassword();
  }
  enterEmailAndPassword() {
    this.email = readlineSync.question("Enter Your Email:");
    console.log(typeof this.email);
    this.password = readlineSync.question("Enter Your Password:");
    console.log(typeof this.email);
    this.userObject = DB.userMap.get(this.email);
    console.log(typeof(this.userObject));
    this.run();
  }

  openPage() {
    this.is_open = true;
  }

  goToUserPage() {
    this.goToUser = 1;
    this.goToLogin = 0;
    this.goToAdmin = 0;
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
    return userObject["asemhesham@gmail.com"].type;
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
    if (tempState == "admin") {
      if (this.email == "asemhesham@gmail.com" && this.password == "123456") {
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
