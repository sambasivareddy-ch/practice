// Problem Statement: Given an array of integers, find thee next greater element for each element in the array in the order of their appearance.
// If no greater element exists, output -1 for that element.

package main

import "fmt"

// Time Complexity: O(n)
// Space Complexity: O(n)
// Approach: Use a stack to keep track of indices of elements for which we haven't found the next greater element yet.
// For each element, pop elements from the stack until we find a greater element or the stack is empty.
// If we find a greater element, we set the result for that index to the current element.
// If the stack is empty, it means there is no greater element, so we set the result to -1 for that index.
// The stack will contain indices of elements in decreasing order, so we can efficiently find the next greater element.
func nextGreaterElement(nums []int) []int {
	n := len(nums)
	result := make([]int, n)
	stack := []int{}

	for i := 0; i < n; i++ {
		// Pop elements from the stack until the current element is less than or equal to the top of the stack
		for len(stack) > 0 && nums[i] > nums[stack[len(stack)-1]] {
			index := stack[len(stack)-1]
			result[index] = nums[i]
			stack = stack[:len(stack)-1]
		}
		// Push the current index onto the stack
		stack = append(stack, i)
	}

	// For remaining elements in the stack, set result to -1
	for _, index := range stack {
		result[index] = -1
	}

	return result
}



func main() {
	nums := []int{4, 5, 2, 10, 8}
	nums1 := []int{1, 3, 2, 4}

	result := nextGreaterElement(nums)
	for _, v := range result {
		fmt.Println(v)
	}

	result = nextGreaterElement(nums1)
	for _, v := range result {
		fmt.Println(v)
	}
}