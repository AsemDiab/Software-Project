
class Page{
    isOpen=false

    constructor() {
        this.openPage()
    }
    openPage(){
        this.isOpen=true
    }
    getOpen(){
        return this.isOpen
    }
    invalidOption(){

    }
}

module.exports = Page