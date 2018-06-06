let fs = require('fs');
let path = process.argv[2];
let target = "." + process.argv[3];
fs.readdir(path, (err, files) => {

	files.forEach((f) => {
		f.lastIndexOf(target) != -1 && console.log(f)
	})
})
