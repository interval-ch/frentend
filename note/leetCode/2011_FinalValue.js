/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
	let ans = 0;
	for (let i of operations) {
			if (i === '++X' || i === 'X++') {
					ans++;
			}
			
			if (i === '--X' || i === 'X--') {
					ans--;
			}
	}
	return ans;
};
// // 108ms, 44.4mb



