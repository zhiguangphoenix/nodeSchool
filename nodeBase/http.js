var http = require('http');

// console.log(process.argv);

http.get(process.argv[2], (res) => {
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		console.log(chunk);
	})
})