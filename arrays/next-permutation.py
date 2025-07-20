# Problem Statement: Given an Array arr, find the the next permutation of this array of integers which is the next lexicographically greater permutation of its integers.

'''
Example:
    nums = [1,2,3]
    Output = [1,3,2]

    Possible permutations of [1,2,3] => [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]
    Assume a dictionary in that 123 will come first following by 132, 213, 231, 312, 321
'''

def nextPermutation(arr):
    i = len(arr) - 2
    while i >= 0 and arr[i] >= arr[i+1]:
        i -= 1
    
    if i >= 0:
        j = len(arr) - 1
        while j >= 0 and arr[j] <= arr[i]:
            j -= 1
        arr[i], arr[j] = arr[j], arr[i]
    
    left, right = i + 1, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    
    return arr 

print(nextPermutation([1,2,3]))
print(nextPermutation([3,2,1]))
