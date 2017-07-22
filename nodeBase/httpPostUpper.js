const http = require('http');

var server = http.createServer(function (req, res) {
	if(req.method === 'POST') {
		let body = '';

		req.on('data', (chunk) => {
			body += chunk.toString();
		}).on('end', () => {
			res.end(body.toUpperCase());
		})
	}
})

server.listen(process.argv[2]);