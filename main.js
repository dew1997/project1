import $ from "jquery";

//// Battleship game
/// need different types of battleship
/// considering 5 different battle ship sizes,
/// 1,2,3,4,5 blocks
/// need a function for hit button to fire torpedo,
///
/*----- constants -----*/
const game = {
  page: "#start",
  hitcount: 0,
  battleship: 9,
  numShip: 3,
  torpedos: 30,
  board: [
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],

  board: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
};
//
const rows = 10;
const cols = 10;
const squareSize = 40;
const $gameBoardGrid = $("#gameboard");
//
//// Fixed 10x10 grid for the boardsize
// Size of the grid
// /*----- functions -----*/

const generateShip = () => {
  for (let i = 0; i < game.numShip; i++) {
    let randomRow = Math.floor(Math.random() * 10);
    let randomIndex = Math.floor(Math.random() * 10);
    if (randomIndex === 0) {
      game.board[randomRow][randomIndex] = 1;
      game.board[randomRow][randomIndex + 1] = 1;
      game.board[randomRow][randomIndex + 2] = 1;
    } else if (randomIndex === 9) {
      game.board[randomRow][randomIndex] = 1;
      game.board[randomRow][randomIndex - 1] = 1;
      game.board[randomRow][randomIndex - 2] = 1;
    } else {
      game.board[randomRow][randomIndex] = 1;
      game.board[randomRow][randomIndex + 1] = 1;
      game.board[randomRow][randomIndex - 1] = 1;
    }
  }
};
const fireTorpedo = (event) => {
  if (event.target !== event.currentTarget) {
    let row = event.target.id.substring(1, 2);
    let col = event.target.id.substring(2, 3);
    console.log(row);
    console.log(col);

    if (game.board[row][col] === 0) {
      event.target.style.background = "white";
      game.board[row][col] = 3;
      game.torpedos--;
      if (game.torpedos === 0) {
        alert("You have used up all your torpedos, you lose!");
        $("#restart").show();
      }
    } else if (game.board[row][col] === 1) {
      event.target.style.background = "red";
      game.board[row][col] = 2;
      game.torpedos--;
      game.hitcount++;
      if (game.hitcount === game.battleship) {
        alert("Congratulations, you have destroyed all the battleship!");
        $("#message").show();
        $("#restart").show();
      }
    } else if (game.board[row][col] > 1) {
      alert("Spot already fired!");
    }
  }
};

// creating the gameboard
const createBoardSize = (i, j) => {
  for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {
      const $square = $("<div>")
        .attr("id", "s" + j + i)
        .addClass("squares");
      let topPosition = j * squareSize;
      let leftPosition = i * squareSize;
      $square.css("top", topPosition + "px");
      $square.css("left", leftPosition + "px");
      $gameBoardGrid.append($square);
    }
  }
};
///
const render = () => {
  $(".page").hide();
  $(game.page).show();
  $("#message").hide();
  $("#restart").hide();
  createBoardSize();
  generateShip();
};

const main = () => {
  $(".button").on("click", () => {
    game.page = "#game";
    render();
  });
  $("#restart").on("click", () => {
    game.page = "#start";
    createBoardSize();
    render();
  });
  $gameBoardGrid.on("click", (event) => {
    fireTorpedo(event);
  });
  render();
};

main();
