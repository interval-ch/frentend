const reverseArray = (arr1) => {
	let newArray = [];
	for (let item of arr1) {
		newArray.unshift(item);
	} 
	return newArray;
}

let test = [1,2,3,4,3,7,21,999];
console.log(reverseArray(test));

const reverseArrayInPlace = (arr1) => {
	let newValue;
	for (let i = 0; i < (Math.floor(arr1.length/2)); i++) {
		newValue = arr1[i];
		arr1[i] = arr1[arr1.length-i-1];
		arr1[arr1.length-i-1] = newValue;
	}
	return arr1;
}

console.log(reverseArrayInPlace(test));