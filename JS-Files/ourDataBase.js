const fs=require('fs')


const userData=`{
    "asemhesham@gmail.com":{"username":"AsemDiab","email": "asemhesham@gmail.com","password": "123456","type":"admin"}
}`;
const venueData=`{ 
    "101" :   { "id": 101, "name": "Venue A", "location": "City X" ,"capcity":"100","price":"100$","Amenities":""},
    "102" : { "id": 102, "name": "Venue B", "location": "City Y","capcity":"100","price":"100$","Amenities":"" }
}`
const eventData=`{
    "event-001" :{ "id": "event-001", "name": "Event 1", "date": "2024-03-01", "venueId": "101","time":"3:00","them":"black","Description":"","Count":"100","type":"party" },
    "event-002":{ "id": "event-002","name": "Event 2","date": "2024-03-15","venueId": "102" ,"time":"3:00","them":"black","Description":"","Count":"100","type":"party"}

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
            DataHandler.venueMap=new Map()
            DataHandler.eventMap=new Map()
            // console.log(typeof (DataHandler.userMap))

            let user=JSON.parse(userData);
            this.isreadUsers=true;
            for ( let key  in user){
                DataHandler.userMap.set([key],{username:user[key].username,email:user[key].email,password:user[key].password,type : user[key].type})
            }
            let venue=JSON.parse(venueData);
            for ( let key  in venue)
            DataHandler.insertVenue(key,venue[key].name,venue[key].location)
            this.isreadvenue=true;
            let event=JSON.parse(eventData);
            this.isreadevent=true;
            for ( let key  in event){
                DataHandler.insertEvent(key,event[key].name,event[key].date,event[key].venueId)
            }
            // console.log(DataHandler.userMap)
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
    static insertEvent(id,name,date,venue,time, them,Description,Count,type ){

        if(id==undefined)
            id=DataHandler.eventMap.size()

        var x= {
            id: id,
             name: name,
             date: date,
             venueId: venue
            ,time:time,
            them:them,
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
            

            DataHandler.insertUser(_email,newUsername,newPassword,newType)

        }
    }
   static updateEvent(id,name,date,venuetime, them,Description, Count, type){
       
    if(id!=undefined) {
        let row = DataHandler.eventMap.get(id);
        if(row==undefined)
            return;
            let newName= (name != undefined ? name :row.name);
            let newDate= (date != undefined ? date.trim() :row.date);
            let newVenue= (venue != undefined ? venue.trim() :row.venue);
            let newtime= (time != undefined ? time.trim() :row.time);
            let newthem= (them != undefined ? them.trim() :row.them);
            let newDescription= (Description != undefined ? Description.trim() :row.Description);
            let newCount= (Count != undefined ? Count.trim() :row.Count);
            let newtype= (type != undefined ? type.trim() :row.type);


        DataHandler.insertEvent(id,name,date,venuetime, them,Description, Count, type)

    }
    }
   static updateVenue( id, name,location,capcity,price,Amenities){
    if(id!=undefined) {
        let row = DataHandler.venueMap.get(id);
        if(row==undefined)
            return;
            let newName= (name != undefined ? name :row.name);
            let newLocation= (location != undefined ? location.trim() :row.location);
            let newCapcity= (capcity != undefined ? capcity.trim() :row.capcity);
            let newPrice= (price != undefined ? price.trim() :row.price);
            let newAmenities= (Amenities != undefined ? Amenities.toString().trim() :row.Amenities);
        DataHandler.insertVenue(id , newName , newLocation,newCapcity,newPrice,newAmenities);
    }}}

module.exports=DataHandler;