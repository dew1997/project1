const game = {
  numShip: 3,
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
