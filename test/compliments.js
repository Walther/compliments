const assert = require("assert");
const should = require("chai").should();
const { Compliments } = require("../src/compliments.js");

before(() => {
  compliments = new Compliments();
});

describe("Compliments", () => {
  it(".get() should be a function", () => {
    compliments.get.should.be.a("function");
  });
  it(".get() should return a string", () => {
    compliments.get().should.be.a("string");
  });
});
