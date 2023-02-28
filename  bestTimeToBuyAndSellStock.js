// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// O(N^2)
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const dayProfit = prices[j] - prices[i];

      if (dayProfit > maxProfit) {
        maxProfit = dayProfit;
      }
    }
  }
  return maxProfit;
};

//O(N)
function maxProfit(prices) {
  let buy = prices[0];
  let max_profit = 0;
  for (let i = 1; i < prices.length; i++) {
    // Checking for lower buy value
    if (buy > prices[i]) buy = prices[i];
    // Checking for higher profit
    else if (prices[i] - buy > max_profit) max_profit = prices[i] - buy;
  }
  return max_profit;
}
