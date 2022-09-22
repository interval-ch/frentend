/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
 var wateringPlants = function(plants, capacity) {
  let step = 0;  
  let river = true;
  let waterRemain = capacity;
  for (let i = 0; i < plants.length; i++) {
		console.log(`i:`,i);
    // last plant
		if (i === plants.length - 1) {
      if (river === true) {
        step += i + 1;
        break;
      } else {
        break;
      }
    }
    //water plant[i]
    waterRemain -= plants[i];
    
    //start from river
    if (river === true) {
      //not enough for next
      if (waterRemain < plants[i+1]) {
        step += (i + 1) * 2;
				console.log(`step:from river to river, total:`, step);
        waterRemain = capacity;
        
      } else {
        step += i + 2;
				console.log(`step: from river to next i, total:`, step);
        river = false;
				continue;
      }
    }    
    
    if (river !== true) {
      if (waterRemain < plants[i+1]) {
				step += i + 1;
				console.log(`step: back to river, total:`, step);
        waterRemain = capacity;
        river = true;

        
      } else {
				step += 1;
				console.log(`step: to next i, total:`, step);
      }
    }
    // other
  }
  return step
};

let arr = [2,2,3,3];
let b = 5;
console.log(wateringPlants(arr,b));