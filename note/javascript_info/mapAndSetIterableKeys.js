let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Why? How can we fix the code to make keys.push work?
keys = Array.from(keys);
console.log(keys);

keys.push("more");
console.log(keys);