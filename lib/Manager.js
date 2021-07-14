const Employee = require('./Employee')
// inheriting the parent class by using extends

class Manager extends Employee {
    
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    
    getofficeNumber(){
        return this.officeNumber
    }

    getRole(){
        return 'Manager';
    }

}





module.exports = Manager;