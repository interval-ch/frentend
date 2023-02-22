/**
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = function(title) {
  let arr = title.toLowerCase().split(' ');
	arr = arr.map(a => {
		if (a.length < 3) return a;
		return a[0].toUpperCase() + a.slice(1);
	});
	arr = arr.join(' ');
	return arr;
};

let t = "capiTalIze tHe titLe";
console.log(capitalizeTitle(t));