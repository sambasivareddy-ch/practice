// Proble Statement: Given two integer arrays Postorder and Inorder. Where Postorder is the postorder traversal of a binary tree and Inorder is the inorder traversal of the same tree.
// Construct and return the binary tree using the postorder and inorder arrays.

package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// buildTree constructs a binary tree from inorder and postorder traversal arrays.
// Time Complexity: O(n), where n is the number of nodes in the tree.
// Space Complexity: O(n), for storing the tree nodes.
func buildTree(inorder, postorder []int) *TreeNode {
	if len(inorder) == 0 || len(postorder) == 0 {
		return nil 
	}

	postLen := len(postorder)

	root := &TreeNode{Val: postorder[postLen-1]}

	inorderIndex := 0
	for idx, val := range inorder {
		if val == root.Val {
			inorderIndex = idx
			break
		}
	}

	root.Left = buildTree(inorder[:inorderIndex], postorder[:inorderIndex])
	root.Right = buildTree(inorder[inorderIndex+1:], postorder[inorderIndex:postLen-1])

	return root
}

func (t *TreeNode) String() string {
	if t == nil {
		return "nil"
	}
	return fmt.Sprintf("TreeNode{Val: %d, Left: %s, Right: %s}", t.Val, t.Left, t.Right)
}

func main() {
	inorder := []int{9, 3, 15, 20, 7}
	postorder := []int{9, 15, 7, 20, 3}

	root := buildTree(inorder, postorder)

	fmt.Println("Constructed Binary Tree:", root.String())
}