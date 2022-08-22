function aclean(arr) {
  let map = new Map();

  for (let i of arr) {
    let sorted = i.toLowerCase().split('').sort().join('');
		//轉小寫、字串拆成陣列、整理、陣列組成字串
    map.set(sorted, i);
		//重複的字排序後作為key，全部跑完後對應的值只會剩下最後輸入的字
  }
	console.log(map);
  return Array.from(map.values()); //最後將map.values()產生的可迭代物件作為引數，產生一個真正的陣列並回傳
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );