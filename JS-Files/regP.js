const readlineSync = require("readline-sync");

class RegP {

  username = null;
  email = null;
  password = null;

  is_valid_username = false;
  is_valid_email = false;
  is_valid_password = false;

  go_to_start = 0;
  go_to_login = 0;

  constructor() {}

  fillTheData() {
    this.username = readlineSync.question("Enter Your Name:");
    console.log(typeof this.username);
    this.email = readlineSync.question("Enter Your Email:");
    console.log(typeof this.email);
    this.password = readlineSync.question("Enter Your Password:");
    console.log(typeof this.password);
  }

  fillValidInputs() {}

  fillInvalidInputs() {}

  fillEmailAlreadyTaken() {}

  fillWeakPassword() {}

  goToLoginPage() {
    go_to_start = 0;
    go_to_login = 1;
  }

  goToStartPage() {
    go_to_start = 1;
    go_to_login = 0;
  }

  run() {
    // userChoice=Start.getOption()
    switch (scenario) {
      case "valid input":
        console.log("option 1. valid registerion ");
        break;
      case "invalid input":
        console.log("option 2. invalid registerion");
        break;
      case "email alteady taken":
        console.log("option 3. email already taken");
        break;
      case "weak password":
        console.log("option 4. weak password");
        break;
      case "go to login page":
        console.log("option 5. go to login page");
        this.goToLoginPage();
        break;
      case "return to start page":
        console.log("option 6. return to start page");
        this.goToStartPage();
        break;
      default:
        console.log("Invalid option. Please choose an existed option");
    }
  }
}
var registerion = new RegP();
registerion.fillTheData();
console.log(registerion.username + ' $ ' + registerion.email +' $ '+registerion.password);

module.exports = RegP;
