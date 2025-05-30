/*
    Problem Statement:
    You are given a read-only array of N integers with values also in the range [1, N] both inclusive. 
    Each integer appears exactly once except A which appears twice and B which is missing. 
    The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.

    Example:
    N = 5
    arr = [1, 2, 3, 5, 3]

    Output: {3 -> repeated, 4 -> missing}
*/

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/
const findRepeatingAndMissingElement = (arr) => {
    let n = arr.length;
    let counter = new Array(n+1).fill(0);

    for (const num of arr) {
        counter[num] += 1;
    }

    let result = [0, 0]
    for (let i = 1; i <= n; i++) {
        if (counter[i] === 2) {
            result[0] = i;
        }

        if (counter[i] === 0) {
            result[1] = i;
        }
    }

    return result
}

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
const findUsingMaths = (arr) => {
    let n = arr.length;

    let expectedSum = (n*(n+1))/2                   
    let expectedSquareSum = (n*(n+1)*(2*n+1))/6     

    let actualSum = 0;                                 
    let actualSquareSum = 0;                        
    for (const num of arr) {
        actualSum += num;
        actualSquareSum += num*num;
    }

    let sumDiffBetweenRepeatedAndMissingNum = actualSum - expectedSum;                       // A - B
    let squareSumDiffBetweenRepeatedAndMissingNum = actualSquareSum - expectedSquareSum;     // A^2 - B^2 = (A+B)(A-B) 

    // (A+B) = (A^2 - B^2)/(A-B) from above
    let sumOfRepeatedAndMissingNum = squareSumDiffBetweenRepeatedAndMissingNum/sumDiffBetweenRepeatedAndMissingNum; 

    let A = (sumOfRepeatedAndMissingNum + sumDiffBetweenRepeatedAndMissingNum)/2;  // ((A+B) + (A-B)) = 2A --> 2A/2 = A
    let B = A - sumDiffBetweenRepeatedAndMissingNum;

    return [A, B];
}

let arr = [1, 2, 3, 5, 3]
let arr1 = [1, 2, 4, 4, 5, 6, 7, 8]
console.log(findRepeatingAndMissingElement(arr))
console.log(findUsingMaths(arr))
console.log(findRepeatingAndMissingElement(arr1))
console.log(findUsingMaths(arr1))