var http = require("http");
var url = require("url");
var querystring = require("querystring");


// var server = http.createServer((req, res) => {
// 	console.log("url: " + req.url);
// 	console.log("版本: " + req.httpVersion);
// 	console.log("方法: " + req.method);
// 	console.log("头部: " + JSON.stringify(req.headers));

// 	var urlObj = url.parse(req.url, true);

// 	console.log(urlObj.query);
// 	res.write("ok!");
// 	res.end();
// });

// var server = http.createServer((req, res) => {
// 	var body = "";
// 	req.on("data", (chunk) => {
// 		body += chunk;
// 	});

// 	req.on("end", () => {
// 		console.log("post body is: " + body);
// 		res.end("ok!");
// 	})
// });

var server = http.createServer((req, res) => {
	res.writeHead(200, {"content-type": "text/plain"});
	res.end("from server 8888");
})

server.listen(8888);

var client = http.get("http://127.0.0.1:8888", (res) => {
	console.log("版本：" + res.httpVersion);
	console.log("状态码：" + res.statusCode);
	console.log("描述信息：" + res.statusMessage);
	console.log("正文：");

	res.pipe(process.stdout);
})