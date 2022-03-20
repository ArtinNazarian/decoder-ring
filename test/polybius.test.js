// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("encoding a message", () => {
  it("should translate letters i and j to 42", () => {
    const message = "jumanji";
    const actual = polybius(message);
    const expected = "42542311334242";

    expect(actual).to.equal(expected);
  });

  it("should decode 42 to i/j", () => {
    const message = "425434444231 135111225451";
    const actual = polybius(message, false);
    const expected = "i/justi/jc league";

    expect(actual).to.equal(expected);
  });
});
