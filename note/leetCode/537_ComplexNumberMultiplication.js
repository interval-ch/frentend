/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
  function apart(num) {
		let arr = num.split("+");
		arr[1] = arr[1].slice(0,-1);
		return arr
	}
	
	let real = 0, imaginary = 0;
	let arr1 = apart(num1);
	let arr2 = apart(num2);

	for (let i = 0; i < 2; i++) {
		for (let j = 0; j < 2; j++) {
			if (i === 0 && j === 0) {
				real += arr1[i] * arr2[j];
			} else if (i === 1 && j === 1) {
				real -= arr1[i] * arr2[j];
			} else {
				imaginary += arr1[i] * arr2[j];
			}
		}
	}

	return `${real}+${imaginary}i`

};

let num1 = "1+-99i", num2 = "70+-17i";
console.log(complexNumberMultiply(num1, num2));