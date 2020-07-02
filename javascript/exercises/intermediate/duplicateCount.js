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

function duplicateCount(s) {
  s = s.toLowerCase();
  const characters = s.split("");
  let counter = 0;
  let isCharMatched = new Map();
  for (let i = 0; i < characters.length; i++) {
    for (let j = i + 1; j < characters.length; j++) {
      if (characters[j] == characters[i]) {
        if (isCharMatched.get(characters[i], true)) {
          break;
        }
        isCharMatched.set(characters[i], true);
        counter++;
      }
    }
  }
  return counter;
}

export default duplicateCount;
