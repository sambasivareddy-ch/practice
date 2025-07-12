// Problem Statement: Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

package main 

import "fmt"

func getLongestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	least_length := len(strs[0])
	for _, str := range strs {
		if len(str) < least_length {
			least_length = len(str)
		}
	}

	n := len(strs)
	common_prefix := ""
	for i := 0; i < least_length; i++ {
		curr_char := strs[0][i]
		for j := 0; j < n; j++ {
			if strs[j][i] != curr_char {
				return common_prefix
			}
		}
		common_prefix += string(curr_char)
	}

	return common_prefix
}

func main() {
	strs := []string{"flowers", "flow", "fly"}

	result := getLongestCommonPrefix(strs)

	fmt.Println(result)
}