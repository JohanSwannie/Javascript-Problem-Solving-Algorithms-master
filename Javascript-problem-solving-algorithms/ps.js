const IntegerToRoman = (passedNumber) => {
  const romanNumbers = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const integerNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let convertedNumber = "";
  while (passedNumber !== 0) {
    const indexFound = integerNumbers.findIndex(
      (number) => passedNumber >= number
    );
    convertedNumber += romanNumbers[indexFound];
    passedNumber -= integerNumbers[indexFound];
  }
  return convertedNumber;
};

alert(
  `The number 4238 converted to a Roman Number will be ${IntegerToRoman(4238)}`
);
