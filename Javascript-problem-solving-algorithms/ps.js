function wordToNumericValue(word) {
  let numValue = 0;
  for (var i = 0; i < word.length; i++) {
    alert(word[i]);
    numValue += parseInt(word[i], 36) - 9;
  }
  return numValue;
}

let word = "Fantastic";

alert(wordToNumericValue(word));
