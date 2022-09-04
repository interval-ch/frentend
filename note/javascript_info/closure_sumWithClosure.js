// Sum with closures
// importance: 4

// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

function sum(a) {
	return (b) => a + b;
}

function sumWithFunction(a) {
	return function(b) {
		return a + b;
	}
}

console.log(sumWithFunction(1)(2));
console.log(sumWithFunction(5)(-1));