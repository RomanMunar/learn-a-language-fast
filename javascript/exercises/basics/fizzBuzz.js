// FizzBuzz will print out all of the numbers
// from 1 to N replacing any divisible by 3
// with "Fizz", and divisible by 5 with "Buzz",
// and any divisible by both with "Fizz Buzz".
//
// Note: The test for this is a little
// complicated so that you can just use the
// `fmt` package and print to standard out.
// I wouldn't normally recommend this, but did
// it here to make life easier for beginners.
// let f = index % 3 == 0;
// let b = index % 5 == 0;
// if (f && b) result += "Fizz Buzz";
// if (f) result += "Fizz ,";
// if (b) result += "Buzz,";
// result += index.toString();
// if (index != n) {
//   result += " ,";
// }
function fizzBuzz(n) {
  let result = "";
  for (let index = 1; index <= n + 1; index++) {
    switch (true) {
      case index % 3 === 0 && index % 5 === 0:
        result += "FizzBuzz";
        break;
      case index % 3 === 0:
        result += "Fizz";
        break;
      case index % 5 === 0:
        result += "Buzz";
        break;
      default:
        result += index.toString();
        break;
    }
    if (index != n + 1) {
      result += ", ";
    }
  }
  return result;
}

export default fizzBuzz;
