const fs = require("fs");

fs.readFile("/tmp/input.txt", "utf8", (err, data) => {
  if (!err) {
    console.log(
      data
        .split("\n")
        .reduce(
          (a, b) =>
            !b ? a : a + parseInt(b.slice(1)) * (/-/.test(b) ? -1 : 1),
          0
        )
    );
  }
});
