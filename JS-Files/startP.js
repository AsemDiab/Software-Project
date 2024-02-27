const readlineSync = require("readline-sync");

class StartP {
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
    this.option = readlineSync.question("Enter your option:");
    // console.log(typeof (this.option))
  }
  getOption() {
    return this.option;
  }
  run() {
    // userChoice=Start.getOption()
    switch (this.option) {
      case "1":
        console.log("User chose option 1. Performing actions for option 1...");
        // Add code for option 1
        break;
      case "2":
        console.log("User chose option 2. Performing actions for option 2...");
        // Add code for option 2
        break;
      case "3":
        console.log("User chose option 3. Performing actions for option 3...");
        // Add code for option 3
        break;
      default:
        console.log("Invalid option. Please choose 1, 2, or 3.");
      // Handle invalid option
    }
  }
}

module.exports = StartP;
