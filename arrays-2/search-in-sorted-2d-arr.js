/**
    Problem Statement: You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M'
    denote the number of rows and columns, respectively. The elements of each row are sorted 
    in non-decreasing order. Moreover, the first element of a row is greater than the last 
    element of the previous row (if it exists). You are given an integer ‘target’, and 
    your task is to find if it exists in the given 'mat' or not.
 */

// Time Complexity: O(logn) + O(logm)
// Space Complexity: O(1)
const findTargetElement = (matrix, target) => {
    let n = matrix.length,
        m = matrix[0].length;
    
    let rowIdx = -1;
    let low = 0, high = n-1;

    while (low <= high) {
        let mid = Math.floor((low + high)/2);
        if (matrix[mid][0] <= target && matrix[mid][m-1] >= target) {
            rowIdx = mid;
            break;
        }
        else if (matrix[mid][0] > target) {
            high = mid - 1;
        } 
        else {
            low = mid + 1;
        }
    }

    if (rowIdx === -1)
        return false;

    low = 0;
    high = m-1;
    while (low <= high) {
        let mid = Math.floor((low + high)/2);
        if (matrix[rowIdx][mid] === target) {
            return true;
        } 
        else if (matrix[rowIdx][mid] > target) {
            high = mid - 1;
        }
        else if (matrix[rowIdx][mid] < target) {
            low = mid + 1;
        }
    }

    return false;
}

let matrix = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30]
]

console.log(`Found: ${findTargetElement(matrix, 22)}`);
console.log(`Found: ${findTargetElement(matrix, 32)}`);
console.log(`Found: ${findTargetElement(matrix, 11)}`);
console.log(`Found: ${findTargetElement(matrix, 29)}`);
console.log(`Found: ${findTargetElement(matrix, 99)}`);
