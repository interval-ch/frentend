/**
 * @param {number[]} distance
 * @return {boolean}
 */
 var isSelfCrossing = function(distance) {
  const set = new Set();
	set.add(`0,0`);
  let x = 0;
  let y = 0;
	let cross = false;

  //loop through array
  distance.forEach((value,index) => {
		//how many step 
		for (let i = 1; i <= value; i++) {
			// direction
			switch ((index+1) % 4) {
				case 1:
					y += 1;
					break;
				case 2:
					x -= 1;
					break;
				case 3:
					y -= 1;
					break;	
				case 0:
					x += 1;
					break;
			} 
			//let boo = set.has(`${x},${y}`);
			//console.log(`i:${i}, x:${x}, y:${y}, set.has:${boo}`)

			if (set.has(`${x},${y}`)) {
				cross =  true;
			}
			set.add(`${x},${y}`);
		}
  });
	return cross;
};