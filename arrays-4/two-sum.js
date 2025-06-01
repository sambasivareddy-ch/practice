/*
    Problem Statement: Given an array of integers arr[] and an integer target. Return indices of 
    the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.
*/

// Time Complexity: O(n^2)
// Space Complexity: O(1)
const BruteForce = (arr, target) => {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

// Time Complexity: O(n)
// Space Complexity: O(1)
const OptimalUsingTwoPointers = (arr, target) => {
    // Sort
    arr.sort((a,b) => a-b);

    let n = arr.length;

    let i = 0,
        j = n - 1;
    
    while (i < j) {
        let sum = arr[i] + arr[j];

        if (sum < target) {
            i += 1;
        }
        else if (sum > target) {
            j -= 1;
        }
        else {
            return true;
        }
    }

    return false;
}

const arr = [2, 6, 5, 8, 11];
console.log(BruteForce(arr, 14));
console.log(OptimalUsingTwoPointers(arr, 14));
console.log(BruteForce(arr, 20));
console.log(OptimalUsingTwoPointers(arr, 20));