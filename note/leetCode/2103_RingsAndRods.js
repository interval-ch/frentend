/**
 * @param {string} rings
 * @return {number}
 */
const countPoints = function(rings) {
	let obj = {'R': 0, 'G': 0, 'B': 0}, rod = [];
  for (let i = 0; i < 10; i++) {
		rod.push({...obj});
	}
  
  for (let i = 0; i < rings.length - 1; i = i + 2) {
    rod[rings[i+1]][rings[i]] += 1;
  }

	let count = 0;
	for (let i of rod) {
		if (Math.min(i['R'], i['G'], i['B']) > 0) {
			count++;
		}
	}
	return count
};

console.log(countPoints("B0B6G0R6R0R6G9"));
