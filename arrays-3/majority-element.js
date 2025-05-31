/*
    Problem Statement:
    Given an array of N integers, write a program to return an element that occurs more 
    than N/2 times in the given array. You may consider that such an element always exists 
    in the array.

    Example:
    num = [1,2,2,1,1,2,2]
    Output: 2
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
const findMajorityElement = (arr) => {
    let counter = {}

    for(const num of arr) {
        if (counter[num]) {
            counter[num]++;
        } else {
            counter[num] = 1
        }
    }

    let mid = arr.length/2;
    for(let key in counter) {
        if (counter[key] > mid) {
            return parseInt(key);
        }
    }

    return 0
}


const findMajorityElementUsingBoyerMooreAlgo = (arr) => {
    let count = 0;
    let candidate = 0;

    for (const num of arr) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1: -1;
    }

    return candidate;
}

let arr = [1,2,2,1,1,2,2]
let arr1 = [2,1,2,3,3,3,3]
console.log(findMajorityElement(arr))
console.log(findMajorityElementUsingBoyerMooreAlgo(arr))
console.log(findMajorityElement(arr1))
console.log(findMajorityElementUsingBoyerMooreAlgo(arr1))