const DB= require('../JS-Files/ourDataBase')
const readlineSync = require("readline-sync");
const Server=require("../main")
DB.init()
class VenuePage{

    nextPage=0

    clickButton(option){

        switch (option){
            case "view venue":this.viewVenue();break;
            case "delete":
                let id=readlineSync.question('enter id to delete');
                this.deleteVenue(id);
                break;
            case "add":
                let idValue=readlineSync.question('Enter ID: ');
                let name=readlineSync.question('enter name');
                let location=readlineSync.question('enter location');
                let capacity=readlineSync.question('enter capcity');
                let price=readlineSync.question('enter price ');
                let Amenities=readlineSync.question('enter Amenities sprater by , ');
                Amenities=Amenities.split(',');
                this.DB.insertVenue(idValue,name,location,capacity,price,Amenities,idValue);
                break;
            case  "book":
                idValue=readlineSync.question('enter venue id ');
                let startDate=readlineSync.question('enter start Date of booking in formate (yyyy-mm-dd):');
                let endDate=readlineSync.question('enter end Date of booking in formate (yyyy-mm-dd):');
                let startTime=readlineSync.question('enter start time of booking in formate (HH:mm):');
                let endTime=readlineSync.question('enter start time of booking in formate (HH:mm):');
                this.bookVenue(Server.email,idvalue,startTime,endTime,startDate,endDate);
                break;

        }

    }
   static makeCol(option,size=10){
        let whiteSpace=''
        if(option==undefined) {
            for (let i = 0; i < size; i += 1)
                whiteSpace += ' ';

            return  whiteSpace;
        }
            let actualSize=option.length
        while (actualSize<size){
            whiteSpace+=' '
            actualSize+=1
        }
        return option+whiteSpace
    }
    viewVenue(){
        DB.venueMap.forEach((value,key)=>{
            console.log(`${VenuePage.makeCol(key) } | ${VenuePage.makeCol(key) } | ${VenuePage.makeCol(DB.venueMap.get(key).name) } | ${VenuePage.makeCol(DB.venueMap.get(key).location) } | ${VenuePage.makeCol(DB.venueMap.get(key).capcity) } | ${VenuePage.makeCol(DB.venueMap.get(key).price) } | ${VenuePage.makeCol(DB.venueMap.get(key).Amenities) } |  ${VenuePage.makeCol(DB.venueMap.get(key).url) } |`)

        })
    }

    searchByAtteibute(id,name,location ,capacity,price){
        let result=''
       let tempMap=DB.venueMap

        if(id!=undefined) {
            let key=id.toString()

        return `${VenuePage.makeCol(key)} | ${VenuePage.makeCol(DB.venueMap.get(key).name)} | ${VenuePage.makeCol(DB.venueMap.get(key).location)} | ${VenuePage.makeCol(DB.venueMap.get(key).capcity)} | ${VenuePage.makeCol(DB.venueMap.get(key).price)} | ${VenuePage.makeCol(DB.venueMap.get(key).Amenities)} |  ${VenuePage.makeCol(DB.venueMap.get(key).url)} |\n`

        }
        if (name!=undefined)
            tempMap=this.selectByname(name,tempMap)

        if (location!=undefined)
            tempMap=this.selectByLocation(location,tempMap)

        if (capacity!=undefined)
            tempMap=this.selectByCapacity(capacity,tempMap)

        if (price!=undefined)
            tempMap=this.selectByPrice(price,tempMap)

        tempMap.forEach((value,key)=>{
            result+=`${VenuePage.makeCol(key) } | ${VenuePage.makeCol(DB.venueMap.get(key).name) } | ${VenuePage.makeCol(DB.venueMap.get(key).location) } | ${VenuePage.makeCol(DB.venueMap.get(key).capcity) } | ${VenuePage.makeCol(DB.venueMap.get(key).price) } | ${VenuePage.makeCol(DB.venueMap.get(key).Amenities,50) } |  ${VenuePage.makeCol(DB.venueMap.get(key).url) } |\n`
        })
        return result;

    }
    selectByname(name,table){
        let tempMap=new Map()

        table.forEach((value,key)=>{
            if(name.toLowerCase().trim()==value.name.toLowerCase().trim())
                tempMap.set(key,value);
        })

        return tempMap
    }
    selectByLocation(location,table){
        let tempMap=new Map()

        table.forEach((value,key)=>{
            if(location.toLowerCase().trim()==value.location.toLowerCase().trim())
                tempMap.set(key,value);
        })

        return tempMap
    }
    selectByCapacity(capacity,table){
        let tempMap=new Map()

        table.forEach((value,key)=>{
            if(capacity.trim()==value.capcity.trim())
                tempMap.set(key,value);
        })

        return tempMap
    }

    selectByPrice(price,table){
        let tempMap=new Map()

        table.forEach((value,key)=>{
            if(price.trim()==value.price.trim())
                tempMap.set(key,value);
        })

        return tempMap
    }

   compareTimes(time1, time2) {
        const [hours1, minutes1] = time1.split(":").map(Number);
        const [hours2, minutes2] = time2.split(":").map(Number);

        if (hours1 < hours2) {
            return -1;
        } else if (hours1 > hours2) {
            return 1;
        } else {
            if (minutes1 < minutes2) {
                return -1;
            } else if (minutes1 > minutes2) {
                return 1;
            } else {
                return 0;
            }
        }
    }
    isBooked(id,startTime,endTime,startDate,endDate){

        let tempMap=DB.reservationMap
        let date1=startDate
        let date2=endDate
        let time1=startTime
        let time2=endTime

        const [year1, month1, day1] = date1.split("-").map(Number);
        const [year2, month2, day2] = date2.split("-").map(Number);

        const [hours1, minutes1] = time1.split(":").map(Number);
        const [hours2, minutes2] = time2.split(":").map(Number);

        const date1Obj = new Date(year1, month1 - 1, day1, hours1, minutes1);
        const date2Obj = new Date(year2, month2 - 1, day2, hours2, minutes2);
        let boolAnswer=false

        tempMap.forEach((value,key)=>{
            let newDate1=value.startDate
            let newDate2=value.endDate
            let newTime1=value.startTime
            let newTime2=value.endTime
                console.log(newDate1,newDate2,newTime1,newTime2)
            const [newyear1, newmonth1, newday1] = newDate1.split("-").map(Number);
            const [newyear2, newmonth2, newday2] = newDate2.split("-").map(Number);

            const [newhours1, newminutes1] = newTime1.split(":").map(Number);
            const [newhours2, newminutes2] = newTime2.split(":").map(Number);

            const newdate1Obj = new Date(newyear1, newmonth1 - 1, newday1, newhours1, newminutes1);
            const newdate2Obj = new Date(newyear2, newmonth2 - 1, newday2, newhours2, newminutes2);


            if(newdate1Obj>=date1Obj&&date2Obj>newdate1Obj)
                boolAnswer= true
            else if(newdate2Obj<=date2Obj&&newdate2Obj>date1Obj)
                boolAnswer=  true;



        })
        return boolAnswer; 

    }

    bookVenue(email,id,startTime,endTime,startDate,endDate){
        console.log(id,startTime,endTime,startDate,endDate)
        if(!this.isBooked(id,startTime,endTime,startDate,endDate)) {
            let rid='rev-'+DB.reservationMap.size
            DB.insertReservation(rid, email, id, startDate, endDate, startTime, endTime)
            console.log(DB.reservationMap)
        }
    }

    deleteVenue(id){
        this.viewVenue()
        DB.venueMap.delete(id)
    }
}

module.exports = VenuePage

