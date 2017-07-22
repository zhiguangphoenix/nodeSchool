const net = require('net');

const server = net.createServer((socket) => {
	var date = new Date();
	var res = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`;
	socket.end(res);
});

server.listen(process.argv[2]);