let http = require("http");

http.get(process.argv[2], (res) => {
	res.setEncoding("utf8");

	let totalData = "";
	res.on("data", (data) => {
		totalData += data;
	})

	res.on("end", () => {
		console.log(totalData.length);
		console.log(totalData);
	})
})