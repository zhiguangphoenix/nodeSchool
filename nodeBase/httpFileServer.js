const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
	fs.readFile(process.argv[3], {encoding: 'utf8'}, (err, data) => {
		if(err)
			throw err;

		res.end(`${data}`);
	})
})

server.listen(process.argv[2]);