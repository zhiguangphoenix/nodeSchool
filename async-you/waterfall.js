var fs = require('fs');
var http = require('http');
var async = require('async');

async.waterfall([
	function (cb) {
		fs.readFile(process.argv[2],  function (err, data) {
			cb(err, data.toString());
		})
	},

	function(url, cb) {
		var body = '';
		http.get(url, function (res) {
			res.on('data', function (data) {
				body += data;
			});
			res.on('end', function () {
				cb(null, body);
			})
		}).on('error', function (err) {
			cb(err);
		})
	}
], function (err, data) {
	if(err)
		console.error(err);
	console.log(data);
})
