var index = 2,
	res = 0;

for(;index < process.argv.length;index++){
	res += parseInt(process.argv[index]);
}

console.log(res);

