import assert from "assert";
import duplicateCount from "../intermediate/duplicateCount.js";

const test = [
  ["abcde", 0],
  ["abcdea", 1],
  ["invisibility", 1],
  ["helloworld", 2],
];
describe("duplicateCount.js in js/exercise/intermediate ", function () {
  for (let i = 0; i < test.length; i++) {
    it("should return 377 for input 14", function () {
      assert.equal(duplicateCount(test[i][0]), test[i][1]);
    });
  }
});
