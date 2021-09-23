export function currentSnake(newHead, prevSnake) {
  let currentSnake = [];
  currentSnake[0] = newHead;
  prevSnake.pop();
  prevSnake.forEach((elem, index) => {
    currentSnake[index + 1] = elem;
  });
  return currentSnake;
}

// console.log(currentSnake(["new"], [1, 2, 3]));
