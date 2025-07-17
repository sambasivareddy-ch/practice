# Problem Statement: Given the head of a singly linked list and an integer n. Remove the nth node from the back of the linked List and 
# return the head of the modified list. The value of n will always be less than or equal to the number of nodes in the linked list.

class ListNode:
    def __init__(self, val = 0):
        self.val = val
        self.next = None 

def deleteNthNodeFromEnd(head, n):
    dummy = ListNode(0)
    dummy.next = head
    first = dummy
    second = dummy

    # Move first n+1 steps ahead so second is just before the node to delete
    for _ in range(n + 1):
        if not first:
            return head  # n is greater than the length of the list
        first = first.next

    # Move both pointers until first reaches the end
    while first:
        first = first.next
        second = second.next

    # Delete the nth node from the end
    second.next = second.next.next

    return dummy.next
    
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

newHead = deleteNthNodeFromEnd(head, 4)
while newHead:
    print(newHead.val)
    newHead = newHead.next