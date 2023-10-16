const findTheLongestWordInString3 = (string) => {
  let longestWord3 = string
    .split(" ")
    .reduce(
      (returnWord, currentWord) =>
        currentWord.length > returnWord.length ? currentWord : returnWord,
      ""
    );
  return `The longest word is ${longestWord3} and is ${longestWord3.length} characters long`;
};

const string8 =
  "Tommy eat healthy and consumes sufficient amounts of nutrients daily";

alert(findTheLongestWordInString3(string8));
