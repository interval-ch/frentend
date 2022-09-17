/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
  words.sort((a,b) => a.length-b.length);
  let ans = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].includes(words[i])) {
        ans.push(words[i]);
				console.log(i,j,ans);
      }
    }
  } 
  return ans;
};

let k = ["mass","as","hero","superhero"];
console.log(stringMatching(k));