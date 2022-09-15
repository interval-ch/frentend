function
myFunction
(
a, b
)
{
let arr = [];   
let c = a;
for (let i = 0; i < (Math.ceil(a.length/3)); i++) {
  console.log(i);
  arr.unshift(c.slice(-3));
  c = c.slice(0,-3);
} 
console.log(arr);
return arr.join(b);
}
console.log(myFunction('1234567','.'));