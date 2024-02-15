// Tamanho máximo de células por linha e coluna.
const MAX_CELLS = 4;

const findEmptyCell = (board) => {
  for (let i = 0; i < MAX_CELLS; i++) {
    for (let j = 0; j < MAX_CELLS; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }
  return null;
}

const isValid = (board, num, row, col) => {
  // Verifica a linha
  for (let j = 0; j < MAX_CELLS; j++) {
    if (board[row][j] === num && j !== col) {
      return false;
    }
  }
  
  // Verifica a coluna
  for (let i = 0; i < MAX_CELLS; i++) {
    if (board[i][col] === num && i !== row) {
      return false;
    }
  }
  
  // Verifica a sub-grade 2x2
  let startRow = row - row % 2;
  let startCol = col - col % 2;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (board[i + startRow][j + startCol] === num) {
        return false;
      }
    }
  }
  return true;
}

const solveSudoku = (board) => {
  // Adiciona o estado inicial à fila
  let queue = [board];
  while (queue.length) {
    // Remove o primeiro estado da fila
    
    console.log('Fila:')
    console.log(queue)
    let currentBoard = queue.shift();
    console.log('Board atual:')
    printBoard(currentBoard);
    // Encontra a primeira célula vazia
    let emptyCell = findEmptyCell(currentBoard);
    if (!emptyCell) {
      // Se não houver células vazias, o jogo está resolvido
      return currentBoard;
    } else {
      let [row, col] = emptyCell;
      // Testa todos
      for (let num = 1; num <= MAX_CELLS; num++) {
        if (isValid(currentBoard, num, row, col)) {
          // Cria uma cópia do tabuleiro atual com o número inserido
          let newBoard = currentBoard.map(row => row.slice());
          newBoard[row][col] = num;
          // Adiciona o novo estado à fila
          queue.push(newBoard);
        }
      }
    }
  }
  // Caso não encontre solução, retorna null
  return null;
}

const printBoard = (board) => {
  const boardString = board.map(row => {
    return row.map((cel, i) => i === 0 ? `| ${cel}` : cel)
  }).map(row => {
    return row.map((cel, i) => i === MAX_CELLS - 1 ? `${cel} |` : cel)
  }).map(row => row.join(' | '))
    .join('\n');
  console.log('_________________')
  console.log(boardString);
  console.log('_________________')
}

export { solveSudoku, printBoard };

