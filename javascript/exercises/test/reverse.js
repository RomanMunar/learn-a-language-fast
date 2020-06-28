import assert from "assert";
import reverse from "../basics/reverse.js";

describe("reverse.js in js/exercise/basics ", function () {
  const qna = [
    ["cat", "tac"],
    ["alphabet", "tebahpla"],
    ["niknok", "konkin"],
    ["javascript", "tpircsavaj"],
  ];
  for (let index = 0; index < qna.length; index++) {
    const q = qna[index][0];
    const a = qna[index][1];
    it(`should return ${a} for input ${q}`, function () {
      assert.equal(reverse(q), a);
    });
  }
});
