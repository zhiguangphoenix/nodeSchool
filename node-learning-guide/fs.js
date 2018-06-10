var fs = require("fs");
var data;
var dir = "./fs.txt";

// ============同步读取文件===============
function syncRead(dir) {
	try {
		data = fs.readFileSync(dir, 'utf8');
		console.log("syncRead内容： " + data);
	} catch(e) {
		console.log("读取出错： " + e.message);
	}
}

// ===========异步读取=================
function asyncRead(dir) {
	fs.readFile(dir, "utf8", function (error, data) {
		if (error) {
			return console.error("读取出错 " + error.message);
		}
		console.log("asyncRead内容： " + data);
	});
}

// ===========文件流读取===============
function streamRead(dir) {
	var readStream = fs.createReadStream(dir, "utf8");

	readStream
		.on("data", (chunk) => {
			console.log("streamRead读取数据：" + chunk);
		})
		.on("error", (error) => {
			console.log("出错：" + error.message);
		})
		.on("close", () => {
			console.log("关闭了");
		})
}

// ==========写入文件=================
	function asyncWriteFile(dir, content) {
		fs.writeFile(dir, content, "utf8", (error) => {
			if (error) {
				throw error;
			}

			console.log("文件写入成功");
		})
	}

// ==========文件流写入===============
	function streamWrite(dir, content) {
		var writeStream = fs.createWriteStream(dir, "utf8");

		writeStream
			.on("close", function () {
				console.log("写入流关闭");
			})

		writeStream.write(content);
		writeStream.end();
	}




syncRead(dir);
asyncRead(dir);
streamRead(dir);
asyncWriteFile(dir, "asyncWriteFile Content");
streamWrite(dir, "streamWrite")














