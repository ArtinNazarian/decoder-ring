// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("error handling", () => {
  it("should return false if alphabet is not exactly 26 characters long", () => {
    const message = "programming";
    const alphabet = "nthdjpz";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });

  it("should return false if alphabet does not have unique characters", () => {
    const message = "programming";
    const alphabet = "xylggaummty";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });
});

describe("encoding a message", () => {
  it("should maintain spaces in the message", () => {
    const message = "programming is fun";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet);
    const expected = "nhlghxaaufg ud cpf";
    expect(actual).to.equal(expected);
  });

  it("should return false if alphabet does not have unique characters", () => {
    const message = "programming";
    const alphabet = "ugmzzabcdff";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });

  it("Should ignore capital letter", () => {
    const message = "ProGramming";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet);
    const expected = "nhlghxaaufg";
    expect(actual).to.equal(expected);
  });

  it("Should correctly encode a message", () => {
    const message = "i know where the treasure is";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = "u sfli irmhm jrm jhmxdphm ud";
    const expected = substitution(message, alphabet);
    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should correctly decode a message given an alphabet", () => {
    const message = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet, false);
    const expected = "message";
    expect(actual).to.equal(expected);
  });
});
