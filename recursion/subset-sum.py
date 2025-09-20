def isSubsetEquals(arr, idx, total, target):
    if total == target:
        return True
    if idx == len(arr):
        return False
    
    include = isSubsetEquals(arr, idx+1, total+arr[idx], target)
    exclude = isSubsetEquals(arr, idx+1, total, target)
    return include or exclude

def containsSubset(arr, target):
   return isSubsetEquals(arr, 0, 0, target)

arr = [7, 2, 5]
target = 9
print(containsSubset(arr, target))