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

  setID(id){this.cache.ID = id;return this.idValidity(id)}
  setName(name){this.cache.name = name;}
  setDate(date){this.cache.date = date;}
  setTime(time){this.cache.time = time;}
  setTheme(theme){this.cache.theme = theme;}
  setDescription(discription){this.cache.description = discription;}
  setCount(count){this.cache.count = count;}
  setType(type){this.cache.type = type;}
  setVenueID(venueID){this.cache.venueID = venueID;}

  idValidity(id){
    return DB.eventMap.get(this.eventID) == undefined;
  }

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
  cacheSubmit(){
    this.eventID = this.cache.ID;
    this.eventName = this.cache.name;
    this.eventDate = this.cache.date;
    this.venueID = this.cache.venueID;
    this.eventTime = this.cache.time;
    this.eventCount = this.cache.count;
    this.eventTheme = this.cache.theme;
    this.eventDescription = this.cache.description;
    this.eventType = this.cache.type;
  }
  checkEventID(eventID) {
    if(eventID != '' && eventID != undefined && eventID != null){
      this.cacheSubmit();
      return (DB.eventMap.get(eventID) == undefined);
    }else return false;
  }
  cache={
    ID:'',
    name:'',
    date:'',
    time:'',
    theme:'',
    description:'',
    count:'',
    type:'',
    venueID:''
  }

  readData(){
    let ID = readlineSync.question("Enter Your ID:");
    let name = readlineSync.question("Enter Your Name:");
    let date = readlineSync.question("Enter Your Date:");
    let time = readlineSync.question("Enter Your Time:");
    let theme = readlineSync.question("Enter Your Theme:");
    let description = readlineSync.question("Enter Your Discription:");
    let count = readlineSync.question("Enter Your Count:");
    let type = readlineSync.question("Enter Your Type:");
    let venueID = readlineSync.question("Enter Your Venue-ID:");
    this.setID(ID);
    this.setName(name);
    this.setDate(date);
    this.setTime(time);
    this.setTheme(theme);
    this.setDescription(description);
    this.setCount(count);
    this.setType(type);
    this.setVenueID(venueID);
  }

  fillDataToAdd() {
    this.readData();
    if (this.checkEventID(this.cache.ID)){
      DB.insertEvent(this.eventID, this.eventName, this.eventDate,this.venueID,this.eventTime,this.eventTheme,this.eventDescription,this.eventCount,this.eventType);
      console.log(DB.eventMap.get(this.eventID));
      console.log(DB.eventMap);
    }else{
      console.log("event already exist or null");
    }
  }
  selectToDelete() {
    console.log('-----------------------------------');
    let ID = readlineSync.question("Enter ID To Delete:");
    if(this.checkEventID(ID) == false){
      DB.eventMap.delete(ID);
      console.log(DB.eventMap);
    }else{
      console.log('error: try to delete event doesnt exist');
      console.log(DB.eventMap);
    }
  }
 
  selectToUpdate() {
    let ID = readlineSync.question("Enter ID To Update:");
    if(this.checkEventID(ID) == false){
      console.log('---event---updated---');
      this.readData();
      this.cacheSubmit();
      DB.updateEvent(ID, this.eventName, this.eventDate,this.venueID,this.eventTime,this.eventTheme,this.eventDescription,this.eventCount,this.eventType);
      console.log(DB.eventMap);
    }else
    console.log("error: try to update event doesnt exist");
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

