import assert from "assert";
import findTwoThatSum from "../basics/findTwoThatSum.js";

describe("findTwoThatSum.js in js/exercise/basics ", function () {
  it("should not alter the numbers list", function () {
    let numList = [3, 1, 6, 4];
    let sum = 7;
    let copyNumList = numList;
    let copySum = sum;
    let res = findTwoThatSum(numList, sum);
    let authRes = findTwoThatSum(copyNumList, copySum);

    assert.equal(res, authRes);
  });
  it("should return indices 0,3 for [3, 1, 6, 4], 7", function () {
    assert.equal(findTwoThatSum([3, 1, 6, 4], 7), (0, 3));
  });
  it("should return indices 1, 7 for [10, 1, 12, 3, 7, 2, 2, 1], 4)", function () {
    assert.equal(findTwoThatSum([10, 1, 12, 3, 7, 2, 2, 1], 4), (1, 3));
  });
  it("should return indices 2,3 for [1,3,4,5,2],9", function () {
    assert.equal(findTwoThatSum([1, 3, 4, 5, 2], 9), (2, 3));
  });
  it("not possible should return indices -1,-1 for [2,1,5,7,8],4", function () {
    assert.equal(findTwoThatSum(2), (-1, -1));
  });
  it("not possible should return indices -1,-1 for [6,8,4,9,2],7", function () {
    assert.equal(findTwoThatSum(6), (-1, -1));
  });
});
