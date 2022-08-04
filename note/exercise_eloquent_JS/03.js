let size = 10;
let result = '';

for (let i = 1; i<=size; i++) {
	for (let j=1 ; j<=size; j++) {
		if ((i+j)%2==0) {
			result += " ";
		} else {
			result += "#";
		}
		if (j==size) {
			result += "\n"
		}
	}
}
console.log(result);