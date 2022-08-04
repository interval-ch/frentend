function multiplier(factor) {
	return number => number * factor; //第一個number是自定義函式的參數名稱, =>後面接的是函式內容
}

let twice = multiplier(2);
console.log(twice(10));

let triple = multiplier(3);
console.log(triple(twice(10)));
let test = triple(twice(10));

console.log(`${test} wahahaa` )