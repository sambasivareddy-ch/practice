// Problem Statement: Given the root of a binary tree, return its level order traversal as a list of lists.

package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrder(root *TreeNode, result *[][]int, level int) {
	if root == nil {
		return 
	}

	if len(*result) == level {
		*result = append(*result, []int{})
	}

	(*result)[level] = append((*result)[level], root.Val)

	levelOrder(root.Left, result, level+1)
	levelOrder(root.Right, result, level+1)
}

func main() {
	root := &TreeNode{
		Val: 4,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 3,
				Right: &TreeNode{
					Val: 9,
					Left: &TreeNode{
						Val: 1,
					},
				},
			},
		},
		Right: &TreeNode{
			Val: 5,
			Left: &TreeNode{
				Val: 7,
			},
			Right: &TreeNode{
				Val: 6,
				Left: &TreeNode {
					Val: 8,
				},
			},
		},
	}

	result := [][]int{}
	levelOrder(root, &result, 0)

	fmt.Println("Level Order Traversal:", result) // Output should be [[1], [2, 3], [4, 5, 6, 7]]
}