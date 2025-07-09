# Problem Statement: Given the root node of a binary search tree (BST) and two node values p,q.
# Return the lowest common ancestors(LCA) of the two nodes in BST.

class Node:
    def __init__(self, key):
        self.key = key 
        self.left = None 
        self.right = None 
    
def findLowestCommonAncestorsRecursive(root, p, q):
    if root == None:
        return None 
    
    if root.key > p and root.key > q: 
        return findLowestCommonAncestorsRecursive(root.left, p, q)
    
    if root.key < p and root.key < q: 
        return findLowestCommonAncestorsRecursive(root.right, p, q)
    
    return root.key

def findLowestCommonAncestorsIterative(root, p, q):
    if root == None:
        return None 

    while root:
        if root.key > p and root.key > q:
            root = root.left 
        elif root.key < p and root.key < q:
            root = root.right 
        else:
            return root.key 
    
    return None

root = Node(5)
root.left = Node(3)
root.left.left = Node(2)
root.left.right = Node(4)
root.right = Node(6)
root.right.right = Node(7)

print(findLowestCommonAncestorsRecursive(root, 2, 7))
print(findLowestCommonAncestorsIterative(root, 2, 7))
