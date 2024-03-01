const readlineSync = require("readline-sync");

class LoginP {
  // option = -1;
  password = "password";
  email = "name@example.com";

  is_open = false;

  goToUser = 0;
  goToLogin = 1;
  goToAdmin = 0;

  constructor() {
    // this.enterEmailAndPassword();
  }
  enterEmailAndPassword() {
    this.email = readlineSync.question("Enter Your Email:");
    console.log(typeof this.email);
    this.password = readlineSync.question("Enter Your Password:");
    console.log(typeof this.email);
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

  // setPassword(password) {
  //   this.password = password;
  // }
  // getPassword() {
  //   return this.getPassword;
  // }
  // setEmail(email) {
  //   this.email = email;
  // }
  // getEmail() {
  //   return this.email;
  // }

  // setOption(_option) {
  //   this.option = readlineSync.question("Enter Your Option: ");
  // }
  // getOption() {cl
  //   return this.option;
  // }

  run() {
    if (this.email == "sayed@hotmail.com" && this.password == "123") {
      console.log("Successfull Login");
    } else {
      console.log("Flailed To Login");
      goToUserLogin();
    }
  }
}

module.exports = LoginP;
