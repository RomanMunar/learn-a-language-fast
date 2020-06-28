// Exercises in js have their own test files,
// so just treat index.js as your scratchpad to test your solutions

// All files exports their function by default
// template for imports
// import [FUNCTION_NAME] from "./exercises/[LEVEL]/[EXERCISE_FILE.js]"
//

// import returnMe from "./exercises/basics/returnme.js";
// import fizzBuzz from "./exercises/basics/fizzBuzz.js";
import reverse from "./exercises/basics/reverse.js";
// console.log(returnMe(1, 2));
// console.log(findTwoThatSum([1, 3, 5, 4, 2], 9));
console.log(reverse(randomString()));
function randomString() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var string_length = 8;
  var randomstring = "";
  for (var i = 0; i < string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
}
// console.log(fizzBuzz(20));
