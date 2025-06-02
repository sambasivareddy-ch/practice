/*
    Problem Statement:
    Given an array of N integers. Every number in the 
    array except one appears twice. Find the single number in the array.

    Example:
    arr = {1,1,2,2,3,3,4,5,5}
    output = 4
*/

// Other approaches can be linear search with Hashmap or XOR

// Time Complexity: O(logn)
// Space Complexity: O(1)
const findElement = (arr) => {
    let n = arr.length;
    let i = 0, j = n-1;

    while (i < j) {
        const mid = Math.floor((i+j)/2)
        if (arr[mid] === arr[mid-1]) {
            if ((mid - i + 1) % 2) {
                j = mid;
            } else {
                i = mid + 1;
            }
        }
        else if (arr[mid] === arr[mid+1]) {
            if ((j - mid + 1) % 2) {
                i = mid;
            } else {
                j = mid-1;
            }
        }
        else {
            return arr[mid];
        }
    }
    return arr[i];
}

const arr = [1,1,2,2,3,3,4,4,5]
console.log(findElement(arr))