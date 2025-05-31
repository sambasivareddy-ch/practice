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

// Time Complexity: O(n+m) + O(nlogn) + O(mlogm)
// Space Complexity: O(1)
const OptimalApproach = (arr1, arr2) => {
    let n = arr1.length,
        m = arr2.length;
    
    let left = n-1, right = 0;

    while (left >= 0 && right < m) {
        if (arr1[left] > arr2[right]) {
            let temp = arr1[left];
            arr1[left] = arr2[right];
            arr2[right] = temp;

            left -= 1;
            right += 1;
        } else {
            break;
        }
    }

    arr1.sort();
    arr2.sort((a, b) => a-b);

    return [arr1, arr2]
}

let arr1 = [1,4,8,9]
let arr2 = [2,3,10]
console.log(BruteForce(arr1, arr2))
console.log(OptimalApproach(arr1, arr2))

let arr3 = [1,3,5,7,9]
let arr4 = [2,4,6,8,10]
console.log(BruteForce(arr3, arr4))
console.log(OptimalApproach(arr3, arr4))