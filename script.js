//game object
const game = (() => {
  let currentMove = 1;

  function makeMove(event) {
    // find which cell was clicked
    let number = gameBoard.getPlace(event);
    //check if move is possible
    if (gameBoard.checkValidityOfMove(number)) {
    // place symbol of current player in that cell
    gameBoard.placeSymbol(getCurrentPlayer(), number);
    if (gameBoard.checkForWin() == true) {
      console.log(`Game was won by ${getCurrentPlayer()}!`);
    }
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

  function checkForWin() {
    // check rows for 3 identical values
    if (areEqual(boardContent[0], boardContent[1], boardContent[2]) == true || areEqual(boardContent[3], boardContent[4], boardContent[5]) == true || areEqual(boardContent[6], boardContent[7], boardContent[8]) == true) {
      return true;
    }
    // check columns for 3 identical values
    if (areEqual(boardContent[0], boardContent[3], boardContent[6]) == true || areEqual(boardContent[1], boardContent[4], boardContent[7]) == true || areEqual(boardContent[2], boardContent[5], boardContent[8]) == true) {
      return true;
    } 
    // check diagonals for 3 identical values
    if (areEqual(boardContent[0], boardContent[4], boardContent[8]) == true || areEqual(boardContent[2], boardContent[4], boardContent[6]) == true) {
      return true;
    }
    return false;
  }

  // helper function to check if 3 values are equal and not empty
  // Idea source: https://stackoverflow.com/a/9973399
  function areEqual(a, b, c) {
    if (a == '' || b == '' || c == '') {
      return false;
    } else if (a == b & b == c) {
      return true;
    } else {
      return false;
    }
  }
  return {getPlace, placeSymbol, emptyBoard, render, checkValidityOfMove, checkForWin}
})();


//player factory
const playerFactory = (symbol) => {
  return {symbol}
};

const player1 = playerFactory('X');
const player2 = playerFactory('O');
