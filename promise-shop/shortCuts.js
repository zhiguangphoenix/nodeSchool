var p1 = new Promise(function (resolve, reject) {
	reject('failed');
});
p1.then(null, function (fail) {
	console.log(fail);
})

p1.catch(function (fail) {
	console.log(fail);
});

var p2 = new Promise(function (resolve, reject) {
	resolve('success');
});
p2.then(function (success) {
	console.log(success);
}, function (fail) {
	console.log(fail);
});
var p21 = Promise.resolve('success shortcut');
p21.then(function (success) {
	console.log(success);
});

var p3 = Promise.reject('failed shortcut');
p3.catch(function (fail) {
	console.log(fail);
})