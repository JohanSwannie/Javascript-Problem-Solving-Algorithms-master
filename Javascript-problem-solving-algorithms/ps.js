const findTheLongestWordInString2 = (string) => {
  let longestWord2 = string.split(" ").sort((a, b) => b.length - a.length);
  return `The Longest Word in the String is ${longestWord2[0]} and is ${longestWord2[0].length} characters long`;
};
let string1 =
  "Hallo almal wat graag wil leer om te sien hoe werk fibonacci nommers";
alert(findTheLongestWordInString2(string1));
