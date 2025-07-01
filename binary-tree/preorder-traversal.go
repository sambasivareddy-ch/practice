// Problem Statement: Given the root of a Binary Tree, write a recursive function that returns an array containing the preorder traversal of the tree.

package main 

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// Time Complexity: O(n), where n is the number of nodes in the tree.
func preorderTraversal(root *TreeNode) {
	if root == nil {
		return 
	}

	fmt.Print(root.Val, " ")
	preorderTraversal(root.Left)
	preorderTraversal(root.Right)
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

	preorderTraversal(root) // Output: 1 2 4 5 3 6 7
}