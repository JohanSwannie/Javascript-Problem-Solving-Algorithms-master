function checkIfPalindrome(string) {
  let regex1 = /[\W]/g;
  let lowercaseString = string.toLowerCase().replace(regex1, "");
  let reverseString = lowercaseString.split("").reverse().join("");
  return reverseString === lowercaseString;
}

const string1 = "Sir, I demand, I am a maid named Iris";
const string2 = "Sit on a potato pan, Otis";
const string3 = "Go hang a salami, I'm a lasagna hog";
const string4 = "Madam in Eden, I'm Adam";

alert(checkIfPalindrome(string1));
