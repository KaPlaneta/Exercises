// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  let prefix = "";
  let word = strs[0];
  for (let j = 0; j < word.length; j++) {
    const currentLetter = word.charAt(j);
    for (let i = 1; i < strs.length; i++) {
      const currentWord = strs[i];

      if (currentLetter !== currentWord.charAt(j)) {
        return prefix;
      }
      console.log("prefix", word.charAt(j));
      console.log(strs[i].charAt(j));
    }
    prefix = prefix + currentLetter;
  }

  return prefix;
};
