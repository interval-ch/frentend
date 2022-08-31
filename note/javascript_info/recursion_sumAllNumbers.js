function sumToLoop(n) {
	let ans = 0;
	for (let i = 0; i <= n; i++) {
		ans += i;
	}
	return ans;
}

function sumToRecursion(n) {
	if (n == 1) return 1;
	else return n + sumToRecursion(n-1)
}

function sumToArithmetic(n) {
	return (1+n)*n*0.5
}

console.log(sumToLoop(100000));
console.log(sumToRecursion(100000));
console.log(sumToArithmetic(100000));