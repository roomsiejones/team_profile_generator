const Employee = require('./Employee')
// inheriting the parent class by using extends

class Intern extends Employee {
    
    constructor(name, id, email, school){
       super(name, id, email)
        this.school = school;
    }
    
    getSchool(){
        return this.school
    }

    getRole(){
        return 'Intern';
    }

}





module.exports = Intern;