var romanToInt = function(s) {
  let str = s;
  let n = 0;
  
  const add = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
  }
  
  const subtraction = {
    IV:4,
    IX:9,
    XL:40,
    XC:90,
    CD:400,
    CM:900,
  }
  
  for (let [key, value] of Object.entries(subtraction)) {
    while (str.includes(key)) {
			console.log(str.indexOf(key));
      str = str.slice(0, str.indexOf(key)) + str.slice(str.indexOf(key) + 2);
			n += value; 
    }
  }

  for (let [key, value] of Object.entries(add)) {
    while (str.includes(key)) {
			console.log(str.indexOf(key));
      str = str.slice(0, str.indexOf(key)) + str.slice(str.indexOf(key) + 1);
			n += value; 
    }
  }
	return n;
}

let r = "IIIIV";
console.log(romanToInt(r));

// r = r.slice(0, r.indexOf('IV')) + r.slice(r.indexOf('IV')+2)
// console.log(r);