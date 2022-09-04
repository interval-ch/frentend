let arr = [2,4,3];
let ans;
ans = arr.reduceRight(0, current, index, arr => {
	Math.pow(10,((arr.length()-1)-index));
}, 0);

console.log(and);