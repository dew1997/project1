// const game = {
//   numShip: 3,
//   board: [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ],
// };
// const placeShip = (event) => {
//   if (event.target !== event.currentTarget) {
//     let row = event.target.id.substring(1, 2);
//     let col = event.target.id.substring(2, 3);

//     if (game.board[row][col] === 0) {
//       game.board[row][col] = 1;
//       event.target.style.background = "blue";
//     }
//   }
// };

// for (let i = 0; i < game.numShip; i++) {
//   let randomRow = Math.floor(Math.random() * 10);
//   let randomIndex = Math.floor(Math.random() * 10);
//   while (true) {
//     if (randomIndex === 0) {
//       if (
//         game.board[randomRow][randomIndex] === 0 &&
//         game.board[randomRow][randomIndex + 1] === 0 &&
//         game.board[randomRow][randomIndex + 2] === 0
//       ) {
//         game.board[randomRow][randomIndex] = 1;
//         game.board[randomRow][randomIndex + 1] = 1;
//         game.board[randomRow][randomIndex + 2] = 1;
//         break;
//       }
//     } else if (randomIndex === 9) {
//       if (
//         game.board[randomRow][randomIndex] === 0 &&
//         game.board[randomRow][randomIndex - 1] === 0 &&
//         game.board[randomRow][randomIndex - 2] === 0
//       ) {
//         game.board[randomRow][randomIndex] = 1;
//         game.board[randomRow][randomIndex - 1] = 1;
//         game.board[randomRow][randomIndex - 2] = 1;
//         break;
//       }
//     } else {
//       if (
//         game.board[randomRow][randomIndex] === 0 &&
//         game.board[randomRow][randomIndex + 1] === 0 &&
//         game.board[randomRow][randomIndex - 1] === 0
//       ) {
//         game.board[randomRow][randomIndex] = 1;
//         game.board[randomRow][randomIndex + 1] = 1;
//         game.board[randomRow][randomIndex - 1] = 1;
//         break;
//       }
//     }
//     randomRow = Math.floor(Math.random() * 10);
//     randomIndex = Math.floor(Math.random() * 10);
//   }
// }

// console.log(game.board);

// const placeShip = (event) => {
//   if (event.target !== event.currentTarget) {
//     let row = event.target.id.substring(1, 2);
//     let col = event.target.id.substring(2, 3);

//     if (game.playerboard[row][col] === 0) {
//       game.playerboard[row][col] = 1;
//       event.target.style.background = "blue";
//       game.totalPlayerShip--;
//     }
//     if (game.totalPlayerShip === 0) {
//       alert("You have finished placing your ship! start firing!");
//     }
//   }
//   event.stopPropagation();
// };
// const disableClick = () => {
//   while (game.totalPlayerShip !== 0) {
//     $myBoard.on("click", (event) => {
//       placeShip(event);
//     });
//   }
//   while (game.totalPlayerShip !== game.battleship) {
//     $gameBoardGrid.on("click", (event) => {
//       fireTorpedo(event);
//     });
//   }
// };

// $myBoard.on("click", (event) => {
//   placeShip(event);
// });

// const generateRandomLocation = (board, max, ship) => {
//   let didPlace = false;
//   let directionString;
//   let valid;

//   while (!didPlace) {
//     let x = this.getRandomInt(max);
//     let y = this.getRandomInt(max);

//     [valid, directionString] = this.generateRandomDirection(x, y, ship);

//     if (valid) {
//       this.placeShip(x, y, "S", board, directionString, ship);
//       didPlace = true;
//     }
//   }
// };

// const getRandomInt = (max) => {
//   Math.floor(Math.random() * Math.floor(max));
// };

// const generateRandomDirection = (column, row, ship) => {
//   let valid = false;
//   //// 4 different direction
//   let direction = Math.floor(Math.random() * 4) + 1;
//   let directionString = "";

//   if (direction === 1) {
//     // right
//     for (let i = 0; i < ship.size; i++) {
//       if (
//         column + i >= this.gameBoard.length ||
//         this.gameBoard[row][column + i] === "S" ||
//         this.gameBoard[row][column + i] === undefined
//       ) {
//         return [valid, directionString];
//       }
//     }
//     valid = true;
//     directionString = "right";
//     return [valid, directionString];
//   } else if (direction === 2) {
//     //left
//     for (let i = 0; i < ship.size; i++) {
//       if (
//         column - i < 0 ||
//         this.gameBoard[row][column - index] === "S" ||
//         this.gameBoard[row][column - index] === undefined
//       ) {
//         return [valid, directionString];
//       }
//     }
//     valid = true;
//     directionString = "left";
//   }
// };

// const placeShip = (x, y, board, direction, ship) => {
//   if (direction === "right")
//     for (let i = 0; i < ship.size; i++) {
//       board[y][x + i] = c;
//       ship.coordinates.push(`${x + i}-${y}`);
//     }
//   else if (direction === "left") {
//     for (let i = 0; i < ship.size; i++) {
//       board[y][x - i] = c;
//       ship.coordinates.push(`${x - i}-${y}`);
//     }
//   }
// };

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
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
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
// const $gameBoardGrid = $("#gameboard");
// const $myBoard = $("#myboard");
const empty = 0;
const ship = 1;
const hit = 4;
const miss = 3;
