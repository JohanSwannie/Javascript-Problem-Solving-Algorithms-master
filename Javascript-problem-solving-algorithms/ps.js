function factorialMethod1(value) {
  if (value === 0 || value === 1) {
    return 1;
  }
  let result = value;
  while (value > 1) {
    value--;
    result *= value;
  }
  return result;
}

alert(factorialMethod1(4));
