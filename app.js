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

//Empty array holds each employee type's information after user has entered the information into the prompts.
const teamArray = [];

//Created variable to hold the answers from user selection of employee type
let teamSelection;

//First function to run starts the selection:
teamMemberOptions();

//Team member selection formed here:
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
    //Allows us to see all answers collected from the teamMemeberOptions object:
  }).then(answers => {
    teamSelection = answers;
    console.log(answers);

    // HINT: each employee type (manager, engineer, or intern) has slightly different
    // information; write your code to ask different questions via inquirer depending on
    // employee type.

    //First prompts for manager
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

        //takes the answers (user input) from manager object and stores them to communicate with the Class:
      ]).then(function (answers) {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);

        //pushes answers from Manager to the employee array
        console.log(manager);
        teamArray.push(manager);
        teamMemberOptions();
      })
        //catches any errors with function
        .catch(function (err) {
          console.log(err);
        })

      // HINT: each employee type (manager, engineer, or intern) has slightly different
      // information; write your code to ask different questions via inquirer depending on
      // employee type.

      //Prompts for Engineer
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

        //takes the answers (user input) from manager object and stores them to communicate with the Class:
      ]).then(function (answers) {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);

        //pushes answers from Engineer to team array
        console.log(engineer);
        teamArray.push(engineer);
        teamMemberOptions();
      })
        //catches any errors from function
        .catch(function (err) {
          console.log(err);
        })

      // HINT: each employee type (manager, engineer, or intern) has slightly different
      // information; write your code to ask different questions via inquirer depending on
      // employee type.

      //prompts for Intern
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

        //takes the answers (user input) from manager object and stores them to communicate with the Class:
      ]).then(function (answers) {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);

        //pushes answers from Intern object to team array
        console.log(intern);
        teamArray.push(intern);
        teamMemberOptions();
      })

        //catches any errors from function
        .catch(function (err) {
          console.log(err);
        })

      //condition for if the user selects "Done" to end the prompts
    } else if (teamSelection.team === "Done") {
      // After the user has input all employees desired, call the `render` function (required
      // above) and pass in an array containing all employee objects; the `render` function will
      // generate and return a block of HTML including templated divs for each employee!

      //Calling the render function with the information we pushed to the teamArray, sends it to the HTML.
      let html = render(teamArray);
      // After you have your html, you're now ready to create an HTML file using the HTML
      // returned from the `render` function. Now write it to a file named `team.html` in the
      // `output` folder. You can use the variable `outputPath` above target this location.
      // Hint: you may need to check if the `output` folder exists and create it if it
      // does not.

      //Writes the HMTL file containing all employees entered to the outputPath folder, makes the team.html page.
      fs.writeFile(outputPath, html, function (err) {

        if (err) {
          console.log(err);
        }

        console.log("success");
      });
    }
  });
}

