var http = require('http');
var async = require('async');

async.series({
	requestOne: function (done) {
		http.get(process.argv[2], function (res) {
			var body = '';
			res.on('data', function (data) {
				body += data;
			})
			res.on('end', function () {
				done(null, body);
			})
		}).on('error', function (error) {
			done(error);
		})
	},
	requestTwo: function (done) {
		http.get(process.argv[3], function (res) {
			var body = '';
			res.on('data', function (data) {
				body += data;
			})
			res.on('end', function () {
				done(null, body);
			})
		}).on('error', function (error) {
			done(error);
		})
	}
},
	function (err, data) {
		if(err)
			console.error(err);
		console.log(data);
	}
)