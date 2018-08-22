/*
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
 */

 //------ This function will return a hash of the first solution --------------
 const nQueensOneSolution = (n) => {
     let positions = {};
     if(nQueensOneSolutionUtil(n, 0, positions)){
         return positions;
     }else{
         return 'not found';
     }
 }

 //conditions for being in a queen's kill zone
 // 1) same row
 // 2) same column 
 // 3) top left to bottom right diag : row - col 
 // 4) bottom left to top right diag : row + col 
 const nQueensOneSolutionUtil = (n, row, positions) => {
    if(n === row){
        return true;
    }

    for(let col = 0; col < n; col++){
        let safePos = true;
        for(let q = 0; q < row; q++){
            let currentRow = positions[q][0];
            let currentCol = positions[q][1];
            if(currentRow === row){
                safePos = false;
                break;
            }else if(currentCol === col){
                safePos = false; 
                break;
            }else if(currentRow - currentCol == row - col){
                safePos = false;
                break;
            }else if(currentRow + currentCol === row + col){
                safePos = false;
                break;
            }
        }
        //store position of safe position is found
        if (safePos) {
            positions[row] = [row, col];
            if (nQueensOneSolutionUtil(n, row + 1, positions)) {
                return true;
            }
        }
    }
    return false;
 }

console.log(nQueensOneSolution(5));