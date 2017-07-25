function resolveAfter2S(x) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(x);
		}, 2000);
	})
}
async function ff() {
	var x = await resolveAfter2S('XXX');
	console.log(x);
}
ff();

async function fff() {
	var y = await 222;
	console.log(y);
}
fff();

async function ffff() {
	try{
		var z = await Promise.reject(333);
	}catch(e){
		console.log(e);
	}
}
ffff();