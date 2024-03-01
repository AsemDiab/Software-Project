const Page=require('../JS-Files/Page.js')
const DB=require('../JS-Files/DataHandler.js')
class EventManagementPage extends Page{

    warningFlag=0;
    option=-1
    constructor() {
        super()
        this.openPage();
    }
    addEvent(date,time,theme,location,description,attendeeCount,eventTyp){

        DB.insertEvent(id,date,time,theme,location,description,attendeeCount,eventTyp)

    }
    editEvent(id,name,date,venuetime, them,Description, Count, type){
        DB.updateEvent(id,name,date,venuetime, them,Description, Count, type)

    }
    deleteEvent(id){
        this.isdeleted=false
        if(id==undefined)
            return
        DB.eventMap.delete(id)
        this.isdeleted=true
    }
    run(){
        switch (this.option){
            case 1:
                this.addEvent();
                break;
            case 2:
                this.editEvent()
                break;
            case 3:
                this.deleteEvent()
                break;
            default:
                this.invalidOption()
                break;
        }
    }
}

let p=new EventManagementPage()

module.exports=EventManagementPage()