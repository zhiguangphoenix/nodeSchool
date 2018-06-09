const http = require("http");
const url = require("url");


http
	.createServer((req, res) => {
		let parsedUrl = url.parse(req.url, true);

		console.log(parsedUrl.path.pathName);
		
	})	
	.listen(8080);