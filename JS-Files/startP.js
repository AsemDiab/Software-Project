const readlineSync = require("readline-sync");
const Page=require('./Page.js')

const RegisitionPage=require('../JS-Files/regP')
const LoginPage=require('../JS-Files/loginP')
let process = require('process');

class StartP extends Page{

  goToOtherPage=0
  is_open = false;
  go_to_reg = 0;
  go_to_login = 0;
  _exit = 0;

  option = -1;
  nextPage=0
  systemMsg=''

  printMenu() {

    console.log("Options:");
    console.log("1. Register To Your Account");
    console.log("2. Login to Your Acount");
    console.log("3. Exit");
  }
  setOption(_option) {
    this.option = _option;
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
    switch (String(this.option)){
      case "1":
        this.goToReg();
        break;
      case "2":
        this.goToLogin();
        break;
      case "3":
        this.goToExit();
        break;
      default:
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
