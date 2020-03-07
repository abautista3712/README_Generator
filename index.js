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
    },
    {
      type: "Input",
      name: "installDep",
      message: "What command should be run to install dependencies?",
      default: "npm i"
    },
    {
      type: "Input",
      name: "runTest",
      message: "What command should be run to run tests?",
      default: "npm test"
    },
    {
      type: "Input",
      name: "usingRepo",
      message: "What does the user need to know about using the repo?"
    },
    {
      type: "Input",
      name: "contributeRepo",
      message: "What does the user need to know about contributing to the repo?"
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
    fs.appendFile(
      "README.md",
      "\r\n# " +
        response.projectName +
        "\r\nBadge Goes Here | Link to GitHub Goes Here\r\n",
      function(err) {
        if (err) {
          console.log("Error");
        } else {
          console.log("Write File 2 Success!");
        }
      }
    );
    fs.appendFile(
      "README.md",
      "\r\n## Description\r\n\r\n" + response.description + "\r\n",
      function(err) {
        if (err) {
          console.log("Error");
        } else {
          console.log("Write File 3 Success!");
        }
      }
    );
    fs.appendFile(
      "README.md",
      "\r\n## Table of Contents\r\n" +
        "\r\n* [Installation](#installation)\r\n" +
        "\r\n* [Usage](#usage)\r\n" +
        "\r\n* [License](#license)\r\n" +
        "\r\n* [Contributing](#contributing)\r\n" +
        "\r\n* [Test](#tests)\r\n" +
        "\r\n* [Questions](#questions)\r\n",
      function(err) {
        if (err) {
          console.log("Error");
        } else {
          console.log("Write Table of Contents Success!");
        }
      }
    );
    fs.appendFile("README.md", "\r\n" + response.license, function(err) {
      if (err) {
        console.log("Error");
      } else {
        console.log("Write File 4 Success!");
      }
    });
    // fs.appendFile("README.md", "5\r\n" + response.installDep, function(err) {
    //   if (err) {
    //     console.log("Error");
    //   } else {
    //     console.log("Write File 5 Success!");
    //   }
    // });
    // fs.appendFile("README.md", "6\r\n" + response.runTest, function(err) {
    //   if (err) {
    //     console.log("Error");
    //   } else {
    //     console.log("Write File 6 Success!");
    //   }
    // });
    // fs.appendFile("README.md", "7\r\n" + response.usingRepo, function(err) {
    //   if (err) {
    //     console.log("Error");
    //   } else {
    //     console.log("Write File 7 Success!");
    //   }
    // });
    // fs.appendFile("README.md", "8\r\n" + response.contributeRepo, function(
    //   err
    // ) {
    //   if (err) {
    //     console.log("Error");
    //   } else {
    //     console.log("Write File 8 Success!");
    //   }
    // });
  });

// $.ajax({
//   url: "https://github.com/login/oauth/authorize"
//   method: "GET"
// }).then(function(response){
//   console.log("ajax test success")
// })
