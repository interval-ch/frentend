/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
  let obj = {
    a:'0',
    b:'1',
    c:'2',
    d:'3',
    e:'4',
    f:'5',
    g:'6',
    h:'7',
    i:'8',
    j:'9'
  };

	let first = firstWord, second = secondWord, target = targetWord;
	function change(word) {
		for (let i of word) {
			word = word.replace(i, obj[i]);  
		}
		word = Number(word);
	}
	console.log(change(first))
	return change(first) + change(second) === change(target);
};

let firstWord = "aaa", secondWord = "a", targetWord = "aab";
console.log(isSumEqual(firstWord, secondWord, targetWord));