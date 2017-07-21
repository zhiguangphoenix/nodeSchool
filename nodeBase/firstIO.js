var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var splitStr = str.split('\n');

console.log(splitStr.length-1);

