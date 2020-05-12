// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//Will also have: github // GitHub username, getGitHub(), getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return Engineer.name;
    }
}

module.exports = Engineer;