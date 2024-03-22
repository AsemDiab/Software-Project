const readlineSync = require("readline-sync");
const DB = require("./ourDataBase.js");
const Page = require("./Page.js");
const sharedD=require('./SharedData')
class CpaP extends Page {
  pageName = null;
  phoneNumber = null;
  businessType = null;
  nextPage=0
  pageNameValid(namePage) {
    if(namePage.trim() == '' || namePage == undefined || namePage == null)return false;

    let tempMap=DB.BussinessAccountMap;
    let boolAnswer = true;

    tempMap.forEach((value, key) => {
      let nameCheck = namePage;
      if (value.PageName == nameCheck) boolAnswer = false;
    });
    console.log(boolAnswer+"<--");
    return boolAnswer;
  }

  openMyAccountPage() {
    this.myAccountPage = 1;
    this.nextPage = 8;
  }

  setName(pageName) {
    this.pageName = pageName;
  }
  setPhone(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
  setType(businessType) {
    this.businessType = businessType;
  }
  setEmail(email) {
    this.email = email;
  }

  readData(pageName, phoneNumber, businessType) {
    this.setName(pageName);
    this.setPhone(phoneNumber);
    this.setType(businessType);
    this.setEmail(sharedD.email);
    if(this.pageNameValid(pageName)){
      DB.insertBussinessAccount(this.email,pageName,phoneNumber,businessType);
      console.log(DB.BussinessAccountMap);
    }
  }
  printMenu() {
    console.log(`
    select the button by enter the number: 
      0: Create Business Account
      1: Return to MyAccount Page
      `);
  }

  // make this functon to read type and return string that indcate the type
  readType(){
    console.log(`----types---
                  0:  `)
  }

  clicks(option) {
    switch (option.trim()) {
      case "create Business Account":
        let pageNAme=readlineSync.question('enter page Name')
         let phoneNumber=readlineSync.question('enter phone number')
          // let bussinessType=this.readType();
          let bussinessType=readlineSync.question('enter Type')
        this.readData(pageNAme,phoneNumber,bussinessType)
        console.log("create business account case!!");
        break;
      case "return":
        this.myAccountPage();
        console.log("return!!");
        break;
      default:
        console.log("Invalid option. Please choose an existed option");
    }
  }

  readOption(){
    this.insturctions=["create Business Account","return"]
    let option=readlineSync.question('enter option')
    if(option<2)
      this.clicks(this.insturctions[option])
    return this.nextPage;
  }
}
module.exports = CpaP;

