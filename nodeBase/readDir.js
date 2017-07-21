var fs = require('fs');


fs.readdir(process.argv[2], function (err, list) {
	list.forEach(function (item, index) {
		if(item.substr(-3) === '.md')
			console.log(item);
	})
})