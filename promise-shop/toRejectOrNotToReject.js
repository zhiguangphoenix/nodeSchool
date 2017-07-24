var promise = new Promise(function (resolve, reject) {
	resolve('I FIRED');
	reject(new Error('I DID NOT FIRE'));
})

promise.then(function (data) {
	console.log(data);
}, function (error) {
	console.log(error.message);
})