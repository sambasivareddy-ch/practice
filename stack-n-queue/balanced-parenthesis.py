'''
Problem statement: Check Balanced Parentheses. Given string str containing just the characters '(', ')', '{', '}', '[' and ']', 
check if the input string is valid and return true if the string is balanced otherwise return false.

A string str is said valid only when:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
'''

# Time Complexity: O(n)
# Space Complexity: O(n)
def IsStrValid(string):
    stack = []

    for char in string:
        if char in ['(', '{', '[']:
            stack.append(char)
        elif char == ']' and stack[-1] == '[':
            stack.pop()
        elif char == '}' and stack[-1] == '{':
            stack.pop()
        elif char == ')' and stack[-1] == '(':
            stack.pop()
        else:
            return False 
    
    if len(stack):
        return False
    
    return True 

print(IsStrValid("[]{}()"))
print(IsStrValid("[{()}]"))
print(IsStrValid("[{([)}]"))