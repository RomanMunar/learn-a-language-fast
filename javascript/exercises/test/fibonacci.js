import assert from "assert";
import fibonacci from "../basics/fibonacci.js";

describe("fibonacci.js in js/exercise/basics ", function () {
  it("should return 377 for input 14", function () {
    assert.equal(fibonacci(14), 377);
  });
  it("should return 75025 for n == 25", function () {
    assert.equal(fibonacci(25), 75025);
  });
  it("should return 1 for n == 2", function () {
    assert.equal(fibonacci(2), 1);
  });
  it("should return 8 for n == 6", function () {
    assert.equal(fibonacci(6), 8);
  });
  it("should return 13 for n == 7", function () {
    assert.equal(fibonacci(7), 13);
  });
  it("should return 1 if n is less than 1", function () {
    assert.equal(fibonacci(1), 1);
  });
  it("should return 0 if n is 0", function () {
    assert.equal(fibonacci(0), 0);
  });
});
