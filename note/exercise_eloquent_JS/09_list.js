// const arrayToList = (arr) => {
// 	//base
// 	let list = {};
// 	list.value = arr[arr.length-1];
// 	list.rest = null;
// 	console.log(list);
// 	//others
// 	for (let i = arr.length-2 ; i>=0; i--) {
// 		let newList = {};
// 		newList.rest = list;
// 		newList.value = arr[i];
// 		console.log(newList);
// 		}
// 	}
// let arr = [1,2,3];
// console.log(arrayToList(arr));

function arrayToList(array) {
	let list = null;
	for (let i = array.length - 1; i >= 0; i--) {
	  list = {value: array[i], rest: list};
	}
	return list;
  }

let arr = [1,2,3];
console.log(arrayToList(arr));

// let list2 = null;
// list2 = {rest: list2};
// console.log(list2);