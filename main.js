import $ from "jquery";

//// Battleship game
/// need different types of battleship
/// need a function for hit button to fire torpedo,
/// need a function for sunk battleship
///
const game = {
  page: "#start",
};
/*----- constants -----*/
const rows = 10;
const cols = 10;
// Fixed 10x10 grid for the boardsize
const squareSize = 40;
// Size of the grid

let gameBoard = [
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
];
/*----- app's state (variables) -----*/
/*----- cached element references -----*/

/*----- event listeners -----*/
// /*----- functions -----*/

const $gameBoardGrid = $("#gameboard");
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

$(".squares").on("click", (event) => {
  console.log(event);
});

const render = () => {
  $(".page").hide();
  $(game.page).show();

  createBoardSize();
};

const main = () => {
  $(".button").on("click", () => {
    game.page = "#game";
    render();
  });
  render();
};

main();
