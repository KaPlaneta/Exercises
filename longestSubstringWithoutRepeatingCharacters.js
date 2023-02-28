// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {
  const words = s.split("");
  let result = 0;
  // po kolei iscie i sprawdzanie dopoki sie nie powtorzy literka.
  if (words.length > 0) {
    result = 1;
  }
  for (let i = 0; i < words.length; i++) {
    const sign = words[i];
    const letterDict = {};
    letterDict[sign] = true;

    for (let j = i + 1; j < words.length; j++) {
      const sign2 = words[j];
      //   console.log(sign,sign2,i,j)
      // przerobic potem na while
      if (j === words.length - 1) {
        if (letterDict.hasOwnProperty(sign2)) {
          if (j - i > result) {
            result = j - i;
          }
        } else {
          if (j - i + 1 > result) {
            result = j - i + 1;
          }
        }
        break;
      }
      if (letterDict.hasOwnProperty(sign2)) {
        if (j - i > result) {
          result = j - i;
        }
        break;
      }
      letterDict[sign2] = true;
    }
  }
  return result;
};
