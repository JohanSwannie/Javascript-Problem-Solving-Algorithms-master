// * --------------------------------------------------
// * REMOVE DUPLICATES FROM AN ARRAY - METHOD 1
// * --------------------------------------------------

const removeTheDuplicates = (array1) => {
  const array2 = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) === -1) {
      array2.push(array1[i]);
    }
  }
  return array2.sort((a, b) => a - b);
};

const array1 = [14, 8, 33, 7, 18, 14, 19, 27, 33, 1, 8, 13, 2, 19, 33, 81];

document.getElementById(
  "pbs1"
).innerHTML = `First Array without Duplicates is ${removeTheDuplicates(
  array1
)}`;

// * --------------------------------------------------
// * REMOVE DUPLICATES FROM AN ARRAY - METHOD 2
// * --------------------------------------------------

const array3 = [21, 3, 4, 15, 5, 19, 3, 15, 20, 29, 15, 5, 21, 4, 23];

array3.sort((a, b) => a - b);

const array4 = [];

let initialValue;

for (let j = 0; j < array3.length; j++) {
  if (array3[j] !== initialValue) {
    array4.push(array3[j]);
    initialValue = array3[j];
  }
}

document.getElementById(
  "pbs2"
).innerHTML = `Second Array without Duplicates is ${array4}`;

// * --------------------------------------------------
// * REMOVE DUPLICATES FROM AN ARRAY - METHOD 3
// * --------------------------------------------------

const array5 = [11, 6, 13, 7, 11, 7, 10, 15, 13, 4, 11, 1, 5, 2, 11, 20, 6, 3];

const object1 = {};

for (let value of array5) {
  object1[value] = true;
}
const array6 = [...Object.keys(object1)];

document.getElementById(
  "pbs3"
).innerHTML = `Third Array without Duplicates is ${array6}`;

// * --------------------------------------------------
// * REMOVE DUPLICATES FROM AN ARRAY - METHOD 4
// * --------------------------------------------------

const array7 = [1, 18, 22, 10, 18, 20, 13, 10, 11, 9, 27, 1, 19];

const array8 = [...new Set(array7)].sort((a, b) => a - b);

document.getElementById(
  "pbs4"
).innerHTML = `Fourth Array without Duplicates is ${array8}`;

// * --------------------------------------------------
// * LINEAR SEARCH
// * --------------------------------------------------

function linearSearch(linearSearchArray, value) {
  for (let i = 0; i < linearSearchArray.length; i++) {
    if (linearSearchArray[i] === value) {
      return `Value "<b style="color: red">${value}</b>" found at index ${i} of linearSearchArray`;
    }
  }
}

let linearSearchArray = [
  "Billy",
  "Garreth",
  16,
  true,
  false,
  undefined,
  "Luke",
  "Mary",
  "true",
  "Oh Yes",
];

document.getElementById(
  "pbs5"
).innerHTML = `Linear Search Result is - ${linearSearch(
  linearSearchArray,
  true
)}`;

// * --------------------------------------------------
// * BINARY SEARCH
// * --------------------------------------------------

function binarySearch(array, value) {
  let starts = 0;
  let ends = array.length - 1;
  while (starts < ends) {
    let middle = Math.floor((starts + ends) / 2);
    if (value === array[starts]) {
      return `The value "<b style="color: red">${value}</b>" is found at index ${starts} in the array`;
    }
    if (value === array[middle]) {
      return `The value "<b style="color: red">${value}</b>" is found at index ${middle} in the array`;
    }
    if (value === array[ends]) {
      return `The value "<b style="color: red">${value}</b>" is found at index ${ends} in the array`;
    }
    if (value > array[middle]) {
      starts = middle + 1;
    } else {
      ends = middle - 1;
    }
  }
  return `The value "<b style="color: red">${value}</b>" is not found in array`;
}

let array = [19, 5, 17, 50, 20, 27, 3, 10, 11, 35, 21, 43, 44, 6, 14, 99];

let sortedArray = array.sort((x, y) => x - y);

document.getElementById(
  "pbs6"
).innerHTML = `Binary Search Result is - ${binarySearch(sortedArray, 27)}`;

// * --------------------------------------------------
// * BUBBLE SORT
// * --------------------------------------------------

function bubbleSort(bubbles) {
  for (let i = 0; i < bubbles.length; i++) {
    for (let j = 0; j < bubbles.length - i - 1; j++) {
      if (bubbles[j] > bubbles[j + 1]) {
        const smallerValue = bubbles[j + 1];
        bubbles[j + 1] = bubbles[j];
        bubbles[j] = smallerValue;
      }
    }
  }
  return bubbles;
}

let bubbleSortArray = [
  19, 28, 11, 15, 33, 2, 14, 11, 22, 9, 16, 30, 19, 2, 5, 15, 38, 8, 3,
];

document.getElementById(
  "pbs7"
).innerHTML = `New bubble sorted array = ${bubbleSort(bubbleSortArray)}`;

// * --------------------------------------------------
// * OBJECT TREES
// * --------------------------------------------------

function getSiblings(family) {
  if (family.siblings.length === 0) {
    return;
  }
  family.siblings.forEach((sibling) => {
    siblingsArray.push(`${sibling.fullName}`);
    getSiblings(sibling);
  });
}

const family = {
  fullName: "Pete Lamb",
  siblings: [
    {
      fullName: "Graham Sidaway",
      siblings: [
        {
          fullName: "Brendan Sheehan",
          siblings: [],
        },
        {
          fullName: "Paul Murray",
          siblings: [
            {
              fullName: "Peter Murray",
              siblings: [],
            },
            {
              fullName: "Josh Murray",
              siblings: [],
            },
            {
              fullName: "Michelle Murray",
              siblings: [],
            },
            {
              fullName: "Matthew Murray",
              siblings: [],
            },
            {
              fullName: "Luke Murray",
              siblings: [],
            },
            {
              fullName: "Julia Murray",
              siblings: [],
            },
            {
              fullName: "Mary Murray",
              siblings: [],
            },
          ],
        },
      ],
    },
  ],
};

let siblingsArray = [];

getSiblings(family);

document.getElementById("pbs8").innerHTML = `The Siblings are ${siblingsArray}`;

// * --------------------------------------------------
// * REVERSE A STRING - METHOD 1
// * --------------------------------------------------

const string1 = "Hello all people of the earth";

const reversedString1 = string1.split("").reverse().join("");

document.getElementById(
  "pbs9"
).innerHTML = `Reversed string1 of "<b style="color: red">${string1}</b>"is now 
"<b style="color: red">${reversedString1}</b>"`;

// * --------------------------------------------------
// * REVERSE A STRING - METHOD 2
// * --------------------------------------------------

const string2 = "We will do our best to succeed";

let string3 = "";

for (let m = string2.length - 1; m > -1; m--) {
  string3 += string2[m];
}

document.getElementById(
  "pbs10"
).innerHTML = `Reversed string2 of "<b style="color: red">${string2}</b>"is now 
  "<b style="color: red">${string3}</b>"`;

// * --------------------------------------------------
// * REVERSE A STRING - METHOD 3
// * --------------------------------------------------

function reverseTheString(string) {
  if (string === "") {
    return "";
  } else {
    return reverseTheString(string.substr(1)) + string.charAt(0);
  }
}

const string4 = "The way to go is Mobil";

document.getElementById(
  "pbs11"
).innerHTML = `Reversed string4 of "<b style="color: red">${string4}</b>"is now 
    "<b style="color: red">${reverseTheString(string4)}</b>"`;

// * --------------------------------------------------
// * FACTORIALS - METHOD 1
// * --------------------------------------------------

function factorialMethod1(value) {
  let result = value;
  if (value === 0 || value === 1) return 1;
  while (value > 1) {
    value--;
    result *= value;
  }
  return result;
}

document.getElementById(
  "pbs12"
).innerHTML = `Factorial Result 1 = ${factorialMethod1(7)}`;

// * --------------------------------------------------
// * FACTORIALS - METHOD 2
// * --------------------------------------------------

function factorialMethod2(value) {
  if (value === 0 || value === 1) return 1;
  for (let i = value - 1; i >= 1; i--) {
    value *= i;
  }
  return value;
}

document.getElementById(
  "pbs13"
).innerHTML = `Factorial Result 2 = ${factorialMethod2(6)}`;

// * --------------------------------------------------
// * FACTORIALS - METHOD 3
// * --------------------------------------------------

const factorialMethod3 = (value) => {
  if (value < 0) {
    return -1;
  } else if (value === 0 || value === 1) {
    return 1;
  }
  return value * factorialMethod3(value - 1);
};

document.getElementById(
  "pbs14"
).innerHTML = `Factorial Result 3 = ${factorialMethod3(5)}`;

// * --------------------------------------------------
// * FIBONNACI - METHOD 1
// * --------------------------------------------------

function fibonacciMethod1(value) {
  let x = 1,
    y = 0,
    temp = 0;

  while (value > 0) {
    temp = x;
    x = x + y;
    y = temp;
    value--;
  }
  return y;
}

document.getElementById(
  "pbs15"
).innerHTML = `Fibonnaci Result 1 = ${fibonacciMethod1(7)}`;

// * --------------------------------------------------
// * FIBONNACI - METHOD 2
// * --------------------------------------------------

function fibonacciMethod2(value) {
  if (value == 0) {
    return 0;
  }
  if (value === 1 || value === 2) {
    return 1;
  } else {
    return fibonacciMethod2(value - 1) + fibonacciMethod2(value - 2);
  }
}

document.getElementById(
  "pbs16"
).innerHTML = `Fibonnaci Result 2 = ${fibonacciMethod2(8)}`;

// * --------------------------------------------------
// * PALINDROME - METHOD 1
// * --------------------------------------------------

function checkIfPalindrome(string) {
  let regex1 = /[\W]/g;
  let lowercaseString = string.toLowerCase().replace(regex1, "");
  let reverseString = lowercaseString.split("").reverse().join("");
  return reverseString === lowercaseString;
}
const str5 = "Sir, I demand, I am a maid named Iris";
const str6 = "Sit on a potato pan, Otis";
const str7 = "Go hang a salami, I'm a lasagna hog";
const str8 = "Madam in Eden, I'm Adam";

const string5 = "Sir, I demand, I am a maid named Iris";

result2 = `Is "<b style="color: red">${string5}</b>" a Palindrome - ${checkIfPalindrome(
  str5
)}`;

document.getElementById("pbs17").innerHTML = result2;

// * --------------------------------------------------
// * FIND LONGEST WORD IN A STRING - METHOD 1
// * --------------------------------------------------

const findTheLongestWordInString1 = (string) => {
  let splitString1 = string.split(" ");
  let wordFound1 = "";
  let longestWord1 = 0;
  for (let i = 0; i < splitString1.length; i++) {
    if (splitString1[i].length > longestWord1) {
      wordFound1 = splitString1[i];
      longestWord1 = splitString1[i].length;
    }
  }
  return `The longest word in the String is "<b style="color: red">${wordFound1}</b>" and is ${longestWord1} characters long`;
};

const string6 = "They walk to the opposite side of the lake 3 times a day";

document.getElementById("pbs18").innerHTML = `${findTheLongestWordInString1(
  string6
)}`;

// * --------------------------------------------------
// * FIND LONGEST WORD IN A STRING - METHOD 2
// * --------------------------------------------------

const findTheLongestWordInString2 = (string) => {
  let longestWord2 = string.split(" ").sort((a, b) => b.length - a.length);
  return `The Longest Word in the String is "<b style="color: red">${longestWord2[0]}</b>" and is ${longestWord2[0].length} characters long`;
};

const string7 =
  "Billy and Mary know the consequences of their dangerous trip to Walladrop";

document.getElementById("pbs19").innerHTML = `${findTheLongestWordInString2(
  string7
)}`;

// * --------------------------------------------------
// * FIND LONGEST WORD IN A STRING - METHOD 3
// * --------------------------------------------------

const findTheLongestWordInString3 = (string) => {
  let longestWord3 = string
    .split(" ")
    .reduce(
      (returnWord, currentWord) =>
        currentWord.length > returnWord.length ? currentWord : returnWord,
      ""
    );
  return `The Longest Word in the String is "<b style="color: red">${longestWord3}</b>" and is ${longestWord3.length} characters long`;
};

const string8 =
  "Tommy eat healthy and consumes sufficient amounts of nutrients daily";

document.getElementById("pbs20").innerHTML = `${findTheLongestWordInString3(
  string8
)}`;

// * --------------------------------------------------
// * RETURN LARGEST NUMBERS IN ARRAYS - METHOD 1
// * --------------------------------------------------

var largestNumber = [];

function largestNumbersInArrays1(array) {
  for (let p = 0; p < array.length; p++) {
    largestNumber.push(0);
  }
  for (var q = 0; q < array.length; q++) {
    for (var r = 0; r < array[q].length; r++) {
      if (array[q][r] > largestNumber[q]) {
        largestNumber[q] = array[q][r];
      }
    }
  }
  return largestNumber;
}

const array10 = [
  [19, 67, 57, 88, 7, 16, 33],
  [28, 71, 107, 22, 33, 51],
  [39, 44, 73, 55, 13, 10, 21],
  [444, 500, 177, 939, 239, 712],
  [49, 110, 183, 131, 77, 83],
];

let largestNumbers1 = `The largest number in each array is ${largestNumbersInArrays1(
  array10
)}`;

document.getElementById("pbs21").innerHTML = largestNumbers1;

// * --------------------------------------------------
// * RETURN LARGEST NUMBERS IN ARRAYS - METHOD 2
// * --------------------------------------------------

function largestNumbersInArrays2(arr) {
  return arr.map((successiveArray1) =>
    successiveArray1.reduce(
      (prevNumber, currNumber) =>
        currNumber > prevNumber ? currNumber : prevNumber,
      0
    )
  );
}

const array11 = [
  [71, 167, 202, 183, 16, 29, 64],
  [191, 37, 7, 28, 38, 20, 18],
  [116, 41, 26, 53, 91, 16, 43],
  [21, 50, 111, 30, 49, 123],
  [41, 18, 401, 114, 22, 95],
];

let largestNumbers2 = `The largest number in each array is ${largestNumbersInArrays2(
  array11
)}`;

document.getElementById("pbs22").innerHTML = largestNumbers2;

// * --------------------------------------------------
// * RETURN LARGEST NUMBERS IN ARRAYS - METHOD 3
// * --------------------------------------------------

function largestNumbersInArrays3(array) {
  return array.map((successiveArray2) =>
    Math.max.apply(null, successiveArray2)
  );
}

const array12 = [
  [4, 7, 20, 1, 9, 31, 6, 11, 8],
  [23, 45, 33, 20, 41, 19, 25],
  [37, 59, 65, 35, 14, 22, 88],
  [10, 20, 60, 30, 70, 40],
  [38, 27, 29, 47, 13, 12, 36],
];

let largestNumbers3 = `The largest number in each array is ${largestNumbersInArrays3(
  array12
)}`;

document.getElementById("pbs23").innerHTML = largestNumbers3;

// * ---------------------------------------------------------------------------------
// * RETURN THE 2 INDICES THAT ADD UP 2 NUMBERS TO BE THE SUM OF THE TARGET
// * ---------------------------------------------------------------------------------

const determineIndices = (array13, target) => {
  for (let i = 0; i < array13.length; i++) {
    for (let j = i + 1; j < array13.length; j++) {
      if (array13[i] + array13[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};

const array13 = [
  19, 10, 10, 3, 22, 31, 5, 11, 7, 59, 101, 117, 13, 113, 122, 30, 15, 71, 77,
  79, 16, 44, 63, 12, 87, 95, 61, 1, 119, 104, 107, 23, 28, 33, 5, 40, 70, 2,
];

let sumTarget = 39;

let indicesResult = `${determineIndices(array13, sumTarget)}`;

document.getElementById(
  "pbs24"
).innerHTML = `The first 2 indices that add up to ${sumTarget} are ${indicesResult}`;

// * ---------------------------------------------------------------------------------
// * CONVERT ROMAN NUMBERS TO INTEGERS
// * ---------------------------------------------------------------------------------

const romanObject = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let endResult = 0;

const romanNumberToInteger = (romanNumber) => {
  for (let i = 0; i < romanNumber.length; i++) {
    if (romanObject[romanNumber[i]] < romanObject[romanNumber[i + 1]]) {
      endResult -= romanObject[romanNumber[i]];
    } else {
      endResult += romanObject[romanNumber[i]];
    }
  }
  return endResult;
};

let inputRomanNumber = "MDCCLXVII";

let romanToInt = `The Roman Number ${inputRomanNumber} converts to ${romanNumberToInteger(
  inputRomanNumber
)}`;

document.getElementById("pbs25").innerHTML = romanToInt;

// * ---------------------------------------------------------------------------------
// * CONVERT INTEGERS TO ROMAN NUMBERS
// * ---------------------------------------------------------------------------------

const IntegerToRomanNumber = (intNumber) => {
  const romanNumerals = [
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
  const naturalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanN = "";
  while (intNumber !== 0) {
    const idxFnd = naturalNumbers.findIndex((number) => intNumber >= number);
    romanN += romanNumerals[idxFnd];
    intNumber -= naturalNumbers[idxFnd];
  }
  return romanN;
};

let inputIntNumber = 1767;

let intToRoman = `The Integer number ${inputIntNumber} converts to ${IntegerToRomanNumber(
  inputIntNumber
)}`;

document.getElementById("pbs26").innerHTML = `${intToRoman}`;

// * ---------------------------------------------------------------------------------
// * DETERMINE NUMERIC VALUES OF WORDS BASED ON APLHABETICAL SEQUENCES
// * THIS IS BASED ON A = 1, B = 2, C = 3 AND UP TO Z = 26
// * ---------------------------------------------------------------------------------

function wordToNumericValue(word) {
  let numValue = 0;
  for (var i = 0; i < word.length; i++) {
    numValue += parseInt(word[i], 36) - 9;
  }
  return numValue;
}

let word = "Fantastic";

document.getElementById(
  "pbs27"
).innerHTML = `The value of the word "${word}" is ${wordToNumericValue(word)}`;

// * ---------------------------------------------------------------------------------
// * DETERMINE WHAT KIND OF LOVE PRINCE CHARMING HAS FOR SNOW WHITE
// * ---------------------------------------------------------------------------------

function determineLove(numberOfPetals, array) {
  for (let i = 0; i <= numberOfPetals; i++) {
    array.push(array[i]);
  }
  return array[numberOfPetals - 1];
}

let numberOfPetals = Math.floor(Math.random() * 30) + 1;

let loveArray = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
];

document.getElementById("pbs28").innerHTML = `My love for you : ${determineLove(
  numberOfPetals,
  loveArray
)}`;

// * ---------------------------------------------------------------------------------
// * RETURN A NEW ARRAY WHERE THE FIRST SMALLEST NUMBER IS REMOVED IN THE ARRAY
// * METHOD 1
// * ---------------------------------------------------------------------------------

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

document.getElementById(
  "pbs29"
).innerHTML = `New array after first smallest number is removed, is : ${removeSmallest(
  [5, 9, 9, 2, 1, 3, 8, 1, 2, 7]
)}`;

// * ---------------------------------------------------------------------------------
// * RETURN A NEW ARRAY WHERE THE FIRST SMALLEST NUMBER IS REMOVED IN THE ARRAY
// * METHOD 2
// * ---------------------------------------------------------------------------------

function removeSmallest2(numbers) {
  let smallestIndex2 = numbers.indexOf(Math.min(...numbers));
  return [
    ...numbers.slice(0, smallestIndex2),
    ...numbers.slice(smallestIndex2 + 1),
  ];
}

document.getElementById(
  "pbs30"
).innerHTML = `New array after first smallest number is removed, is : ${removeSmallest2(
  [5, 9, 9, 4, 13, 18, 21, 4, 7]
)}`;

// * ---------------------------------------------------------------------------------
// *  CONVERT EACH CHARACTER IN A STRING, FOLLOWED BY AN UNDERSCORE OR A DASH WITH AN UPPERCASE
// *  AND EXCLUDE THE UNDERSCORE AND OR DASH - METHOD 1
// * ---------------------------------------------------------------------------------

const convertStringToCamelCase = (stringToConvert) => {
  stringToConvert = stringToConvert.split("");
  return stringToConvert
    .map((character, index) => {
      if (character == "-" || character == "_") {
        character = stringToConvert[index + 1].toUpperCase();
        stringToConvert.splice(index + 1, 1);
      }
      return character;
    })
    .join("");
};

document.getElementById(
  "pbs31"
).innerHTML = `Converted string is : ${convertStringToCamelCase(
  "international_olymic-games"
)}`;

// * ---------------------------------------------------------------------------------
// *  CONVERT EACH CHARACTER IN A STRING, FOLLOWED BY AN UNDERSCORE OR A DASH WITH AN UPPERCASE
// *  AND EXCLUDE THE UNDERSCORE AND OR DASH - METHOD 2
// * ---------------------------------------------------------------------------------

function convertStringToCamelCase2(stringToConvert2) {
  return stringToConvert2.replace(/[_-]\w/gi, (character) =>
    character[1].toUpperCase()
  );
}

document.getElementById(
  "pbs32"
).innerHTML = `Converted string is : ${convertStringToCamelCase2(
  "national-sport_meeting"
)}`;

// * ---------------------------------------------------------------------------------
// * CHECK IF A SENTENCE IS A PANGRAM
// * ---------------------------------------------------------------------------------

const isPangram = (sentencePassed) => {
  let sentenceToCheck = sentencePassed
    .split(" ")
    .join("")
    .replace(/[\W\d]/g, "")
    .toLowerCase();
  return [...new Set(sentenceToCheck)].length === 26;
};

let passedSentence =
  "The man from Zillerpearbonexvalley, walks up and down like a champ whistling, while the dog and cat jump over the kettle. The Queen vastly put a zeal on it";

document.getElementById(
  "pbs33"
).innerHTML = `Is the sentence a Pangram : ${isPangram(passedSentence)}`;

// * ---------------------------------------------------------------------------------
// * CONVERT CELSIUS TO FAHRENHEIT
// * ---------------------------------------------------------------------------------

const celciusToFahrenheit = (value) => {
  return value * (9 / 5) + 32;
};

document.getElementById(
  "pbs34"
).innerHTML = `Fahrenheit for 40 degrees celsius is ${celciusToFahrenheit(40)}`;

// * ---------------------------------------------------------------------------------
// * CONFIRM THE ENDING OF A STRING - METHOD 1
// * ---------------------------------------------------------------------------------

const checkEndOfString1 = (string, target) => {
  return string.endsWith(target);
};

let stringToCheck1 = "Restaurant";
let endTarget1 = "rant";

document.getElementById(
  "pbs35"
).innerHTML = `Does the string <b style="color: red">"${stringToCheck1}"</b> ends with <b style="color: red">"${endTarget1}"</b> ${checkEndOfString1(
  stringToCheck1,
  endTarget1
)}`;

// * ---------------------------------------------------------------------------------
// * CONFIRM THE ENDING OF A STRING - METHOD 2
// * ---------------------------------------------------------------------------------

const checkEndOfString2 = (string, target) => {
  return string.substr(-target.length) === target;
};

let stringToCheck2 = "Cottage";
let endTarget2 = "age";

document.getElementById(
  "pbs36"
).innerHTML = `Does the string <b style="color: red">"${stringToCheck2}"</b> ends with <b style="color: red">"${endTarget2}"</b> ${checkEndOfString2(
  stringToCheck2,
  endTarget2
)}`;

// * ---------------------------------------------------------------------------------
// * REPEAT A STRING A GIVEN NUMBER OF TIMES - METHOD 1
// * ---------------------------------------------------------------------------------

const repeatTheString1 = (string, number) => {
  return string.repeat(number);
};

let stringToRepeat1 = "Luke drive a nice car ";
let numberOfTimes1 = 3;

document.getElementById(
  "pbs37"
).innerHTML = `The result of the string repeated ${numberOfTimes1} times is ${repeatTheString1(
  stringToRepeat1,
  numberOfTimes1
)}`;

// * ---------------------------------------------------------------------------------
// * REPEAT A STRING A GIVEN NUMBER OF TIMES - METHOD 2
// * ---------------------------------------------------------------------------------

const repeatTheString2 = (string, number) => {
  let resultString = "";
  while (number > 0) {
    resultString += string;
    number--;
  }
  return resultString;
};

let stringToRepeat2 = "Automatically renewed ";
let numberOfTimes2 = 2;

document.getElementById(
  "pbs38"
).innerHTML = `The result of the string repeated ${numberOfTimes2} times is ${repeatTheString2(
  stringToRepeat2,
  numberOfTimes2
)}`;

// * ---------------------------------------------------------------------------------
// * TRUNCATE A STRING (FIRST ARGUMENT) IF IT IS LONGER THAN THE GIVEN MAXIMUM STRING
// * LENGTH (SECOND ARGUMENT). RETURN THE TRUNCATED STRING WITH A ... ENDING.
// * ---------------------------------------------------------------------------------

function truncateTheString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

let stringToTruncate = "Jack runs down the hill at a fast pace";
let truncateLength = 14;

document.getElementById(
  "pbs39"
).innerHTML = `The result of the string ${stringToTruncate} times is ${truncateTheString(
  stringToTruncate,
  truncateLength
)}`;

// * -------------------------------------------------------------------------------------
// * CREATE A FUNCTION THAT LOOKS THROUGH AN ARRAY ARR AND RETURNS THE FIRST ELEMENT
// * IN IT THAT PASSES A 'TRUTH TEST'. THIS MEANS THAT GIVEN AN ELEMENT X, THE 'TRUTH
// * TEST' IS PASSED IF FUNC(X) IS TRUE. IF NO ELEMENT PASSES THE TEST, RETURN UNDEFINED.
// * -------------------------------------------------------------------------------------

const findElementToBeTrue = (array, func) => {
  let number = 0;
  for (let i = 0; i < array.length; i++) {
    number = array[i];
    if (func(number) === true) {
      return number;
    }
  }
};

let arrayToPass = [13, 3, 9, 15, 14, 10, 19, 35];

document.getElementById(
  "pbs40"
).innerHTML = `The number that satisfies the function is ${findElementToBeTrue(
  arrayToPass,
  (num) => num % 2 === 0
)}`;

// * -------------------------------------------------------------------------------------
// * CHECK IF A VALUE IS CLASSIFIED AS A BOOLEAN PRIMITIVE. RETURN TRUE OR FALSE.
// * -------------------------------------------------------------------------------------

const isItBoolean = (element) => {
  return typeof element === "boolean";
};

document.getElementById(
  "pbs41"
).innerHTML = `Is the passed argument a Boolean -  ${isItBoolean(false)}`;

// * -------------------------------------------------------------------------------------
// * TITLE CASE A SENTENCE - RETURN THE PROVIDED STRING WITH THE FIRST LETTER OF
// * EACH WORD CAPITALIZED. MAKE SURE THE REST OF THE WORD IS IN LOWER CASE.
// * -------------------------------------------------------------------------------------

const titleCaseSentence = (givenS) => {
  let array = [];
  let givenS2 = givenS.toLowerCase().split(" ");
  for (let i = 0; i < givenS2.length; i++) {
    array.push(givenS2[i][0].toUpperCase() + givenS2[i].substr(1));
  }
  return array.join(" ");
};

let givenSentence = "he walks down the valley and enjoy the beauty of nature";

document.getElementById(
  "pbs42"
).innerHTML = `The sentence title cased is now -  ${titleCaseSentence(
  givenSentence
)}`;

// * -------------------------------------------------------------------------------------
// * YOU ARE GIVEN TWO ARRAYS AND AN INDEX. COPY EACH ELEMENT OF THE FIRST ARRAY INTO THE
// * SECOND ARRAY, IN ORDER. BEGIN INSERTING ELEMENTS AT INDEX N OF THE SECOND ARRAY.
// * RETURN THE RESULTING ARRAY. THE INPUT ARRAYS SHOULD REMAIN THE SAME AFTER THE
// * FUNCTION RUNS. USE SLICE & SPLICE.`
// * -------------------------------------------------------------------------------------

const concatArraysWithSliceAndSplice = (array1, array2, number) => {
  let result = array2.slice();
  for (let i = 0; i < array1.length; i++) {
    result.splice(number + i, 0, array1[i]);
  }
  return result;
};

let arrayOne = [19, 42, 13, 22, 24];
let arrayTwo = [26, 15, 10, 17, 28, 7];
let number = 3;

document.getElementById(
  "pbs43"
).innerHTML = `The concatenated arrays are now -  ${concatArraysWithSliceAndSplice(
  arrayOne,
  arrayTwo,
  number
)}`;

// * -------------------------------------------------------------------------------------
// * REMOVE ALL FALSY VALUES FROM AN ARRAY. RETURN A NEW ARRAY.
// * DO NOT MUTATE THE ORIGINAL ARRAY.
// * -------------------------------------------------------------------------------------

const removeFalsyValues = (array) => {
  var newArray = array.filter((item) => {
    return Boolean(item);
  });
  return newArray;
};

let arrayToBeCleaned = [
  39,
  "",
  "wonderful",
  false,
  11,
  undefined,
  -112,
  true,
  1,
  0,
  9,
];

document.getElementById(
  "pbs44"
).innerHTML = `The new array with only true values is  [${removeFalsyValues(
  arrayToBeCleaned
)}]`;

// * -------------------------------------------------------------------------------------
// * RETURN THE LOWEST INDEX AT WHICH A VALUE (SECOND ARGUMENT) SHOULD BE INSERTED
// * INTO AN ARRAY (FIRST ARGUMENT) ONCE IT HAS BEEN SORTED. THE RETURNED VALUE
// * SHOULD BE A NUMBER.
// * -------------------------------------------------------------------------------------

const determineIndexInsert = (array, number) => {
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (number <= array[i]) {
      return i;
    }
  }
  return array.length;
};

let passedArray = [12, 19, 10, 16, 18, 7, 20];
let passedNumber = 14;

document.getElementById(
  "pbs45"
).innerHTML = `The index where the value ${passedNumber} need to be inserted is ${determineIndexInsert(
  passedArray,
  passedNumber
)}`;

// * -------------------------------------------------------------------------------------
// * RETURN TRUE IF THE STRING IN THE FIRST ELEMENT OF THE ARRAY CONTAINS ALL
// * OF THE LETTERS OF THE STRING IN THE SECOND ELEMENT OF THE ARRAY.
// * -------------------------------------------------------------------------------------

const checkTwoStrings = (array) => {
  let string1 = array[0].toLowerCase();
  let string2 = array[1].toLowerCase();
  var cntr = 0;
  for (let i in string2) {
    if (string1.indexOf(string2[i]) !== -1) {
      cntr++;
    }
  }
  return cntr === string2.length;
};

let twoStringArray = ["Families", "Fame"];

document.getElementById(
  "pbs46"
).innerHTML = `Does string 1 consist of all the letters in string 2 - ${checkTwoStrings(
  twoStringArray
)}`;

// * -------------------------------------------------------------------------------------
// * WRITE A FUNCTION THAT SPLITS AN ARRAY (FIRST ARGUMENT) INTO GROUPS THE
// * LENGTH OF SIZE (SECOND ARGUMENT) AND RETURNS THEM AS A TWO-DIMENSIONAL ARRAY.
// * -------------------------------------------------------------------------------------

function createTwoDimensionalArray(array, slicer) {
  var newTwoDimArr = [];
  var item = 0;
  while (item < array.length) {
    newTwoDimArr.push(array.slice(item, (item += slicer)));
  }
  return JSON.stringify(newTwoDimArr);
}

let arrayBeforeChunk = [
  "is",
  "he",
  "capable",
  "to",
  "do",
  "the",
  "job",
  "today",
];
let slicer = 4;

document.getElementById(
  "pbs47"
).innerHTML = `New 2 dimensional array is - ${createTwoDimensionalArray(
  arrayBeforeChunk,
  slicer
)}`;

// * -------------------------------------------------------------------------------------
// * GIVEN AN ARRAY OF TWO NUMBERS. RETURN THE SUM OF THOSE TWO NUMBERS PLUS THE
// * SUM OF ALL THE NUMBERS BETWEEN THEM. THE LOWEST NUMBER WILL NOT ALWAYS COME FIRST.
// * -------------------------------------------------------------------------------------

const sumNumbersInRange = (array) => {
  let maxi = Math.max(...array);
  let mini = Math.min(...array);
  let sum = maxi + mini;
  for (let i = mini + 1; i < maxi; i++) {
    sum += i;
  }
  return sum;
};

let givenArray = [3, 11];

document.getElementById(
  "pbs48"
).innerHTML = `The sum in the range is - ${sumNumbersInRange(givenArray)}`;

// * -------------------------------------------------------------------------------------
// * COMPARE TWO ARRAYS AND RETURN A NEW ARRAY WITH ANY ITEMS ONLY FOUND IN ONE OF
// * THE TWO GIVEN ARRAYS, BUT NOT BOTH. IN OTHER WORDS, RETURN THE SYMMETRIC
// * DIFFERENCE OF THE TWO ARRAYS.
// * -------------------------------------------------------------------------------------

const returnDifferenceBetweenArrays = (array1, array2) => {
  let resultArray = [];
  array1.forEach((item) => {
    if (array2.indexOf(item) === -1) {
      resultArray.push(item);
    }
  });
  array2.forEach((item) => {
    if (array1.indexOf(item) === -1) {
      resultArray.push(item);
    }
  });
  return resultArray;
};

let diffArray1 = [18, 15, 29, 7, 15, 4, 13, 20];
let diffArray2 = [15, 4, 18, 11, 29, 21, 7];

document.getElementById(
  "pbs49"
).innerHTML = `The difference between the arrays is - ${returnDifferenceBetweenArrays(
  diffArray1,
  diffArray2
)}`;

// * -------------------------------------------------------------------------------------
// * PROVIDED WITH AN INITIAL ARRAY (THE FIRST ARGUMENT IN THE DESTROYER FUNCTION),
// * FOLLOWED BY ONE OR MORE ARGUMENTS. REMOVE ALL ELEMENTS FROM THE INITIAL ARRAY
// * THAT ARE OF THE SAME VALUE AS THESE ARGUMENTS.
// * -------------------------------------------------------------------------------------

function valuesLeft() {
  const args = Array.from(arguments);
  let ending = args.slice(1);
  return args[0].filter((item) => !ending.includes(item));
}

document.getElementById(
  "pbs50"
).innerHTML = `The returned values are - ${valuesLeft(
  [3, 6, 8, 4, 6, 9],
  3,
  4,
  9
)}`;

// * -------------------------------------------------------------------------------------
// * MAKE A FUNCTION THAT LOOKS THROUGH AN ARRAY OF OBJECTS (FIRST ARGUMENT) AND RETURNS
// * AN ARRAY OF ALL OBJECTS THAT HAVE MATCHING NAME AND VALUE PAIRS (SECOND ARGUMENT).
// * EACH NAME AND VALUE PAIR OF THE SOURCE OBJECT HAS TO BE PRESENT IN THE OBJECT FROM
// * THE COLLECTION IF IT IS TO BE INCLUDED IN THE RETURNED ARRAY.
// * -------------------------------------------------------------------------------------

function matchingObjectsArray(list, compare) {
  let returnArray = [];
  let compareKeys = Object.keys(compare);
  returnArray = list.filter((item) => {
    for (let i = 0; i < compareKeys.length; i++) {
      if (item.hasOwnProperty(compareKeys[i])) {
        if (item[compareKeys[i]] !== compare[compareKeys[i]]) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  });
  return JSON.stringify(returnArray);
}

document.getElementById(
  "pbs51"
).innerHTML = `The returned values are - ${matchingObjectsArray(
  [
    { first: "Luke", last: "Brown" },
    { first: "Mary", last: "Cooper" },
    { first: "Danny", last: "Monroe" },
    { first: "Mark", last: "Langfield" },
    { first: "Matthew", last: "Donnaway" },
    { first: "Donna", last: "Langfield" },
  ],
  { last: "Langfield" }
)}`;

// * -------------------------------------------------------------------------------------
// * CONVERT A STRING TO SPINAL CASE. SPINAL CASE IS ALL-LOWERCASE-WORDS-JOINED-BY-DASHES.
// * -------------------------------------------------------------------------------------

const spinalCase = (string) => {
  let regex1 = /([a-z])([A-Z])/g;
  let regex2 = /[^a-zA-Z\s]/gi;
  let regex3 = /\s+|_+/g;
  string = string.replace(regex1, "$1 $2");
  string = string.replace(regex2, "");
  string = string.replace(regex3, "-");
  return string.toLowerCase();
};

let stringToSpinalTapCase =
  "*^%$!9981ThePeople#_ 8%3712are 9/*Going on aSummerHolidayToFiji";

document.getElementById(
  "pbs52"
).innerHTML = `The string spinal tap cased are now - ${spinalCase(
  stringToSpinalTapCase
)}`;

// * -------------------------------------------------------------------------------------
// * DETERMINE THE VALUE OF ALL WORDS IN A STRING - GIVEN THAT A = 1 UP TO Z = 26
// * -------------------------------------------------------------------------------------

const convertStringToNumericValues = (string) => {
  let numValue = 0;
  let stringWithoutSpace = string.toLowerCase().split(" ").join("");
  for (let i = 0; i < stringWithoutSpace.length; i++) {
    numValue += parseInt(stringWithoutSpace[i], 36) - 9;
  }
  return numValue;
};

let passedString = "They walk down the valley next to a big mountain";

document.getElementById(
  "pbs53"
).innerHTML = `The numeric value of the converted string is - ${convertStringToNumericValues(
  passedString
)}`;

// * ----------------------------------------------------------------------------------------
// * Take a given string - remove all characters from it except for alphabetics and numerics.
// * Then convert the string into an array and display all the values in the array.
// * ----------------------------------------------------------------------------------------

let str1 =
  "'Jan'  'Piet',  'Koos'  '44 People'   'Klaas 91 libraries',  'Three'";

let str2 = str1.replace(/[^a-z0-9]/gi, " ");

let str3 = str2
  .trim()
  .split(/[\s,\t,\n]+/)
  .join(" ");

let arr1 = str3.split(" ");

let displayThem = "The values in the array are ";

for (let val of arr1) {
  displayThem += ` ${val}`;
}

document.getElementById("pbs54").innerHTML = displayThem;

// * ---------------------------------------------------------------------------------------------
// * Take a given array - Change only the first letter of each instance in the array to lowercase.
// * ---------------------------------------------------------------------------------------------

let arr91 = ["ImPortant", "WelCome", "MindBLOwing"];

let arr92 = [];

let firstLetter;

let rest;

for (let i = 0; i < arr91.length; i++) {
  firstLetter = arr91[i].charAt(0).toLowerCase();
  rest = arr91[i].slice(1);
  arr92.push(`${firstLetter}${rest}`);
}

document.getElementById(
  "pbs55"
).innerHTML = `The changed array is now ${arr92}`;
