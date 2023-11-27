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

const array = [12, 18, 7, 41, 10, 3, 33, 38, 26, 21, 18, 25];

const newArray = [...new Set(array)].sort((a, b) => a - b);

alert(`The number "38" was found at index ${binarySearch(newArray, 38)}`);
