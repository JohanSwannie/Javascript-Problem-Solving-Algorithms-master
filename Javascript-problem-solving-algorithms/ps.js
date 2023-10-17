function removeSmallest(numbers) {
  let newArray = [];
  if (numbers.length === 0) {
    return newArray;
  }
  let smallestIndex = 0;
  let smallestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
      smallestNumber = numbers[i];
      smallestIndex = i;
    }
  }
  newArray = numbers
    .slice(0, smallestIndex)
    .concat(numbers.slice(smallestIndex + 1));
  return newArray;
}

alert(
  `New array after first smallest number is removed, is : ${removeSmallest([
    5, 9, 9, 2, 1, 3, 8, 1, 2, 7,
  ])}`
);
