function attachTitle(data) {
	return data = 'DR. ' + data;
}

Promise.resolve('MANHATTAN').then(attachTitle).then(function (data) {
	console.log(data);
})
