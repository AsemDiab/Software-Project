const readlineSync = require("readline-sync");
const DB = require("../JS-Files/ourDataBase");
const Page = require("../JS-Files/Page.js");
const Server=require("../main")

class myAccount extends Page{

    creatAccount = false;
    loginAccount = false;
    returnFlage = false

    init(){
        this.creatAccount = false;
        this.loginAccount = false;
        this.returnFlage = false
    }

    userProfileInfo(){
        console.log('display user account info');
        console.log(Server.UserEmail)
        console.log( DB.userMap.get(Server.UserEmail))

        DB.userMap.get(Server.UserEmail)
    }

    creatBusinessAccount(){
        this.creatAccount = true;
    }
    loginBusinessAccount(){
        this.loginAccount = true;
    }
    returnBack(){
        this.returnFlage = true;
    }

    printMenu(){
        console.log(`
        select the button by enter the number: 
            0: user info
            1: Create business account
            2: login business account
            3: return
        `);
    }
    
    run(theAction){
        switch(theAction.trim()){
            case "user info":
                this.userProfileInfo();
                console.log('in user info case');
                break;
            case "Create business account":
                this.creatBusinessAccount();
                console.log('in create business account case');
                break;
            case "login business account":
                this.loginBusinessAccount();
                console.log('in login business account case');
                break;
            case "return":
                this.returnBack();
                console.log('in return case');
                break;
            default:
                console.log("invalid input");
        }   
    }
}

module.exports = myAccount;