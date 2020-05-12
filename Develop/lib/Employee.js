// TODO: Write code to define and export the Employee class
//Needs: name, id, email, getName(), getId(), getEmail(), getRole() // Returns 'Employee'

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return Employee.name;
        //or return Employee.name; ?//
    }
}

module.exports = Employee;