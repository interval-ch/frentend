/**
 * @param {character[][]} box
 * @return {character[][]}
 */
const rotateTheBox = function(box) {
  
  let stone = 0, n = box[0].length;

  for (let i of box) {
    stone = 0;
    for (let j = 0; j < n; j++) {
      if (i[j] === '#') {
        stone++;
        i[j] = ".";
      } else if (i[j] === '*' && stone > 0) {
        i.splice(j - stone, stone, ...("#".repeat(stone)));
				stone = 0;
      }
			if (j === n - 1) {
				i.splice(j - stone + 1, stone, ...("#".repeat(stone)));
			}
    }
  }

	//rotate
	let ans = [], sub = [];
	for (let i = 0; i < n; i++) {
		for (let j = box.length - 1; j >= 0; j--) {
			sub.push(box[j][i]);
		}
		ans.push(sub);
		sub = [];
	}

  return ans;
};


let box = [["#",".","#"]];

console.log(rotateTheBox(box));