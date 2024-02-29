class UserP {
    isOpen = false;
    eventPage = 0;
    profilePage = 0;
    startingPage = 0;
    option = -1;

  printmanu(){
    console.log("Options:");
    console.log("1. event management page");
    console.log("2. profile page");
    console.log("3. return to Start Page");
  }
  openPage(){
    this.isOpen= true;
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
        console.log("User chose option 1. Performing actions for option 1...");
        this.goToReg();
        break;
      case "2":
        console.log("User chose option 2. Performing actions for option 2...");
        this.goToLogin();
        break;
      case "3":
        console.log("User chose option 3. Performing actions for option 3...");
        this.goToExit();
        break;
      default:
        console.log("Invalid option. Please choose 1, 2, or 3.");
        this.reopenPage()
        break;
    }
  }
  reopenPage(){
    this.eventPage = 0;
    this.profilePage  = 0;
    this.startingPage = 0;
    this.isOpen = 0;
  }
}
module.exports = UserP;
