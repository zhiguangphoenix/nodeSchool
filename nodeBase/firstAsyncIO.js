var fs = require('fs');

fs.readFile(process.argv[2], {encoding: 'utf8'}, function (err, data) {

	var splitStr = data.split('\n');
	console.log(splitStr.length-1);
})






