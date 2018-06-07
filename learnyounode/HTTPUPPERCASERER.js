const http = require('http');

var server = http.createServer((request, response) => {
	var requestBody = "";
	if (request.method === "POST") {
		request
			.on("data", (chunk) => {
				requestBody += chunk;
			})
			.on("end", () => {
				response.end(requestBody.toUpperCase());
			})
	}
});

server.listen(process.argv[2])
