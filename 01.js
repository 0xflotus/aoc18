const fs = require("fs");

fs.readFile("/tmp/input.txt", "utf8", (err, data) => {
  if (!err) {
    console.log(
      data
        .split("\n")
        .reduce(
          (a, b) =>
            b === ""
              ? a
              : a +
                (b[0] === "-" ? -parseInt(b.slice(1)) : parseInt(b.slice(1))),
          0
        )
    );
  }
});
