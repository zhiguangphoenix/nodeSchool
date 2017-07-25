function all(arg1, arg2) {
	return new Promise(function (resolve, reject) {
		var res = [];
		arg1.then(function (data) {
			res.push(data);
		});
		arg2.then(function (data) {
			res.push(data)
		});
		if(res.length === 2)
			resolve(res);
	})
}


all(getPromise1(), getPromise2()).then(console.log);