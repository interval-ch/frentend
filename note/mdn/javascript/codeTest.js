function myFunction(a, b) {
	let done = 0;
	let count = 0;
	while (true) {
		let found = a.indexOf(b, done);
		if (found == -1) {break
		} else { 
		count += 1;
		done = found;
		}
	}
	return count;
}

console.log(myFunction('m', 'how many times does the character occur in this sentence?'));