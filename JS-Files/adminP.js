const Page = require("../JS-Files/Page.js");
const DB = require("../JS-Files/ourDataBase.js");
const readlineSync = require("readline-sync");
const Server = require("../main");
const PrintData = require("../JS-Files/printData.js");
let printData = new PrintData();

class adminP {
  displayMenu() {
    console.log(`options:
                            0. Delete User  
                            1. Update User
                            2. Show User Data
                            3. Return`);
    const option = readlineSync("Choose an Option: ");
  }

  clicks(scenario) {
    switch (scenario.toLowerCase().trim()) {
      case "delete user":
        this.deleteUser();
        break;
      case "update user":
        this.updateUser();
        break;
      case "show user data":
        this.showUserData();
        break;
      case "return to starting page":
        this.return();
        break;

      default:
        console.log("Invalid option. Please choose an existed option");
    }
  }

  deleteUser(enteredEmail){
    printData.printUserData();

    // let userEmail;
    // let eventsAtVenue;
    let userMap = DB.userMap();
    let newObj = new Map();
    userMap.forEach((venueValue, key) => {
      let userEmail = userMap.email;
      if (userEmail == enteredEmail) {
        venueDetails = venueValue;
        eventObj.forEach((eventValue, key) => {
          if (venue_ID == eventValue.venueId) {
            eventsAtVenue = eventValue;

          }
        });
        newObj.set( newObj.size,{
          "name" : eventsAtVenue.name,
          "date" : eventsAtVenue.date,
          "time" : eventsAtVenue.time,
          "location" : venueDetails.location,
          "price" : venueDetails.price,
        })
      }
    });

    if (!venueDetails) {
      console.error("Venue ID not found.");
      return;
    }
    return newObj;
  }
  updateUser(enteredEmail){
    printData.printUserData();
  }
  showUserData(enteredEmail){
    printData.printUserData();
  }
  return(){

  }
}
