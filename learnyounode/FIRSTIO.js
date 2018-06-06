var fs =require("fs");

let data = fs.readFileSync(process.argv[2]).toString();
let dataArr = data.split("\n");

console.log(dataArr.length-1);

