function factorialMethod1(value) {
  let result = value;
  if (value === 0 || value === 1) return 1;
  while (value > 1) {
    value--;
    result *= value;
  }
  return result;
}

alert(factorialMethod1(4));
