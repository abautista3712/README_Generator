const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "Input",
      name: "gitHubUsername",
      message: "What is your GitHub username?"
    },
    {
      type: "Input",
      name: "projectName",
      message: "What would you like to name your project?"
    },
    {
      type: "Input",
      name: "description",
      message: "Please provide a brief description of your project:"
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license for your project:",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    }
  ])
  .then(function(response) {
    fs.appendFile("README.md", "\r\n" + response.gitHubUsername, function(err) {
      if (err) {
        console.log("Error");
      } else {
        console.log("Write File 1 Success!");
      }
    });
    fs.appendFile("README.md", "\r\n" + response.projectName, function(err) {
      if (err) {
        console.log("Error");
      } else {
        console.log("Write File 2 Success!");
      }
    });
    fs.appendFile("README.md", "\r\n" + response.description, function(err) {
      if (err) {
        console.log("Error");
      } else {
        console.log("Write File 3 Success!");
      }
    });
    fs.appendFile("README.md", "\r\n" + response.license, function(err) {
      if (err) {
        console.log("Error");
      } else {
        console.log("Write File 4 Success!");
      }
    });
  });

// $.ajax({
//   url: "https://github.com/login/oauth/authorize"
//   method: "GET"
// }).then(function(response){
//   console.log("ajax test success")
// })
