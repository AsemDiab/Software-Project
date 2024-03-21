const readlineSync = require("readline-sync");
const DB = require("./ourDataBase.js");
const Page = require("./Page.js");

class BusinessAccountP extends Page {
  isGoToVenue = false;
  isReturn = false;

  init() {
    this.isGoToVenue = false;
    this.isReturn = false;
  }

  displayCalendar() {
    console.log(`--------------------------------------
some info about Calendar and Scheduling
---------------------------------------`);
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
        console.log("-----------in Calendar and Scheduling case!!-----------");
        break;
      case "venue":
        console.log("-----------in go to Venue case!!-----------");
        break;
      case "Expense tracking and categorization":
        console.log(
          "-----------in Expense tracking and categorization case!!-----------"
        );
        break;
      case "return":
        console.log("-----------in return case!!-----------");
        break;
      default:
        console.log(
          "-----------Invalid option. Please choose an existed option-----------"
        );
    }
  }
}
module.exports = BusinessAccountP;
