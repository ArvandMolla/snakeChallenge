export const snakeFinder = (currentSnake, board) => {
  let currentHead = currentSnake[0];
  let optionsArray = [];
  let option = [currentHead[0] + 1, currentHead[1]];

  if (!isInCurrentSnake(option, currentSnake) & isInBoard(option, board)) {
    optionsArray.push(option);
  }
  option = [currentHead[0] - 1, currentHead[1]];
  if (!isInCurrentSnake(option, currentSnake) & isInBoard(option, board)) {
    optionsArray.push(option);
  }
  option = [currentHead[0], currentHead[1] + 1];

  if (!isInCurrentSnake(option, currentSnake) & isInBoard(option, board)) {
    optionsArray.push(option);
  }
  option = [currentHead[0], currentHead[1] - 1];
  if (!isInCurrentSnake(option, currentSnake) & isInBoard(option, board)) {
    optionsArray.push(option);
  }

  //   console.log("optionsArray: ", optionsArray);

  let snakeArray = [];
  let newSnakeOption = [];
  let cutTailSnake = [...currentSnake];
  cutTailSnake.pop();

  optionsArray.forEach((elem) => {
    newSnakeOption[0] = elem;

    // console.log("cuttailsnake: ", cutTailSnake);
    cutTailSnake.forEach((elem, index) => {
      newSnakeOption[index + 1] = elem;
    });
    snakeArray.push(newSnakeOption);
    newSnakeOption = [];
  });

  return snakeArray;
};

const isInCurrentSnake = (option, currentSnake) => {
  let inCurrentSnake = false;
  let newSnake = [...currentSnake];
  newSnake.pop();
  newSnake.forEach((elem) => {
    if (JSON.stringify(elem) == JSON.stringify(option)) {
      inCurrentSnake = true;
    }
  });

  return inCurrentSnake;
};

const isInBoard = (option, board) => {
  let inBoard = true;
  if (option[0] > board[0] - 1) {
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
