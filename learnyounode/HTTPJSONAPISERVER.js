const http = require('http');
const url = require('url');


function toDateJSON (date) {
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
}

function toUnixTime(date) {
	return {
		unixtime: +date
	}
}

http
	.createServer((req, res) => {
		var queryObj = url.parse(req.url, true);
		res.writeHead(200, { 'Content-Type': 'application/json' })
		var d = new Date(queryObj.query.iso);

		if (/^\/api\/parse/.test(queryObj.path)) {
			res.end(JSON.stringify(toDateJSON(d)));
		} else if (/^\/api\/unixtime/.test(queryObj.path)) {
			res.end(JSON.stringify(toUnixTime(d)));
		}
	})
	.listen(process.argv[2]);

