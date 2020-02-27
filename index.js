var fs = require("fs");

fs.appendFile("README.md", "\r\nTesting Part IV", function(err) {
  if (err) {
    console.log("Error");
  } else {
    console.log("Write File Success!");
  }
});
