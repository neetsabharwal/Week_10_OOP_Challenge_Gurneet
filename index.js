const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/Employee.js");
const fs = require('fs');
const template = require('./src/template.js');

let htmlTemplate = '';
let employees = [];
let questions1 = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your Manager? ",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Employee ID of your Manager? ",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Email ID of your Manager? ",
  },
  {
    type: "input",
    name: "phone",
    message: "What is the Phone Number of your Manager? ",
  },
];

let questions2 = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your Engineer? ",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Employee ID of your Engnieer? ",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Email ID of your Engineer? ",
  },
  {
    type: "input",
    name: "username",
    message: "What is the Github Username of your Engineer? ",
  },
];

let questions3 = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your Intern? ",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Employee ID of your Intern? ",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Email ID of your Intern? ",
  },
  {
    type: "input",
    name: "school",
    message: "What is the School of your Intern? ",
  },
];

function init() {
  inquirer.prompt(questions1).then((data) => {
    let manager = new Manager(data.name, data.id, data.email, data.phone);
    employees.push(manager);
    //console.log(employees);
    buildTeam();
  });
}

function buildTeam() {
  inquirer
    .prompt({
      type: "list",
      name: "employeetype",
      message: "Which team member do you want to add? ",
      choices: ["Engineer", "Intern", "No more additions"],
    })
    .then((data) => {
      if (data.employeetype === "No more additions") {
        htmlTemplate = template(employees);
        console.log(htmlTemplate);
        return ;
      } else if (data.employeetype === "Engineer") {
        inquirer.prompt(questions2).then((data) => {
          let engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.username
          );
          employees.push(engineer);
          buildTeam();
        });
      } else if (data.employeetype === "Intern") {
        inquirer.prompt(questions3).then((data) => {
          let intern = new Intern(data.name, data.id, data.email, data.school);
          employees.push(intern);
          buildTeam();
        });
      }
    })
}

init();

