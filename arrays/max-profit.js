/*
    Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the
    future to sell that stock. Return the maximum profit you can achieve from this transaction. 
    If you cannot achieve any profit, return 0.

    Example: [7,1,5,3,6,4] = 5
    Buy on Day 1 (O indexed) & Sell on 4th day (6 - 1 = 5)
*/

/*
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/
const BruteForce = (arr) => {
    let maxProfit = 0,
        n = arr.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = n-1; j > i; j--) {
            if (arr[j] - arr[i] > maxProfit) {
                maxProfit = arr[j] - arr[i];
            }
        }
    }

    return maxProfit;
}

/*
    We will linearly travel the array. We can maintain a minimum from the start of the array and compare it 
    with every element of the array, if it is greater than the minimum then take the difference and maintain
    it in max, otherwise update the minimum.

    Time Complexity: O(n)
    Space Complexity: O(1)
*/
const Optimal = (arr) => {
    if (arr.length == 0) {
        return 0;
    }

    let n = arr.length, currMin = arr[0], profit = 0;
    for (let i = 1; i < n; i++) {
        if (currMin < arr[i]) {
            if (profit < arr[i]-currMin) {
                profit = arr[i] - currMin
            }
        } else {
            currMin = arr[i]
        }
    }

    return profit
}

let arr = [7,1,5,6,3,2]
console.log(`Max Profit = ${BruteForce(arr)}`)
console.log(`Max Profit 1 = ${Optimal(arr)}`)