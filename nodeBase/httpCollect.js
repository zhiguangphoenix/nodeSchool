var http = require('http');

http.get(process.argv[2], (res) => {
	res.setEncoding('utf8');

	var response = '';

	res.on('data', (chunk) => {
		response += chunk;
	})

	res.on('end', () => {
		console.log(response.length);
		console.log(response);
	})
})