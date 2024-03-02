class UserP {
    isOpen = false;
    eventPage = 0;
    profilePage = 0;
    startingPage = 0;
    option = -1;
    warnTheUser=false

  printmanu(){
    console.log("Options:");
    console.log("1. event management page");
    console.log("2. profile page");
    console.log("3. return to Start Page");
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
  }
  goToProfilePage(){
    this.eventPage = 0;
    this.profilePage  = 1;
    this.startingPage = 0;
  }
  goToStartingPage(){
    this.eventPage = 0;
    this.profilePage  = 0;
    this.startingPage = 1;
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
