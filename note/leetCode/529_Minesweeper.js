/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
 const updateBoard = function(board, click) {
  let click = [r, c], m = board.length, n = board[0].length;
  
  
  function adjacentM(r, c) {
    if ((r>=0 || r<m ) && (c>=0 || c<n)) {
      if (1==1) {
        return 1
      }
    }
    return 0
  }
  
  //game over
  if (board[r][c] === 'M') {
    board[r][c] = 'X';
    return board
  }
  
  //empty E revealed
  if (board[r][c] === 'E') {

  }
    
  
  
};