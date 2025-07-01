// Problem Statement: Given the root of a Binary Tree, write a recursive function that returns an array containing the inorder traversal of the tree.
package main

import "fmt"

type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

func inorderTraversal(root *TreeNode) {
	if (root == nil) {
		return
	}

	inorderTraversal(root.Left)
	fmt.Print(root.Val, " ")
	inorderTraversal(root.Right)
}

func main() {
	root := &TreeNode {
		Val: 1,
		Left: &TreeNode {
			Val: 2,
			Left: &TreeNode {
				Val: 4,
			},
			Right: &TreeNode {
				Val: 5,
			},
		},
		Right: &TreeNode {
			Val: 3,
			Left: &TreeNode {
				Val: 6,
			},
			Right: &TreeNode {
				Val: 7,
			},
		},
	}

	inorderTraversal(root)
}