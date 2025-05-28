/*
    Problem Statement: Given an array of N + 1 size, where each element is between 1 and N. 
    Assuming there is only one duplicate number, your task is to find the duplicate number.
*/

/*
    Time Complexity: O(nlogn) + O(n)
    Space Complexity: O(1)
*/
const findDuplicateWithSorting = (arr) => {
    arr.sort();
    let n = arr.length;

    for (let i = 0; i < n-1; i++) {
        if (arr[i] === arr[i+1]) {
            return arr[i];
        }
    }

    return -1;
}

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/
const findDuplicate = (arr) => {
    let n = arr.length;
    let frequencies = new Array(n).fill(false);

    for (const num of arr) {
        if (frequencies[num]) {
            return num;
        } else {
            frequencies[num] = true;
        }
    }

    return n;
}

// Floyd’s Tortoise and Hare algorithm
const findDuplicateUsingFloyd = (arr) => {
    let slow = arr[0],
        fast = arr[0];
    
    // Find the cycle point
    do {
        slow = arr[slow];
        fast = arr[arr[fast]];
    } while(slow !== fast);

    // Now find the element
    slow = arr[0]
    while (slow !== fast) {
        slow = arr[slow]
        fast = arr[fast]
    }

    return slow
}

let arr = [1, 3, 2, 3, 4]
console.log(findDuplicateWithSorting(arr))
console.log(findDuplicate(arr))
console.log(findDuplicateUsingFloyd(arr))