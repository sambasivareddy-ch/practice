/*
    Problem Statement:
    You are given an array of ‘N’ integers. You need to find the length of the 
    longest sequence which contains the consecutive elements.

    Example:
    Input: [100, 200, 1, 3, 2, 4]
    Output: 4

    Example-1:
    Input: [3, 8, 5, 7, 6]
    Output: 4
*/


// Time complexity: O(logn) + O(n)
// Space Complexity: O(1)
const longestConsecutiveElements = (arr) => {
    arr.sort((a, b) => a - b);

    let n = arr.length;

    if (n == 1) {
        return 1;
    }

    if (n === 2 && arr[0] === arr[1]) {
        return 2;
    }

    let i = 0, j = 1;
    let maxConsecutive = 0;
    while (j < n) {
        while (arr[j] === arr[j-1] + 1) {
            j += 1;
        }
        if ((j - i) > maxConsecutive) {
            maxConsecutive = j - i;
        }
        i = j;
        j = j+1;
    }

    return maxConsecutive;
}

const arr = [200, 100, 1, 3, 2, 4];
const arr1 = [3, 6, 5, 8, 11];
const arr2 = [3, 6, 5, 8, 7];
const arr3 = [1, 2, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15];
console.log(longestConsecutiveElements(arr))
console.log(longestConsecutiveElements(arr1))
console.log(longestConsecutiveElements(arr2))
console.log(longestConsecutiveElements(arr3))
