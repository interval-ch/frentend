function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1
console.log( counter.set(5) ); // 5
console.log( counter.decrease() ); // 4
console.log( counter() ); // 5
console.log( counter() ); // 6
console.log( counter.decrease() );5


// very similar. solution with property:

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }
//   counter.count = 0;
//   counter.set = function(value) {
//     return counter.count = value;
//   };
//   counter.decrease = function() {
//     return counter.count--;
//   };
//   return counter;
// }

// solution with closure:

// function makeCounter() {
//   let count = 0;
//   function counter() {
//     return count++;
//   }
//   counter.set = function(value){
//     return count = value;
//   }
//   counter.decrease = function() {
//     return count--;
//   }
//   return counter;
// }

// the difference is that in first case we use counter.count = 0;
// in second case: let count = 0;

// one more advantage of using property is that we can use it to watch the current value of count:

// alert(counter.count);