/**
 * @param {string} pattern
 * @return {string}
 */
const smallestNumber = function(pattern) {
  pattern+="I";
  
  let num=Array(pattern.length).fill("");
  let counter=1;
  
  for(let i=0;i<pattern.length;i++){
    if(pattern[i]=="I"){
      num[i]=counter++;
      let prev=i-1;
      while(prev>=0 && pattern[prev]=="D"){
        num[prev]=counter++;
        prev--;
      }
    }    
  }   
  return num.join('');
};

// let pattern = 'IIIDIDDD';
// console.log(smallestNumber(pattern));

let counter = 1;
console.log(counter);
console.log(counter++);
console.log(counter);
console.log(++counter);
console.log(counter);

