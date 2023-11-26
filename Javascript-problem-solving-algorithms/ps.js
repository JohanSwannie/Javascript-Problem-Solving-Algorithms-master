let array = [12, 18, 23, 7, 10, 15, 12, 10, 27, 31, 6, 12, 18];

let obj = {};

for (let value of array) {
  obj[value] = true;
}

const objects = [...Object.keys(obj)];

alert(objects);
