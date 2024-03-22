const readlineSync = require("readline-sync");
const DB = require("../JS-Files/ourDataBase");
const Page = require("./Page.js");

class RegP extends Page {
  username = null;
  email = null;
  password = null;
  option = 0;
  warmUser = false;

  isOpen = false;
  isValidName = false;
  isValidEmail = false;
  isValidPassword = false;

  goToLogin = 0;
  goToLogin = 0;
  cache = {
    email: "",
    username: "",
    password: "",
  };

  nextPage = 0;
  systemMsg = "";
  constructor() {
    super();
  }

  usernameValidity(username) {
    if (username.length > 3) {
      this.isValidName = true;
    } else {
      this.isValidName = false;
      this.systemMsg = "invalid username";
      console.log("Try to enter a username with more than 3 characters.");
    }
    return this.isValidName;
  }
  emailAlreadyTaken(email) {
    if (DB.userMap.get(email) == undefined) return true;

    this.systemMsg = "this email already taken" ;
    return false;
  }

  emailValidity(email) {
    if (
      email.includes("@") &&
      email.endsWith(".com") &&
      this.emailAlreadyTaken(email)
    ) {
      this.isValidEmail = true;
    } else if (this.emailAlreadyTaken(email)) {
      this.systemMsg = "this email is invalid";
      this.isValidEmail = false;
    } else {
      this.isValidEmail = false;
    }
    return this.isValidEmail;
  }
  passwordValidity(password) {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
    if (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialChar
    ) {
      this.isValidPassword = true;
    } else {
      this.isValidPassword = false;
      this.systemMsg = "the password is invalid";
    }
    return this.isValidPassword;
  }



  fillData() {
    this.warmUser = true;
    if (
      this.emailValidity(this.cache.email) &&
      this.usernameValidity(this.cache.username) &&
      this.passwordValidity(this.cache.password)
    ) {
      this.email = this.cache.email;
      this.username = this.cache.username;
      this.password = this.cache.password;
      DB.insertUser(this.email, this.username, this.password, "user");
      console.log("save data in DB");
      this.warmUser = false;
      this.nextPage = 1;
    }
  }
  setName(username) {
    this.cache.username = username;
    return this.usernameValidity(username);
  }
  setPassword(password) {
    this.cache.password = password;
    return this.passwordValidity(password);
  }
  setEmail(email) {
    this.cache.email = email;
    return this.emailValidity(email);
  }

  readTheData() {
    let email = readlineSync.question("Enter Your Email:");
    this.setEmail(email);
    if (this.isValidEmail) {
      let username = readlineSync.question("Enter Your Name:");

      this.setName(username);
      if (this.isValidName) {
        let password = readlineSync.question("Enter Your Password:");

        this.setPassword(password);
        this.printSubmitManu();
        this.option = readlineSync.question();
        this.submitManu(this.option);
      } else {
        this.submitManu(1);
      }
    } else {
      this.submitManu(1);
    }
  }

  submitManu(option) {
    this.option = option;
    switch (String(this.option)) {
      case "1":
        this.fillData();
        this.run();
        break;
      case "2":
        break;
      default:
        break;
    }
  }
  printSubmitManu() {
    console.log("Options:");
    console.log("1. submit");
    console.log("2. cancel");
  }
  run() {
    if (this.warmUser) {
      console.log(this.systemMsg);
      this.nextPage = 0;
    }
  }
  openPage() {
    this.isOpen = true;
  }

  goToLoginPage() {
    this.goToLogin = 1;
    this.nextPage = 3;
  }

  goToStartPage() {
    this.goToLogin = 0;
    this.nextPage = 1;
  }

  clicks(scenario) {
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

  readOption() {
    console.log(this.systemMsg);
    this.readTheData();
    return this.nextPage;
  }
  printMenu() {
    console.clear();
  }
}

module.exports = RegP;
