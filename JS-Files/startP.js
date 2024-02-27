const readlineSync = require("readline-sync");

class StartP {

  is_open = false;
  go_to_reg = 0;
  go_to_login = 0;
  _exit = 0;

  option = -1;
  constructor() {
    this.printmanu();
  }
  printmanu() {
    console.log("Options:");
    console.log("1. Register To Your Account");
    console.log("2. Login to Your Acount");
    console.log("3. Exit");
  }
  setOption(_option) {
    // this.option = readlineSync.question("Enter your option:");
    this.option = _option;
    // console.log(typeof (this.option))
  }
  getOption() {
    return this.option;
  }
  openPage(){
    this.is_open= true;
  }
  closePage(){
    this.is_open = false;
  }
  goToReg(){
    go_to_reg = 1;
    go_to_login = 0;
    _exit = 0;
  }
  goToLogin(){
    go_to_reg = 0;
    go_to_login = 1;
    _exit = 0;
  }
  goToExit(){
    go_to_reg = 0;
    go_to_login = 0;
    _exit = 1;
  }

  run() {
    // userChoice=Start.getOption()
    switch (this.option) {
      case "1":
        console.log("User chose option 1. Performing actions for option 1...");
        this.goToReg();
        break;
      case "2":
        console.log("User chose option 2. Performing actions for option 2...");
        this.goToLogin();
        break;
      case "3":
        console.log("User chose option 3. Performing actions for option 3...");
        this.goToExit();
        break;
      default:
        console.log("Invalid option. Please choose 1, 2, or 3.");
    }
  }
}

module.exports = StartP;
