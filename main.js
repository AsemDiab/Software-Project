const StartPage=require('./JS-Files/startP.js')
const loginPage=require('./JS-Files/loginP')
const regPage=require('./JS-Files/regP')
const Page =require('./JS-Files/Page.js')


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
        while(true){
            Server.currentPage.printMenu();
            let staus=Server.currentPage.readOption();
            console.log(staus)
            switch (String(staus)){
                case "0":break;
                case "1":Server.currentPage=new StartPage();console.log(12);break;
                case "2":Server.currentPage=new regPage();break;
                case "3":Server.currentPage=new loginPage();break;
            }
        }
    }


}

Server.buildServer()




