const readlineSync = require("readline-sync");
const DB = require("../JS-Files/ourDataBase");
const Page = require("../JS-Files/Page");
const  Server=require("../main")
const SharedMemory=require("../JS-Files/SharedData")
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

  printSubmitManu() {
    console.log("Options:");
    console.log("1. submit");
    console.log("2. cancel");
  }

  submitManu(option) {
    this.option = option;
    switch (String(this.option)) {
      case "1":
        this.run();
        break;
      case "2":
        // console.log('cancel operation');
        break;
      default:
        break;
      // console.log('invalid input')
    }
  }

  enterEmailAndPassword() {
    this.cache.email = readlineSync.question("Enter Your Email:");
    console.log(typeof this.email);
    this.cache.password = readlineSync.question("Enter Your Password:");
    console.log(typeof this.email);
    this.userObject = DB.userMap.get(this.cache.email);
    console.log(typeof this.userObject);
    this.setEmail(this.cache.email);
    this.setPassword(this.cache.password);
    this.printSubmitManu();
    this.option = readlineSync.question();
    this.submitManu(this.option);
  }

  run() {
    let tempState = this.getState();
    console.log(tempState);
    console.log(this.cache.email);
    // let user = DB.userMap.get(this.email.trim().toLowerCase()); // check here
    let user = DB.userMap.get("asemhesham@gmail.com");
    console.log(user);
    console.log(
      "//////////////////// " + typeof(user) + " //////////////////////"
    );
    if (tempState == "admin") {
      if (this.cache.password == user.password) {
        // console.log("Admin Successfully Login");
        this.systemMsg = "Admin Successfully Login";
        console.log(this.systemMsg);
        this.goToAdminPage();
        SharedMemory.email=this.email
      } else {
        // console.log("Failed To Login");
        this.systemMsg = "Wrong Email or Password, Failed To Login";
        console.log(this.systemMsg);
        this.goToLoginPage();
      }
    } else {
      if (this.cache.password == user.password) {
        // console.log("User Successfullu Login");
        this.systemMsg = "User Successfullu Login";
        console.log(this.systemMsg);
        this.goToUserPage();
        SharedMemory.email=this.email
      } else {
        // console.log("Failed To Login");
        this.systemMsg = "Wrong Email or Password, Failed To Login";
        console.log(this.systemMsg);
        this.goToLoginPage();

      }
    }


  }

  

  clicks(scenario) {
    // userChoice=Start.getOption()
    switch (scenario.toLowerCase().trim()) {
      case "submit":
        this.submitManu(1);
        break;
      case "go to login page":
        this.goToLoginPage();
        break;
      case "return to start page":
        this.goToStartPage();
        break;
      default:
        console.log("Invalid option. Please choose an existed option");
    }
  }
  openPage() {
    this.is_open = true;
  }

  goToUserPage() {
    this.goToUser = 1;
    this.goToLogin = 0;
    this.goToAdmin = 0;
    this.nextPage = 4;
    Server.username=this.email
  }
  goToAdminPage() {
    this.goToUser = 0;
    this.goToLogin = 0;
    this.goToAdmin = 1;
    this.nextPage = 7;
    Server.username=this.email
  }
  goToLoginPage() {
    this.goToUser = 0;
    this.goToLogin = 1;
    this.goToAdmin = 0;
    this.nextPage = 3;
  }
  goToAdminRegPage() {
    this.nextPage = 2;
  }
  welcomeMessage() {
    console.log("Login Seccussfully");
  }
  getState() {

    return DB.userMap.get(this.email).type;

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
    return this.option;
  }

  readOption() {
    this.nextPage = 0;
    this.enterEmailAndPassword();
    return this.nextPage;
  }
}

module.exports = LoginP;
