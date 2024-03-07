const readlineSync = require("readline-sync");
const Page =require('../JS-Files/Page')
class UserP extends Page{
    isOpen = false;
    eventPage = 0;
    profilePage = 0;
    startingPage = 0;
    option = -1;
    warnTheUser=false

    systemMsg=''
    nextPage=0

  constructor() {
    super();
    this.openPage()
  }
  printmanu(){
    console.log("Options:");
    console.log("1. event management page");
    console.log("2. profile page");
    console.log("3. return to Start Page");
  }

  readOption(){
      let op=readlineSync.question()
    this.setOPtion(op)
      this.run();
  }
  openPage(){
    this.isOpen= true;
  }
  setOPtion(option){
    this.option = option;
  }
  goToEventPage(){
    this.eventPage = 1;
    this.profilePage  = 0;
    this.startingPage = 0;
    this.nextPage=5
  }
  goToProfilePage(){
    this.eventPage = 0;
    this.profilePage  = 1;
    this.startingPage = 0;
    this.nextPage=6
  }
  goToStartingPage(){
    this.eventPage = 0;
    this.profilePage  = 0;
    this.startingPage = 1;

    this.nextPage=1
  }
  run() {

    switch (String(this.option)){
      case "1":
        console.log("User chose option 1. event page");
        this.goToEventPage();
        break;
      case "2":
        console.log("User chose option 2. Profile page");
        this.goToProfilePage();
        break;
      case "3":
        console.log("User chose option 3. start page");
        this.goToStartingPage();
        break;
      default:
        console.log("Invalid option. Please choose 1, 2, or 3.");
        this.reopenPage();
        this.warnTheUser=true
        break;
    }
  }
  reopenPage(){
    this.eventPage = 0;
    this.profilePage  = 0;
    this.startingPage = 0;
    this.isOpen = true;
  }
}

module.exports = UserP;
