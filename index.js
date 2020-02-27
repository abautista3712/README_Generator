var fs = require("fs");
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "Input",
      name: "TestValue",
      message: "Do inputs write in README.md?"
    }
  ])
  .then(function(response) {
    fs.appendFile("README.md", "\r\n" + response.TestValue, function(err) {
      if (err) {
        console.log("Error");
      } else {
        console.log("Write File Success!");
      }
    });
  });
