function largestNumbersInArrays2(arr) {
  return arr.map((pop) => pop.filter((amt) => amt > 100));
}

const array11 = [
  [71, 167, 202, 183, 16, 12],
  [191, 37, 7, 28, 38, 20, 18],
  [116, 41, 26, 53, 91, 16, 43],
  [21, 50, 111, 30, 49, 123],
  [41, 18, 401, 114, 22, 95],
];

alert(largestNumbersInArrays2(array11));
