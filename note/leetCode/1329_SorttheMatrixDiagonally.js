/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
	  
	function check(i, j) { 
		let arr = [];
		function checkDiagonal(i, j) {
			if (i < m && j < n) {
				arr.push(mat[i][j]);
				return checkDiagonal(i + 1, j + 1);
			}
			return;
		}
		checkDiagonal(i, j);
		return arr.sort((a, b) => a - b); 

	}
  
	//mat[0][0~n]
	for (let i = 0; i < n; i++) {
		let subArr = check(0, i);
		for (let index = 0; index < subArr.length; index++) {
			mat[index][i + index] = subArr[index];
		}
	}

	//mat[1~m][0]
	for (let i = 1; i < m; i++) {
		let subArr = check(i, 0);
		for (let index = 0; index < subArr.length; index++) {
			mat[i + index][index] = subArr[index];
		}
	}
  return mat;
};
  
let mat = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]];
console.log(diagonalSort(mat));