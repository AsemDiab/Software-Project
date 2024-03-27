const Page = require("../JS-Files/Page.js");
const DB = require("../JS-Files/ourDataBase.js");
const readlineSync = require("readline-sync");
const Server = require("../main");
const PrintData = require("../JS-Files/printData.js");

class EventBudgeting {
  printMenu() {
    console.log(
      `----------------------------------------------------------------
Track Your Event Expences, Vendor Payments and Venue Rental Fees.`
    );

    printData.printEventData(DB.eventMap);
    let option = readlineSync.question("Choose an Event:");
  }
}

let event = new EventBudgeting();
let printData = new PrintData();
DB.init();
event.printMenu();
printData.printBudgetExpenses(DB.userMap,DB.venueMap,DB.eventMap);