var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {
	var parsedUrl = url.parse(req.url);
	res.writeHead(200, {'Content-Type': 'application/json'})
	var obj = {};
	var isoTime = new Date(parsedUrl.query.substr(4));
	if(parsedUrl.pathname === '/api/parsetime') {
		obj.hour = isoTime.getHours();
		obj.minute = isoTime.getMinutes();
		obj.second = isoTime.getSeconds();
	}else if(parsedUrl.pathname === '/api/unixtime') {
		obj.unixtime = isoTime.valueOf();
	}

	res.end(JSON.stringify(obj));
})

server.listen(process.argv[2]);