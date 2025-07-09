# Given the head of a singly linked list. Return true if a loop exists in the linked list or return false.

class Node:
    def __init__(self, val):
        self.val = val 
        self.next = None 

def hasCycle(head):
    if not head:
        return False 
    
    slow = fast = head 
    while fast and fast.next:
        fast = fast.next.next 
        slow = slow.next 

        if fast == slow:
            return True 
    
    return False

ll1 = Node(1)
ll1.next = Node(2)
ll1.next.next = Node(3)
ll1.next.next = ll1.next 
print(hasCycle(ll1))