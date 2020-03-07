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
      type: "Input",
      name: "installDep",
      message: "What command should be run to install dependencies?",
      default: "npm i"
    },
    {
      type: "Input",
      name: "usingRepo",
      message: "What does the user need to know about usage of the repo?"
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license for your project:",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
      type: "Input",
      name: "contributeRepo",
      message: "What does the user need to know about contributing to the repo?"
    },
    {
      type: "Input",
      name: "runTest",
      message: "What command should be run to run tests?",
      default: "npm test"
    }
  ])
  .then(function(response) {
    const log = fs.createWriteStream("README.md");
    log.write("\r\n" + response.gitHubUsername);
    log.write(
      "\r\n# " +
        response.projectName +
        "\r\nBadge Goes Here | Link to GitHub Goes Here\r\n"
    );
    log.write("\r\n## Description\r\n\r\n" + response.description + "\r\n");
    log.write(
      "\r\n## Table of Contents\r\n" +
        "\r\n* [Installation](#installation)\r\n" +
        "\r\n* [Usage](#usage)\r\n" +
        "\r\n* [License](#license)\r\n" +
        "\r\n* [Contributing](#contributing)\r\n" +
        "\r\n* [Test](#tests)\r\n" +
        "\r\n* [Questions](#questions)\r\n"
    );
    log.write(
      "\r\n## Installation\r\n" +
        "\r\nTo install necessary dependencies, run the following command:\r\n" +
        "\r\n```\r\n" +
        response.installDep +
        "\r\n```\r\n"
    );
    log.write("\r\n## Usage\r\n" + "\r\n" + response.usingRepo + "\r\n");
    log.write("\r\n## License\r\n" + "\r\n" + response.license + "\r\n");
    log.write(
      "\r\n## Contributing\r\n" + "\r\n" + response.contributeRepo + "\r\n"
    );
    log.write(
      "\r\n## Installation\r\n" +
        "\r\nTo run tests, run the following command:\r\n" +
        "\r\n```\r\n" +
        response.runTest +
        "\r\n```\r\n"
    );
  });
