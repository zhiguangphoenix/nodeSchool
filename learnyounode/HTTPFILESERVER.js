var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
	// var data = fs.createReadStream(process.argv[3], "utf8");
	res.write(fs.createReadStream(process.argv[3], "utf8"))
});
server.listen(process.argv[2]);
