// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//Will also have: officeNumber and getRole() // Overridden to return 'Manager'

//Requires the Employee.js file
const Employee = require("./Employee");


//Extension of the Employee.js file and code, to add more information:
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
//Returns the Manager's office number
    getOfficeNumber(){
        return this.officeNumber;
    }
//Returns the Manager information
    getRole(){
        return Manager.name;
        // return Manager ?//
    }
}

//Exports the Manager's information to be used elsewhere in the project
module.exports = Manager;