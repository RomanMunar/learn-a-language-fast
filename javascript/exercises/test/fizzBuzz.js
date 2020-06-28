import assert from "assert";
import fizzBuzz from "../basics/fizzBuzz.js";

const Questionandanswers = [
  [1, "1"],
  [2, "1, 2"],
  [3, "1, 2, Fizz"],
  [4, "1, 2, Fizz, 4"],
  [5, "1, 2, Fizz, 4, Buzz"],
  [6, "1, 2, Fizz, 4, Buzz, Fizz"],
  [7, "1, 2, Fizz, 4, Buzz, Fizz, 7"],
  [8, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8"],
  [9, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz"],
  [10, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz"],
  [11, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11"],
  [12, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz"],
  [13, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13"],
  [14, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14"],
  [
    15,
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz",
  ],
  [
    16,
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16",
  ],
  [
    17,
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17",
  ],
  [
    18,
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz",
  ],
  [
    19,
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19",
  ],
  [
    20,
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz",
  ],
];

describe("fizzBuzz.js in js/exercise/basics ", function () {
  for (let index = 1; index < Questionandanswers.length; index++) {
    it(`should return ${Questionandanswers[index][1]} for index ${index}`, function () {
      const answer = Questionandanswers[index][1];
      assert.equal(fizzBuzz(index), answer);
    });
  }
});
