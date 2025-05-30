/**
 Problem Statement: Given two sorted arrays arr1 & arr2, merge them in the sorted order.
 Example:
 arr1 = [1,4,5,8]
 arr2 = [2,3,6,9]
 Output:
 [1,2,3,4,5,6,8,9]
 */

// Time Complexity: O(n+m)
// Space Complexity: O(n+m)
const BruteForce = (arr1, arr2) => {
    let n = arr1.length,
        m = arr2.length;
    
    const result = new Array(n+m).fill(0);

    let i = 0, j = 0, k = 0;
    while (i < n && j < m) {
        if (arr1[i] <= arr2[j]) {
            result[k] = arr1[i++];
        } else {
            result[k] = arr2[j++];
        }
        k += 1;
    }

    while (i < n) {
        result[k++] = arr1[i++]
    }

    while (j < m) {
        result[k++] = arr2[j++]
    }

    return result;
}

let arr1 = [1,4,8,9]
let arr2 = [2,3,10]
console.log(BruteForce(arr1, arr2))

let arr3 = [1,3,5,7,9]
let arr4 = [2,4,6,8,10]
console.log(BruteForce(arr3, arr4))