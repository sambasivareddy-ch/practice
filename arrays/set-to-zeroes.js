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
    1. Iterate through the matrix, find the element with value 0, and mark it's entire row & column to -1.
       Why -1?
       - Because if we set to zero now itself, later we may consider this 0 marked elements has 0 element
         and may convert it's entire row and column to 0.
    2. Once all marked, now set those marked elements to 0.

    Time Complexity: O(N*M*(N+M)) + O(N*M)
    Space Complexity: O(1)
*/

const markColumn = (matrix, noOfRows, col) => {
    for (let i = 0; i < noOfRows; i++) {
        // Mark only non-zero elements
        if (matrix[i][col])
            matrix[i][col] = -1
    }
}

const markRow = (matrix, noOfCols, row) => {
    for (let i = 0; i < noOfCols; i++) {
        // Mark only non-zero elements
        if (matrix[row][i])
            matrix[row][i] = -1
    }
}

const setToZeroes = (matrix, noOfRows, noOfCols) => {
    for (let i = 0; i < noOfRows; i++) {
        for (let j = 0; j < noOfCols; j++) {
            // Mark entires '0' element row & column
            if (matrix[i][j] === 0) {
                markRow(matrix, noOfCols, i);
                markColumn(matrix, noOfRows, j);
            }
        }
    }

    // Now convert those marked elements to 0
    for (let i = 0; i < noOfRows; i++) {
        for (let j = 0; j < noOfCols; j++) {
            if (matrix[i][j] === -1) {
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