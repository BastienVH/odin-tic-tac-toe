//game object
const game = (() => {
  let currentMove = 1;

  function makeMove(event) {
    // find which cell was clicked
    let number = gameBoard.getPlace(event);
    //check if move is possible
    if (gameBoard.checkValidityOfMove(number)) {
    // place X in that cell
    gameBoard.placeSymbol(getCurrentPlayer(), number);
    currentMove++;
    }
  }

  function getCurrentPlayer() {
    if (currentMove % 2 == 0) {
      return 'O'
    } else {
    return 'X'
    }
  }

  return {makeMove}
})();

const gameBoard = (function() {
  //cache DOM elements
  const boardElement = document.querySelector("div.board");
  // empty array
  const boardContent = ['', '','', '','', '','', '','',]
  
  //populate board with pre-made array
  render();

  function emptyBoard() {
    while (boardElement.lastChild) {
      boardElement.removeChild(boardElement.lastChild);
    }
  }

  //bind event
  boardElement.addEventListener("click", game.makeMove);

  function render() {
    emptyBoard();
    for (i = 0; i < boardContent.length; i++) {
      // create empty cell
      let cell = document.createElement('div');
      cell.classList.add('cell');
      //fill cell with array content
      cell.innerText = boardContent[i];
      //store cell number
      cell.dataset.place = i;
      boardElement.appendChild(cell);
      }
    };

  function getPlace(event) {
    // return which cell was clicked
    const cell = event.target.closest('div.cell');
    return cell.dataset.place;
  }

  function placeSymbol(symbol, location) {
    boardContent[location] = symbol;
    render();
  }

  function checkValidityOfMove(index) {
    // check if array is empty string at index
    if (boardContent[index] == '') {
      return true
    } else {
      return false
    }
  }

  return {getPlace, placeSymbol, emptyBoard, render, checkValidityOfMove}
})();


//player factory
const playerFactory = (symbol) => {
  return {symbol}
};

const player1 = playerFactory('X');
const player2 = playerFactory('O');
