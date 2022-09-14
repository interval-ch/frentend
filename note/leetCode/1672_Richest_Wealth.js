/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
	let sum = accounts.map(item => item.reduce((prev, curr) => prev + curr));
	
	return Math.max(...sum);
	
};
//116ms, 42.1mb
//not good, could use .sort instead of Math.max with deconstructor