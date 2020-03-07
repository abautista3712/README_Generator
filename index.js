const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

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
    axios
      .get(`https://api.github.com/users/${response.gitHubUsername}`)
      .then(function(data) {
        // return data;
        // return data.name
        // const md = `Test`;
        // write to file
        // because now you have access to response and data variables

        const md = `
    \r\n#  ${response.projectName} 
    \r\n![npm](https://img.shields.io/npm/v/fs) ![npm](https://img.shields.io/npm/v/inquirer) ![npm](https://img.shields.io/npm/v/axios)
    \r\n## Description
    \r\n ${response.description}
    \r\n## Table of Contents
    \r\n* [Installation](#installation)
    \r\n* [Usage](#usage)
    \r\n* [License](#license)
    \r\n* [Contributing](#contributing)
    \r\n* [Test](#tests)
    \r\n* [Questions](#questions)
    \r\n## Installation
    \r\nTo install necessary dependencies, run the following command:
    \r\n\`\`\`
    \r\n${response.installDep}
    \r\n\`\`\`
    \r\n## Usage
    \r\n${response.usingRepo}
    \r\n## License
    \r\n${response.license}
    \r\n## Contributing
    \r\n${response.contributeRepo}
    \r\n## Installation
    \r\nTo run tests, run the following command:
    \r\n\`\`\`
    \r\n${response.runTest}
    \r\n\`\`\`
    \r\n## Questions
    \r\n<img src="[LINK TO USER PIC GOES HERE]" alt="avatar" style="border-radius: 16px" width="30" />
    \r\nIf you have any questions about this repo, open an issue or contact ${data.data.name} directly at [EMAIL GOES HERE].`;

        fs.writeFile("README.md", md, err => {
          if (err) {
            console.log(err);
          } else {
            console.log("README.md created!");
          }
        });
      });
  });

//   const log = fs.createWriteStream("README.md");
//   log.write(
//     "\r\n# " +
//       response.projectName +
//       `\r\n![npm](https://img.shields.io/npm/v/fs) ![npm](https://img.shields.io/npm/v/inquirer) ![npm](https://img.shields.io/npm/v/axios)`
//   );
//   log.write("\r\n## Description\r\n\r\n" + response.description + "\r\n");
//   log.write(
//     "\r\n## Table of Contents\r\n" +
//       "\r\n* [Installation](#installation)\r\n" +
//       "\r\n* [Usage](#usage)\r\n" +
//       "\r\n* [License](#license)\r\n" +
//       "\r\n* [Contributing](#contributing)\r\n" +
//       "\r\n* [Test](#tests)\r\n" +
//       "\r\n* [Questions](#questions)\r\n"
//   );
//   log.write(
//     "\r\n## Installation\r\n" +
//       "\r\nTo install necessary dependencies, run the following command:\r\n" +
//       "\r\n```\r\n" +
//       response.installDep +
//       "\r\n```\r\n"
//   );
//   log.write("\r\n## Usage\r\n" + "\r\n" + response.usingRepo + "\r\n");
//   log.write("\r\n## License\r\n" + "\r\n" + response.license + "\r\n");
//   log.write(
//     "\r\n## Contributing\r\n" + "\r\n" + response.contributeRepo + "\r\n"
//   );
//   log.write(
//     "\r\n## Installation\r\n" +
//       "\r\nTo run tests, run the following command:\r\n" +
//       "\r\n```\r\n" +
//       response.runTest +
//       "\r\n```\r\n"
//   );
//   log.write(
//     "\r\n## Questions\r\n" +
//       `\r\n<img src="[LINK TO USER PIC GOES HERE]" alt="avatar" style="border-radius: 16px" width="30" />\r\n` +
//       `\r\nIf you have any questions about this repo, open an issue or contact ${axios
//         .get("https://api.github.com/users/abautista3712")
//         .then(function(response) {
//           return response.data.name;
//         })} directly at [EMAIL GOES HERE].`
//   );
// });

// Link to GitHub
// axios
//   .get("https://api.github.com/users/abautista3712")
//   .then(function(response) {
//     console.log(response.data.html_url);
//   });

// axios
//   .get("https://api.github.com/users/abautista3712")
//   .then(function(response) {
//     console.log(response.data.name);
//   });
