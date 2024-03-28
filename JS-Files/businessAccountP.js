const readlineSync = require("readline-sync");
const DB = require("./ourDataBase.js");
const Page = require("./Page.js");
const SharedData = require("./SharedData");
const VenuePage = require("./venue");

class BusinessAccountP extends Page {
  isGoToVenue = false;
  isReturn = false;
  nextPage=0

  init() {
    this.isGoToVenue = false;
    this.isReturn = false;
  }

  displayCalendar() {
    console.log(`--------------------------------------
some info about Calendar and Scheduling
---------------------------------------`);

    DB.reservationMap.forEach((value, key) => {
      if (value.id == SharedData.bussinessID) {
        console.log(
          ` ${VenuePage.makeCol(key)}  | ${VenuePage.makeCol(
            value.email
          )} | ${VenuePage.makeCol(value.id)} | ${VenuePage.makeCol(
            value.startTime
          )} | ${VenuePage.makeCol(value.endTime)} | ${VenuePage.makeCol(
            value.startDate
          )} |  ${VenuePage.makeCol(value.endDate)} |\n`
        );
      }
    });
  }
  goToVenuePage() {
    this.isGoToVenue = true;
    this.nextPage=11
  }
  displayExpenseTracking() {
    console.log(`--------------------------------------------
in Expense tracking and categorization case!!
---------------------------------------------`);
  }
  backspace() {
    this.isReturn = true;
    this.nextPage=10
  }

  printMenue() {
    console.log(`
        select the button by enter the number: 
            0: Calendar and Scheduling
            1: Go to venue page
            2: Expense tracking and categorization
            3: return
        `);
  }

  run(option) {
    switch (option.trim()) {
      case "Calendar and Scheduling":
        this.displayCalendar();
        break;
      case "venue":
        this.goToVenuePage();
        break;
      case "Expense tracking and categorization":
        this.displayExpenseTracking();
        break;
      case "return":
        
        break;
      default:
        console.log("invalid data input");
    }
  }
}
module.exports = BusinessAccountP;
