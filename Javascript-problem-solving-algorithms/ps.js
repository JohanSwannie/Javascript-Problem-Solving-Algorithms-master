const factorialMethod3 = (value) => {
  if (value === 0 || value === 1) {
    return 1;
  }
  return value * factorialMethod3(value - 1);
};

alert(factorialMethod3(4));
