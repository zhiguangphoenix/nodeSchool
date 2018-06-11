var http = require("http");
var querystring = require("querystring");

var createClientPostRequest = function () {
	var options = {
		method: "POST",
		protocol: "http:",
		hostname: "127.0.0.1",
		port: "8888",
		path: "/post",
		headers: {
			"connection": "keep-alive",
			"content-type": "application/x-www-form-urlencoded"
		}
	};

	var postBody = {
		name: "agumon"
	};

	var client = http.request(options, function (res) {
		res.pipe(process.stdout);
	})

	client.write(querystring.stringify(postBody));
	client.end();
}

var server = http.createServer((req, res) => {
	res.write("server got client data: ");
	req.pipe(res);
});


server.listen(8888);

createClientPostRequest()

