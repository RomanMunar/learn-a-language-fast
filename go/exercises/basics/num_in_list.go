package basics

// NumInList will return true if num is in the
// list slice, and false otherwise.
func NumInList(list []int, num int) bool {
	for _, l := range list {
		if num == l {
			return true
		}
	}
	return false
}
