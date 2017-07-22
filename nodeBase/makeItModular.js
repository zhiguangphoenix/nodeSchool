const fs = require('fs');

module.exports = function (dirName, filter, callback) {
	fs.readdir(dirName, function (err, files) {
		if(err)
			return callback(err);
		var filteredFiles = [];
		files.forEach((file) => {
			if(file.substr(-(filter.length+1)) === `.${filter}`){
				filteredFiles.push(file);
			}
		})
		callback(null, filteredFiles);
	})
}