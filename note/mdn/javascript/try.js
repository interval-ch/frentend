let arr1 = ['1',2,[3,'4']];
let arr2 = `["1",2,[3,"4"]]`
let arrJson = JSON.stringify(arr1);
console.log(arr2);

console.log(arr2==arrJson);