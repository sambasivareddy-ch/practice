# Problem Statement: Given the root node of a binary search tree (BST) and an integer key. Return the Inorder predecessor and successor of the given key from the provided BST. 
# If predecessor or successor is missing then return -1.

class Node:
	def __init__(self, key):
		self.val = key
		self.left = None 
		self.right = None 

def findPredecessorSuccessor(root, key):
	predecessor = -1 
	successor = -1 

	# Search the key
	current = root
	while current:
		if key > current.val:
			predecessor = current.val 
			current = current.right 
		elif key < current.val:
			successor = current.val 
			current = current.left 
		else:
			break # Key Found 
	
	if not current:
		return predecessor, successor
	
	if current.left:
		temp = current.left 
		while temp.right:
			temp = temp.right 
		predecessor = temp.val 
	
	if current.right:
		temp = current.right 
		while temp.left:
			temp = temp.left 
		successor = temp.val 

	return predecessor, successor

root = Node(10)
root.left = Node(5)
root.left.left = Node(3)
root.left.right = Node(8)
root.right = Node(18)
root.right.left = Node(16)
root.right.right = Node(20)
print(findPredecessorSuccessor(root, 10))
print(findPredecessorSuccessor(root, 20))