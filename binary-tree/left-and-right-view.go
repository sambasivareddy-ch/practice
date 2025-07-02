// Problem Statement: Given a Binary Tree, return its right & left views

// The Right View of a Binary Tree is a list of nodes that can be seen when the tree is viewed from the right side
// The Left View of a Binary Tree is a list of nodes that can be seen when the tree is viewed from the left side

package main

import "fmt"

type TreeNode struct {
    Val   int 
    Left  *TreeNode
    Right *TreeNode
}

func completeBfs(root *TreeNode, level int, leftView, rightView *[]int) {
    if root == nil {
        return 
    }

    if level == len(*leftView) {
        // Add to left view if this is the first node at this level
        *leftView = append(*leftView, root.Val) 
    }

    if level == len(*rightView) {
        // Add to right view if this is the first node at this level
        *rightView = append(*rightView, root.Val) 
    } else {
        // Update the right view with the current node's value
        // This ensures that the rightmost node at each level is captured
        (*rightView)[level] = root.Val
    }

    // Traverse left and right children
    completeBfs(root.Left, level+1, leftView, rightView)
    completeBfs(root.Right, level+1, leftView, rightView)
}

func main() {
    root := &TreeNode{
        Val: 1,
        Left: &TreeNode{
            Val: 2,
            Left: &TreeNode{
                Val: 4,
                Right: &TreeNode{
                    Val: 5,
                    Right: &TreeNode{
                        Val: 6,
                    },
                },
            },
            Right: &TreeNode{
                Val: 10,
            },
        },
        Right: &TreeNode{
            Val: 3,
            Left: &TreeNode{
                Val: 9,
            },
            Right: &TreeNode{
                Val: 11,
            },
        },
    }   

    var leftView, rightView []int
    completeBfs(root, 0, &leftView, &rightView)

    fmt.Println("Left View:", leftView)   // Output: Left View: [1 2 4 5 6]
    fmt.Println("Right View:", rightView) // Output: Right View: [1 3 11 5 6]
}