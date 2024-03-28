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
    printData.printVenueData(DB.venueMap);
    let option = readlineSync.question("Choose an Event:");

    let tempMap = new Map();
    tempMap = DB.eventMap;
    let sum = 0;

    tempMap.forEach((value, key) => {
      let eventID = value.event_id;
      if (eventID == option) {
        console.log("-------->" + eventID);
      } else {
        // console.log("Event Doesn't Exist");
      }
      sum++;
    });
  }
}

let event = new EventBudgeting();
let printData = new PrintData();
DB.init();
event.printMenu();
// printData.printBudgetExpenses(DB.userMap, DB.venueMap, DB.eventMap);
// printData.printBudgetExpenses(DB.venueMap, DB.eventMap);
let mergedDetails = printData.mergeData(102, DB.venueMap, DB.eventMap);
// let parsedMergedDetails = JSON.parse(mergedDetails);
console.log(mergedDetails);
printData.printMergedTable(mergedDetails);

