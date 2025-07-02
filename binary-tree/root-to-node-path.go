// Problem Statement: Given a Binary Tree, return the path from root to a given node

// Contraints:
// 1. The tree is a binary tree.
// 2. The node exists in the tree.
// 3. Node values are unique.

package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// Helper function to find the path from root to the target node
// Time Complexity: O(n), where n is the number of nodes in the tree.
// Space Complexity: O(h), where h is the height of the tree (due to recursion stack).
// This function uses a depth-first search approach to find the path.
func findPath(root *TreeNode, target int, path *[]int) bool {
	if root == nil {
		return false
	}

	if root.Val == target {
		*path = append([]int{root.Val}, *path...) 
		return true
	}

	if findPath(root.Left, target, path) || findPath(root.Right, target, path) {
		*path = append([]int{root.Val}, *path...)
		return true
	}

	return false
}

func rootToNodePath(root *TreeNode, target int) []int {
	path := []int{}
	if findPath(root, target, &path) {
		return path
	}
	return nil // Return nil if the target is not found (though the problem states it will always exist)
}

func main() {
	root := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 4,
			},
			Right: &TreeNode{
				Val: 5,
				Left: &TreeNode{
					Val: 6,
				},
				Right: &TreeNode{
					Val: 7,	
				},
			},
		},
		Right: &TreeNode{
			Val: 3,
		},
	}

	target := 7
	path := rootToNodePath(root, target)
	fmt.Println("Path from root to node", target, ":", path)
}