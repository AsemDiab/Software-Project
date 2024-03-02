const Page = require("../JS-Files/Page.js");
const DB = require("../JS-Files/ourDataBase.js");
const readlineSync = require("readline-sync");

class EventManagementPage extends Page {
  eventID = null;
  eventName = null;
  eventDate = null;
  eventTime = null;
  eventTheme = null;
  eventDescription = null;
  eventCount = null;
  eventType = null;
  venueID = null;

  userPage = 0;

  updateRow = null;
  deleteRow = null;

  warningFlag = 0;
  option = -1;
  constructor() {
    super();
    this.openPage();
  }
  setOption(option) {
    this.option = option;
  }
  printMenu() {
    console.log(`options:
                        1. add event
                        2. update event
                        3. delete event
                        4. back to home page`);
  }
  goToUserPage() {
    this.userPage = 1;
  }
  checkEventID(eventID) {
    return DB.userMap.get(eventID) == undefined;
  }
  cache={
    ID:'',
    name:'',
    date:'',
    Time:'',
    Theme:'',
    description:'',
    count:'',
    type:'',
    venueID:''
  }

  fillDataToAdd() {
    let ID = readlineSync.question("Enter Your ID:");
    let name = readlineSync.question("Enter Your Name:");
    let date = readlineSync.question("Enter Your Date:");
    let time = readlineSync.question("Enter Your Time:");
    let theme = readlineSync.question("Enter Your Theme:");
    let description = readlineSync.question("Enter Your Discription:");
    let count = readlineSync.question("Enter Your Count:");
    let type = readlineSync.question("Enter Your Type:");
    let venueID = readlineSync.question("Enter Your Venue-ID:");
    if (this.checkEventID(ID)){
      DB.insertEvent(ID, name, date,venueID,time,theme,description,count,type);
      console.log(DB.eventMap.get(ID));
    }else{
        console.log("event already exist");
    }
  }
  selectToDelete() {
    let row = readlineSync.question("Enter the row you want to delete it");
  }
  selectToUpdate() {
    let row = readlineSync.question("Enter the row you want to update it");
  }

  addEvent(
    id,
    name,
    date,
    time,
    theme,
    location,
    description,
    attendeeCount,
    eventType
  ) {
    DB.insertEvent(
      id,
      name,
      date,
      time,
      theme,
      location,
      description,
      attendeeCount,
      eventType
    );
  }
  editEvent(
    id,
    name,
    date,
    time,
    theme,
    location,
    description,
    attendeeCount,
    eventType
  ) {
    DB.updateEvent(
      id,
      name,
      date,
      time,
      theme,
      location,
      description,
      attendeeCount,
      eventType
    );
  }
  deleteEvent(id) {
    this.isdeleted = false;
    if (id == undefined) return;
    DB.eventMap.delete(id);
    this.isdeleted = true;
  }
  run() {
    switch (this.option) {
      case 1:
        this.addEvent();
        break;
      case 2:
        this.editEvent();
        break;
      case 3:
        this.deleteEvent();
        break;
      default:
        this.invalidOption();
        break;
    }
  }
}
module.exports = EventManagementPage;
