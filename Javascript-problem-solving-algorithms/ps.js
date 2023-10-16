function largestNumbersInArrays3(array) {
  return array.map((successiveArray2) =>
    Math.max.apply(null, successiveArray2)
  );
}

const array12 = [
  [4, 7, 20, 1, 9, 31, 6, 11, 8],
  [23, 45, 33, 20, 41, 19, 25],
  [37, 59, 65, 35, 14, 22, 88],
  [10, 20, 60, 30, 70, 40],
  [38, 27, 29, 47, 13, 12, 36],
];

alert(
  `Largest of all numbers is ${
    largestNumbersInArrays3(array12).sort((a, b) => b - a)[0]
  }`
);
