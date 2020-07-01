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
