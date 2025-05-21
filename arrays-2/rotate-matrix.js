/*
    Rotate the matrix in clockwise 90deg
    
    [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
    =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 4]]
    
    Time-complexity: O(n^2)
    Space Complexity: O(1)
*/

const RotateMatrix = (matrix) => {
    let rows = matrix.length,
        cols = matrix[0].length;
    
    // Transpose logic
    for (let i = 0; i < rows; i++) {
        for (let j = i; j < cols; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reverse logic
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols/2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][cols-j-1];
            matrix[i][cols-j-1] = temp;
        }
    }

    return matrix
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(RotateMatrix(matrix))

let matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
console.log(RotateMatrix(matrix1))