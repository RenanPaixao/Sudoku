import { printBoard, solveSudoku } from './solver.mjs'

const board = [
  [0, 0, 0, 2],
  [2, 0, 3, 0],
  [1, 2, 0, 0],
  [4, 3, 0, 1],
];

const solution = solveSudoku(board)

if(solution) {
  printBoard(solution)
} else {
  console.log('Solução não encontrada!')
}

