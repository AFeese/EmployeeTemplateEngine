// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//Intern to also have: *school, *getSchool(), and *getRole() // Overridden to return 'Intern'

//Requires the Employee.js file
const Employee = require("./Employee");


//Extension of the Employee.js file and code, to add more information: 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    //Returns the name of the school
    getSchool() {
        return this.school;
    }
    //Returns the Intern information
    getRole() {
        return Intern.name;
        //or return Intern?//
    }
}

//Exports the Intern's information to be used elsewhere in the project
module.exports = Intern;