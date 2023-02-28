// Given an integer x, return true if x is a palindrome, and false otherwise.
// Palindrome -An integer is a palindrome when it reads the same forward and backward.
// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  const arrayOfDigits = Array.from(String(x), Number);
  const arrayOfDigitsToReverse = Array.from(String(x), Number);
  arrayOfDigitsToReverse.reverse();

  for (let i = 0; i < arrayOfDigits.length; i++) {
    if (arrayOfDigits[i] != arrayOfDigitsToReverse[i]) {
      return false;
    }
  }
  return true;
};
