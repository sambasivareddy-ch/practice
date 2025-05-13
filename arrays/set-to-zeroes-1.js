/*
    Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set 
    its entire column and row to 0 and then return the matrix.

    Example:
    [[1, 1, 0],
     [2, 5, 6],
     [4, 9, 0]]
    
    Output:
    [[0, 0, 0],
     [2, 5, 0],
     [0, 0, 0]]
    
    Constraints: 
    1. m,n >= 1
    2. arr[i][j] >= 0

    Solution:
    1. Iterate through the matrix, find the element with value 0, and mark the row number & column number in separate arrays.
    2. And then re-iterate through the matrix, if any element's row or col is marked, set that element to 0.

    Time Complexity: O(N*M) + O(N*M) = O(N*M)
    Space Complexity: O(N) + O(M)
*/

const setToZeroes = (matrix, noOfRows, noOfCols) => {
    const markedRows = new Array(noOfRows)
    const markedCols = new Array(noOfCols)

    for (let i = 0; i < noOfRows; i++) {
        for (let j = 0; j < noOfCols; j++) {
            if (matrix[i][j] === 0) {
                markedRows[i] = 1;
                markedCols[j] = 1;
            }
        }
    }

    // Now set marked elements to zero
    for (let i = 0; i < noOfRows; i++) {
        for (let j = 0; j < noOfCols; j++) {
            if (markedRows[i] || markedCols[j]) {
                matrix[i][j] = 0;
            }
        }
    }
}

const matrix = [
    [1, 1, 0],
    [2, 5, 6],
    [4, 9, 0]
]

setToZeroes(matrix, matrix.length, matrix[0].length)

console.log(matrix)