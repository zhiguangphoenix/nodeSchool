let len = process.argv.length;
let start = 2;
let sum = 0;

for(let i = start; i < len;i++) {
	let cur = process.argv[i] * 1;
	sum += cur;
}

console.log(sum);
