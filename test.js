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
console.log(game.board);
