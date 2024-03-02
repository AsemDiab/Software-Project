const readlineSync = require("readline-sync");
const  DB=require('../JS-Files/ourDataBase');
const Page=require('./Page.js')
DB.init()
class RegP extends Page{

  username = null;
  email = null;
  password = null;
  option = 0;
  warmUser=false;


  isOpen = false;
  isValidName = false;
  isValidEmail = false;
  isValidPassword = false;

  goToLogin = 0;
  goToLogin = 0;
  cache={
    email:'',
    username:'',
    password:''

  }

  constructor() {

    super()
  }

  usernameValidity(username) {
    if (username.length > 3) {
        this.isValidName = true;
    } else {
        this.isValidName = false;
        console.log("Try to enter a username with more than 3 characters.");
    }
    return this.isValidName;
  }
  emailAlreadyTaken(email){

    return DB.userMap.get(email)==undefined;
  }

  emailValidity(email){
    // console.log("the is ",email)
    if(email.includes('@') && email.endsWith('.com') && this.emailAlreadyTaken(email)){
      this.isValidEmail = true;
    }else{
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
    return this.isValidPassword;
  }



  chickOnTheData(username,email,password) {
    this.usernameValidity(username);
    this.emailValidity(email);
    this.passwordValidity(password);

    if(this.isValidName == true && this.isValidEmail == true && this.isValidPassword == true ){
      console.log("all data are valid");
    }else{
      console.log("invalid data");
    }
  }


  fillData(){
    // this.chickOnTheData(username,email,password)
    this.warmUser=true
    if(this.isValidEmail&&this.isValidName&&this.isValidPassword)
    {
      this.email=this.cache.email;
      this.username=this.cache.username;
      this.password=this.cache.password;
      DB.insertUser(this.email,this.username,this.password,'user');
      console.log('save data in DB');
      this.warmUser=false
    }

  }
  setName(username){
    this.cache.username=username;
    return this.usernameValidity(username)
  }
  setPassword(password){
    this.cache.password=password
    return this.passwordValidity(password)
  }
  setEmail(email){
    this.cache.email=email;
    return this.emailValidity(email)
  }


  readTheData(){
    let username = readlineSync.question("Enter Your Name:");
    let email = readlineSync.question("Enter Your Email:");
    let password = readlineSync.question("Enter Your Password:");

    this.setEmail(email)
    this.setName(username)
    this.setPassword(password)
    this.printSubmitManu()
    this.option=readlineSync.question();
    this.submitManu(this.option)
  }
  
  submitManu(option) {

    console.log('sub')


    this.option =option
        // readlineSync.question("Enter Your choise:");
    // console.log(this.option);
    // console.log(typeof this.option);
    switch(String(this.option)){
      case "1":
            this.fillData()
            this.run()
          break;
        case "2": 
            // console.log('cancel operation');
            break;
        default:
          break;
            // console.log('invalid input')
    }
  }
  printSubmitManu(){
    console.log("Options:");
    console.log("1. submit");
    console.log("2. cancel");
  }
  run(){
    if(this.warmUser)
      console.log('warning :(')
  }
  openPage(){
    this.isOpen = true;
  }

  goToLoginPage() {
    // this.goToLogin = 0;
    this.goToLogin = 1;
  }

  goToStartPage() {
    // this.goToLogin = 1;
    this.goToLogin = 0;
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

  readOption(){
    this.readTheData()
    if(this.goToLogin)
      return 3;
    else
      return 0;
  }
  printMenu(){
    console.clear()
  }
}

module.exports = RegP;
