const assert = require("assert");
const should = require("chai").should();
const { Compliments } = require("../src/compliments.js");

describe("Compliments", () => {
  const compliments = new Compliments();
  it("Should have 'en' default locale", () => {
    compliments.language.should.equal("en");
  });
  it(".get() should be a function", () => {
    compliments.get.should.be.a("function");
  });
  it(".get() should return a string", () => {
    compliments.get().should.be.a("string");
  });
});
