import { snakeFinder } from "./snakeFinder.js";

export const numberOfRoutes = (board, snake, depth) => {
  let finalResult = [];
  let result = [];
  let allStepSnakes = [snake];
  let extractedSnakes = [];
  let newAllStepSnakes = [];

  for (let i = 0; i < depth; i++) {
    allStepSnakes.forEach((snakeElem, index) => {
      extractedSnakes = snakeFinder(snakeElem, board);

      extractedSnakes.forEach((elem) => {
        newAllStepSnakes.push(elem);
      });
      result[index] = extractedSnakes.length;
    });
    allStepSnakes = [...newAllStepSnakes];
    finalResult[i] = result;
    newAllStepSnakes = [];
    result = [];
  }

  let lastOptions = finalResult[depth - 1];

  return lastOptions.reduce((a, b) => a + b, 0);
};
