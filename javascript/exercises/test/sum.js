import Sum from "../basics/sum.js";
import assert from "assert";

describe("sum.js in js/exercise/basic", function () {
  describe("", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal(Sum(1, 2, 3), 1 + 2 + 3);
    });
  });
});
