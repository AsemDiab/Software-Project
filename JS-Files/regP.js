const readlineSync = require("readline-sync");

class RegP {

  username = null;
  email = null;
  password = null;
  option = 0;

  isOpen = false;
  isValidName = false;
  isValidEmail = false;
  isValidPassword = false;

  goToLogin = 0;
  goToLogin = 0;

  usernameValidity(username) {
    if (username.length > 3) {
        this.isValidName = true;
    } else {
        this.isValidName = false;
        console.log("Try to enter a username with more than 3 characters.");
    }
}
  emailValidity(email){
    if(this.email.includes('@') && this.email.endsWith('.com')){
      this.isValidEmail = true;
    }else{
      this.isValidEmail = false;
    }
  }
  passwordValidity(password) {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
    if (password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialChar
    ){
      this.isValidPassword = true;
    } else {
      this.isValidPassword = false;
    }
  }

  trueValue(){

  }
  wrongValue(){

  }

  chickOnTheData() {
    this.usernameValidity(this.username);
    this.emailValidity(this.email);
    this.passwordValidity(this.password);

    if(this.isValidName == true && this.isValidEmail == true && this.isValidPassword == true ){
      console.log("all data are valid");
      return this.trueValue();
    }else{
      console.log("invalid data");
      return this.wrongValue();
    }
  }

  readTheData(){
    this.username = readlineSync.question("Enter Your Name:");
    console.log(typeof this.username);
    this.email = readlineSync.question("Enter Your Email:");
    console.log(typeof this.email);
    this.password = readlineSync.question("Enter Your Password:");
    console.log(typeof this.password);

    chickOnTheData();

  }

  // validity(username , email , password ){
  //   if(this.username != null && this.email != null && this.password != null){
  //       this.isValidName = true;
  //       this.isValidEmail = true;
  //       this.isValidPassword = true;
  //       console.log("valid input");
  //   }else{
  //       this.isValidName = false;
  //       this.isValidEmail = false;
  //       this.isValidPassword = false;
  //       console.log("invalid input");
  //   }
  // }

  submitManu() {

    console.log("Options:");
    console.log("1. submit");
    console.log("2. cancel");

    this.option = readlineSync.question("Enter Your choise:");
    console.log(this.option);
    console.log(typeof this.option);
    switch(this.option){
        case "1":
            console.log('save data in DB');
            break;
        case "2": 
            console.log('cancel operation');
            break;
        default:
            console.log('invalid input')
    }
  }

  openPage(){
    this.isOpen = true;
  }

  goToLoginPage() {
    this.goToLogin = 0;
    this.goToLogin = 1;
  }

  goToStartPage() {
    this.goToLogin = 1;
    this.goToLogin = 0;
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

module.exports = RegP;
