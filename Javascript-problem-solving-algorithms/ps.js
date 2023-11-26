const findElement = (array, element) =>
  array.findIndex((pop) => pop === element);

let array = [19, 20, true, "Koos", 29, false, "Jannie", "Mary"];

alert(
  `The name "Koos" is found in the array at index ${findElement(array, "Koos")}`
);
