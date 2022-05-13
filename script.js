
const gameBoard = (() => {
  // cache DOM elements
  const boardElement = document.querySelector("div.board");
  const boardContent = ['O','X','X','O','X','O','X','O','X'];
  
  // populate board with pre-made array
  render();

  function render() {
    for (const element of boardContent) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.innerText = element;
      boardElement.appendChild(cell);
    }
  };

  return {boardContent}
})();

const playerFactory = (symbol) => {
  return {symbol}
};

const player1 = playerFactory('X');
const player2 = playerFactory('O');
