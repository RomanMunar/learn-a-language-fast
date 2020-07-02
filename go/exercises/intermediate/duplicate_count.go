// Write a function that will
// return the count of distinct case-insensitive alphabetic characters
// that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Types
// 	Arguments:	string
// 	Return:			int

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times

package intermediate

import (
	"strings"
)

func DuplicateCount(s1 string) int {
	c := make([]string, 0)
	s := strings.ToLower(s1)
	c = strings.Split(s, "")
	counter := 0
	ischarmatched := make(map[string]bool)
	for i, l := range c {
		for j := i + 1; j < len(c); j++ {
			if l == c[j] {
				if ischarmatched[l] == true {
					break
				}
				ischarmatched[l] = true
				counter++
			}
		}
	}
	return counter
}
