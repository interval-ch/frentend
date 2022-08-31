function fib(n) {
	if (n <= 2) return 1;
	else return fib(n-2) + fib(n-1);
}

//console.log(fib(77));
//run a long time still not finish.

function fib2(n) {
	//1 1 2 3 5 8 13
	let a = 1;
	let b = 1;
	for (let i = 3; i <= n; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
}
console.log(fib2(77));