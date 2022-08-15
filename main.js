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
const empty = 0;
const ship = 2;
const hit = 4;
const miss = 3;

//
//// Fixed 10x10 grid for the boardsize
// Size of the grid
// /*----- functions -----*/

// const emptyBoard = () => {
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (game.playerboard[i][j] === empty) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// };

const enemyFire = () => {
  let randomRow = Math.floor(Math.random() * 10);
  let randomIndex = Math.floor(Math.random() * 10);
  if (game.playerboard[randomRow][randomIndex] === 0) {
    game.playerboard[randomRow][randomIndex] = miss;
    $("#p" + randomRow + randomIndex).css("background", "white");
  } else if (game.playerboard[randomRow][randomIndex] === 1) {
    game.playerboard[randomRow][randomIndex] = hit;
    $("#p" + randomRow + randomIndex).css("background", "red");
    game.myhitcount++;
    if (game.myhitcount === 9) {
      $("#restart").show();
      alert("The enemy destroyed all your battleship, you lose!");
    }
  } else if (game.playerboard[randomRow][randomIndex] > 2) {
    enemyFire();
  }
};

// const resetPlayerBoard = () => {
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       game.playerboard[i][j] = 0;
//       $("#p" + j + i).css("background", "#274a5b");
//     }
//   }
// };

// const generatePlayerShip = () => {
// for (let i = 0; i < game.numShip; i++) {
//   let randomRow = Math.floor(Math.random() * 10);
//   let randomIndex = Math.floor(Math.random() * 10);
//     while (true) {
//       if (randomIndex === 0) {
//         if (
//           game.playerboard[randomRow][randomIndex] === 0 &&
//           game.playerboard[randomRow][randomIndex + 1] === 0 &&
//           game.playerboard[randomRow][randomIndex + 2] === 0
//         ) {
//           game.playerboard[randomRow][randomIndex] = 1;
//           game.playerboard[randomRow][randomIndex + 1] = 1;
//           game.playerboard[randomRow][randomIndex + 2] = 1;
//           $("#p" + randomRow + randomIndex).css("background", "blue");
//           $("#p" + randomRow + (randomIndex + 1)).css("background", "blue");
//           $("#p" + randomRow + (randomIndex + 2)).css("background", "blue");

//           break;
//         }
//       } else if (randomIndex === 9) {
//         if (
//           game.playerboard[randomRow][randomIndex] === 0 &&
//           game.playerboard[randomRow][randomIndex - 1] === 0 &&
//           game.playerboard[randomRow][randomIndex - 2] === 0
//         ) {
//           game.playerboard[randomRow][randomIndex] = 1;
//           game.playerboard[randomRow][randomIndex - 1] = 1;
//           game.playerboard[randomRow][randomIndex - 2] = 1;
//           $("#p" + randomRow + randomIndex).css("background", "blue");
//           $("#p" + randomRow + (randomIndex - 1)).css("background", "blue");
//           $("#p" + randomRow + (randomIndex - 2)).css("background", "blue");
//           break;
//         }
//       } else {
//         if (
//           game.playerboard[randomRow][randomIndex] === 0 &&
//           game.playerboard[randomRow][randomIndex + 1] === 0 &&
//           game.playerboard[randomRow][randomIndex - 1] === 0
//         ) {
//           game.playerboard[randomRow][randomIndex] = 1;
//           game.playerboard[randomRow][randomIndex + 1] = 1;
//           game.playerboard[randomRow][randomIndex - 1] = 1;
//           $("#p" + randomRow + randomIndex).css("background", "blue");
//           $("#p" + randomRow + (randomIndex + 1)).css("background", "blue");
//           $("#p" + randomRow + (randomIndex - 1)).css("background", "blue");
//           break;
//         }
//       }
//       randomRow = Math.floor(Math.random() * 10);
//       randomIndex = Math.floor(Math.random() * 10);
//     }
//   }
// };

const checkEmpty = () => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (game.playerboard[i][j] === 0) {
      } else {
      }
    }
  }
};

const placeShip = (event) => {
  if (event.target !== event.currentTarget) {
    let row = event.target.id.substring(1, 2);
    let col = event.target.id.substring(2, 3);
    let row2 = parseInt(row) + 1;
    let row3 = parseInt(row) + 2;
    console.log(row2);
    console.log(col);
    console.log(game.playerboard[row][col]);
    console.log(game.playerboard[row2][col]);

    if (game.playerboard[row][col] === 0) {
      game.playerboard[row][col] = ship;
      event.target.style.background = "blue";
      game.totalPlayerShip--;
    }
    if (game.playerboard[row2][col] === 0) {
      game.playerboard[row2][col] = ship;
      // event.target.style.background = "blue"; //query the specific div with that id s + row + col2
      $("#p" + row2 + col).css("background", "blue");
      game.totalPlayerShip--;
    }
    if (game.playerboard[row3][col] === 0) {
      game.playerboard[row3][col] = ship;
      // event.target.style.background = "blue"; //query the specific div with that id s + row + col2
      $("#p" + row3 + col).css("background", "blue");
      game.totalPlayerShip--;
    }
    if (game.totalPlayerShip === 0) {
      alert("You have finished placing your ship! start firing!");
      $myBoard.off("click");
    }
    checkEmpty();
  }
  event.stopPropagation();
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
  $myBoard.empty();
  $gameBoardGrid.empty();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      game.enemyboard[i][j] = 0;
      game.playerboard[i][j] = 0;
    }
  }
  game.hitcount = 0;
  game.myhitcount = 0;
  game.battleship = 9;
  game.totalPlayerShip = 9;
};

const fireTorpedo = (event) => {
  $gameBoardGrid.on("click");
  if (event.target !== event.currentTarget) {
    let row = event.target.id.substring(1, 2);
    let col = event.target.id.substring(2, 3);

    if (game.enemyboard[row][col] === 0) {
      event.target.style.background = "white";
      game.enemyboard[row][col] = miss;
      enemyFire();
    } else if (game.enemyboard[row][col] === 1) {
      event.target.style.background = "red";
      game.enemyboard[row][col] = hit;
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
  event.stopPropagation();
};

// creating the gameboard
const createBoardSize = (i, j) => {
  for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {
      const $square = $("<div>")
        .addClass("squares")
        .attr("id", "s" + i + j);
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
        .attr("id", "p" + i + j)
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
    // generatePlayerShip();
  });
  $("#restart").on("click", () => {
    game.page = "#start";
    resetBoard();
    render();
  });
  $gameBoardGrid.on("click", (event) => {
    fireTorpedo(event);
  });
  // $("#randomise").on("click", (event) => {
  //   resetPlayerBoard();
  //   generatePlayerShip();
  // });
  $myBoard.on("click", (event) => {
    placeShip(event);
  });
  render();
};

main();
