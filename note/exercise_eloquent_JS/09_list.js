const arrayToList = (array) => {
	let list = null;
	for (let i = array.length-1; i >= 0 ; i--) {
		list = {value: array[i], rest: list};
	}
	return list;
}
let arr = [1,2,3];
console.log(arrayToList(arr));

const listToArray = (list) => {
	let array = [];
	for (let node = list; node; node = node.rest) { //if node is true(not null)
		array.push(node.value);
	}
	return array;
}
console.log(listToArray(arrayToList(arr)));

const prepend = (newValue, list) => {
	return {value: newValue, rest: list};
}
console.log(prepend(10, prepend(20, null)));

const nth = (list, n) => {
	if (!list) return undefined; //not true
	else if (n == 0) return list.value;
	else return nth(list.rest, n-1);
}
console.log(nth(arrayToList([10, 20, 30]), 1));