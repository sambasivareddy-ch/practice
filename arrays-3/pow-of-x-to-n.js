/*
    Problem Statement:
    Given a double x and integer n, calculate x raised to power n. Basically Implement pow(x, n).
*/

const calculatePow = (x, n) => {
    let ans = 1.0;
    for (let i = 0; i < n; i++) {
        ans = ans * x;
    }
    return ans;
}

console.log(calculatePow(2, 10))