// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

const shuffle = function (nums, n) {
  const result = [];

  const firstHalf = nums.slice(0, n);
  const secondHalf = nums.slice(n);

  for (let i = 0; i < n; i++) {
    result.push(firstHalf[i], secondHalf[i]);
  }
  return result;
};
