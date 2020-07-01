package intermediate

import (
	"testing"
)

func TestDuplicateCount(t *testing.T) {
	tests := []struct {
		word string
		want int
	}{
		{"invincibility", 2},
		{"invisibility", 1},
		{"abcde", 0},
		{"abcdea", 1},
		{"hello", 1},
	}
	for _, tc := range tests {
		got := DuplicateCount(tc.word)
		if got != tc.want {
			t.Fatalf("DuplicateCount(%s) = %v; want %v", tc.word, got, tc.want)
		}
	}
}
