let elem1 = [2, 3];
let elem2 = [2, 4];

const areEqual = (elem1, elem2) => {
  //   if (elem1.toString() == elem2.toString()) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  if (JSON.stringify(elem1) == JSON.stringify(elem2)) {
    return true;
  } else {
    return false;
  }
};

console.log(areEqual(elem1, elem2));
