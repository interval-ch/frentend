function aha(x, y) {
	if ((x % y) === 0) {
		return x
	} else {
		return y * Math.ceil(x/y);
	}
}

console.log(aha(1,23));
console.log(aha(23,23));
console.log(aha(7,3));
console.log(aha(-5,7));