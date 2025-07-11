# Problem Statement: Given the heads of two linked lists A and B, containing positive integers. 
# Find the node at which the two linked lists intersect. If they do intersect, 
# return the node at which the intersection begins, otherwise return null.

class Node:
    def __init__(self, val):
        self.val = val 
        self.next = None 

def findIntersectionOfTwoLL(headA, headB):
    def getLength(head):
        count = 0
        while head:
            count += 1
            head = head.next
        return count 
    
    lenA, lenB = getLength(headA), getLength(headB)

    if lenA > lenB:
        diff = lenA - lenB 
        while diff:
            diff -= 1
            headA = headA.next
    else:
        diff = lenB - lenA 
        while diff:
            diff -= 1
            headB = headB.next 
    
    while headA and headB:
        if headA == headB:
            return headA
        headA = headA.next 
        headB = headB.next 
    
    return None 

ll = Node(1)
ll.next = Node(2)
ll.next = Node(3)

intersect_ll = Node(4)
intersect_ll.next = Node(5)

ll1 = Node(7)
ll1.next = Node(8)

ll.next = intersect_ll
ll1.next = intersect_ll 

result = findIntersectionOfTwoLL(ll, ll1)
if result:
    print(result.val)
else:
    print(None)