// Problem Statement: Given two arrays representing the inorder and preorder traversal of a binary tree, construct the binary tree.

package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// buildTree constructs a binary tree from inorder and preorder traversal arrays.
// Time Complexity: O(n), where n is the number of nodes in the tree.
// Space Complexity: O(n), for storing the tree nodes.
func buildTree(preorder []int, inorder []int) *TreeNode {
	if len(preorder) == 0 || len(inorder) == 0 {
		return nil
	}

	root := &TreeNode{Val: preorder[0]}

	inorderIndex := 0
	for idx, val := range inorder {
		if val == root.Val {
			inorderIndex = idx
			break
		}
	}

	root.Left = buildTree(preorder[1:1+inorderIndex], inorder[:inorderIndex])
	root.Right = buildTree(preorder[1+inorderIndex:], inorder[inorderIndex:])

	return root
}

func (t *TreeNode) String() string {
	if t == nil {
		return "nil"
	}
	return fmt.Sprintf("TreeNode{Val: %d, Left: %s, Right: %s}", t.Val, t.Left, t.Right)
}

func main() {
	preorder := []int{3, 9, 20, 15, 7}
	inorder := []int{9, 3, 15, 20, 7}

	root := buildTree(preorder, inorder)

	fmt.Println("Constructed Binary Tree:", root.String())
}