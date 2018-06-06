var net = require("net");
var server = net.createServer(function (socket) {
	var date = new Date();

	socket.end(date.getFullYear() + "-" + (date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1) + "-" + (date.getDate()+1<10 ? "0"+date.getDate() : date.getDate()) + " " + date.getHours() + ":" + date.getMinutes() + "\r\n");
});

server.listen(process.argv[2]);