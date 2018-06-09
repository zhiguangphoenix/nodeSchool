var fs = require("fs");
var data;

// ============同步读取文件===============
function syncRead() {
	try {
		data = fs.readFileSync("./fs.txt", 'utf8');
		console.log(data);
	} catch(e) {
		console.log("读取出错： " + e.message);
	}
}

// ===========异步读取=================
function asyncRead() {
	fs.readFile("./fs.txt", "utf8", function (error, data) {
		if (error) {
			return console.error("读取出错 " + error.message);
		}
		console.log("内容： " + data);
	});
}


syncRead();
asyncRead();