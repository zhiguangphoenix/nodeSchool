first().then(function (data) {
	return second(data);
}).then(function (data) {
	console.log(data);
})