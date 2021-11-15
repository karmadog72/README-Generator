const inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");

var fs = require("fs");
// questions section
inquirer
  .prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name-(Required)",
      validate: (projectNameInput) => {
        if (projectNameInput) {
          return true;
        } else {
          console.log("Please enter your project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github link",
      message: "Enter your GitHub Link-(Required)",
      validate: (linkInput) => {
        if (linkInput) {
          return true;
        } else {
          console.log("Please enter your GitHub Link!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Email link",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description about your project-(Required)",
      default: true,
    },
    {
      type: "checkbox",
      name: "licenseType",
      message: "What did you build this project with? (Check all that apply)",
      choices: ["MIT", "Unlicense", "Apache2.0"],
    },

    {
      type: "input",
      name: "testing",
      message: "Are there any testing instructions?",
    },
  ])
  .then((data) => {
    console.log(data);
    var README = generateMarkdown(data);
    console.log(README);
    fs.writeFile("Generated-Readme.md", README, (err) => {
      if (err) throw err;
    });
  });
