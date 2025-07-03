// Problem Statement: Given two binary trees, return true if they are identical, otherwise return false.
package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// isIdentical checks if two binary trees are identical.
// Time Complexity: O(n), where n is the number of nodes in the trees.
// Space Complexity: O(h), where h is the height of the trees (due to recursion stack).
// This function uses a depth-first search approach to compare the nodes of both trees.
func isIdentical(tree1, tree2 *TreeNode) bool {
	if tree1 == nil && tree2 == nil {
		return true
	}

	if tree1 == nil || tree2 == nil {
		return false
	}

	if tree1.Val != tree2.Val {
		return false 
	}

	return isIdentical(tree1.Left, tree2.Left) && isIdentical(tree1.Right, tree2.Right)
}

func main() {
	tree1 := &TreeNode{
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
		},
	}

	tree2 := &TreeNode{
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
		},
	}

	fmt.Println("Are the two trees identical?", isIdentical(tree1, tree2)) // Output should be true
}