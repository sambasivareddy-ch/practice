// Problem Statement: Given the root of a Binary Tree, write a recursive function that returns an array containing the postorder traversal of the tree.

// Problem Statement: Given the root of a Binary Tree, write a recursive function that returns an array containing the preorder traversal of the tree.

package main 

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// Time Complexity: O(n), where n is the number of nodes in the tree.
func postOrderTraversal(root *TreeNode) {
	if root == nil {
		return 
	}

	postOrderTraversal(root.Left)
	postOrderTraversal(root.Right)
	fmt.Print(root.Val, " ")
}

func main() {
	// Example usage:
	root := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 4,
			},
			Right: &TreeNode{
				Val: 5,
			},
		},
		Right: &TreeNode{
			Val: 3,
			Left: &TreeNode{
				Val: 6,
			},
			Right: &TreeNode{
				Val: 7,
			},
		},
	}

	postOrderTraversal(root) // Output: 4 5 2 6 7 3 1
}