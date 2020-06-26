package basics

// Reverse will return the provided word in reverse
// order. Eg:
//
//   Reverse("cat") => "tac"
//   Reverse("alphabet") => "tebahpla"
//
func Reverse(word string) string {
	res := make([]byte, len(word))
	lw := len(word)
	l := len(word) - 1
	for i := 0; i < lw; i++ {
		res[i] = word[l-i]
	}
	return string(res)
}
