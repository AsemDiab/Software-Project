const fs=require('fs')


const userData=`{
    "asemhesham@gmail.com":{"username":"AsemDiab","email": "asemhesham@gmail.com","password": "123456","type":"admin"}
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
    static isreadUsers=false;
    static isreadvenue=false;
    static isreadevent=false;
    constructor(){
        DataHandler.init();
    }
    static init() {
        try {

            DataHandler.userMap=new Map()
            DataHandler.venueMap={}
            DataHandler.eventMap={}
            // .log(typeof (DataHandler.userMap))

            let user=JSON.parse(userData);
            DataHandler.isreadUsers=true;
            for ( let key  in user){
                DataHandler.userMap.set([key],{username:user[key].username,email:user[key].email,password:user[key].password,type : user[key].type})
                // .log(user[key])
            }
            let venue=JSON.parse(venueData);
            for ( let key  in venue)
                DataHandler.venueMap[key]=venue[key]
            DataHandler.isreadvenue=true;

            let event=JSON.parse(eventData);
            DataHandler.isreadevent=true;
            for ( let key  in event)
                DataHandler.eventMap[key]=event[key]
            // .log(DataHandler.userMap)
        } catch (err) {
           console.error('Error reading JSON files:', err);
        }
    }

     static insertUser(_email,username,password,type){


        var x={
            username:username.trim(),
            email:_email.trim(),
            password:password.trim(),
            type : type.trim()
         }
        DataHandler.userMap.set(_email.trim(),x)
       // .log(DataHandler.userMap)

    }
     
    static insertVenue(id,name,location){  
        var x={
        name:name.trim(),
        id:id.trim(),
        location:location.trim(),
     }
    DataHandler.venueMap.set(id.trim(),x)
}
    static insertEvent(id,name,date,venue){  
        var x={
        name:name.trim(),
        id:id.trim(),
        date:date.trim(),
        venue : venue.trim()
     }
    DataHandler.eventMap.set(id.trim(),x)
}

    static deleteUser(username,password,type){
        return;
        DataHandler.userMap.delete(username);
    }
    static deleteVenue(id,name,location){return}
    static deleteEvent(id,name,date,venue){return}



}

let datahand=new DataHandler()
// .log(datahand.getUsers());
DataHandler.insertUser('asemdiab@gmail.com',"asemHesham",'2256','user')
// console.log(DataHandler.userMap.get('asemdiab@gmail.com'));
DataHandler.userMap.delete('asemdiab@gmail.com')
console.log(DataHandler.userMap.get('asemdiab@gmail.com'));