/*
    Problem: Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
    This is known as the "Maximum Subarray Problem" and can be solved using Kadane's Algorithm.

    Kadane's Algorithm works by iterating through the array and maintaining two variables:
    1. `maxSoFar`: The maximum sum of the subarray found so far.
    2. `maxEndingHere`: The maximum sum of the subarray ending at the current position.
    At each position, we update `maxEndingHere` to be the maximum of the current element or the sum of `maxEndingHere` and the current element.
    Then, we update `maxSoFar` to be the maximum of `maxSoFar` and `maxEndingHere`.
    This algorithm runs in O(n) time complexity and O(1) space complexity.
    Example:
    Input: [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
*/

const method1 = (arr) => {
    let maxSum = 0,
        length = arr.length;
    
    for (let i = 0; i < length; i++) {
        for(let j = i; j < length; j++) {
            let currSum = 0;

            // arr[i...j]
            for(let k = i; k <= j; k++) {
                currSum += arr[k];
            }

            maxSum = Math.max(maxSum, currSum);
        }
    }

    return maxSum;
}

const method2 = (arr) => {
    let maxSum = 0, n = arr.length;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            // arr[i...j]

            // calculates each subarray sum upto arr[i..j]
            sum += arr[j];
            maxSum = Math.max(maxSum, sum)
        }
    }

    return maxSum;
}

const method3 = (arr) => {
    let maxSoFar = 0, length = arr.length;

    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += arr[i];
        maxSoFar = Math.max(maxSoFar, sum)

        if (sum < 0) {
            sum = 0;
        }
    }

    return maxSoFar;
}

arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(`Brute Force with O(n^3): ${method1(arr)}`)
console.log(`Better solution with O(n^2): ${method2(arr)}`)
console.log(`Kandane's Algorithm with O(n): ${method3(arr)}`)