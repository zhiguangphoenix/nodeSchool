var http = require('http')  
, async = require('async');


async.each([process.argv[2], process.argv[3]], function (item, done) {
	http.get(item, function (res) {
		var body = '';
		res.on('data', function (chunk) {
			body += chunk;
		});
		res.on('end', function () {
			return done();
		})
	})
},
function (err) {
	if(err)
		console.error(err);
})