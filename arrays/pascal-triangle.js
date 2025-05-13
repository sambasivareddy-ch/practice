/**
 * Generates Pascal's Triangle up to a given number of rows.
 *
 * Problem Statement:
 * Pascal's Triangle is a triangular array of numbers where each number is the sum of the two numbers directly above it.
 * The triangle starts with a single 1 at the top (row 0). Each subsequent row contains one more element than the previous row.
 * The first and last elements of each row are always 1.
 *
 * Example:
 * Row 0:        [1]
 * Row 1:       [1, 1]
 * Row 2:      [1, 2, 1]
 * Row 3:     [1, 3, 3, 1]
 * Row 4:    [1, 4, 6, 4, 1]
 * So on...
 * While generating, the triangle[i][j] can be calculated as:
 * triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j] (if j > 0 and j < i)
 * 
 * The n-th row of Pascal's triangle can be generated using the formula:
 * C(n, k) = n! / (k! * (n - k)!)
 *
 * Variantions:
 * 1. Generate Pascal's Triangle up to a given number of rows.
 * 2. Given the row number n. Print the n-th row of Pascal’s triangle.
 * 3. Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.
 */

const generatePascalsTriangle = (noOfRows) => {
    if (noOfRows <= 0) {
        return [];
    }

    const triangle = [];

    for (let i = 0; i < noOfRows; i++) {
        triangle[i] = new Array(i+1).fill(1);

        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
        }
    }

    return triangle;
}

const getNthRow = (n) => {
    if (n < 0) {
        return [];
    }

    const row = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        row[i] = row[i - 1] * (n - i) / i;
    }

    return row;
}

const getElementAtPosition = (r, c) => {
    if (r < 0 || c < 0 || c > r) {
        return null;
    }

    let res = 1;

    for (let i = 0; i < c; i++) {
        res *= (r - i);
        res /= (i + 1);
    }

    return res;
}

// Example usage:   
const noOfRows = 5;
const pascalsTriangle = generatePascalsTriangle(noOfRows);
console.log(`Pascal's Triangle with ${noOfRows} rows:`);
pascalsTriangle.forEach(row => console.log(row));

const rowNumber = 5;
const nthRow = getNthRow(rowNumber);
console.log(`\nThe ${rowNumber}th row of Pascal's Triangle:`);
console.log(nthRow);

const r = 4;
const c = 2;
const elementAtPosition = getElementAtPosition(r, c);
console.log(`\nElement at position (${r}, ${c}) in Pascal's Triangle:`);
console.log(elementAtPosition);

// Time Complexity:
// 1. generatePascalsTriangle: O(n^2) where n is the number of rows.
// 2. getNthRow: O(n) where n is the row number.
// 3. getElementAtPosition: O(c) where c is the column number.
// Space Complexity:
// 1. generatePascalsTriangle: O(n^2) where n is the number of rows.
// 2. getNthRow: O(n) where n is the row number.
// 3. getElementAtPosition: O(1) as it uses constant space.