# Problem Statement: Given two integers m and n, representing the number of rows and columns of a 2d array named matrix. Return the number of unique ways to go from the top-left cell (matrix[0][0]) to the bottom-right cell (matrix[m-1][n-1]).
# Movement is allowed only in two directions from a cell: right and bottom.

'''
Input: m = 3, n = 2
Output: 3
Explanation: There are 3 unique ways to go from the top left to the bottom right cell.
1) right -> down -> down
2) down -> right -> down
3) down -> down -> right
'''
## Recursive Approach
def getNoOfValidPaths(i, j, m, n):
    if i == m-1 and j == n-1:
        return 1 
    elif i >= m or j >= n:
        return 0 
    
    down = getNoOfValidPaths(i+1, j, m, n)
    right = getNoOfValidPaths(i, j+1, m, n)

    return down + right 

## Dynamic Programming
def getNoOfValidPathsUsingDP(i, j, m, n, memo):
    if i == m-1 and j == n-1:
        return 1 
    elif i >= m or j >= n:
        return 0 
    
    down = getNoOfValidPaths(i+1, j, m, n, memo)
    right = getNoOfValidPaths(i, j+1, m, n, memo)

    memo[(i, j)] = down + right 
    return memo[(i, j)]


def uniquePaths(m, n):
    return getNoOfValidPathsUsingDP(0, 0, m, n, {})

print(uniquePaths(2,4))