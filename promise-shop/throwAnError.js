var jj = {a: 1};
function parsePromised() {
	return new Promise(function (resolve, reject) {
		try{
			var parsed = JSON.parse(jj);
			resolve(parsed);
		}catch(e){
			reject(e.message);
		}
	})
};
parsePromised().then(null,null).then(null, null).then(null, null).then(null, console.log);