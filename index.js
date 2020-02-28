var fs = require("fs");
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "Input",
      name: "TestValue",
      message: "Do inputs write in README.md?"
    },
    {
      type: "Input",
      name: "TestValue2",
      message: "Do inputs write with the second question?"
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
    fs.appendFile("README.md", "\r\n" + response.TestValue2, function(err) {
      if (err) {
        console.log("Error");
      } else {
        console.log("Write File 2 Success!");
      }
    });
  });
