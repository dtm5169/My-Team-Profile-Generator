const Empolyees = require("./Empolyees");

class Manager extends Empolyees {
    constructor (officeNumber, email, job, id, name) {
        super(email, job, id, name,)
        this.officeNumber = officeNumber;

    }
    getJob() {
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;