import { optionFinder } from "./optionFinder.js";
import { currentSnake } from "./currentSnake.js";

const numberOfRoutes = (board, snake, depth) => {
  let optionsArray = [snake[0]];
  let snake = snake;
  let route = [];
  let allRoutes = [];
  let finalResult = [];

  for (let i = 0; i < depth; i++) {
    let result = [];

    optionsArray.forEach((elem, index) => {
      optionsArray = optionFinder(snake, board);

      result[index] = optionsArray.length;
      snake = currentSnake(elem, snake);
    });
    finalResult[i] = result;
  }

  optionsArray = optionFinder(snake, board);
  optionsArray.forEach((elem) => {
    route.push(elem);
    if (route.length < depth) {
      snake = currentSnake(elem, snake);
      optionsArray = optionFinder(snake, board);
    }
  });

  let optionsArray = optionFinder(snake, board);
  optionsArray.forEach((elem1) => {
    let snake2 = currentSnake(elem1, snake);
    let optionsArray2 = optionFinder(snake2, board);
    optionsArray2.forEach((elem2) => {
      let snake3 = currentSnake(elem2, snake2);
      let optionsArray3 = optionFinder(snake3, board);
      optionsArray3.forEach((elem3) => {
        let route = [elem1, elem2, elem3];
        allRoutes.push(route);
      });
    });
  });
  return allRoutes;
};

console.log(
  numberOfRoutes(
    [4, 3],
    [
      [2, 2],
      [3, 2],
      [3, 1],
      [3, 0],
      [2, 0],
      [1, 0],
      [0, 0],
    ],
    3
  )
);
