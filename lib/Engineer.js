// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//Will also have: github // GitHub username, getGitHub(), getRole() // Overridden to return 'Engineer'

//Requires the Employee.js file
const Employee = require("./Employee");


//Extension of the Employee.js file and code, to add more information:
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //Returns the Engineer's github information
    getGithub() {
        return this.github;
    }
    //Returns the Engineer's information
    getRole() {
        return Engineer.name;
        //or return Engineer ?//
    }
}

//Exports the Engineer's information to be used elsewhere in the project
module.exports = Engineer;