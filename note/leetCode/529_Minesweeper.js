/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
const updateBoard = function(board, click) {
  let [r, c] = click, m = board.length, n = board[0].length;
  dfs(r, c);
  return board;

  //check mine 3*3
  function adjacentM(r, c) {
    let count = 0;
    for (let i = r-1; i<=r+1; i++) {
      for (let j = c-1; j<=c+1; j++) {
        if ((i>=0 && i<m ) && (j>=0 && j<n)) {
          if (board[i][j] === "M") {
          count += 1;
          }
        }
      }
    }
    return count;
  }
  //game over
  function dfs(r, c) {
    if (board[r][c] === 'M') {
      board[r][c] = 'X';
      return;
    }
    
    if (board[r][c] !== 'E') return;

    let num = adjacentM(r,c);
    if (num) {
      board[r][c] = String(num);
      return;
    } else {
      board[r][c] = 'B';
      for (let i = r-1; i<=r+1; i++) {
        for (let j = c-1; j<=c+1; j++) {
          if ((i>=0 && i<m ) && (j>=0 && j<n)) {
            dfs(i, j);
          }
        }
      }
    }
  }
};



let board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]];

let click = [3, 0];

console.log(updateBoard(board,click));