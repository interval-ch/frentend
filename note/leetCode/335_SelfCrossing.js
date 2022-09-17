/**
 * @param {number[]} distance
 * @return {boolean}
 */
//  var isSelfCrossing = function(distance) {
//   const set = new Set();
// 	set.add(`0,0`);
//   let x = 0;
//   let y = 0;
// 	let cross = false;

//   //loop through array
//   distance.forEach((value,index) => {
// 		//how many step 
// 		for (let i = 1; i <= value; i++) {
// 			// direction
// 			switch ((index+1) % 4) {
// 				case 1:
// 					y += 1;
// 					break;
// 				case 2:
// 					x -= 1;
// 					break;
// 				case 3:
// 					y -= 1;
// 					break;	
// 				case 0:
// 					x += 1;
// 					break;
// 			} 
// 			//let boo = set.has(`${x},${y}`);
// 			//console.log(`i:${i}, x:${x}, y:${y}, set.has:${boo}`)

// 			if (set.has(`${x},${y}`)) {
// 				cross =  true;
// 			}
// 			set.add(`${x},${y}`);
// 		}
//   });
// 	return cross;
// };
//// runtime error, too slow;

var isSelfCrossing = function(x) {
	if (x.length <= 3) {
					return false;
			}
			let i = 2;
			// keep spiraling outward
			while (i < x.length && x[i] > x[i - 2]) {
					i++;
			}
			if (i >= x.length) {
					return false;
			}
			// transition from spiraling outward to spiraling inward
			if ((i >= 4 && x[i] >= x[i - 2] - x[i - 4]) ||
							(i == 3 && x[i] == x[i - 2])) {
					x[i - 1] -= x[i - 3];
			}
			i++;
			// keep spiraling inward
			while (i < x.length) {
					if (x[i] >= x[i - 2]) {
							return true;
					}
					i++;
			}
			return false;
};

//from web

/**
 * @param {number[]} distance
 * @return {boolean}
 */
 var isSelfCrossing2 = function(distance) {
  
  
  for (let i = 0; i < distance.length; i++) {
    let a = distance[i];
    let b = distance[i-1];
    let c = distance[i-2];
    let d = distance[i-3];
    let e = distance[i-4];
    let f = distance[i-5];
    
  //q-shape  
    if (d) {
      if (b<=d && a>=c) {
        return true;
      }
    }
  
  //square
    if (e) {
      if (b == d && (a+e) >= c) {
        return true;
      }
    }
    
  
  //stair
    if (f) {
      if (c>=a && c>=e && d>=b && d>=f && (a+e)>=c && (b+f)>=d) {
        return true;
      }
    }  
  }
  return false;
};

//from web2