
const gameBoard = (() => {
  const boardElement = document.querySelector("div.board");
  const boardContent = ['O','X','X','O','X','O','X','O','X'];
  
  const populateBoard = () => {
    for (const element of boardContent) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.innerText = element;
      boardElement.appendChild(cell);
    }
  };

  return {boardContent, populateBoard}
})();

const playerFactory = (symbol) => {
  return {symbol}
};

const player1 = playerFactory('X');
const player2 = playerFactory('O');

// Populate the board with prebuilt array
gameBoard.populateBoard()
