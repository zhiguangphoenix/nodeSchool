const fs = require("fs");

fs.createReadStream("./stream.txt").pipe(process.stdout);