function alwaysThrows(arg) {
	throw new Error('OH NOES');
}

function iterate(arg) {
	console.log(arg);
	return arg + 1;
}

var p = Promise.resolve(1);

p.then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).then(alwaysThrows).catch(console.log);