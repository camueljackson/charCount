function countLetters (sentence) {
  var characterCount = {};
  for (var i = 0; i < sentence.length; i++) {
  var character = sentence[i];
    if (characterCount[character]) {
      characterCount[character]++;
    } else {
      characterCount[character] = 1;
    }
  }
  return characterCount;

};

countLetters("lighthouse in the house");