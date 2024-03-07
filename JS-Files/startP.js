const readlineSync = require("readline-sync");
const Page=require('./Page.js')

const RegisitionPage=require('../JS-Files/regP')
const LoginPage=require('../JS-Files/loginP')
var process = require('process');

class StartP extends Page{

  goToOtherPage=0
  is_open = false;
  go_to_reg = 0;
  go_to_login = 0;
  _exit = 0;

  option = -1;
  nextPage=0
  systemMsg=''
  constructor() {
    // this.printmanu();
    super()
  }
  printMenu() {
    // console.clear()
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
    this.go_to_reg = 1;
    this.go_to_login = 0;
    this._exit = 0;
    this.nextPage=2
    }
  goToLogin(){
    this.go_to_reg = 0;
    this.go_to_login = 1;
    this._exit = 0;
    // Server.currentPage=new LoginPage();
    this.nextPage=3
  }
  goToExit(){
    this.go_to_reg = 0;
    this.go_to_login = 0;
    this._exit = 1;
    process.exit(0)
  }

  readOption(){
    let tempOP=readlineSync.question('what\'s your option')
    this.setOption(tempOP)
    this.run();

    if(this.go_to_reg)
      return 2;
    if(this.go_to_login)
      return  3;
  }
  run() {
    // userChoice=Start.getOption()
    switch (String(this.option)){
      case "1":
        // console.log("User chose option 1. Performing actions for option 1...");
        this.goToReg();
        break;
      case "2":
        // console.log("User chose option 2. Performing actions for option 2...");
        this.goToLogin();
        break;
      case "3":
        // console.log("User chose option 3. Performing actions for option 3...");
        this.goToExit();
        break;
      default:
        // console.log("Invalid option. Please choose 1, 2, or 3.");
        this.reopenPage()
        break;
    }
  }
  reopenPage(){
    this.go_to_reg=0
    this.go_to_login=0
    this.is_open=true
    this._exit=0
  }
}

module.exports = StartP;
