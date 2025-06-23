'''
    Problem Statement: Implement the Min-Stack using Stack.
    Implement a min-stack which supports push, pop, top and getMin
    - getMin: Returns the Minimum in the stack
'''

# Time Complexity: O(1) for every operation
# Space Complexity: O(N)
class Stack:
    def __init__(self):
        self.stack = []
        self.length = 0
    
    def push(self, val):
        if self.length == 0:
            self.stack.append([val, val])
        else:
            curr = self.stack[-1]
            if curr[1] > val:
                self.stack.append([val, val])
            else:
                self.stack.append([val, curr[1]])
        self.length += 1
    
    def pop(self):
        self.length -= 1
        return self.stack.pop()[0]
    
    def top(self):
        if len(self.stack) == 0:
            print('Stack is Empty')
        return self.stack[-1][0]
    
    def getMin(self):
        if len(self.stack) == 0:
            print('Stack is Empty')
        return self.stack[-1][1]

newStack = Stack()
newStack.push(-1)
newStack.push(2)
print('Min at present', newStack.getMin())
print('Top at present', newStack.top())
newStack.push(-3)
print('Min at present', newStack.getMin())
print('Top at present', newStack.top())