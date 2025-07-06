// Problem Statement: Given an array of intergers represents the preorder traversal of a BST tree. Construct the BST from the preorder traversal

package main

import (
	"fmt"
	"math"
)

type TreeNode struct {
	Val		int
	Left 	*TreeNode
	Right	*TreeNode 
}

func InsertIntoBST(root *TreeNode, val int) *TreeNode {
	if root == nil {
		return &TreeNode {
			Val: val,
		}
	}

	if val < root.Val {
		root.Left = InsertIntoBST(root.Left, val)
	} else {
		root.Right = InsertIntoBST(root.Right, val)
	}

	return root 
}

// ConstructBST constructs the BST by iterating through Preorder Traversal
// Time Complexity: O(n^2) as for every node we passing through entire tree to get the position
func ConstructBST(preorder []int) *TreeNode {
	if len(preorder) == 0 {
		return nil 
	}

	var root *TreeNode
	for _, val := range preorder {
		root = InsertIntoBST(root, val)
	}

	return root
}

func ConstructBSTUsingRange(preorder []int, idx, min, max, preorder_len int) *TreeNode {
	if idx >= preorder_len {
		return nil 
	}

	current := preorder[idx]
	if idx <= min || idx >= max {
		return nil 
	}

	root := &TreeNode{Val: current}
	idx += 1

	if idx < preorder_len {
		root.Left = ConstructBSTUsingRange(preorder, idx, min, current, preorder_len);
	} 

	if idx < preorder_len {
		root.Right = ConstructBSTUsingRange(preorder, idx, current, max, preorder_len);
	}

	return root 
}

func (t *TreeNode) String() string {
	if t == nil {
		return "nil"
	}
	return fmt.Sprintf("TreeNode{Val: %d, Left: %s, Right: %s}", t.Val, t.Left, t.Right)
}

func main() {
	preorder := []int{8, 5, 1, 7, 10, 12}
	tree := ConstructBST(preorder)
	fmt.Println(tree)
	tree.String()

	tree1 := ConstructBSTUsingRange(preorder, 0, math.MinInt64, math.MaxInt64, len(preorder))
	fmt.Println(tree1)
	tree1.String()
}