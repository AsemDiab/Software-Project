const readlineSync = require("readline-sync");
const DB = require("./ourDataBase.js");
const Page = require("./Page.js");
const SharedData = require("./SharedData");
const VenuePage = require("./venue");

class BusinessAccountP extends Page {
  isGoToVenue = false;
  isReturn = false;

  init() {
    this.isGoToVenue = false;
    this.isReturn = false;
  }

  displayCalendar() {
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
  }
  displayExpenseTracking() {
    console.log(`--------------------------------------------
in Expense tracking and categorization case!!
---------------------------------------------`);
  }
  backspace() {
    this.isReturn = true;
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
  instructions = [
    "Calendar and Scheduling",
    "venue",
    "Expense tracking and categorization",
    "return",
  ];
  readOption() {
    this.printMenu();
    const option = readlineSync.question("enter option number");
    if (option < 4) this.run(this.instructions[option]);
  }
}
module.exports = BusinessAccountP;
