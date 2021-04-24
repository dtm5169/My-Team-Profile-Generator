const Empolyees = require("./Empolyees");

class Intern extends Empolyees {
    constructor (email, job, id, name, school = "Intern") {
        super(email, job, id, name,)
        this.school = school;

    }
    getJob() {
        return "Intern";
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;