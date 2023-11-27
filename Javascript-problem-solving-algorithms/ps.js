//* Exercise for Binary Search

const binarySearch = (array, number) => {
  let start = 0;
  let ends = array.length - 1;
  while (start < ends) {
    let middle = Math.floor((start + ends) / 2);
    if (number === array[start]) {
      return start;
    }
    if (number === array[middle]) {
      return middle;
    }
    if (number === array[ends]) {
      return ends;
    }
    if (number > array[middle]) {
      start = middle + 1;
    } else {
      ends = middle - 1;
    }
  }
};

const array = [
  12, 18, 7, 41, 10, 3, 7, 33, 38, 26, 21, 18, 25, 31, 7, 40, 9, 7,
];

const newArray = [...new Set(array)].sort((a, b) => a - b);

alert(`The number "38" was found at index ${binarySearch(newArray, 38)}`);

//* Determine how many times an element appears in an array

const countNumbers = (array, numb) => {
  return (amount = array.reduce((a, value) => (value === numb ? a + 1 : a), 0));
};

alert(`The number "7" appears ${countNumbers(array, 7)} times in the array`);

//* Determine what element appear the most times in an array

const mostOccur = (arrayPassed) =>
  arrayPassed.reduce(
    (a, b, index, arr) =>
      arr.filter((o) => o === a).length >= arr.filter((o) => o === b).length
        ? a
        : b,
    null
  );

const arr10 = ["red", "pink", "blue", "red", "yellow", "green", "red"];

alert(`The element that occurs most times in the array is ${mostOccur(arr10)}`);

const arr11 = [
  12, 7, 10, 29, 41, 12, 18, 14, 24, 30, 12, 41, 10, 12, 19, 22, 12,
];

const result = arr11.reduce(
  (a, b, index, array) =>
    array.filter((o) => o === a).length >= array.filter((o) => o === b).length
      ? a
      : b,
  null
);

alert(`End Result is ${result}`);
