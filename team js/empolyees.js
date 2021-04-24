

class Empolyees {
    constructor(email, job, id, name = "Employees") {
        this.email = email;
        this.job = job;
        this.id = id;
        this.name = name
    }
    getEmail(){
        return this.email;
    }
    getJob(){
        return this.job;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name
    }
}