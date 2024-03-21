const StartPage=require('./JS-Files/startP.js')
const loginPage=require('./JS-Files/loginP')
const regPage=require('./JS-Files/regP')
const EventManagementPage=require('./JS-Files/EventManagementPage')
const UserPage=require('./JS-Files/userP')
const ProfilePage=require('./JS-Files/profileP')
const Page =require('./JS-Files/Page.js')
const adminPage =require('./JS-Files/Page.js')
const DB=require('./JS-Files/ourDataBase')
const readlineSync = require("readline-sync");

class Server{
    static currentPage=new Page();
     static PageName;
    static UserEmail;
    static venueID;
    static venderID;
    static buildServer(){
       Server.currentPage=new StartPage();
       Server.excute()
    }
    static excute(){
        DB.init()
        while(true){
            Server.currentPage.printMenu();
            let status=Server.currentPage.readOption();
            console.log(status)
            let password = readlineSync.question("Enter Your Password:");
            switch (String(status)){
                case "0":break;
                case "1":Server.currentPage=new StartPage();break;
                case "2":Server.currentPage=new regPage();break;
                case "3":Server.currentPage=new loginPage();break;
                case "4":Server.currentPage=new UserPage();break;
                case "5":Server.currentPage=new EventManagementPage();break;
                case "6":Server.currentPage=new ProfilePage();break;
                case "7":Server.currentPage=new adminPage();break;
                case "8":Server.currentPage=new MyAccount()
            }
        }
    }


}

Server.buildServer()
module.exports=Server

