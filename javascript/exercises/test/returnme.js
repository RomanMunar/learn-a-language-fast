import assert from "assert";
import returnMe from "../basics/returnme.js";
describe("return.js in js/exercise/basic", function () {
  it("should return the given argument", function () {
    assert.equal(returnMe(1), 1);
  });
  it("should return the given string argument", function () {
    assert.equal(returnMe("Hello"), "Hello");
  });
  it("should return the given float argument", function () {
    assert.equal(returnMe(2.5), 2.5);
  });
});
