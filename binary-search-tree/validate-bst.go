// Problem Statement: Check whether the given Binary Tree is a BST or not

package main 

import (
	"fmt"
	"math"
)

type TreeNode struct {
	Val 	int
	Left 	*TreeNode
	Right 	*TreeNode 
}

func validateBST(root *TreeNode, min, max int) bool {
	if root == nil {
		return true 
	}

	if root.Val <= min {
		return false 
	}

	if root.Val >= max {
		return false 
	}

	return validateBST(root.Left, min, root.Val) && validateBST(root.Right, root.Val, max)
}

func main() {
	root := &TreeNode {
		Val: 10,
		Left: &TreeNode {
			Val: 5,
			Left: &TreeNode {Val: 1},
			Right: &TreeNode {Val: 8},
		},
		Right: &TreeNode {
			Val: 30,
		},
	}

	fmt.Println("Is Valid = ", validateBST(root, math.MinInt64, math.MaxInt64))

	root = &TreeNode {
		Val: 10,
		Left: &TreeNode {
			Val: 5,
			Left: &TreeNode {Val: 1},
			Right: &TreeNode {Val: 8},
		},
		Right: &TreeNode {
			Val: 9,
		},
	}

	fmt.Println("Is Valid = ", validateBST(root, math.MinInt64, math.MaxInt64))
}