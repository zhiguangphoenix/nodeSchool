var promise = new Promise(function (resolve, reject) {
	resolve('PROMISE VALUE');
})

promise.then(function (data) {
	console.log(data);
});

console.log('MAIN PROGRAM');