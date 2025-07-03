// Problem Statement: Given a Binary Tree, find the maximum depth/height of the tree.
// The height of the tree is equal to the number of nodes along the longest path from the root node down to the farthest leaf node.

package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}


// maxDepth calculates the maximum depth of a binary tree.
// Time Complexity: O(n), where n is the number of nodes in the tree.
// Space Complexity: O(h), where h is the height of the tree (due to recursion stack).
// This function uses a depth-first search approach to traverse the tree.
func maxDepth(root *TreeNode, depth int) int {
	if root == nil {
		return depth 
	}

	leftDepth := maxDepth(root.Left, depth+1)
	rightDepth := maxDepth(root.Right, depth+1)

	if leftDepth > rightDepth {
		return leftDepth
	}
	return rightDepth
}

func maximumDepth(root *TreeNode) int {
	if root == nil {
		return 0 // If the tree is empty, the maximum depth is 0.
	}
	return maxDepth(root, 0) // Start the depth count from 0.
}

func main() {
	root := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
		},
		Right: &TreeNode{
			Val: 5,
			Left: &TreeNode{
				Val: 4,
				Left: &TreeNode{
					Val: 5,
				},
			},
			Right: &TreeNode{
				Val: 6,
			},
		},
	}

	fmt.Println("Maximum Depth of the Binary Tree:", maximumDepth(root)) // Output should be 4
}