const fs=require('fs')


const userData=`{
    "asemhesham@gmail.com":{"username":"AsemDiab","email": "asemhesham@gmail.com","password": "123456","type":"admin"},
    "sayed@hotmail.com":{"username":"Sayed","email": "sayed@hotmail.com","password": "123456","type":"admin"}
}`;
const venueData=`{ 
    "101" :   { "id": 101, "name": "Venue A", "location": "City X" ,"capcity":"100","price":"100$","Amenities":[],"url":"101"},
    "102" :   { "id": 102, "name": "Venue B", "location": "City Y" ,"capcity":"100","price":"100$","Amenities":[],"url":"102"}
}`
const eventData=`{
    "event-001" :{ "id": "event-001", "name": "Event 1", "date": "2024-03-01", "venueId": "101", "time":"3:00","theme":"black","Description":"","Count":"100","type":"party" },
    "event-002" :{ "id": "event-002", "name": "Event 2", "date": "2024-03-15", "venueId": "102", "time":"4:00","theme":"gray", "Description":"","Count":"100","type":"party" }
}`

const Reservation=`
    "asemhesham@gmail.com":{"email": "asemhesham@gmail.com","id": "event-001","time":"4:00",date,"date": "2024-03-15"},] 
`

class DataHandler{
    static user;
    static venue;
    static event;
    static isreadUsers=false;
    static isreadvenue=false;
    static isreadevent=false;
    static isUpdate=false;
    constructor(){
        DataHandler.init();
    }
    static init() {
        try {

            DataHandler.userMap=new Map()
            DataHandler.venueMap=new Map()
            DataHandler.eventMap=new Map()
            DataHandler.reservationMap=new Map()
            // console.log(typeof (DataHandler.userMap))

            let user=JSON.parse(userData);
            this.isreadUsers=true;
            for ( let key  in user){
                DataHandler.userMap.set(key,{username:user[key].username,email:user[key].email,password:user[key].password,type : user[key].type})

            }
            let venue=JSON.parse(venueData);
            for ( let key  in venue)
                DataHandler.insertVenue(key,venue[key].name,venue[key].location)
            this.isreadvenue=true;
            let event=JSON.parse(eventData);
            this.isreadevent=true;
            for ( let key  in event){
                DataHandler.insertEvent(key,event[key].name,event[key].date,event[key].venueId,event[key].time,event[key].theme,event[key].Description,event[key].Count,event[key].type)
            }
            // let  reservation=JSON.parse(Reservation);
            // for ( let key  in reservation){
            //     DataHandler.insertReservation(key,event[key].id ,event[key].date,event[key].time)
            // }

            // console.log(DataHandler.userMap)
        } catch (err) {
            console.error('Error reading JSON files:', err);
        }
    }

     static insertUser(_email,username,password,type){

        if(DataHandler.userMap.get((_email.trim()).toLowerCase())!=undefined&& !DataHandler.isUpadte)
            return;
        var x={
            username:username.trim(),
            email:_email.trim(),
            password:password.trim(),
            type : type.trim()
         }
        DataHandler.userMap.set((_email.trim()).toLowerCase(),x)
       // console.log(DataHandler.userMap)

    }


    static insertVenue(id,name,location,capcity,price,Amenities){
        
        var x= {
            id: id,
             name: name,
             location:location
            ,capcity:capcity,
            price:price,
            Amenities:String(Amenities)
                }

             DataHandler.venueMap.set(id,x)
       
    }
    static insertReservation(email,id,date,time ){

        if(email==undefined)
            return

        var x= {
            id: id,
            date: date
            ,time:time
            ,email:email                }

        DataHandler.reservationMap.set(email,x)


    }
    static insertEvent(id,name,date,venue,time, theme,Description,Count,type ){

        if(id==undefined)
            id=DataHandler.eventMap.size;

        var x= {
            id: id,
             name: name,
             date: date,
             venueId: venue
            ,time:time,
            theme:theme,
            Description:Description,
            Count:Count
            ,type:type                }

             DataHandler.eventMap.set(id,x)


    }

   static updateUser(_email,username,password,type){

    if(_email!=undefined) {
            let row = DataHandler.userMap.get(_email);
            if(row==undefined)
                return;
                let newUsername= (username != undefined ? username :row.username);
                let newPassword= (password != undefined ? password.trim() :row.password);
                let newType= (type != undefined ? type.trim() :row.type)
                console.log("update email=",_email,"to  ",newUsername,newPassword,newType)

        DataHandler.isUpdate=true
            DataHandler.insertUser(_email,newUsername,newPassword,newType)
        DataHandler.isUpdate=false
        }
    }
   static updateEvent(id,name,date,venue,time, theme,Description, Count, type){
       
    if(id!=undefined) {
        console.log("================"+Count)
        let row = DataHandler.eventMap.get(id);
            if(row==undefined)
            return;
            let newName = ((name != undefined && name != '') ? name :row.name);
            let newDate= ((date != undefined && date != '') ? date.trim() :row.date);
            let newVenue= ((venue != undefined && venue != '') ? venue.trim() :row.venue);
            let newtime= ((time != undefined && time != '') ? time.trim() :row.time);
            let newtheme= ((theme != undefined && theme != '') ? theme.trim() :row.theme);
            let newDescription= ((Description != undefined && Description != '') ? Description.trim() :row.Description);
            let newCount= ((Count != undefined && Count != '')? Count.trim() :row.Count);
            let newtype= ((type != undefined &&type != '') ? type.trim() :row.type);

            DataHandler.insertEvent(id,newName,newDate,newVenue,newtime, newtheme ,newDescription, newCount, newtype);
        }
    }
   static updateVenue( id, name,location,capcity,price,Amenities){
    if(id!=undefined) {
        let row = DataHandler.venueMap.get(id);
        if(row==undefined)
            return;
            let newID = row.id;
            let newName= (name != undefined ? name :row.name);
            let newLocation= (location != undefined ? location.trim() :row.location);
            let newCapcity= (capcity != undefined ? capcity.trim() :row.capcity);
            let newPrice= (price != undefined ? price.trim() :row.price);
            let newAmenities= (Amenities != undefined ? Amenities.toString().trim() :row.Amenities);
        DataHandler.insertVenue(newID , newName , newLocation,newCapcity,newPrice,newAmenities);
    }}


}

module.exports=DataHandler;