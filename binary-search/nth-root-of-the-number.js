/*
    Statement:
    Given two numbers N and M, find the Nth root of M. The nth root of a number M is defined 
    as a number X when raised to the power N equals M. If the 'nth root is not an integer, return -1.

    Example: 
    1. N = 3, M = 27 => ans = 3 (3 ** N == 3 ** 3 == 27)
    2. N = 4, M = 69 => ans = -1 (No result)
*/

const baseRaisedToExpo = (base, exp) => {
    let ans = 1;

    while (exp > 0) {
        if (exp % 2) {
            exp -= 1;
            ans = ans * base;
        } else {
            exp = Math.floor(exp/2);
            base = base*base;
        }
    }

    return ans;
}

// Time Complexity: O(M * log(N))
// Space Complexity: O(1)
const linearSearch = (N, M) => {
    for (let i = 1; i <= M; i++) {
        const result = baseRaisedToExpo(i, N);
        if (result === M) {
            return i;
        } else if (result > M) {
            break;
        }
    }
    return -1;
}

const computeExpoState = (base, exp, M) => {
    let ans = 1;
    for (let i = 1; i <= exp; i++) {
        ans *= base;
        if (ans === M) {
            return 2; // Equal
        } else if (ans > M) {
            return 1; // Continue left search
        }
    }
    return 0; // Continue right search
}

// Time Complexity: O(logM * N)
// Space Complexity: O(1)
const binarySearch = (N, M) => {
    let i = 1, j = M;

    while (i < j) {
        let mid = Math.floor((i+j)/2);
        let state = computeExpoState(mid, N, M);
        if (state === 2) {
            return mid;
        } else if (state === 1) {
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }

    return -1;
}

let N = 3, M = 27;
console.log(linearSearch(N, M));
console.log(binarySearch(N, M));
let N1 = 4, M1 = 69;
console.log(linearSearch(N1, M1));
console.log(binarySearch(N1, M1));