// const script = document.createElement("script")
//   script.src="https://code.jquery.com/jquery-3.4.1.min.js"
//   script.type = "text/javascript"
//   script.integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
//   script.crossorigin="anonymous"
//   document.getElementsByTagName("head")[0].appendChild(script)

const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "Input",
      name: "projectTitle",
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

// $.ajax({
//   url: "https://github.com/login/oauth/authorize"
//   method: "GET"
// }).then(function(response){
//   console.log("ajax test success")
// })
