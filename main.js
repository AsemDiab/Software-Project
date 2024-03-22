
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
const MyAccount=require("./JS-Files/myAccountP")
 const CreateBussinessAccount=require('./JS-Files/createBAccountP')
 const BussinessAccount=require('./JS-Files/businessAccountP')
const VenuePage=require('./JS-Files/venue')

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
            if(status==undefined)
            console.log('not work')
            switch (String(status)){
                case "0":break;
                case "1":Server.currentPage=new StartPage();break;
                case "2":Server.currentPage=new regPage();break;
                case "3":Server.currentPage=new loginPage();break;
                case "4":Server.currentPage=new UserPage();break;
                case "5":Server.currentPage=new EventManagementPage();break;
                case "6":Server.currentPage=new ProfilePage();break;
                case "7":Server.currentPage=new adminPage();break;
                case "8":Server.currentPage=new MyAccount();break;
                case "9":Server.currentPage=new CreateBussinessAccount();break;
                case "10":Server.currentPage=new BussinessAccount();break;
                case "11":Server.currentPage=new VenuePage();break;
            }
        }
    }

}

Server.buildServer()
module.exports=Server;




Server.buildServer()
module.exports=Server

