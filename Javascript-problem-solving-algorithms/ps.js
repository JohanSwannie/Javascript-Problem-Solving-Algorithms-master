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

const countNumbers = (array, numb) => {
  return (amount = array.reduce((a, value) => (value === numb ? a + 1 : a), 0));
};

const array = [
  12, 18, 7, 41, 10, 3, 7, 33, 38, 26, 21, 18, 25, 31, 7, 40, 9, 7,
];

const newArray = [...new Set(array)].sort((a, b) => a - b);

alert(`The number "38" was found at index ${binarySearch(newArray, 38)}`);

alert(`The number "7" appears ${countNumbers(array, 7)} times in the array`);
