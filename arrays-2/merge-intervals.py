# Merge Overlapping Subintervals

'''
    Example:
    Input:  [[1,5],[3,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]

    [1,5] & [3,6] are overlapping intervals
'''

def mergeOverlappedIntervals(arr):
    arr.sort()
    result = []
    result.append(arr[0])

    n = len(arr)
    for i in range(1, n):
        curr = arr[i]
        last = result[-1]
        if last[1] >= curr[0]:
            if last[1] < curr[1]:
                result[-1][1] = curr[1]
        else:
            result.append(curr)

    return result 

print(mergeOverlappedIntervals([[1,5], [2,3], [4,5], [9,12], [8,10], [15,18]]))