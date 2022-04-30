
const gameBoard = (() => {
  const boardElement = document.querySelector("div.board");
  const boardContent = [
    ['O','O','X'],
    ['O','X','O'],
    ['X','O','X']
  ];
  
  const populateBoard = () => {
    for (const line of boardContent) {
      let row = document.createElement('div');
      row.classList.add('row');
      for ( const element of line) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = element;
        row.appendChild(cell);
      }
      boardElement.appendChild(row);
    }
  };

  return {boardContent, populateBoard}
})();

const playerFactory = (symbol) => {
  return {symbol}
};

const player1 = playerFactory('X');
const player2 = playerFactory('O');