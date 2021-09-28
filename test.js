import { numberOfRoutes } from "./main2.js";

console.log(
  "Result of Test1:  ",
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
console.log(
  "Result of Test2:  ",
  numberOfRoutes(
    [2, 3],
    [
      [0, 2],
      [0, 1],
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    10
  )
);
console.log(
  "Result of Test3:  ",
  numberOfRoutes(
    [10, 10],
    [
      [5, 5],
      [5, 4],
      [4, 4],
      [4, 5],
    ],
    4
  )
);
