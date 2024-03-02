const Page=require('../JS-Files/Page')

class ProfilePage {
    isManuDisplaied = false
    isRevelitionDisplaied = false
    isMyAccountOpened = false
    isNotificstion = false
    isLogout = false
    isReturnToUserHome = false
    isuserWarned=false


    constructor() {

    }
    init(){
       this.isManuDisplaied=false
       this.isRevelitionDisplaied=false
       this.isMyAccountOpened=false
       this.isNotificstion=false
        this.isReturnToUserHome=false
    }

    logout(){
        this.isLogout=true
    }
    displayRevelation(){
        this.isRevelitionDisplaied=true
    }
    myAccount(){
        this.isMyAccountOpened=true
    }
    displayNotification(){
        this.isNotificstion=true
    }

    returnBack(){
        this.isReturnToUserHome=true
    }
    printMenu(){
        console.log(`
        select the button by enter the number: 
        0: Revelation
        1: my account
        2: notifycation
        3: logout
        4: return
        `)
    }
    run(theButton){

        switch (theButton)
        {
            case "Reservation":   this.displayRevelation()
                                ;break;
            case "my account":  this.myAccount()
                                ;break;
            case "notification":    this.displayNotification()
                                ;break;
            case "Logout":  this.logout()
                                ;break;
            case "return": this.returnBack();
                break;
            default:
                this.invalidOption();
        }

    }
    invalidOption(){

        this.isuserWarned=true
    }


}

module.exports = ProfilePage;
