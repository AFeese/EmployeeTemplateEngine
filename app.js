const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const empArray = [];

let teamSelection;

teamMemberOptions();
function teamMemberOptions() {
  inquirer.prompt({
    type: "list",
    name: "team",
    message: "Please select a team member to add or Done when finished: ",
    choices: [
      "Manager",
      "Engineer",
      "Intern",
      "Done"
    ]
  }).then(answers => {
    teamSelection = answers;
    console.log(answers);

    // HINT: each employee type (manager, engineer, or intern) has slightly different
    // information; write your code to ask different questions via inquirer depending on
    // employee type.

    if (teamSelection.team === 'Manager') {
      inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is your manager's name?"
        },
        {
          type: "input",
          name: "id",
          message: "What is your manager's id number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your manager's email?",
        },
        {
          type: "input",
          name: "office",
          message: "What is the manager's office number?"
        }

      ]).then(function (answers) {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);

        console.log(manager);
        empArray.push(manager);
        teamMemberOptions();
      })
        .catch(function (err) {
          console.log(err);
        })

      // HINT: each employee type (manager, engineer, or intern) has slightly different
      // information; write your code to ask different questions via inquirer depending on
      // employee type.

    } else if (teamSelection.team === 'Engineer') {
      inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is your Engineer's name?"
        },
        {
          type: "input",
          name: "id",
          message: "What is your Engineer's id number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your Engineer's email?",
        },
        {
          type: "input",
          name: "github",
          message: "What is the Engineer's GitHub username?"
        }

      ]).then(function (answers) {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);

        console.log(engineer);
        empArray.push(engineer);
        teamMemberOptions();
      })
        .catch(function (err) {
          console.log(err);
        })

      // HINT: each employee type (manager, engineer, or intern) has slightly different
      // information; write your code to ask different questions via inquirer depending on
      // employee type.

    } else if (teamSelection.team === 'Intern') {
      inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is your Intern's name?"
        },
        {
          type: "input",
          name: "id",
          message: "What is your Intern's id number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your Intern's email?",
        },
        {
          type: "input",
          name: "school",
          message: "What school does your Intern attend?"
        }

      ]).then(function (answers) {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);

        console.log(intern);
        empArray.push(intern);
        teamMemberOptions();
      })
        .catch(function (err) {
          console.log(err);
        })

    } else if (teamSelection.team === "Done") {
      // After the user has input all employees desired, call the `render` function (required
      // above) and pass in an array containing all employee objects; the `render` function will
      // generate and return a block of HTML including templated divs for each employee!
      let html = render(empArray);
      // After you have your html, you're now ready to create an HTML file using the HTML
      // returned from the `render` function. Now write it to a file named `team.html` in the
      // `output` folder. You can use the variable `outputPath` above target this location.
      // Hint: you may need to check if the `output` folder exists and create it if it
      // does not.
      fs.writeFile(outputPath, html, function (err) {

        if (err) {
          console.log(err);
        }

        console.log("success");
      });
    }
  });
}

