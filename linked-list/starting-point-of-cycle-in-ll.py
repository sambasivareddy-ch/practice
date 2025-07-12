# Problem Statement: Given the head of a singly linked list, the task is to find the starting point of a loop in the linked list if it exists. Return the starting node if a loop exists; otherwise, return null.

class Node:
    def __init__(self, val):
        self.val = val
        self.next = None 

def findTheStartingPointInLL(head):
    slow = head 
    fast = head 

    while fast and fast.next:
        slow = slow.next 
        fast = fast.next.next 
        if slow == fast:
            return slow 
    
    return None 


ll1 = Node(1)
ll1.next = Node(2)
ll1.next.next = Node(3)
ll1.next.next = ll1.next 
print(findTheStartingPointInLL(ll1).val)