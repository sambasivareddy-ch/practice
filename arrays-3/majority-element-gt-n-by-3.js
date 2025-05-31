/*
    Problem statement:
    Given an array of N integers. Find the elements that appear more than N/3 times in the array.
    If no such element exists, return an empty vector.
*/

// Other techinques can be hashing, count each element independently

// Time Complexity: O(n)
// Space Complexity: O(1)
const findMajorityElement = (arr) => {
    let count1 = 0, count2 = 0;
    let element1 = -Infinity, element2 = -Infinity;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (count1 === 0 && element2 !== arr[i]) {
            element1 = arr[i]
        } 
        else if (count2 === 0 && element1 !== arr[i]) {
            element2 = arr[i]
        }
         
        if (element1 === arr[i]) {
            count1 += 1;
        }
        else if (element2 === arr[i]) {
            count2 += 1;
        }
        else {
            count1 -= 1;
            count2 -= 1;
        }
    }

    let result = []
    let element1Count = 0, element2Count = 0;
    for (let num of arr) {
        if (num === element1) {
            element1Count += 1;
        }
        else if (num === element2) {
            element2Count += 1;
        }
    }

    let k = Math.floor(n/3)
    if (element1Count > k) {
        result.push(element1);
    }

    if (element2Count > k && element1 !== element2) {
        result.push(element2);
    }

    return result;
}

let arr = [11,33,33,11,33,11]
console.log(findMajorityElement(arr))

let arr1 = [1,1,1,2,2,3,3]
console.log(findMajorityElement(arr1))