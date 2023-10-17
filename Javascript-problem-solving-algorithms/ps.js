const fibonacciMethod = (num) => {
  let x = 1;
  let y = 0;
  let temp = 0;
  while (num > 0) {
    temp = x;
    x = x + y;
    y = temp;
    num--;
  }
  return y;
};

alert(fibonacciMethod(5));
