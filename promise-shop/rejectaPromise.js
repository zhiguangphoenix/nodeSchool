var promise = new Promise(function (resolve, reject) {
	setTimeout(function () {
		reject(new Error('REJECTED!'));
	}, 300);
});

promise.then(function (data) {
	console.log(data);
}, function (error) {
	console.log(error.message);
})