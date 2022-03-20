// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("error handling", () => {
  it("if shift value is 0, return false", () => {
    const message = "national park";
    const shift = 0;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });

  it("if shift value is greater than 25, return false", () => {
    const message = "national park";
    const shift = 28;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });

  it("if shift value is greater than -25, return false", () => {
    const message = "national park";
    const shift = -26;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
});

describe("encoding a message", () => {
  it("should ignore capital letters", () => {
    const message = "ThinkFul";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "wklqnixo";

    expect(actual).to.equal(expected);
  });

  it("should wrap letters around to the front of the alphabet", () => {
    const message = "I wrote this code";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "l zurwh wklv frgh";

    expect(actual).to.equal(expected);
  });

  it("should maintain paces and other nonalphabetic symbols in the message", () => {
    const message = "When is the first day of [Summer]?";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "zkhq lv wkh iluvw gdb ri [vxpphu]?";

    expect(actual).to.equal(expected);
  });
});
