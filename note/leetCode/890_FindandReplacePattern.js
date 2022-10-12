/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function(words, pattern) {
  
  return words.filter(word => {
    const map = new Map();
    const set = new Set();
    
    for (let i = 0; i < word.length; i++) {
      if (map.has(pattern[i]) && (map.get(pattern[i]) !== word[i])) {
        return false
      } else if (!map.has(pattern[i])) {
        if (set.has(word[i])) {
          return false
        }
        map.set(pattern[i], word[i]);
        set.add(word[i]);
      }
    }
    return true
  })
}


let words = ["a","b","c"];
let pattern = "a";

console.log(findAndReplacePattern(words, pattern));