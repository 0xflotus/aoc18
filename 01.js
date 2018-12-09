const fs = require("fs");

fs.readFile("/tmp/input.txt", "utf8", (err, data) => {
  if (!err) {
    console.log(
      data.split("\n").reduce((a, b) => {
        if (b === "") return a;
        if (b[0] === "-") return a - parseInt(b.slice(1));
        else return a + parseInt(b.slice(1));
      }, 0)
    );
  }
});
