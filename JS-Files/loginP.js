const readlineSync = require("readline-sync");

class LoginP {
  // option = -1;
  password = "password";
  email = "name@example.com";

  constructor() {
    this.enterEmailAndPassword();
  }
  enterEmailAndPassword() {
    this.email = readlineSync.question("Enter Your Email:");
    console.log(typeof this.email);
    this.password = readlineSync.question("Enter Your Password:");
    console.log(typeof this.email);
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
    } else console.log("Flailed To Login");
  }
}

module.exports = LoginP;
