const readlineSync = require("readline-sync");
const DB = require("./ourDataBase.js");
const Page = require("./Page.js");

class CpaP extends Page {
  pageName = null;
  phoneNumber = null;
  businessType = null;

  pageNameValid() {}
  pageNameTaken() {}
  pageNameInvalid() {}

  setName(pageName) {
    this.pageName = pageName;
  }
  setPhone(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
  setType(businessType) {
    this.businessType = businessType;
  }

  readData() {
    this.setName(pageName);
    this.setPhone(phoneNumber);
    this.setType(businessType);
  }

  clicks(option) {
    switch (option.toLowerCase().trim()) {
      case "create":
        break;
      case "return":
        break;
      default:
        console.log("Invalid option. Please choose an existed option");
    }
  }
}
module.exports = CpaP;

