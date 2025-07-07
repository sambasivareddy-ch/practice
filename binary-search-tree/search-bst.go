// Problem Statement: Given the BST and a val, search the val in the BST

package main

import "fmt"

type TreeNode struct {
	Val 	int
	Left    *TreeNode
	Right 	*TreeNode
}

func searchBST(root *TreeNode, val int) bool {
	if root == nil {
		return false
	}

	if root.Val == val {
		return true 
	}

	if val < root.Val {
		return searchBST(root.Left, val)
	}

	return searchBST(root.Right, val)
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

	found := searchBST(root, 8)
	fmt.Println("Found = ", found)

	found = searchBST(root, 31)
	fmt.Println("Found = ", found)
}