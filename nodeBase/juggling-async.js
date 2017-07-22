var http = require('http');

function request(address) {
	return new Promise(function (resolve, reject) {
		http.get(address, function (res) {
			res.setEncoding('utf8');

			let response = '';

			res.on('data', function (chunk) {
				response += chunk;
			})
			res.on('end', function () {
				console.log(response);
				resolve(true);
			})
		})
	}) 
}

request(process.argv[2]).then(function (flag) {
	request(process.argv[3]);
}).then(function (flag) {
	request(process.argv[4]);
})