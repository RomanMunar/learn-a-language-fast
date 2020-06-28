// Reverse will return the provided word in reverse
// order. Eg:
//
//   Reverse("cat") => "tac"
//   Reverse("alphabet") => "tebahpla"
//
// Refrain using the built in the revese() method

function reverse(word) {
  let letters = word.split("");
  let wordLength = letters.length;
  let result = [];
  console.log(word + "\n");
  for (let i = 0; i < letters.length; i++) {
    result += letters[wordLength - i - 1];
  }

  return result;
}

export default reverse;
