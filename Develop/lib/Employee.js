// TODO: Write code to define and export the Employee class
//Needs: name, id, email, getName(), getId(), getEmail(), getRole() // Returns 'Employee'

//Starting with the main class of employee, to be extended by the Engineer, Intern, and Manager
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//Returns the name of the person
    getName(){
        return this.name;
    }
//Returns the "id" or number of the person
    getId(){
        return this.id;
    }
//Returns the email of the person
    getEmail(){
        return this.email;
    }
//Specifies which role the user has selected for the employee
    getRole(){
        return Employee.name;
        //or return Employee ?//
    }
}

//Exports the Employee's information to be used elsewhere in the project
module.exports = Employee;