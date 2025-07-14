# Problem Statement: Given two strings s and t, return true if t is an anagram of s, and false otherwise.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically 
# using all the original letters exactly once.

def isValidAnagram(str1, str2):
    if len(str1) != len(str2):
        return False 
    
    dict1 = {}
    dict2 = {}
    for i in str1:
        if i not in dict1:
            dict1[i] = 1
        else:
            dict1[i] += 1
    
    for j in str2:
        if j not in dict2:
            dict2[j] = 1
        else:
            dict2[j] += 1
    
    for key, val in dict1.items():
        if key not in dict2 or dict2[key] != val:
            return False
    
    return True 

print(isValidAnagram('cat', 'tac'))
print(isValidAnagram('abcd', 'efgh'))