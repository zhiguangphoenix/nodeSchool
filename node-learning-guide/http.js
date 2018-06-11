// var http = require('http');

// // http server 例子
// var server = http.createServer(function(serverReq, serverRes){
//     var url = serverReq.url;
//     serverRes.end( '您访问的地址是：' + url );
// });

// server.listen(8888);

// // http client 例子
// var client = http.get('http://127.0.0.1:8888', function(clientRes){
//     clientRes.pipe(process.stdout);
// });

var net = require("net");

var PORT = 8888;
var HOST = "127.0.0.1";

var server = net.createServer((socket) => {
	console.log("Conencted: " + socket.remoteAddress + ": " + socket.remotePort);

	socket.on("data", (data) => {
		console.log("DATA" + socket.remoteAddress + ": " + data);
		console.log("Data is: " + data);

		socket.write("Data from you is " + data);
	});

	socket.on("close", () => {
		console.log("CLOSED: " + socket.remoteAddress + " " + socket.remotePort);
	});
});

server.listen(PORT, HOST);

console.log(server instanceof net.Server);







