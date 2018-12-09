const fs = require("fs");

fs.readFile("/tmp/input.txt", "utf8", (err, data) => {
  if (!err) {
    console.log(
      data
        .split("\n")
        .map(Number)
        .reduce((a, b) => a + b, 0)
    );
  }
});
