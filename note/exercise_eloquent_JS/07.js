const range = (start, end, step=1) => {
	let ans = [];
	if (step>0) {
		for (let i = start; i <= end; i += step) {
			ans.push(i);
		}
	} else {
		for (let i = start; i >= end; i += step) {
			ans.push(i);
		}
	}
	console.log(ans);
	return ans;
}

const sum = (arr1) => {
	let ans=0;
	/*for (i in arr1) { 
		ans += arr1[i];
	}
	i怎麼是index? ans: js 裡面的 for..in 是依序處理object內所有屬性，跟python的用法有差異。
	雖然在這簡單情況裡結果相同(array也是object)，但有潛在問題存在。for..in會處理所有屬性，處理array-like object可能出現非數字屬性
	且在處理array上for..of較快(optimized)
	*/
	for ( i of arr1) {
		ans += i;
	}
	return ans;
}
console.log(sum(range(5,2,-1)));