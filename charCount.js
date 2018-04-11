function countLetters (sentence) {
  // empty object
  var characterCount = {};

  var noSpaces = sentence.split(" ").join().split();

   for (var i = 0; i < noSpaces.length; i++) {
    // creating a variable to store each letter looped through in above loop
  var character = noSpaces[i];
  // if/else statement saying if var characterCount[character] occurs, then track that it has occured and add 1 each occurence
    if (characterCount[character]) {
      characterCount[character]++;
      // if it only occurs once, log 1
    } else {
      characterCount[character] = 1;
    }
  } // return the object "characterCount" which now includes all instances of either a repeating letter of just the "1" result.
  return characterCount;

};

countLetters("lighthouse in the house");