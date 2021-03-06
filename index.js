const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

inquirer
  .prompt([
    {
      type: "Input",
      name: "gitHubUsername",
      message: "What is your GitHub username?",
    },
    {
      type: "Input",
      name: "projectName",
      message: "What would you like to name your project?",
    },
    {
      type: "Input",
      name: "altText",
      message: "What would you like the alternate text be for the screenshot?",
    },
    {
      type: "Input",
      name: "description",
      message: "Please provide a brief description of your project:",
    },
    {
      type: "Input",
      name: "installDep",
      message: "What command should be run to install dependencies?",
      default: "npm i",
    },
    {
      type: "Input",
      name: "deployedRepo",
      message: "Where is the application deployed?",
    },
    {
      type: "Input",
      name: "miscUsage",
      message: "What does the user need to know how to use the repo?",
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license for your project:",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "Input",
      name: "contributeRepo",
      message:
        "What does the user need to know about contributing to the repo?",
    },
    // {
    //   type: "Input",
    //   name: "runTest",
    //   message: "What command should be run to run tests?",
    //   default: "npm test",
    // },
  ])
  .then(function (response) {
    axios
      .get(`https://api.github.com/users/${response.gitHubUsername}`)
      .then(function (data) {
        const md = `
    \r\n#  ${response.projectName} 
    \r\nCreated by ${data.data.login} | ${data.data.url}
    \r\n![npm](https://img.shields.io/npm/v/fs) ![npm](https://img.shields.io/npm/v/inquirer) ![npm](https://img.shields.io/npm/v/axios)
    \r\n
    \r\n![${response.projectName}Screenshot](./assets/images/${response.projectName}Screenshot.PNG?raw=true "${response.altText}")
    \r\n
    \r\n## Description
    \r\n ${response.description}
    \r\n
    \r\n## Table of Contents
    \r\n* [Installation](#installation)
    \r\n* [Usage](#usage)
    \r\n* [License](#license)
    \r\n* [Contributing](#contributing)
    \r\n* [Test](#tests)
    \r\n* [Questions](#questions)
    \r\n
    \r\n## Installation
    \r\nTo install necessary dependencies, run the following command:
    \r\n\`\`\`
    \r\n${response.installDep}
    \r\n\`\`\`
    \r\n
    \r\n## Usage
    \r\nAccessible via: ${response.usingRepo}
    \r\n
    \r\n## License
    \r\n${response.license}
    \r\n
    \r\n## Contributing
    \r\n${response.contributeRepo}
    \r\n
    \r\n## Testing
    \r\nNo tests were explicitly written to test this code.
    \r\n
    \r\n## Questions
    \r\n<img src="${data.data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />
    \r\nIf you have any questions about this repo, open an issue or contact ${data.data.name} directly at ${data.data.email}.`;
        fs.writeFile("README.md", md, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("README.md created!");
          }
        });
      });
  });
