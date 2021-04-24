const Empolyees = require("./Empolyees");

class Engineer extends Empolyees {
    constructor (github, email, job, id, name) {
        super(email, job, id, name,)
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
    getJob() {
        return "Engineer";
    }
}

module.exports = Engineer;