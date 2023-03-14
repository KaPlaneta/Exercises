// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

var isIsomorphic = function (s, t) {
  const dict = {};
  const dict2 = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const letter1 = s[i];
    const letter2 = t[i];
    if (dict.hasOwnProperty(letter1)) {
      if (dict[letter1] === letter2) {
        continue;
      } else {
        return false;
      }
    } else {
      dict[letter1] = letter2;
    }
    if (dict2.hasOwnProperty(letter2)) {
      if (dict2[letter2] === letter1) {
        continue;
      } else {
        return false;
      }
    } else {
      dict2[letter2] = letter1;
    }
  }
  return true;
};
