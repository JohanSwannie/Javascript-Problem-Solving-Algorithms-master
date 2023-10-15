function factorialMethod1(value) {
  if (value === 0 || value === 1) {
    return 1;
  }
  for (let i = value - 1; i > 0; i--) {
    value *= i;
  }
  return value;
}

alert(factorialMethod1(5));
