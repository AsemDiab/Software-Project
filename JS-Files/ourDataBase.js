const fs=require('fs')


const userData=`{
    "asemhesham@gmail.com":{"username": "asemhesham@gmail.com","password": "123456","type":"admin"}
}`;
const venueData=`{ 
    "101" :   { "id": 101, "name": "Venue A", "location": "City X" },
    "102" : { "id": 102, "name": "Venue B", "location": "City Y" }
}`
const eventData=`{
    "event-001" :{ "id": "event-001", "name": "Event 1", "date": "2024-03-01", "venueId": 101 },
    "event-002":{ "id": "event-002"," name": "Event 2"," date": "2024-03-15"," venueId": 102 }

}`

class DataHandler{
    static user;
    static venue;
    static event;
    isreadUsers=false;
    isreadvenue=false;
    isreadevent=false;
    constructor(){
        // this.init();
    }
    init() {
        try {
            DataHandler.user=JSON.parse(userData)
            this.isreadUsers=true
            DataHandler.venue=JSON.parse(venueData)
            this.isreadvenue=true
            DataHandler.event=JSON.parse(eventData)
            this.isreadevent=true
        } catch (err) {
            console.error('Error reading JSON files:', err);
        }
    }


    getUsers(username,password) {
        if (!this.isReadUsers) {
            this.init();
        }
        try {
            let value=undefined
            if (username == undefined && password == undefined)
                value= DataHandler.user;
            else if (password==undefined){
                value= DataHandler.user[username]
            }
            else if (password!=undefined){
                value= (DataHandler.user[username]['password']==password?DataHandler.user[username]:undefined);

            }
            else{
                value=null
            }
            return (value!=undefined?value:null);
        }
        catch (err){

        }
    }
    getEvent(eventID) {
        if (!this.isreadevent) {
            this.init();
        }

        return DataHandler.event;
    }
    getVenue() {
        if (!this.isreadvenue) {
            this.init();
        }
        return DataHandler.venue;
    }
    insertUser(username,password,type){
        return;
    }
    insertVenue(id,name,location){return}
    insertEvent(id,name,date,venue){return}

    deleteUser(username,password,type){
        return;
    }
    deleteVenue(id,name,location){return}
    deleteEvent(id,name,date,venue){return}



}

let datahand=new DataHandler()
console.log(datahand.getUsers('asemhesham@gmail.com','123456'));