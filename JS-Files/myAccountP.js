const readlineSync = require("readline-sync");
const DB = require("../JS-Files/ourDataBase");
const Page = require("../JS-Files/Page.js");

class myAccount extends Page{

    creatAccount = false;
    loginAccount = false;
    returnFlage = false

    init(){
        this.creatAccount = false;
        this.loginAccount = false;
        returnFlage = false
    }

    userProfileInfo(){
        console.log('display user account info');
    }

    creatBusinessAccount(){
        this.creatAccount = true;
    }
    isNamePageExist(name){
        if(name == 'facebook'){
            return true;
        }
        return false;
    }
    loginBusinessAccount(pageName){
        this.loginAccount = true;
        if(this.isNamePageExist(pageName)){
            console.log('user enter: '+ pageName);
            console.log("page was found , welcome to your business");

        }else if(pageName != null && pageName != undefined && pageName != ""){
            console.log('user enter: '+ pageName)
            console.log("sorry ,we could not found your page");
        }
        else{
            console.log("invalid name input");
        }
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