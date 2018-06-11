var http = require("http");

var server = http.createServer((req, res) => {
	res.writeHead(200, "damn ok!", { "Content-type": "text/plain" });
	res.end("damn res");
});

server.listen(8888);