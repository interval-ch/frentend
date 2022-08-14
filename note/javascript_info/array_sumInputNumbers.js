function sumInput() {
	let arr = [];
	while (true) {
		let nums = prompt("numbers only", 0);
		if (nums === null || nums === "" || !isFinite(nums)) {
			break;
			}
		arr.push(+nums);
	}

	let ans = 0;
	for (let i of arr) {
		ans += i;
	}
	return ans;
}

console.log(sumInput());