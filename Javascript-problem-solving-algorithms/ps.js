let array = [17, 23, 15, 29, 3, 15, 19, 3, 15, 10, 7, 14, 3, 19];

let array2 = [];

for (let i = 0; i < array.length; i++) {
  if (array2.indexOf(array[i]) === -1) {
    array2.push(array[i]);
  }
}

array2.sort((a, b) => a - b);

alert(array2);

let numbs = [12, 18, 17, 21, 10, 26, 35, 7, 18];

alert(numbs.findIndex((num) => num === numbs[numbs.length - 6]));
