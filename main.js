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
  battleship: 9, // 3 ship of 3 box
  numShip: 3,
  totalPlayerShip: 9,
  myhitcount: 0,
  // board: [
  //   [0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  //   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  //   [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  //   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // ],

  enemyboard: [
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
  playerboard: [
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
const squareSize = 30;
const $gameBoardGrid = $("#gameboard");
const $myBoard = $("#myboard");
//
//// Fixed 10x10 grid for the boardsize
// Size of the grid
// /*----- functions -----*/

const enemyFire = () => {
  let randomRow = Math.floor(Math.random() * 10);
  let randomIndex = Math.floor(Math.random() * 10);
  if (game.playerboard[randomRow][randomIndex] === 0) {
    game.playerboard[randomRow][randomIndex] = 3;
    $("#p" + randomRow + randomIndex).css("background", "white");
  } else if (game.playerboard[randomRow][randomIndex] === 1) {
    game.playerboard[randomRow][randomIndex] = 4;
    $("#p" + randomRow + randomIndex).css("background", "red");
    game.myhitcount++;
    if (game.myhitcount === game.totalPlayerShip) {
      alert("The enemy destroyed all your battleship, you lose!");
      $("#restart").show();
    }
  } else if (game.playerboard[randomRow][randomIndex] > 2) {
    enemyFire();
  }
};
const placeShip = (event) => {
  if (event.target !== event.currentTarget) {
    let row = event.target.id.substring(1, 2);
    let col = event.target.id.substring(2, 3);

    if (game.playerboard[row][col] === 0) {
      game.playerboard[row][col] = 1;
      event.target.style.background = "blue";
      game.totalPlayerShip--;
    }
    if (game.totalPlayerShip === 0) {
      alert("You have finished placing your ship! start firing!");
      $myBoard.off("click");
    }
  }
};

const generateShip = () => {
  for (let i = 0; i < game.numShip; i++) {
    let randomRow = Math.floor(Math.random() * 10);
    let randomIndex = Math.floor(Math.random() * 10);
    while (true) {
      if (randomIndex === 0) {
        if (
          game.enemyboard[randomRow][randomIndex] === 0 &&
          game.enemyboard[randomRow][randomIndex + 1] === 0 &&
          game.enemyboard[randomRow][randomIndex + 2] === 0
        ) {
          game.enemyboard[randomRow][randomIndex] = 1;
          game.enemyboard[randomRow][randomIndex + 1] = 1;
          game.enemyboard[randomRow][randomIndex + 2] = 1;
          break;
        }
      } else if (randomIndex === 9) {
        if (
          game.enemyboard[randomRow][randomIndex] === 0 &&
          game.enemyboard[randomRow][randomIndex - 1] === 0 &&
          game.enemyboard[randomRow][randomIndex - 2] === 0
        ) {
          game.enemyboard[randomRow][randomIndex] = 1;
          game.enemyboard[randomRow][randomIndex - 1] = 1;
          game.enemyboard[randomRow][randomIndex - 2] = 1;
          break;
        }
      } else {
        if (
          game.enemyboard[randomRow][randomIndex] === 0 &&
          game.enemyboard[randomRow][randomIndex + 1] === 0 &&
          game.enemyboard[randomRow][randomIndex - 1] === 0
        ) {
          game.enemyboard[randomRow][randomIndex] = 1;
          game.enemyboard[randomRow][randomIndex + 1] = 1;
          game.enemyboard[randomRow][randomIndex - 1] = 1;
          break;
        }
      }
      randomRow = Math.floor(Math.random() * 10);
      randomIndex = Math.floor(Math.random() * 10);
    }
  }
};

const resetBoard = () => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      game.enemyboard[i][j] = 0;
      game.playerboard[i][j] = 0;
      game.torpedos = 30;
      game.hitcount = 0;
      game.totalPlayerShip = 9;
    }
  }
};

const fireTorpedo = (event) => {
  $gameBoardGrid.on("click");
  if (event.target !== event.currentTarget) {
    let row = event.target.id.substring(1, 2);
    let col = event.target.id.substring(2, 3);

    if (game.enemyboard[row][col] === 0) {
      event.target.style.background = "white";
      game.enemyboard[row][col] = 3;
      enemyFire();
    } else if (game.enemyboard[row][col] === 1) {
      event.target.style.background = "red";
      game.enemyboard[row][col] = 2;
      game.hitcount++;
      enemyFire();
      if (game.hitcount === game.battleship) {
        $("#restart").show();
        alert("Congratulations, you have destroyed all the battleship!");
      }
    } else if (game.enemyboard[row][col] > 1) {
      alert("Spot already fired!");
    }
  }
};

// creating the gameboard
const createBoardSize = (i, j) => {
  for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {
      const $square = $("<div>")
        .addClass("squares")
        .attr("id", "s" + j + i);
      let topPosition = j * squareSize;
      let leftPosition = i * squareSize;
      $square.css("top", topPosition + "px");
      $square.css("left", leftPosition + "px");
      $gameBoardGrid.append($square);
    }
  }
};
//
const createMyBoard = (i, j) => {
  for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {
      const $square1 = $("<div>")
        .attr("id", "p" + j + i)
        .addClass("playersquare");
      let topPosition = j * squareSize;
      let leftPosition = i * squareSize;
      $square1.css("top", topPosition + "px");
      $square1.css("left", leftPosition + "px");
      $myBoard.append($square1);
    }
  }
};

///
const render = () => {
  $(".page").hide();
  $(game.page).show();
  $("#restart").hide();
};

const main = () => {
  $(".button").on("click", () => {
    game.page = "#game";
    createMyBoard();
    createBoardSize();
    generateShip();
    render();
  });
  $("#restart").on("click", () => {
    game.page = "#start";
    resetBoard();
    render();
  });
  $gameBoardGrid.on("click", (event) => {
    fireTorpedo(event);
    render();
  });
  $myBoard.on("click", (event) => {
    placeShip(event);
    render();
  });
  render();
};

main();
