// Problem Statement: Given a Binary Tree, determine whether the given tree is symmetric or not. 
// A Binary Tree would be Symmetric, when its mirror image is exactly the same as the original tree. 
// If we were to draw a vertical line through the centre of the tree, the nodes on the left and right 
// side would be mirror images of each other.
package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// isSymmetric checks if two subtrees are mirror images of each other.
// Time Complexity: O(n), where n is the number of nodes in the tree.
// Space Complexity: O(h), where h is the height of the tree (due to recursion stack).
// This function uses a recursive approach to compare the left and right subtrees.
// It checks if the values of the nodes are equal and recursively checks their children in a mirrored manner.
func isSymmetric(left, right *TreeNode) bool {
	if left == nil && right == nil {
		return true
	}
	
	if left.Val != right.Val {
		return false
	}

	if left == nil || right == nil {
		return false 
	}

	return isSymmetric(left.Left, right.Right) && isSymmetric(left.Right, right.Left)
}

func isSymmetricTree(root *TreeNode) bool {
	if root == nil {
		return true // An empty tree is symmetric.
	}
	return isSymmetric(root.Left, root.Right)
}

func main() {
	root := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 3,
			},
			Right: &TreeNode{
				Val: 4,
			},
		},
		Right: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 4,
			},
			Right: &TreeNode{
				Val: 3,
			},
		},
	}

	fmt.Println("Is the Binary Tree Symmetric?", isSymmetricTree(root)) // Output should be true
}