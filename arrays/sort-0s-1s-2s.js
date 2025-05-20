/*
Sort Array of 0s, 1s and 2s in-place with constant time-complexity
[0,1,2,0,1,2] = [0,0,1,1,2,2]
*/

// My logic
/**
 * Sorts an array containing only 0s, 1s, and 2s in-place with constant space complexity.
 * The function modifies the input array so that all 0s come first, followed by all 1s, then all 2s.
 * Time complexity: O(n) - even though we have nested loops, the inner loop runs only once for each element in the array.
 * The outer loop runs for 3 iterations (for 0, 1, and 2).
 * The inner loop runs for each element in the array, so the total number of iterations is proportional to the size of the array.
 * This results in a linear time complexity of O(n).
 * Space complexity: O(1)
 */
const sortArray = (arr) => {
    let n = arr.length,
        i = 0,
        j = n - 1,
        search = 0;
    
    while (search <= 2) {
        while (i <= j) {
            while (i <= n - 1 && arr[i] === search) {
                i += 1;
            }
            while (j >= 0 && arr[j] !== search) {
                j -= 1;
            }

            if (i < j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                i += 1;
                j -= 1;
            }
        }
        j = n-1
        search += 1;
    }
}

// Dutch National Flag Problem
/**
 * Sorts an array containing only 0s, 1s, and 2s in-place using the Dutch National Flag algorithm.
 * The function modifies the input array so that all 0s come first, followed by all 1s, then all 2s.
 * Time complexity: O(n)
 * Space complexity: O(1)
 * The problem is similar to "Segregate 0s and 1s in an array". The idea is to sort the array of 
 * size n using three pointers: lo = 0, mid = 0 and hi = n - 1 such that the array is divided into three parts -
    arr[0] to arr[lo - 1]: This part will have all the zeros.
    arr[lo] to arr[mid - 1]: This part will have all the ones.
    arr[hi + 1] to arr[n - 1]: This part will have all the twos.
 */
const sortArrayByDutchNationalFlag = (arr) => {
    let low = 0,
        mid = 0,
        high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low += 1;
            mid += 1;
        } else if (arr[mid] === 1) {
            mid += 1;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high -= 1;
        }
    }
}


// Test cases
let arr = [0,1,2,0,1,2]
sortArray(arr)
console.log(`arr: ${arr}`)

arr = [1,0,1,2,0,1,0,2]
sortArrayByDutchNationalFlag(arr)
console.log(`arr: ${arr}`)

arr = [0,1,2,2,1,0,1,2]
sortArray(arr)
console.log(`arr: ${arr}`)

arr = [0,1,2,0,1,2,0,1,2]
sortArrayByDutchNationalFlag(arr)
console.log(`arr: ${arr}`)

arr = [0,0,1,1,2,2]
sortArray(arr)
console.log(`arr: ${arr}`)