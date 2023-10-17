const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    if (value === arr[start]) {
      return `The value ${value} is at index ${start}`;
    }
    if (value === arr[middle]) {
      return `The value ${value} is at index ${middle}`;
    }
    if (value === arr[end]) {
      return `The value ${value} is at index ${end}`;
    }
    if (value > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return `The value ${value} is not found`;
};

let arr = [10, 44, 8, 19, 16, 10, 29, 22, 30, 14, 8, 20];

arr.sort((a, b) => a - b);

alert(binarySearch(arr, 29));
