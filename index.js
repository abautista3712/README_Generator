var fs = require("fs");
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "Input",
      name: "TestValue",
      message: "Testing if inquirer works Q1"
    }
  ])
  .then(function(response) {
    console.log(response);
  });

// fs.appendFile("README.md", "\r\nTesting Part IV", function(err) {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log("Write File Success!");
//   }
// });
