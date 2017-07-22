var oneModule = require('./makeItModular');

function callback(err, files) {
	if(err)
		return;
	files.forEach((file) => {

			console.log(file);
	})
}

oneModule(process.argv[2], process.argv[3], callback);