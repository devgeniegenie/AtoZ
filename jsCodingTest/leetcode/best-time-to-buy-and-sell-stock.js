/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 */

var maxProfit = function (prices) {
    let result = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            result = Math.max(prices[j] - prices[i], result);
        }
    }
    return result;
};

var maxProfit2 = function (prices) {
    let max = 0;
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};

const input = [7, 1, 5, 3, 6, 4];
console.log(maxProfit2(input));