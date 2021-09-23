export const optionFinder = (currentSnake, board) => {
  let currentHead = currentSnake[0];
  let optionsArray = [];

  let option = [currentHead[0] + 1, currentHead[1]];

  if (
    !isInCurrentSnake(option, currentSnake, board) & isInBoard(option, board)
  ) {
    optionsArray.push(option);
  }

  option = [currentHead[0] - 1, currentHead[1]];
  if (
    !isInCurrentSnake(option, currentSnake, board) & isInBoard(option, board)
  ) {
    optionsArray.push(option);
  }

  option = [currentHead[0], currentHead[1] + 1];

  if (
    !isInCurrentSnake(option, currentSnake, board) & isInBoard(option, board)
  ) {
    optionsArray.push(option);
  }
  option = [currentHead[0], currentHead[1] - 1];

  if (
    !isInCurrentSnake(option, currentSnake, board) & isInBoard(option, board)
  ) {
    optionsArray.push(option);
  }

  return optionsArray;
};

const isInCurrentSnake = (option, currentSnake) => {
  let inCurrentSnake = false;
  currentSnake.forEach((elem) => {
    if (JSON.stringify(elem) == JSON.stringify(option)) {
      inCurrentSnake = true;
    }
  });

  return inCurrentSnake;
};

const isInBoard = (option, board) => {
  let inBoard = true;
  if (option[0] > board[0]) {
    inBoard = false;
  } else if (option[0] < 0) {
    inBoard = false;
  } else if (option[1] > board[1] - 1) {
    inBoard = false;
  } else if (option[1] < 0) {
    inBoard = false;
  }
  return inBoard;
};

// console.log(
//   optionFinder(
//     [
//       [2, 2],
//       [3, 2],
//       [3, 1],
//       [3, 0],
//       [2, 0],
//       [1, 0],
//       [0, 0],
//     ],
//     [4, 3]
//   )
// );
